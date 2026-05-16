import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";
import nodemailer from "nodemailer";
import * as dotenv from "dotenv";
import { rateLimit } from "express-rate-limit";

dotenv.config();

// email box new update - Rate limiter for contact form: max 2 requests per 15 minutes per IP
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 2, 
  message: { error: "Security Alert: Too many requests. Please try again in 15 minutes." },
  standardHeaders: true,
  legacyHeaders: false,
});

async function startServer() {
  console.log("Starting server...");
  const app = express();
  const PORT = 3000;

  app.use(express.json());
  
  // Debug middleware
  app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
    next();
  });

  // API Routes
  // email box new update - Added security route check
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // email box new update - Applied stricter rate limiter, honeypot, and CAPTCHA validation
  app.post("/api/contact", contactLimiter, async (req, res) => {
    const { name, email, subject, message, _honeypot, captchaNum1, captchaNum2, captchaAnswer } = req.body;

    // email box new update - Honeypot check: If this hidden field is filled, it's likely a bot
    if (_honeypot) {
      console.warn("Security Alert: Honeypot triggered by request from:", req.ip);
      return res.status(403).json({ error: "Spam behavior detected. Access denied." });
    }

    // email box new update - CAPTCHA Verification
    const expectedAnswer = parseInt(captchaNum1) + parseInt(captchaNum2);
    if (parseInt(captchaAnswer) !== expectedAnswer) {
      console.warn("Security Alert: Failed CAPTCHA from:", req.ip);
      return res.status(400).json({ error: "Security Check Failed: Incorrect math answer." });
    }

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // In a real scenario, the user would configure these in the Secrets panel
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    try {
      // For the demo/preview, we'll log it if no credentials are found
      if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
        console.log("Contact form received (Demo Mode):", { name, email, subject, message });
        return res.status(200).json({ 
          success: true, 
          message: "Message received in demo mode! (Configure EMAIL_USER/EMAIL_PASS for real emails)" 
        });
      }

      await transporter.sendMail({
        from: `"${name}" <${email}>`,
        to: process.env.RECEIVER_EMAIL || "rockjacky86@gmail.com",
        subject: `Portfolio Contact: ${subject || 'No Subject'}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      });

      res.status(200).json({ success: true, message: "Your message has been sent successfully!" });
    } catch (error) {
      console.error("Email Error:", error);
      res.status(500).json({ error: "Failed to send message. Please try again later." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    console.log("Mode: Development");
    try {
      const vite = await createViteServer({
        server: { middlewareMode: true },
        appType: "spa",
      });
      app.use(vite.middlewares);
      
      // Explicitly serve index.html for SPA fallback in development
      app.get("*", async (req, res, next) => {
        const url = req.originalUrl;
        try {
          const templatePath = path.resolve(process.cwd(), "index.html");
          let template = fs.readFileSync(templatePath, "utf-8");
          template = await vite.transformIndexHtml(url, template);
          res.status(200).set({ "Content-Type": "text/html" }).end(template);
        } catch (e) {
          next(e);
        }
      });
      console.log("Vite middleware and fallback loaded");
    } catch (e) {
      console.error("Failed to load Vite middleware:", e);
    }
  } else {
    console.log("Mode: Production");
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
