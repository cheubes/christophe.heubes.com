# Illustration generator: Concepts & Laws

Generates the SVGs and PNGs (1200×1200 + OG 1200×630) for the illustration series of `christophe.heubes.com`.

## Prerequisites

- Node.js ≥ 18
- The Ubuntu TTF fonts in `generator/fonts/` (see below)

## Install

```bash
cd generator
npm install
```

### Ubuntu fonts (first install)

Download the 3 TTF files from Google Fonts and put them in `generator/fonts/`:

| File | URL |
|---|---|
| `Ubuntu-Regular.ttf` | https://github.com/google/fonts/raw/main/ufl/ubuntu/static/Ubuntu-Regular.ttf |
| `Ubuntu-Medium.ttf`  | https://github.com/google/fonts/raw/main/ufl/ubuntu/static/Ubuntu-Medium.ttf  |
| `Ubuntu-Bold.ttf`    | https://github.com/google/fonts/raw/main/ufl/ubuntu/static/Ubuntu-Bold.ttf    |

Or in one go from `generator/fonts/`:

```bash
curl -sL "https://github.com/google/fonts/raw/main/ufl/ubuntu/static/Ubuntu-Regular.ttf" -o Ubuntu-Regular.ttf
curl -sL "https://github.com/google/fonts/raw/main/ufl/ubuntu/static/Ubuntu-Medium.ttf"  -o Ubuntu-Medium.ttf
curl -sL "https://github.com/google/fonts/raw/main/ufl/ubuntu/static/Ubuntu-Bold.ttf"    -o Ubuntu-Bold.ttf
```

## Usage

```bash
# Generate all illustrations
node index.js

# Generate a single concept
node index.js --concept=paradoxe-jevons

# Available concepts
node index.js --concept=paradoxe-jevons
node index.js --concept=nombre-dunbar
node index.js --concept=lotus-culture-apprenante
node index.js --concept=effet-projecteur
node index.js --concept=effet-placebo
node index.js --concept=effet-pygmalion
```

The files are generated in `assets/illustrations/`:
- `{slug}.svg`: 1200×1200 SVG source (embedded in the site)
- `{slug}.png`: 1200×1200 PNG export (download)
- `{slug}-og.png`: 1200×630 PNG export (Open Graph / social networks)

## Adding a new concept

1. Create `generator/concepts/my-concept.js`:

```js
module.exports = {
  id:          'my-concept',         // URL slug
  title:       'My Concept',
  category:    'Category',
  tagline:     'A short key sentence.',
  description: 'Full description of the concept.',

  render(ctx) {
    const { cx, cy, x, y, w, h, palette: p } = ctx;
    // ctx.cx, ctx.cy: center of the main area
    // ctx.palette   : colors { bg, gold, goldLight, text, muted }
    // Return a string of SVG fragments (without the <svg> wrapper)
    return `<circle cx="${cx}" cy="${cy}" r="200" fill="none" stroke="${p.gold}" stroke-width="4"/>`;
  },
};
```

2. Import it in `generator/index.js`:

```js
const concepts = [
  // ...existing concepts...
  require('./concepts/my-concept'),
];
```

3. Run the generation:

```bash
node index.js --concept=my-concept
```

4. Create the Markdown page `_illustrations/my-concept.md`:

```yaml
---
layout: illustration
title: "My Concept"
slug: my-concept
category: "Category"
tagline: "A short key sentence."
description: "SEO description."
lang: fr
---

## Définition
...
```

5. Commit the generated SVG/PNG files and the Markdown in the repo.

## Technical structure

```
generator/
  index.js              ← main CLI
  config.js             ← palette, dimensions, paths
  font-loader.js        ← embeds Ubuntu as base64 in the SVG + paths for resvg
  fonts/                ← Ubuntu-Regular.ttf, Ubuntu-Medium.ttf, Ubuntu-Bold.ttf
  templates/
    base.svg.js         ← layout (header + central area + footer)
    shapes/
      arrow.js          ← straight and curved arrows
      axis.js           ← XY axes with labels
      bezierCurve.js    ← Bézier curves
      circle.js         ← circle with label
      grid.js           ← N×N grid
      pill.js           ← medical capsule
  concepts/             ← one .js file per concept
```

## Design system

| Role | Hex |
|---|---|
| Background | `#0D1B2A` |
| Main gold | `#C9A84C` |
| Pale gold | `#E8D5A3` |
| Main text | `#F0EDE4` |
| Secondary text | `#8A9BB0` |

Format: 1200×1200 px, Ubuntu font (embedded as base64), midnight blue background.
