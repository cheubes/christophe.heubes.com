# Générateur d'illustrations — Concepts & Lois

Génère les SVG et PNG (1200×1200 + OG 1200×630) pour la série d'illustrations de `christophe.heubes.com`.

## Prérequis

- Node.js ≥ 18
- Les fonts Ubuntu TTF dans `generator/fonts/` (voir ci-dessous)

## Installation

```bash
cd generator
npm install
```

### Fonts Ubuntu (première installation)

Télécharger les 3 fichiers TTF depuis Google Fonts et les placer dans `generator/fonts/` :

| Fichier | URL |
|---|---|
| `Ubuntu-Regular.ttf` | https://github.com/google/fonts/raw/main/ufl/ubuntu/static/Ubuntu-Regular.ttf |
| `Ubuntu-Medium.ttf`  | https://github.com/google/fonts/raw/main/ufl/ubuntu/static/Ubuntu-Medium.ttf  |
| `Ubuntu-Bold.ttf`    | https://github.com/google/fonts/raw/main/ufl/ubuntu/static/Ubuntu-Bold.ttf    |

Ou en une commande depuis `generator/fonts/` :

```bash
curl -sL "https://github.com/google/fonts/raw/main/ufl/ubuntu/static/Ubuntu-Regular.ttf" -o Ubuntu-Regular.ttf
curl -sL "https://github.com/google/fonts/raw/main/ufl/ubuntu/static/Ubuntu-Medium.ttf"  -o Ubuntu-Medium.ttf
curl -sL "https://github.com/google/fonts/raw/main/ufl/ubuntu/static/Ubuntu-Bold.ttf"    -o Ubuntu-Bold.ttf
```

## Utilisation

```bash
# Générer toutes les illustrations
node index.js

# Générer un seul concept
node index.js --concept=paradoxe-jevons

# Concepts disponibles
node index.js --concept=paradoxe-jevons
node index.js --concept=nombre-dunbar
node index.js --concept=lotus-culture-apprenante
node index.js --concept=effet-projecteur
node index.js --concept=effet-placebo
node index.js --concept=effet-pygmalion
```

Les fichiers sont générés dans `assets/illustrations/` :
- `{slug}.svg` — source SVG 1200×1200 (embarquée sur le site)
- `{slug}.png` — export PNG 1200×1200 (téléchargement)
- `{slug}-og.png` — export PNG 1200×630 (Open Graph / réseaux)

## Ajouter un nouveau concept

1. Créer `generator/concepts/mon-concept.js` :

```js
module.exports = {
  id:          'mon-concept',        // slug URL
  title:       'Mon Concept',
  category:    'Catégorie',
  tagline:     'Une phrase clé courte.',
  description: 'Description complète du concept.',

  render(ctx) {
    const { cx, cy, x, y, w, h, palette: p } = ctx;
    // ctx.cx, ctx.cy : centre de la zone principale
    // ctx.palette    : couleurs { bg, gold, goldLight, text, muted }
    // Retourner une string de fragments SVG (sans <svg> wrapper)
    return `<circle cx="${cx}" cy="${cy}" r="200" fill="none" stroke="${p.gold}" stroke-width="4"/>`;
  },
};
```

2. L'importer dans `generator/index.js` :

```js
const concepts = [
  // ...concepts existants...
  require('./concepts/mon-concept'),
];
```

3. Lancer la génération :

```bash
node index.js --concept=mon-concept
```

4. Créer la page Markdown `_illustrations/mon-concept.md` :

```yaml
---
layout: illustration
title: "Mon Concept"
slug: mon-concept
category: "Catégorie"
tagline: "Une phrase clé courte."
description: "Description SEO."
lang: fr
---

## Définition
...
```

5. Committer les fichiers SVG/PNG générés et le markdown dans le repo.

## Structure technique

```
generator/
  index.js              ← CLI principal
  config.js             ← palette, dimensions, chemins
  font-loader.js        ← embed Ubuntu base64 dans SVG + paths pour resvg
  fonts/                ← Ubuntu-Regular.ttf, Ubuntu-Medium.ttf, Ubuntu-Bold.ttf
  templates/
    base.svg.js         ← layout (header + zone centrale + footer)
    shapes/
      arrow.js          ← flèches droites et courbes
      axis.js           ← axes XY avec labels
      bezierCurve.js    ← courbes de Bézier
      circle.js         ← cercle avec label
      grid.js           ← grille N×N
      pill.js           ← capsule médicale
  concepts/             ← un fichier .js par concept
```

## Design system

| Rôle | Hex |
|---|---|
| Fond | `#0D1B2A` |
| Or principal | `#C9A84C` |
| Or pâle | `#E8D5A3` |
| Texte principal | `#F0EDE4` |
| Texte secondaire | `#8A9BB0` |

Format : 1200×1200 px, police Ubuntu (embarquée en base64), fond bleu nuit.
