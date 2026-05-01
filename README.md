# mochi-pet-web

Marketing site for **Mochi** — a pixel-style AI pet companion for Android (closed beta).
Live at <https://gongpx20069.github.io/mochi-pet-web/>.

## Stack

- [Astro 4](https://astro.build) (static)
- [Tailwind CSS](https://tailwindcss.com) via `@astrojs/tailwind`
- Built-in i18n: `zh` (default) / `en` / `ja`
- `@astrojs/mdx` (wired up, no content yet — reserved for future blog/changelog)
- `@astrojs/sitemap`
- Deployed to GitHub Pages by `.github/workflows/deploy.yml` using `withastro/action@v3`

The previous hand-written `index.html` lives in [`legacy/old-index.html`](./legacy/old-index.html).

## Develop

```bash
npm install
npm run dev      # http://localhost:4321/mochi-pet-web/
npm run build    # outputs to ./dist
npm run preview
```

## Project layout

```
src/
  components/         # Astro components (Nav, Footer, PhoneMockup, NeedsTranslation, sections/*)
  i18n/ui.ts          # all translatable strings, keyed by locale
  layouts/Layout.astro
  pages/
    index.astro       # zh (default locale, no prefix)
    en/index.astro
    ja/index.astro
  styles/global.css
public/
  favicon.svg
  og-image.svg
  .nojekyll
```

## Content & i18n

All copy lives in [`src/i18n/ui.ts`](./src/i18n/ui.ts). The zh strings are the source of truth; en/ja translate the hero, CTAs and section headings, and reuse zh body copy where translation is still pending. Use `<NeedsTranslation lang={lang}>...</NeedsTranslation>` to mark zh-only paragraphs that should render with a `(translation pending)` badge.

## Waitlist form

The waitlist section in [`src/components/sections/Waitlist.astro`](./src/components/sections/Waitlist.astro) is wired for [Formspree](https://formspree.io) — replace `YOUR_FORMSPREE_ID` with a real form id (free tier covers 50 submissions/month). Until that is set, the inline script falls back to a `mailto:` link.

## Deploy

Push to `master` triggers `.github/workflows/deploy.yml`. After the first run, switch the Pages source to "GitHub Actions" in the repo settings.
