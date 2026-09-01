# Modèle de données

## Vue d'ensemble

Le site n'a pas de backend ni de base de données : le "modèle de données" désigne ici la structure des fichiers de contenu Jekyll et leurs conventions. Deux natures de contenu coexistent :
- la page de profil (`index.md` / `index-en.md`) : contenu figé, porté par des champs de front matter dédiés (pas une entité réutilisable, un seul exemplaire par langue) ;
- la collection `illustrations` : une vraie entité répétée, décrite ci-dessous.

## Entité Illustration

Portée par la collection Jekyll `illustrations` (voir `_config.yml`, dossier `_illustrations/`).

### Attributs (front matter)

| Attribut | Rôle |
|---|---|
| `layout` | Toujours `illustration` (voir `_layouts/illustration.html`) |
| `title` | Titre affiché du concept |
| `slug` | Identifiant technique, kebab-case, commun aux deux langues (relie SVG, générateur et page) |
| `category` | Libellé de catégorie, traduit par langue (voir "Taxonomie des catégories") |
| `tagline` | Phrase courte résumant le concept, affichée sous le titre |
| `description` | Description longue, utilisée pour le SEO (meta description) |
| `lang` | `fr` ou `en` |
| `ref` | Identifiant reliant les deux versions linguistiques d'une même illustration (ex : `illustration-ikigai`) |
| `flag` | Emoji de drapeau utilisé par le sélecteur de langue |
| `permalink` | URL finale de la page (`/illustrations/<slug>/` ou `/en/illustrations/<slug>/`) |

Le contenu Markdown du fichier (après le front matter) porte le texte explicatif, structuré en sections (voir `screens/technical-drawing.md` pour la structure attendue).

### Convention de nommage des fichiers

- Contenu : `_illustrations/<slug>.md` (français) et `_illustrations/<slug>-en.md` (anglais).
- SVG : `assets/illustrations/<slug>.svg` (français) et `assets/illustrations/<slug>-en.svg` (anglais).
- Génération : `generator/concepts/<slug>.js` (français) et `generator/concepts/<slug>-en.js` (anglais).

Le `slug` est la clé qui relie ces trois fichiers : renommer un concept implique de renommer les trois de façon cohérente.

### Taxonomie des catégories

Catégories existantes (français / anglais) :
- Biais & Heuristiques / Biases & Heuristics
- Économie & Incitations / Economics & Incentives
- Ingénierie & Technologie / Engineering & Technology
- Épistémologie / Epistemology
- Management & Organisations
- Psychologie & Comportement / Psychology & Behaviour

La catégorie n'est pas un identifiant technique : c'est un libellé affiché tel quel dans la galerie (voir `screens/gallery.md`), traduit par langue. Ajouter une catégorie n'exige pas de fichier de configuration séparé, elle est déduite dynamiquement des illustrations existantes.

### Pipeline de génération (concept → SVG → page)

1. Un fichier `generator/concepts/<slug>.js` décrit le concept (id, title, category, tagline, description) et une fonction `render()` qui produit le SVG.
2. `node generator/index.js --concept=<slug>` génère `assets/illustrations/<slug>.svg` (et des exports PNG, hors périmètre du rendu du site).
3. Un fichier `_illustrations/<slug>.md` est créé manuellement, avec un front matter cohérent avec le concept, et le texte explicatif en Markdown.
4. Les fichiers générés (SVG/PNG) et le Markdown sont committés ensemble.

Voir `generator/README.md` pour le détail des commandes et `technical-specifications.md` pour la pile technique du générateur.

### Contraintes de validation

- Un `slug` est unique et identique entre la version française et anglaise d'une même illustration.
- Un `ref` est unique par illustration et partagé entre ses deux versions linguistiques.
- Une illustration existant dans une seule langue est valide (voir "Bilinguisme" dans `functional-specifications.md`) : elle n'apparaît alors que dans cette langue.
- `category` doit être traduite de façon cohérente entre les deux langues (même regroupement conceptuel, libellé différent).
