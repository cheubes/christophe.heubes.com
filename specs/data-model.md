# Data model

## Overview

The site has no backend or database: the "data model" here refers to the structure of the Jekyll content files and their conventions. Two kinds of content coexist:
- the profile page (`index.md` / `index-en.md`): fixed content, carried by dedicated front matter fields (not a reusable entity, a single instance per language);
- the `illustrations` collection: an actual repeated entity, described below.

## Illustration entity

Backed by the Jekyll `illustrations` collection (see `_config.yml`, `_illustrations/` folder).

### Attributes (front matter)

| Attribute | Role |
|---|---|
| `layout` | Always `illustration` (see `_layouts/illustration.html`) |
| `title` | Displayed title of the concept |
| `slug` | Technical identifier, kebab-case, shared by both languages (links the SVG, the generator and the page) |
| `category` | Category label, translated per language (see "Category taxonomy") |
| `tagline` | Short sentence summarizing the concept, displayed below the title |
| `description` | Long description, used for SEO (meta description) |
| `lang` | `fr` or `en` |
| `ref` | Identifier linking the two language versions of the same illustration (e.g. `illustration-ikigai`) |
| `flag` | Flag emoji used by the language switcher |
| `permalink` | Final URL of the page (`/illustrations/<slug>/` or `/en/illustrations/<slug>/`) |

The Markdown content of the file (after the front matter) holds the explanatory text, structured in sections (see `screens/technical-drawing.md` for the expected structure).

### File naming convention

- Content: `_illustrations/<slug>.md` (French) and `_illustrations/<slug>-en.md` (English).
- SVG: `assets/illustrations/<slug>.svg` (French) and `assets/illustrations/<slug>-en.svg` (English).
- Generation: `generator/concepts/<slug>.js` (French) and `generator/concepts/<slug>-en.js` (English).

The `slug` is the key linking these three files: renaming a concept means renaming all three consistently.

### Category taxonomy

Existing categories (French / English):
- Biais & Heuristiques / Biases & Heuristics
- Économie & Incitations / Economics & Incentives
- Ingénierie & Technologie / Engineering & Technology
- Épistémologie / Epistemology
- Management & Organisations
- Psychologie & Comportement / Psychology & Behaviour

The category is not a technical identifier: it is a label displayed as-is in the gallery (see `screens/gallery.md`), translated per language. Adding a category requires no separate configuration file, it is derived dynamically from the existing illustrations.

### Generation pipeline (concept → SVG → page)

1. A `generator/concepts/<slug>.js` file describes the concept (id, title, category, tagline, description) and a `render()` function that produces the SVG.
2. `node generator/index.js --concept=<slug>` generates `assets/illustrations/<slug>.svg` (and PNG exports, outside the scope of the site rendering).
3. An `_illustrations/<slug>.md` file is created manually, with a front matter consistent with the concept, and the explanatory text in Markdown.
4. The generated files (SVG/PNG) and the Markdown are committed together.

See `generator/README.md` for the command details and `technical-specifications.md` for the generator's tech stack.

### Validation constraints

- A `slug` is unique and identical between the French and English versions of the same illustration.
- A `ref` is unique per illustration and shared between its two language versions.
- An illustration existing in a single language is valid (see "Bilingualism" in `functional-specifications.md`): it then only appears in that language.
- `category` must be translated consistently between the two languages (same conceptual grouping, different label).
