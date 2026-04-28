---
layout: illustration
title: "Loi de Conway"
slug: loi-conway
category: "Ingénierie & Technologie"
tagline: "Les systèmes reflètent la structure de communication de leur organisation."
description: "Formulée par Melvin Conway en 1967 : toute organisation qui conçoit un système produira un design dont la structure reproduit sa propre structure de communication."
lang: fr
ref: illustration-loi-conway
flag: 🇫🇷
permalink: /illustrations/loi-conway/
---

## Définition

La **loi de Conway** a été formulée par l'informaticien américain Melvin Conway dans un article soumis en 1967 à *Harvard Business Review* (refusé, puis publié dans *Datamation*) :

> « Any organization that designs a system will produce a design whose structure is a copy of the organization's communication structure. »

En d'autres termes : **les frontières de ton architecture technique reproduisent les frontières de communication de ton organisation**. Si trois équipes développent un compilateur, il aura trois passes. Si le frontend et le backend n'échangent qu'à travers une API rigide, c'est parce que les équipes ne se parlent que par tickets.

## Pourquoi c'est important

La loi de Conway n'est pas une critique, c'est une loi de la nature sociale des systèmes. Elle a des implications concrètes :

**Le problème** : si l'organisation est mal structurée (silos, mauvaise communication, duplications de responsabilités), le système qu'elle produit le sera aussi : indépendamment de la qualité individuelle de ses ingénieurs.

**L'inverse (Reverse Conway Maneuver)** : plutôt que de laisser l'organisation dicter l'architecture, *concevoir l'organisation cible en fonction de l'architecture voulue*. Si tu veux des microservices indépendants, crée des équipes indépendantes avec responsabilité bout-en-bout. C'est le principe qui sous-tend les équipes *product* et la méthode des *Team Topologies*.

## Exemples concrets

**Amazon** : l'architecture two-pizza teams (équipes de 5-8 personnes, autonomes et responsables d'un service end-to-end) a produit AWS, une collection de services indépendants avec des API claires. Ce n'est pas un accident architectural, c'est le reflet direct de la structure organisationnelle.

**Monolithe → microservices** : les entreprises qui tentent de décomposer un monolithe sans restructurer leurs équipes produisent des "distributed monoliths", pire des deux mondes. L'architecture ne change pas si les équipes ne changent pas.

**Bureaucratie** : une organisation avec de nombreux niveaux hiérarchiques et des processus de validation lents produira des systèmes lents à déployer, avec de nombreuses dépendances et des cycles de release longs.

> Veux-tu changer ton architecture ? Commence par changer tes équipes.
