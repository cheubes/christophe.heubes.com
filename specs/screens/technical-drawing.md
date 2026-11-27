# Screen: Thought Figure detail

## Goal

Present an illustration in detail: the technical drawing (SVG) and the explanatory text of the concept.

## Content and structure

- Sidebar: identical to `screens/home.md`.
- Breadcrumb: back link to the gallery ("← Thought Figures" / "← Figures de pensée" in French), see `_layouts/illustration.html`.
- Illustration SVG (`assets/illustrations/<slug>[-en].svg`), displayed full width. The SVG itself carries the title, tagline and category (see `style-guide.md`), so the page does not repeat them visually: the title stays in a visually hidden `<h1>` (`ill-title`) for screen readers and SEO.
- Explanatory content (Markdown of the file), structured by convention in sections: Definition, Why it matters, Examples, and an optional Countermeasures section ("Définition", "Pourquoi c'est important", "Exemples", "Contre-mesures" in French; see `_illustrations/ancrage-cognitif.md` for the template).
- Footer: identical to `screens/home.md`.

## Interactions

- Click on the breadcrumb: back to the gallery (`screens/gallery.md`).
- Language change via the switcher: navigates to the translated version of the same illustration if it exists (same `ref`, see `data-model.md`); otherwise, the switcher must not offer that language (see "Bilingualism" in `functional-specifications.md`).

## States (loading, error, empty)

- Static page: no loading or empty state.
- Nonexistent illustration (invalid slug): standard GitHub Pages 404 behavior, not specific to this screen.

## Responsive

The SVG and the text content adapt to the full width of the available content area, with no column layout at this level. Sidebar → horizontal bar with hamburger below 767px, as on every screen (see `style-guide.md`).
