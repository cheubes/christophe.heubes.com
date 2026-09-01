# Écran : page de profil

## Objectif

Présenter le profil professionnel de Christophe Heubès (parcours, compétences, réalisations) et donner accès aux illustrations "Figures de pensée".

## Contenu et structure

- Sidebar : photo, titre, tagline, liens sociaux, lien vers la galerie, sélecteur de langue (voir `style-guide.md`).
- Section "À propos" (`section-about`) : quatre blocs texte (présentation générale, compétences, expérience Xebia, activité d'investisseur), chacun associé à une icône (voir `_layouts/index.html` et `style-guide.md`).
- Section "Parcours" (`section-resume`) : liste chronologique d'expériences professionnelles, chacune associée au logo de l'entreprise (Flint, Xebia ×2, Dreamsoft, EPITA) et à un texte descriptif.
- Footer : sélecteur de langue, badge Creative Commons, lien `heubes.org` (voir `style-guide.md`).

Le contenu de ces sections est figé (pas de collection, pas de pagination) : chaque bloc correspond à un champ de front matter dédié dans `index.md` / `index-en.md` (voir `data-model.md`).

## Interactions

- Clic sur le lien "Figures de pensée" (sidebar ou hamburger) : navigue vers la galerie (`screens/gallery.md`).
- Clic sur les liens sociaux : ouvre LinkedIn ou GitHub dans un nouvel onglet.
- Changement de langue via le sélecteur : navigue vers l'équivalent anglais/français de la page de profil.

## États (chargement, erreur, vide)

Page entièrement statique : pas d'état de chargement, d'erreur ou de vide applicable (le contenu est toujours présent au build).

## Responsive

- Au-delà de 767px : sidebar fixe à gauche (`@sidebar-width`), contenu à droite.
- En dessous de 767px : sidebar réduite à une barre horizontale, menu hamburger pour accéder à la galerie, footer repositionné en bas de page (voir `style-guide.md`).
