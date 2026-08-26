# Xendpay Solutions — Website: Deployment Guide

This is a static React site (Vite + React Router + Tailwind CSS). It builds
down to plain HTML/CSS/JS, which is exactly what GoDaddy shared hosting
expects — no Node.js server required in production.

## What's in this package

- `src/` — the React source code (components, pages, content)
- `dist/` — the already-built, ready-to-upload static site
- `public/.htaccess` — makes page routes like `/solutions/aeps` work
  correctly on Apache (GoDaddy's default web server)

## 1. Preview it yourself first

```
npm install
npm run dev
```

Opens a local preview at `http://localhost:5173` — click through every
page before you show it to the client.

To preview the exact production build:

```
npm run build
npm run preview
```

## 2. Buying the domain (GoDaddy)

1. Search the desired domain (e.g. `xendpaysolutions.com` /
   `xendpaysolutions.in`) at godaddy.com and purchase it.
2. If you're hosting on GoDaddy too, add a **cPanel Hosting** or
   **Web Hosting** plan — the domain can be linked automatically if
   bought together, or pointed via DNS if hosting elsewhere.
3. Domain privacy/WHOIS protection is optional but recommended for a
   company-owned domain.

## 3. Uploading the build to GoDaddy

1. Rebuild fresh before deploying: `npm run build` (outputs to `dist/`).
2. Log in to GoDaddy → **My Products** → your hosting plan → **cPanel /
   File Manager** (or use an FTP client like FileZilla with the FTP
   credentials from the hosting dashboard).
3. Open the `public_html` folder (this is what the domain points to).
4. Upload the **contents** of `dist/` (not the folder itself) into
   `public_html` — `index.html`, `assets/`, `favicon.svg`, `.htaccess`,
   `icons.svg`.
5. Make sure `.htaccess` uploaded correctly (some File Manager views hide
   dotfiles — enable "Show Hidden Files" in Settings if you don't see it).
   Without it, direct links to inner pages (e.g. someone opening
   `/solutions/bbps` directly) will 404.
6. Visit the domain — the site should be live within minutes (DNS
   propagation can take a little longer right after domain purchase).

## 4. Wiring up the contact form to your business email

The form on `/contact` sends via EmailJS directly to your GoDaddy business
email once configured — see **EMAIL-SETUP.md** for the full walkthrough
(buying the mailbox, connecting it to EmailJS, and adding the three keys
to a `.env` file). Until that's set up, it falls back to opening the
visitor's own email client instead, so it's never fully broken in the
meantime.

Important: since this is a static build, `.env` values are baked in at
**build time** — always run `npm run build` again after creating or
changing `.env`, then re-upload the fresh `dist/` folder.

## 5. Updating content later

All copy lives in `src/data/content.js` and inline in the page files
under `src/pages/`. Edit, then `npm run build` and re-upload `dist/`.
