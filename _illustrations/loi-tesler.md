---
layout: illustration
title: "Loi de Tesler"
slug: loi-tesler
category: "Ingénierie & Technologie"
tagline: "La complexité est incompressible : elle se déplace, elle ne disparaît pas."
description: "Loi formulée par Larry Tesler (Xerox, Apple) : tout système possède une complexité irréductible qui ne peut être éliminée, seulement déplacée entre l'utilisateur et le développeur."
lang: fr
ref: illustration-loi-tesler
flag: 🇫🇷
permalink: /illustrations/loi-tesler/
---

## Définition

La **loi de Tesler**, aussi appelée *loi de conservation de la complexité*, est formulée par Larry Tesler, ingénieur chez Xerox PARC puis Apple dans les années 1980. Sa formulation originale :

> « Every application must have an inherent amount of irreducible complexity. The only question is: who will have to deal with it : the user, the system developer, or the programmer? »

La complexité d'un système ne disparaît jamais. Elle ne fait que se **déplacer** : si vous la cachez à l'utilisateur, elle se retrouve dans le code, dans la configuration, dans la maintenance, ou dans l'infrastructure. Simplifier une interface, c'est absorber de la complexité côté développeur : pas la supprimer.

## Pourquoi c'est important

Cette loi a des implications profondes en design, en ingénierie et en management :

**En UX** : un bouton "Envoyer" simple ne signifie pas que l'envoi est simple. La validation des données, les cas d'erreur, la gestion des conflits : tout cela existe quelque part, géré par le système plutôt que par l'utilisateur.

**En développement** : les frameworks "zero-configuration" déplacent la complexité de la configuration vers la convention. Les abstractions haut niveau cachent de la complexité bas niveau. Rien n'est gratuit.

**En organisation** : une équipe qui "simplifie" son processus transfère souvent la charge à une autre équipe, un autre département, ou un client.

**La limite de la simplification** : on ne peut pas simplifier à l'infini. Il existe un seuil en dessous duquel réduire encore la complexité visible crée une complexité cachée plus dangereuse, celle que l'utilisateur ne voit pas jusqu'à ce qu'il soit trop tard.

## Exemples concrets

**GPS et navigation** : l'interface "saisir une destination" est simple. Mais derrière, la planification d'itinéraire, les mises à jour cartographiques, la gestion du trafic en temps réel sont d'une complexité énorme : absorbée par le système.

**Plateformes no-code** : elles permettent de construire des apps sans coder. Mais dès que le besoin sort du template, la complexité ressurgit, plus opaque et plus difficile à gérer que du code brut.

**Assurances "tout inclus"** : une police simple et lisible dissimule souvent une mécanique actuarielle et juridique d'une extrême complexité. La simplicité visible est du travail absorbé côté prestataire.

**Contre-mesures** : identifier où la complexité est absorbée avant de simplifier, ne pas confondre "simple à utiliser" avec "simple à construire", et documenter explicitement la complexité cachée pour les mainteneurs futurs.

> Simplifier l'interface, c'est complexifier le moteur. Le total ne change pas.
