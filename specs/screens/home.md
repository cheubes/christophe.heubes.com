# Screen: profile page

## Goal

Present Christophe Heubès's professional profile (career, skills, achievements) and give access to the "Thought Figures" illustrations.

## Content and structure

- Sidebar: picture, title, tagline, social links, link to the gallery, language switcher (see `style-guide.md`).
- "About" section (`section-about`): four text blocks (general introduction, skills, Xebia experience, investor activity), each associated with an icon (see `_layouts/index.html` and `style-guide.md`).
- "Resume" section (`section-resume`): chronological list of professional experiences, each associated with the company logo (Flint, Xebia ×2, Dreamsoft, EPITA) and a descriptive text.
- Footer: language switcher, Creative Commons badge, `heubes.org` link (see `style-guide.md`).

The content of these sections is fixed (no collection, no pagination): each block maps to a dedicated front matter field in `index.md` / `index-en.md` (see `data-model.md`).

## Interactions

- Click on the "Thought Figures" link (sidebar or hamburger): navigates to the gallery (`screens/gallery.md`).
- Click on the social links: opens LinkedIn or GitHub in a new tab.
- Language change via the switcher: navigates to the English/French equivalent of the profile page.

## States (loading, error, empty)

Fully static page: no loading, error or empty state applies (the content is always present at build time).

## Responsive

- Above 767px: sidebar fixed on the left (`@sidebar-width`), content on the right.
- Below 767px: sidebar reduced to a horizontal bar, hamburger menu to access the gallery, footer moved to the bottom of the page (see `style-guide.md`).
