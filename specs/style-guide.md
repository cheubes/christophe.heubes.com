# Style guide

## Colors

Two distinct palettes coexist: the one for the site chrome (sidebar, pages, footer) and the one for the SVG illustrations themselves (generated separately, see `generator/README.md` and `data-model.md`). Do not confuse or mix them.

### Site palette (chrome)

| Role | LESS variable | Hex |
|---|---|---|
| Primary blue | `@blue` | `#2C374C` |
| Gold / accent | `@gold` | `#C7B299` |
| Light grey | `@light-grey` | `#ACB2B8` |
| Grey | `@grey` | `#666` |
| Dark grey | `@dark-grey` | `#444` |

### Illustration palette (generated)

| Role | LESS variable | Hex |
|---|---|---|
| Background | `@ill-bg` | `#0D1B2A` |
| Gold | `@ill-gold` | `#C9A84C` |
| Pale gold | (not mirrored in LESS, see `generator/config.js`) | `#E8D5A3` |
| Muted text | `@ill-muted` | `#8A9BB0` |
| Main text | `@ill-text` | `#F0EDE4` |

These values are defined in `assets/css/hbs.less` (chrome) and `generator/config.js` (SVG rendering). Do not introduce a new color anywhere else: add it here and in the corresponding file.

## Typography

- Single typeface: Ubuntu (Google Fonts, weights 400 and 700), with a `sans-serif` fallback.
- The SVG illustrations embed their own copy of the font (base64, via `generator/font-loader.js`) to stay self-contained, independently of the site CSS.

## Spacing and grid

- Sidebar width: `@sidebar-width` = 260px (desktop).
- Layout based on the Bootstrap grid (`col-2` / `col-10` for the icon + content rows of the profile page).
- Responsive breakpoint: 767px, the sidebar switches from a fixed panel to a horizontal bar with a hamburger menu, see `assets/css/hbs.less`.
- Intermediate breakpoint at 1100px: only adjusts the number of columns of the gallery grid (see `screens/gallery.md`), with no effect on the sidebar.

## Base UI components

- **Sidebar**: persistent panel on every page (above 767px), containing the profile picture, title, tagline, social links (LinkedIn, GitHub), link to the gallery, language switcher, license badge and link to `heubes.org`.
- **Footer**: language switcher, Creative Commons badge (CC BY-NC-SA 4.0), link to `heubes.org`. Above 767px, this content lives in the sidebar; below, it moves to a dedicated mobile footer at the bottom of the page (`mobile-footer`), the sidebar being reduced to a horizontal bar (picture, title, tagline, social links).
- **Hamburger menu**: only visible below 767px, replacing the gallery link normally shown in the sidebar; it only contains that link.
- **Illustration tile** (`illustration-card`): cover image, overlay with title, tagline and category (see `screens/gallery.md`).
- **Filter buttons** (`ill-filter-btn`): an "All" button ("Tous" in French) + one button per category present in the current language, with a visually distinct active state.
- **Category badge** (`ill-category-badge`): displayed on the illustration detail screen.

## Iconography

Font Awesome (loaded via Kit, see `technical-specifications.md`): social network icons (`fa-linkedin-in`, `fa-github`), license icons (`fa-creative-commons*`), navigation icons (`fa-pen-nib` for the illustrations), and topic icons on the profile page (`fa-user-tie`, `fa-screwdriver-wrench`, `fa-rocket`, `fa-seedling`).
