# 🌐 AfriGlam Portfolio Website  

This project is a **responsive multipage portfolio website** built with **HTML, CSS, and JavaScript**. It is designed for showcasing personal information, skills, projects, and contact details for AfriGlam in a professional and visually appealing way. This repository is intended to be served as a static site (GitHub Pages, Netlify, or Vercel).

---

## 📂 Project Structure  

```bash
portfolio_project/
│── index.html          # Homepage
│── about.html          # About Me page
│── services.html       # Services rendered page
│── contact.html        # Contact page
│── css/                # Stylesheets
│    └── styles.css
│── js/                 # JavaScript for interactivity
│    └── script.js
│── images/             # Images
│── README.md           # Project documentation (this file)
```

> Note: Filenames in your repo may vary slightly depending on how you integrate the provided template. Update paths in the HTML if you rename folders or files.

---

## ✨ Features  

- **Responsive Design** – Works on desktops, tablets, and phones.  
- **Multipage Layout** – Home, About, Services, Contact.  
- **Navigation** – Collapsible mobile menu and active link highlighting.  
- **Interactive Elements** – Reveal-on-scroll animations, smooth scroll, and client-side form validation.  
- **Production-ready Guidance** – File organization, image optimization recommendations, and deployment instructions.

---

## 🚀 Getting Started (Local Development)

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/portfolio_project.git
cd portfolio_project
```

### 2. Open locally

- Open `index.html` directly in your browser for a quick preview.
- Or run a simple HTTP server for correct behavior of fetch/XHR (if you add functions later):

```bash
# Python 3
python -m http.server 8000
# Visit http://localhost:8000
```

### 3. Recommended workflow

- Edit HTML / CSS / JS in your code editor (VS Code recommended).
- Use the Live Server extension for instant reloads on file save.
- Commit changes and push to GitHub when ready to publish.

---

## 🛠️ Technologies Used

- HTML5, semantic elements (`header`, `main`, `section`, `article`, `footer`)  
- CSS3 with responsive layout and simple animations  
- Vanilla JavaScript (no build step required)  

---

## 📸 Images & Optimization Recommendations

- Use WebP for best compression and JPG as fallback. PNG for graphics with transparency and SVG for icons/patterns.  
- Suggested hero: 1920×1080 (webp/jpg), quality 70–80.  
- Card thumbnails: 600×400 (webp/jpg).  
- Background patterns: SVG or large PNG (2000×2000) if tiled.  
- Tools: [ImageOptim / TinyPNG / Squoosh] for compression. Serve responsive images with `srcset` when possible.

---

## 📦 Deployment Instructions

Below are step-by-step instructions for the three most common static hosts: **GitHub Pages**, **Netlify**, and **Vercel**. Choose one and follow the steps.

### A — GitHub Pages (recommended for simple static sites)

1. Create a repository on GitHub (name it e.g. `portfolio_project`).  
2. From your local project root:

```bash
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main```

3. On GitHub: go to **Settings → Pages** (or **Settings → Code and automation → Pages**), set **Branch** to `main` and **Folder** to `/ (root)` and click **Save**.  
4. After a minute, your site will be available at `https://<your-username>.github.io/<repo-name>/`. If using a custom domain, add the domain in the Pages settings and configure DNS as instructed by GitHub.

**Notes:** If your repo is a user/organization site named `<username>.github.io`, the site root will be published to `https://<username>.github.io/` automatically.

---

### B — Netlify (continuous deploys + functions)

1. Sign up at Netlify and connect your GitHub account.  
2. Click **New site from Git → GitHub** and choose your repository.  
3. Set **Build command** empty (static) and **Publish directory** to `/` (or `.`).  
4. Click **Deploy site**. Netlify will provide a live URL; you can add a custom domain and enable automatic HTTPS.  

**Optional:** Add Netlify Functions if you need a serverless backend for contact forms. Create a `netlify/functions` folder with an `index.js` handler and use Netlify’s build step if needed.

---

### C — Vercel (quick static deployments)

1. Sign in to Vercel and choose **New Project → Import Git Repository**.  
2. Select your repository and set framework preset to **Other** (static).  
3. Leave **Build command** empty and **Output directory** as `/`. Click **Deploy**.  
4. Vercel will give you a live URL and certificate; add a custom domain in the project settings if desired.

**Note:** Vercel also supports Serverless Functions under the `/api` directory.

---

## 🔒 Contact Form (Serverless) — Quick Options

The contact form in this template is client-side only (simulates sending). For production, integrate one of the options below:

- **Formspree / Formsubmit / Getform** — Simple form endpoints (no server code). Copy the form’s `action` to the provided endpoint.  
- **Netlify Forms** — Add `data-netlify="true"` to `<form>` and deploy to Netlify; submissions are captured in Netlify's dashboard.  
- **Vercel Serverless / Netlify Functions / AWS Lambda** — Implement an API endpoint to accept form POSTs and forward to email or a CRM.

Example (Formspree):

```html
<form action="https://formspree.io/f/<your-id>" method="POST">
  <input name="name" required>
  <input name="email" type="email" required>
  <textarea name="message" required></textarea>
  <button type="submit">Send</button>
</form>
```

---

## ✅ Production Checklist

- [ ] Replace placeholder images with optimized brand assets (WebP + JPG).  
- [ ] Add meta tags (title, description, open graph) and structured data if needed.  
- [ ] Run Lighthouse and fix accessibility & performance issues.  
- [ ] Add `robots.txt` and `sitemap.xml` if you plan on indexing.  
- [ ] Consider a build tool (Vite, Parcel) and bundler for advanced workflows.

---

## 📧 Contact & Support

If you'd like, I can also:

- Add optimized images and place them into `images/` with correct filenames.  
- Configure a Netlify Function or a Formspree integration for the contact form.  
- Create the GitHub repository and push the project for you (I will provide exact commands and guidance).

---

## 📝 License

This project is released under the **MIT License** — feel free to copy, modify, and reuse the template for your portfolio.
