# DSA Mastery Roadmap — Next.js

A full Next.js conversion of the DSA Mastery Roadmap, with a **real email API** that sends contact form submissions directly to `pradeeppolishetty0@gmail.com`.

## 🚀 Quick Start

### 1. Install dependencies
```bash
npm install
```

### 2. Set up Gmail App Password

The contact form sends real emails using Gmail SMTP via Nodemailer.

**Steps:**
1. Enable **2-Step Verification** on your Google account  
   → [myaccount.google.com/security](https://myaccount.google.com/security)

2. Go to **App Passwords**  
   → [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)

3. Create a new App Password → Select **Mail** → Copy the 16-character password

### 3. Configure environment variables

Copy `.env.local.example` to `.env.local`:
```bash
cp .env.local.example .env.local
```

Edit `.env.local`:
```env
GMAIL_USER=pradeeppolishetty0@gmail.com
GMAIL_APP_PASSWORD=xxxx-xxxx-xxxx-xxxx
```

### 4. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 📧 How Email Works

When a user submits the contact form:

1. The form POSTs to `/api/contact` (Next.js API Route)
2. The server uses **Nodemailer** with Gmail SMTP
3. An HTML email is sent to `pradeeppolishetty0@gmail.com`
4. The `Reply-To` header is set to the sender's email, so you can reply directly

---

## 📁 Project Structure

```
dsa-roadmap/
├── app/
│   ├── layout.js              # Root layout + fonts
│   ├── page.js                # Main DSA Roadmap page
│   ├── globals.css            # All styles
│   ├── components/
│   │   ├── PhaseRoadmap.jsx   # Interactive phase tabs (client)
│   │   ├── ContactForm.jsx    # Contact form with API call (client)
│   │   └── ScrollReveal.jsx   # Intersection Observer (client)
│   └── api/
│       └── contact/
│           └── route.js       # Email sending API endpoint
├── .env.local.example
├── next.config.mjs
└── package.json
```

---

## 🏗 Deployment

### Vercel (recommended)
```bash
npm install -g vercel
vercel
```
Add the environment variables in the Vercel dashboard under **Settings → Environment Variables**.

### Other platforms
Set `GMAIL_USER` and `GMAIL_APP_PASSWORD` as environment variables on your platform.
