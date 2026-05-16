import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import nodemailer from "nodemailer";
import * as dotenv from "dotenv";
import { rateLimit } from "express-rate-limit";

dotenv.config();

// Rate limiter for contact form: max 3 requests per IP per hour
const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 3, 
  message: { error: "Too many requests from this IP, please try again after an hour" },
  standardHeaders: true,
  legacyHeaders: false,
});

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.post("/api/contact", contactLimiter, async (req, res) => {
    const { name, email, subject, message, _honeypot } = req.body;

    // Honeypot check: If this hidden field is filled, it's likely a bot
    if (_honeypot) {
      console.warn("Honeypot triggered by request from:", req.ip);
      return res.status(403).json({ error: "Spam detected" });
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
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
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
