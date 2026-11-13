# Functional specifications

## Scope

The site presents two types of content:
- a professional profile page (career, skills, achievements) serving as an online resume;
- a series of educational illustrations ("Thought Figures", "Figures de pensée" in French) presenting intellectual concepts, cognitive laws and biases, as minimalist technical drawings accompanied by an explanatory text.

Static site, no user accounts, no application backend, bilingual French / English.

## Target users

- Recruiters, partners and professional network looking at Christophe Heubès's profile.
- Visitors discovering the "Thought Figures" illustrations (search engines, social networks, direct link to an illustration).

## User journeys

- **Profile discovery**: landing on the home page (`screens/home.md`), reading the career path, access to the LinkedIn / GitHub profiles.
- **Discovering the illustrations from the profile**: click on the "Thought Figures" link (sidebar or hamburger menu) → gallery (`screens/gallery.md`).
- **Gallery exploration**: filtering by category, click on a tile → illustration detail (`screens/technical-drawing.md`).
- **Direct arrival on an illustration**: via a shared link or a search engine, without going through the gallery or the profile page.

## Cross-cutting rules

### Bilingualism

- The site exists in French (`/`) and English (`/en/`), each page having a dedicated URL per language.
- Each piece of content (profile page, illustration) is a separate file per language, linked by a common `ref` (see `data-model.md`).
- Content not translated into a language does not appear in that language (no automatic fallback to the other language).
- The language switcher (sidebar / mobile footer) only offers the languages in which the current content actually exists (see `style-guide.md`).

### Navigation

- Site-wide navigation through a persistent sidebar (desktop) that becomes a hamburger menu (mobile), shared by all screens (see `style-guide.md`).
- The link to the gallery is always reachable from any screen (sidebar or hamburger), whatever the language.
- No breadcrumb on the profile page (root screen); a back breadcrumb exists on the illustration detail (see `screens/technical-drawing.md`).

## Out of scope

- No user accounts, no authentication.
- No contact form or content submission by visitors.
- No free-text search (the only filtering available is by category in the gallery).
- No comments or social interactions on the illustrations.
- No blog or dated/chronological content beyond the professional career path.
