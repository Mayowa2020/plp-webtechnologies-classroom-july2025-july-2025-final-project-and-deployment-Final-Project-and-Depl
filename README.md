# 🌺 AfriGlam — Afro-Chic Responsive Multi-page Website

[![Website Status](https://img.shields.io/badge/status-live-brightgreen)](https://myafriglam.vercel.app) [![Vercel](https://img.shields.io/badge/deployed%20on-Vercel-000000?logo=vercel)](https://myafriglam.vercel.app) [![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

**Live demo:** https://myafriglam.vercel.app

---

## ✨ Project Overview

AfriGlam is a responsive, static multi-page website showcasing African-inspired fashion and design.
Built with semantic HTML, modern CSS, and vanilla JavaScript, it’s optimized for deployment on Vercel and other static hosts.

---

## 📁 Project Structure

```
afriglam/
├── index.html
├── about.html
├── services.html
├── gallery.html
├── contact.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── images/
│   ├── portrait.jpg
│   ├── tailor.jpg
│   ├── dressmakers.jpg
│   ├── gallery1.jpg
│   ├── gallery2.jpg
│   └── gallery3.jpg
└── README.md
```

---

## 🎨 Afro-Chic Theme (Option 1)

- **Primary:** `#D72638` — deep terracotta (header & accents)
- **Accent:** `#F7B801` — golden yellow (buttons & highlights)
- **Hover:** `#009688` — teal (hover states)
- **Text:** `#2E2E2E` — charcoal
- **Background:** `#F9F9F9` — warm neutral

_Note: Change these variables in `css/styles.css` under the `:root` selector to customize the theme._

---

## 🚀 Quick Start (Local)

```bash
git clone https://github.com/<your-username>/afriglam.git
cd afriglam
python -m http.server 8000
# open http://localhost:8000
```

---

## 🌐 Deployment (Vercel)

Deployed to Vercel at: **https://myafriglam.vercel.app**

To deploy or update:

1. Push changes to your Git repo connected to Vercel.
2. Vercel auto-deploys on push to the connected branch.
3. Manage domains and settings via the Vercel dashboard.

---

## 🛠️ Features

- Mobile-first responsive layout (breakpoints: 640px, 980px)
- Accessible navigation (keyboard-friendly mobile toggle)
- Reveal-on-scroll animations with `IntersectionObserver` (fallback included)
- Lightweight static pages — ideal for fast load and SEO

---

## 🖼️ Images & Optimization

- Use WebP where possible and keep JPG as fallback.
- Suggested sizes:
  - Hero: 1920×1080
  - Cards/Gallery: 900×600 or 600×400
- Tools: Squoosh, TinyPNG, ImageOptim

---

## ✅ Production Checklist

- [ ] Replace placeholder images with final assets.
- [ ] Add meta & Open Graph tags for SEO/social sharing.
- [ ] Run Lighthouse and fix accessibility/performance issues.
- [ ] Connect a functional contact endpoint (Formspree, serverless function).

---

## ❤️ Support & Next Steps

I can help with:

- Generating optimized WebP images and responsive `srcset`.
- Wiring the contact form to a serverless function or Formspree.
- Pushing the repo to GitHub and configuring Vercel for CI/CD.

---

## License

Released under the **MIT License**.
