# christophe.heubes.com

Site personnel de Christophe Heubès : page de profil (parcours professionnel) et série d'illustrations "Figures de pensée" (concepts intellectuels, lois cognitives et biais). Site statique, bilingue (français / anglais), généré avec Jekyll et hébergé sur GitHub Pages.

## État du projet

`specs/` est la source de vérité pour toute décision de conception : avant d'écrire ou de modifier du code, lire les fichiers de specs concernés par la tâche.

## Structure de `specs/`

- **`functional-specifications.md`** : périmètre du site, utilisateurs cibles, parcours utilisateurs, règles transverses (bilinguisme, navigation), hors périmètre.
- **`data-model.md`** : entité Illustration, ses attributs, le pipeline de génération (concept → SVG → page), les conventions de nommage et les contraintes de validation.
- **`technical-specifications.md`** : stack technique, hébergement/déploiement, architecture (rendu, collections Jekyll, routing), performance, accessibilité, SEO.
- **`style-guide.md`** : charte graphique (couleurs, typographie, espacements), composants UI de base (sidebar, hamburger, tuiles, footer...), iconographie.
- **`screens/`** : une spécification fonctionnelle par écran (objectif, contenu, interactions, états, responsive) :
  - `home.md` — page de profil
  - `gallery.md` — galerie des figures de pensée
  - `technical-drawing.md` — détail d'une figure de pensée

## Quand et comment utiliser ces specs

- **Avant toute implémentation**, lire le ou les fichiers concernés par la tâche. Les quatre specs transverses (`functional-specifications.md`, `data-model.md`, `technical-specifications.md`, `style-guide.md`) s'appliquent à tous les écrans ; chaque fichier de `screens/` complète avec ce qui est propre à cet écran.
- **Les fichiers se référencent constamment entre eux** ("voir `X.md`") plutôt que de dupliquer l'information. Suivre ces renvois plutôt que de deviner : si un écran mentionne une règle définie ailleurs (le comportement bilingue, une couleur de la charte...), la source de vérité est le fichier référencé, pas l'écran qui le cite.
- **En cas de modification d'une spec**, chercher les autres fichiers qui la référencent (`grep` du nom de fichier dans `specs/`) et vérifier qu'ils restent cohérents avec le changement. C'est la source la plus fréquente d'incohérence dans ce type de projet.
- **En cas de doute ou de silence des specs** sur un point nécessaire à l'implémentation, demander plutôt que de supposer : ce sont des choix de conception, pas des détails d'implémentation libres.
- **En cas de contradiction** entre le code (existant ou en cours d'écriture) et une spec, la spec fait foi ; si l'implémentation révèle qu'une spec doit changer, mettre à jour la spec et expliquer pourquoi, plutôt que de s'en écarter silencieusement dans le code.

## Avant chaque commit

- **Vérifier l'ensemble des fichiers de `specs/`** pour cohérence, pas seulement ceux directement modifiés par ce commit.
- **Si une ou plusieurs specs doivent être ajustées** (pour rester cohérentes entre elles, ou avec le changement en cours), bloquer le commit : proposer les mises à jour nécessaires et attendre validation avant de les appliquer, puis de committer.

## Conventions établies

- Le contenu des specs (`specs/`, ce fichier) est en français : ce sont des documents de conception, pas de la documentation au sens des règles globales.
- Les noms de fichiers, dossiers, attributs de données, classes CSS et identifiants techniques sont en anglais, en kebab-case (ex : `illustration-card`, `ill-card-title`, `_illustrations/`).
- Les couleurs et composants de la charte graphique sont définis une seule fois, dans `style-guide.md` : ne pas introduire de nouvelles valeurs de couleur ou de nouveaux styles de composants ailleurs sans les y ajouter d'abord.
- La palette de la charte graphique du site (chrome, sidebar, pages) et la palette des illustrations SVG elles-mêmes (fond marine, or, générées par `generator/`) sont deux systèmes de couleurs distincts : voir `style-guide.md`.
