# Screen: Thought Figures gallery

## Goal

Let visitors browse all the available illustrations and reach the one they are interested in, optionally filtered by category.

## Content and structure

- Sidebar: identical to `screens/home.md` (see `style-guide.md`).
- Section title and introduction (translated per language).
- Filter bar: an "All" button ("Tous" in French, active by default) and one button per category present in the current language (see "Category taxonomy" in `data-model.md`), derived dynamically from the existing illustrations rather than from a fixed list.
- Grid of tiles (`illustration-card`), one per illustration available in the current language: cover image (SVG), title, tagline, category (see `style-guide.md`).
- Footer: identical to `screens/home.md`.

## Interactions

- Click on a filter button: only shows the tiles of the selected category, entirely client-side (JavaScript, no page reload or network call), see `_layouts/illustrations-index.html`.
- Click on a tile: navigates to the detail of the corresponding illustration (`screens/technical-drawing.md`).
- Language change via the switcher: reloads the gallery in the other language, with the list of illustrations and the filters recomputed for that language (an untranslated illustration disappears, see "Bilingualism" in `functional-specifications.md`).

## States (loading, error, empty)

- Empty: no illustration available in the current language → case not encountered today (all illustrations exist in both languages), behavior to be defined when it arises.
- Loading: static page, no loading state for the grid itself; cover images load individually with lazy loading (see `technical-specifications.md`).
- Filter with no result: does not occur in practice, all displayed categories come from illustrations that actually exist.

## Responsive

The grid adapts to the screen width: several columns above 1100px, two columns between 767px and 1100px, one column below 767px (see `assets/css/hbs.less`). Sidebar → horizontal bar with hamburger below 767px, as on every screen (see `style-guide.md`).
