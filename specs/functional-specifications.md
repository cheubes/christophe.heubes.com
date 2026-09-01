# Spécifications fonctionnelles

## Périmètre

Le site présente deux types de contenu :
- une page de profil professionnel (parcours, compétences, réalisations) servant de CV en ligne ;
- une série d'illustrations pédagogiques ("Figures de pensée") présentant des concepts intellectuels, lois cognitives et biais, sous forme de dessins techniques minimalistes accompagnés d'un texte explicatif.

Site statique, sans compte utilisateur, sans backend applicatif, bilingue français / anglais.

## Utilisateurs cibles

- Recruteurs, partenaires et réseau professionnel consultant le profil de Christophe Heubès.
- Visiteurs découvrant les illustrations "Figures de pensée" (recherche, réseaux sociaux, partage de lien direct vers une illustration).

## Parcours utilisateurs

- **Découverte du profil** : arrivée sur la page d'accueil (`screens/home.md`), lecture du parcours, accès aux profils LinkedIn / GitHub.
- **Découverte des illustrations depuis le profil** : clic sur le lien "Figures de pensée" (sidebar ou menu hamburger) → galerie (`screens/gallery.md`).
- **Exploration de la galerie** : filtrage par catégorie, clic sur une tuile → détail d'une illustration (`screens/technical-drawing.md`).
- **Arrivée directe sur une illustration** : via un lien partagé ou un moteur de recherche, sans passer par la galerie ni la page de profil.

## Règles transverses

### Bilinguisme

- Le site existe en français (`/`) et en anglais (`/en/`), chaque page ayant une URL dédiée par langue.
- Chaque contenu (page de profil, illustration) est un fichier distinct par langue, relié par un `ref` commun (voir `data-model.md`).
- Un contenu non traduit dans une langue n'apparaît pas dans cette langue (pas de repli automatique vers l'autre langue).
- Le sélecteur de langue (sidebar / footer mobile) ne propose que les langues dans lesquelles le contenu courant existe réellement (voir `style-guide.md`).

### Navigation

- Navigation transversale via une sidebar persistante (desktop) qui devient un menu hamburger (mobile), commune à tous les écrans (voir `style-guide.md`).
- Le lien vers la galerie est toujours accessible depuis n'importe quel écran (sidebar ou hamburger), quelle que soit la langue.
- Pas de fil d'Ariane sur la page de profil (écran racine) ; un fil d'Ariane de retour existe sur le détail d'une illustration (voir `screens/technical-drawing.md`).

## Hors périmètre

- Pas de compte utilisateur, pas d'authentification.
- Pas de formulaire de contact ni de soumission de contenu par les visiteurs.
- Pas de recherche texte libre (le seul filtrage disponible est le filtrage par catégorie dans la galerie).
- Pas de commentaires ni d'interactions sociales sur les illustrations.
- Pas de blog ni de contenu daté/chronologique au-delà du parcours professionnel.
