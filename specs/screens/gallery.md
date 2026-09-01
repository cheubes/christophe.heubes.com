# Écran : galerie des figures de pensée

## Objectif

Permettre au visiteur de parcourir l'ensemble des illustrations disponibles et d'accéder à celle qui l'intéresse, éventuellement filtrée par catégorie.

## Contenu et structure

- Sidebar : identique à `screens/home.md` (voir `style-guide.md`).
- Titre et introduction de la section (traduits par langue).
- Barre de filtres : un bouton "Tous" (actif par défaut) et un bouton par catégorie présente dans la langue courante (voir "Taxonomie des catégories" dans `data-model.md`), déduits dynamiquement des illustrations existantes plutôt que d'une liste figée.
- Grille de tuiles (`illustration-card`), une par illustration disponible dans la langue courante : image de couverture (SVG), numéro, titre, tagline, catégorie (voir `style-guide.md`).
- Footer : identique à `screens/home.md`.

## Interactions

- Clic sur un bouton de filtre : affiche uniquement les tuiles de la catégorie sélectionnée, entièrement côté client (JavaScript, sans rechargement de page ni appel réseau), voir `_layouts/illustrations-index.html`.
- Clic sur une tuile : navigue vers le détail de l'illustration correspondante (`screens/technical-drawing.md`).
- Changement de langue via le sélecteur : recharge la galerie dans l'autre langue, avec la liste d'illustrations et les filtres recalculés pour cette langue (une illustration non traduite disparaît, voir "Bilinguisme" dans `functional-specifications.md`).

## États (chargement, erreur, vide)

- Vide : aucune illustration disponible dans la langue courante → cas non rencontré aujourd'hui (toutes les illustrations existent dans les deux langues), comportement à définir le jour où il se présente.
- Chargement : page statique, pas d'état de chargement pour la grille elle-même ; les images de couverture se chargent individuellement en lazy loading (voir `technical-specifications.md`).
- Filtre sans résultat : n'existe pas dans les faits, toutes les catégories affichées proviennent d'illustrations réellement présentes.

## Responsive

La grille s'adapte à la largeur de l'écran : plusieurs colonnes au-delà de 1100px, deux colonnes entre 767px et 1100px, une colonne en dessous de 767px (voir `assets/css/hbs.less`). Sidebar → barre horizontale avec hamburger sous 767px, comme sur tous les écrans (voir `style-guide.md`).
