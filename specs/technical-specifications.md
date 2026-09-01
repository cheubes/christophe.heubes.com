# Spécifications techniques

## Stack

- Générateur de site statique : Jekyll, Ruby (version fixée par `.ruby-version`, actuellement 3.3.12).
- Feuilles de style : LESS (`assets/css/hbs.less`), compilé par un plugin Jekyll custom (`_plugins/less_compiler.rb`).
- Optimisation CSS : PurgeCSS (`_plugins/purgecss_optimizer.rb`), pour ne livrer que les classes réellement utilisées.
- Grille et utilitaires : Bootstrap (grid + utilities, voir `_includes/head.html`).
- Icônes : Font Awesome, chargé via Font Awesome Kit (voir `_includes/scripts.html`).
- Police : Ubuntu (Google Fonts), voir `style-guide.md`.
- Vérification de liens : `html-proofer` (gem, voir `Gemfile`).

## Générateur d'illustrations

Outil Node.js séparé (`generator/`), non déployé sur le site : génère les SVG/PNG des illustrations à partir de fichiers de concept. Voir `generator/README.md` pour l'utilisation et `data-model.md` pour le pipeline concept → SVG → page. Exclu du build Jekyll (voir `exclude` dans `_config.yml`).

## Hébergement et déploiement

- Hébergement : GitHub Pages, domaine personnalisé `christophe.heubes.com` (voir `CNAME`).
- Déploiement : workflow GitHub Actions (`.github/workflows/jekyll.yml`), déclenché sur push vers `master` ou manuellement.
  - Build Jekyll, borné à 15 minutes (`timeout-minutes`).
  - Vérification des liens morts (`html-proofer`) après le build, non bloquante (`continue-on-error: true`) ; les URLs `fonts.googleapis.com` et `fonts.gstatic.com` sont ignorées (faux positifs connus).
  - Déploiement vers GitHub Pages via les actions officielles (`upload-pages-artifact`, `deploy-pages`).
- Dépendances des workflows GitHub Actions tenues à jour par Dependabot (`.github/dependabot.yml`).

## Architecture

- Rendu : entièrement statique, généré au build, aucune logique serveur.
- Collections Jekyll : `illustrations` (voir `data-model.md`), avec `permalink` explicite par entrée.
- Routing bilingue : pages françaises à la racine (`/`, `/illustrations/<slug>/`), pages anglaises sous `/en/` (`/en/`, `/en/illustrations/<slug>/`). Chaque page porte son propre `permalink` en front matter (pas de génération automatique par dossier de langue).
- Interactivité côté client : JavaScript vanilla minimal (menu hamburger, filtres de catégorie dans la galerie), pas de framework JS ni de bundler pour le site lui-même.

## Performance

- Chargement différé (lazy loading) des images de tuiles dans la galerie (voir `screens/gallery.md`).
- SVG des illustrations chargés en priorité (`loading="eager"`) sur l'écran de détail, car unique contenu visuel de la page (voir `screens/technical-drawing.md`).
- CSS purgé (PurgeCSS) pour limiter le poids des feuilles de style livrées.
- Formats d'image modernes utilisés en complément (WebP avec repli JPEG, voir `assets/img/photo.webp`).

## Accessibilité

- Attributs `alt` descriptifs sur les images et SVG d'illustration.
- Attributs ARIA sur le menu hamburger (`aria-expanded`, `aria-hidden`) et les groupes de filtres (`role="group"`, `aria-label`).
- Icônes décoratives marquées `aria-hidden="true"`.

## SEO

- Balises meta par page : description, Open Graph, Twitter Card, `hreflang` pour les alternatives linguistiques, JSON-LD `Person` (voir `_includes/head.html`).
- `robots.txt` autorisant l'indexation complète et référençant le sitemap.
- `sitemap.xml` généré dynamiquement à partir de `site.pages`, filtré aux pages ayant un `title` et `page.lang == "fr"` : seules les pages françaises sont listées dans le sitemap, le français agissant de fait comme langue canonique de ce fichier. Les pages anglaises restent indexables (liens internes, `hreflang` du `<head>`) mais n'apparaissent pas dans le sitemap ; à confirmer si ce filtrage est un choix délibéré ou un oubli.
- Chaque entrée du sitemap redéclare ses alternates linguistiques via `<xhtml:link rel="alternate" hreflang="...">`, en plus des balises `hreflang` déjà présentes dans le `<head>` de chaque page.
- `lastmod` par page : priorité à `page.sitemap.lastmod`, sinon `page.date`, sinon la date de build (`site.time`).
- Une page peut s'exclure du sitemap via `sitemap.exclude: yes` en front matter (mécanisme utilisé par `sitemap.xml` lui-même pour s'auto-exclure).
