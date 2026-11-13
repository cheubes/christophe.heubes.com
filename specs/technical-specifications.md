# Technical specifications

## Stack

- Static site generator: Jekyll, Ruby (version pinned by `.ruby-version`, currently 3.3.12).
- Stylesheets: LESS (`assets/css/hbs.less`), compiled by a custom Jekyll plugin (`_plugins/less_compiler.rb`).
- CSS optimization: PurgeCSS (`_plugins/purgecss_optimizer.rb`), to ship only the classes actually used.
- Grid and utilities: Bootstrap (grid + utilities, see `_includes/head.html`).
- Icons: Font Awesome, loaded via Font Awesome Kit (see `_includes/scripts.html`).
- Font: Ubuntu (Google Fonts), see `style-guide.md`.
- Link checking: `html-proofer` (gem, see `Gemfile`).

## Illustration generator

Separate Node.js tool (`generator/`), not deployed with the site: generates the SVG/PNG illustrations from concept files. See `generator/README.md` for usage and `data-model.md` for the concept → SVG → page pipeline. Excluded from the Jekyll build (see `exclude` in `_config.yml`).

## Hosting and deployment

- Hosting: GitHub Pages, custom domain `christophe.heubes.com` (see `CNAME`).
- Deployment: GitHub Actions workflow (`.github/workflows/jekyll.yml`), triggered on push to `master` or manually.
  - Jekyll build, capped at 15 minutes (`timeout-minutes`).
  - Dead link check (`html-proofer`) after the build, non-blocking (`continue-on-error: true`); the `fonts.googleapis.com` and `fonts.gstatic.com` URLs are ignored (known false positives).
  - Deployment to GitHub Pages via the official actions (`upload-pages-artifact`, `deploy-pages`).
- GitHub Actions workflow dependencies kept up to date by Dependabot (`.github/dependabot.yml`).

## Architecture

- Rendering: fully static, generated at build time, no server-side logic.
- Jekyll collections: `illustrations` (see `data-model.md`), with an explicit `permalink` per entry.
- Bilingual routing: French pages at the root (`/`, `/illustrations/<slug>/`), English pages under `/en/` (`/en/`, `/en/illustrations/<slug>/`). Each page carries its own `permalink` in its front matter (no automatic generation per language folder).
- Client-side interactivity: minimal vanilla JavaScript (hamburger menu, category filters in the gallery), no JS framework or bundler for the site itself.

## Performance

- Lazy loading of the tile images in the gallery (see `screens/gallery.md`).
- Illustration SVGs loaded with priority (`loading="eager"`) on the detail screen, as they are the page's only visual content (see `screens/technical-drawing.md`).
- Purged CSS (PurgeCSS) to limit the weight of the shipped stylesheets.
- Modern image formats used as a complement (WebP with JPEG fallback, see `assets/img/photo.webp`).

## Accessibility

- Descriptive `alt` attributes on illustration images and SVGs.
- ARIA attributes on the hamburger menu (`aria-expanded`, `aria-hidden`) and the filter groups (`role="group"`, `aria-label`).
- Decorative icons marked `aria-hidden="true"`.

## SEO

- Meta tags per page: description, Open Graph, Twitter Card, `hreflang` for the language alternates, `Person` JSON-LD (see `_includes/head.html`).
- `robots.txt` allowing full indexing and referencing the sitemap.
- `sitemap.xml` generated dynamically from `site.pages`, filtered to pages with a `title` and `page.lang == "fr"`: only French pages are listed in the sitemap, French de facto acting as the canonical language of that file. English pages remain indexable (internal links, `hreflang` in the `<head>`) but do not appear in the sitemap; to be confirmed whether this filtering is a deliberate choice or an oversight.
- Each sitemap entry redeclares its language alternates via `<xhtml:link rel="alternate" hreflang="...">`, in addition to the `hreflang` tags already present in the `<head>` of each page.
- `lastmod` per page: `page.sitemap.lastmod` first, otherwise `page.date`, otherwise the build date (`site.time`).
- A page can exclude itself from the sitemap via `sitemap.exclude: yes` in its front matter (mechanism used by `sitemap.xml` itself to exclude itself).
