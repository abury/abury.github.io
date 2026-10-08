# aronbury.com

Aron Bury's personal one-pager, built with [Astro](https://astro.build) and deployed to GitHub Pages.

## Develop

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
npm run preview  # serve dist/ locally
```

## Where things live

- `src/data/site.ts` — all copy and content: headline, stats, work cards, experience, testimonials, logos. Edit this to change what the page says.
- `src/components/` — one component per section (Header, Hero, Logos, Work, Ai, Experience, References, Contact), each with its own scoped styles.
- `src/styles/global.css` — design tokens, type, buttons, and the shared card and carousel rules.
- `src/layouts/Base.astro` — document shell, fonts and meta tags.
- `public/images/` — photo, client logos and company marks.

Fonts are Bricolage Grotesque (display) and Instrument Sans (body) from Google Fonts. The accent colour is `--accent` in `global.css`.

## Deploy

Pushes to `main` run `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages. In the repo settings, set Pages to deploy from **GitHub Actions**.
