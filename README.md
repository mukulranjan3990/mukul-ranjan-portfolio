# Professional Portfolio & Infrastructure Dashboard

A high-performance, full-stack portfolio built with React, Vite, Express, and Tailwind CSS. Featuring a custom-built tech stack visualization and a secure, rate-limited contact system.

## 🚀 Quick Start

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd <repo-name>
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Setup
Create a `.env` file in the root directory and add the following variables:
```env
# Email configuration for the contact form
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
RECEIVER_EMAIL=rockjacky86@gmail.com
```

### 4. Run Development Server
```bash
npm run dev
```

## 🛠 Tech Stack

- **Frontend**: React 18, Vite, Tailwind CSS, Framer Motion, Lucide Icons.
- **Backend**: Node.js, Express.
- **Email Service**: Nodemailer with SMTP.
- **Security**: Express-rate-limit (DDOS protection), Honeypot spam filtering, Client-side validation.

## 📦 Deployment

### Automated (Recommended)
This project is pre-configured for **Google Cloud Run**. You can deploy it directly from Google AI Studio using the "Deploy" button.

### Manual
To build and start the production server:
```bash
npm run build
npm start
```
The build process bundles the frontend static files and compiles the TypeScript server into a production-ready CommonJS file (`dist/server.cjs`).

## 🔒 Security Features
- **Rate Limiting**: Limits contact form submissions to 3 per hour per IP.
- **Honeypot**: Silently catches and rejects bot submissions.
- **Validation**: Strict client and server-side validation for all inputs.
