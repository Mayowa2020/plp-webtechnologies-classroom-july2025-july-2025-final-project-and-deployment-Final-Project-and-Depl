# AfriGlam — Afro-Chic Responsive Multi-page Site (Updated README)

## Project summary

This repository is a **responsive**, static multi-page website built for AfriGlam. The design uses the Afro-Chic color palette (Option 1) and follows mobile-first, accessible principles. It is intended as a deployable template you can host on GitHub Pages, Netlify, Vercel, or any static file host.

## Included files & structure

```
afriglam_afro_chic_responsive_updated/
├─ index.html
├─ about.html
├─ services.html
├─ gallery.html
├─ contact.html
├─ css/
│  └─ styles.css
├─ js/
│  └─ script.js
├─ images/
│  ├─ portrait.jpg
│  ├─ tailor.jpg
│  ├─ dressmakers.jpg
│  ├─ gallery1.jpg
│  ├─ gallery2.jpg
│  └─ gallery3.jpg
└─ README.md  (this file)
```

## Key features

- **Responsive, mobile-first layout** with breakpoints at 640px and 980px.  
- **Afro-Chic color palette**: primary `#D72638`, accent `#F7B801`, hover `#009688`, neutral `#F9F9F9`.  
- **Shared header/footer** across pages for consistent navigation.  
- **Accessible elements**: focus outlines, keyboard-friendly nav toggle, semantic HTML landmarks.  
- **Reveal-on-scroll** animations using `IntersectionObserver` with a fallback.  
- **Forms**: Newsletter (client-side validation) and Contact form (client-side simulation). Replace with a backend or serverless function for production workflows.

## How to run locally

Recommended: run a simple static server to serve files correctly and test JavaScript interactions.

```bash
# from the directory containing the site folder
cd afriglam_afro_chic_responsive_updated
python -m http.server 8000
# open http://localhost:8000 in your browser
```

## Deploying to GitHub Pages (static site)

1. Create a new repository on GitHub and push the project:  

```bash
git init
git add .
git commit -m "AfriGlam site"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main```

2. In GitHub, go to **Settings → Pages** and set the source to the `main` branch and `/ (root)` folder. The site will be available at `https://<mayowa@2020>.github.io/<repo>/` within a minute or so.

## Netlify / Vercel

- Netlify: Drag-and-drop the folder in the Netlify dashboard or connect your Git repository and set publish directory to `/` (root).  
- Vercel: Import the repository and deploy as a static project (no build step required).

## Image guidance & optimization

- Current images are JPG placeholders. For production, generate responsive sizes and WebP alternatives for better performance. Example tools & commands:  
  - **cwebp** (WebP encoder):

    ```bash
    cwebp -q 80 images/portrait.jpg -o images/portrait.webp
    ```

  - **ImageMagick** (resize + convert):

    ```bash
    convert images/portrait.jpg -resize 1200 images/portrait-1200.jpg
    convert images/portrait-1200.jpg images/portrait-1200.webp
    ```

- **Recommended sizes**: Hero ≈1200×800, Feature ≈800×600, Gallery ≈900×600. Keep filenames simple and avoid spaces.

## Accessibility & testing checklist

- Test keyboard navigation (Tab through interactive elements).  
- Test color contrast (adjust palette if any contrast fails WCAG).  
- Test on mobile breakpoints: 360px, 412px, 768px, 1024px, 1440px.  
- Run Lighthouse audits (Chrome DevTools) for performance/accessibility/SEO improvements.  
- Validate HTML/CSS at <https://validator.w3.org/> if needed.

## Customization notes

- **Change colors:** edit CSS variables at the top of `css/styles.css`.  
- **Change text/content:** edit the HTML files in the root.  
- **Enable WebP / responsive images:** update `<img>` tags to `<picture>` with `srcset` entries and add resized/WebP files to `/images`.

## Next recommended steps

1. Replace placeholder images with your high-resolution photographs (keep same filenames or update HTML accordingly).  
2. Create WebP and responsive-sized images for better performance.  
3. Hook the contact form to a serverless endpoint (Netlify Functions, Vercel Serverless, or your API) to receive messages.  
4. Run a Lighthouse performance & accessibility pass and optimize as suggested.

## Troubleshooting

- If a page appears unstyled, confirm `css/styles.css` is present and linked correctly.  
- If the nav toggle doesn't work, ensure `js/script.js` is loading (check browser console).  
- If images don't load on deployment, check file paths and case-sensitivity on the host.

## License

This template is provided under the MIT License — use freely and modify as needed.

---
If you want, I will now:

- **Rebuild and provide the downloadable ZIP** (I already did, but I can refresh it), or  
- **Push this project to a GitHub repo** and enable GitHub Pages for you (I will provide the exact commands and steps).

Which would you like next?
