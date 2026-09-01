# Écran : détail d'une figure de pensée

## Objectif

Présenter une illustration en détail : le dessin technique (SVG) et le texte explicatif du concept.

## Contenu et structure

- Sidebar : identique à `screens/home.md`.
- Fil d'Ariane : lien de retour vers la galerie ("← Figures de pensée" / "← Thought Figures"), voir `_layouts/illustration.html`.
- Badge de catégorie (`ill-category-badge`), titre (`title`) et tagline (`tagline`) de l'illustration.
- SVG de l'illustration (`assets/illustrations/<slug>[-en].svg`), affiché en pleine largeur.
- Contenu explicatif (Markdown du fichier), structuré par convention en sections : Définition, Pourquoi c'est important, Exemples concrets (voir les fichiers existants dans `_illustrations/` pour le gabarit).
- Footer : identique à `screens/home.md`.

## Interactions

- Clic sur le fil d'Ariane : retour vers la galerie (`screens/gallery.md`).
- Changement de langue via le sélecteur : navigue vers la version traduite de la même illustration si elle existe (même `ref`, voir `data-model.md`) ; sinon, le sélecteur ne doit pas proposer cette langue (voir "Bilinguisme" dans `functional-specifications.md`).

## États (chargement, erreur, vide)

- Page statique : pas d'état de chargement ni de vide.
- Illustration inexistante (slug invalide) : comportement de 404 standard de GitHub Pages, non spécifique à cet écran.

## Responsive

Le SVG et le contenu texte s'adaptent en pleine largeur du contenu disponible, sans mise en page en colonnes à ce niveau. Sidebar → barre horizontale avec hamburger sous 767px, comme sur tous les écrans (voir `style-guide.md`).
