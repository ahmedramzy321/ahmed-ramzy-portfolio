# Ahmed Ramzy - Portfolio

Personal portfolio website built with React + Vite, with full English/Arabic
support (RTL) and downloadable ATS-friendly CVs in both languages.

## Features

- Bilingual: English (default) and Arabic with proper RTL layout, toggle in the navbar
- Dark modern design with Framer Motion transitions and scroll animations
- Animated skills visualization
- Featured projects with real screenshots, GitHub links, and live demos
- Downloadable CV (PDF) in English and Arabic, ATS-friendly single-page layout
- Fully responsive (desktop / tablet / mobile)
- Tip: `?lang=ar` opens the Arabic version directly

## Run locally

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
```

The static site is generated in `dist/`.

## Deploy

- **Vercel / Netlify:** import the repo, framework preset "Vite", build command
  `npm run build`, output directory `dist`. No extra config needed.
- **GitHub Pages:** set `base: '/<repo-name>/'` in `vite.config.js`, then
  `npm run build` and publish the `dist` folder (for example with
  `npm i -D gh-pages` and `npx gh-pages -d dist`).

## Content

All texts, skills, and projects live in `src/i18n.js` (English + Arabic) and
`src/data.js` (links, images, contact info). Replace `public/photo.jpg` and the
files in `public/cv/` to update the photo or CVs.
