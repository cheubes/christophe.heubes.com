# Charte graphique

## Couleurs

Deux palettes distinctes coexistent : celle de l'habillage du site (sidebar, pages, footer) et celle des illustrations SVG elles-mêmes (générées séparément, voir `generator/README.md` et `data-model.md`). Ne pas les confondre ni les mélanger.

### Palette du site (chrome)

| Rôle | Variable LESS | Hex |
|---|---|---|
| Bleu principal | `@blue` | `#2C374C` |
| Or / accent | `@gold` | `#C7B299` |
| Gris clair | `@light-grey` | `#ACB2B8` |
| Gris | `@grey` | `#666` |
| Gris foncé | `@dark-grey` | `#444` |

### Palette des illustrations (générées)

| Rôle | Variable LESS | Hex |
|---|---|---|
| Fond | `@ill-bg` | `#0D1B2A` |
| Or | `@ill-gold` | `#C9A84C` |
| Or pâle | (non repris en LESS, voir `generator/config.js`) | `#E8D5A3` |
| Texte atténué | `@ill-muted` | `#8A9BB0` |
| Texte principal | `@ill-text` | `#F0EDE4` |

Ces valeurs sont définies dans `assets/css/hbs.less` (chrome) et `generator/config.js` (rendu SVG). Ne pas introduire de nouvelle couleur ailleurs : l'ajouter ici et dans le fichier correspondant.

## Typographie

- Police unique : Ubuntu (Google Fonts, graisses 400 et 700), avec repli `sans-serif`.
- Les illustrations SVG embarquent leur propre copie de la police (base64, via `generator/font-loader.js`) pour rester autonomes, indépendamment du CSS du site.

## Espacements et grille

- Largeur de la sidebar : `@sidebar-width` = 260px (desktop).
- Mise en page basée sur la grille Bootstrap (`col-2` / `col-10` pour les lignes icône + contenu de la page de profil).
- Point de rupture responsive : 767px, bascule de la sidebar (panneau fixe) vers une barre horizontale avec menu hamburger, voir `assets/css/hbs.less`.
- Point de rupture intermédiaire à 1100px : ajuste uniquement le nombre de colonnes de la grille de la galerie (voir `screens/gallery.md`), sans effet sur la sidebar.

## Composants UI de base

- **Sidebar** : panneau persistant sur toutes les pages (au-dessus de 767px), contenant photo de profil, titre, tagline, liens sociaux (LinkedIn, GitHub), lien vers la galerie, sélecteur de langue, badge de licence et lien vers `heubes.org`.
- **Footer** : sélecteur de langue, badge Creative Commons (CC BY-NC-SA 4.0), lien vers `heubes.org`. Au-dessus de 767px, ce contenu vit dans la sidebar ; en dessous, il est déplacé dans un footer mobile dédié en bas de page (`mobile-footer`), la sidebar étant réduite à une barre horizontale (photo, titre, tagline, liens sociaux).
- **Menu hamburger** : visible uniquement sous 767px, en remplacement du lien vers la galerie normalement présent dans la sidebar ; ne contient que ce lien.
- **Tuile d'illustration** (`illustration-card`) : image de couverture, overlay avec numéro, titre, tagline et catégorie (voir `screens/gallery.md`).
- **Boutons de filtre** (`ill-filter-btn`) : un bouton "Tous" + un bouton par catégorie présente dans la langue courante, état actif visuellement distinct.
- **Badge de catégorie** (`ill-category-badge`) : affiché sur l'écran de détail d'une illustration.

## Iconographie

Font Awesome (chargé via Kit, voir `technical-specifications.md`) : icônes de réseaux sociaux (`fa-linkedin-in`, `fa-github`), de licence (`fa-creative-commons*`), de navigation (`fa-pen-nib` pour les illustrations), et icônes métier sur la page de profil (`fa-user-tie`, `fa-screwdriver-wrench`, `fa-rocket`, `fa-seedling`).
