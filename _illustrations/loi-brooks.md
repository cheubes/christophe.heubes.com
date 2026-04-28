---
layout: illustration
title: "Loi de Brooks"
slug: loi-brooks
category: "Ingénierie & Technologie"
tagline: "Ajouter des développeurs à un projet en retard le retarde davantage."
description: "Loi de Fred Brooks (The Mythical Man-Month, 1975) : l'ajout de ressources humaines à un projet logiciel en retard aggrave ce retard, en raison du coût exponentiel de la communication."
lang: fr
ref: illustration-loi-brooks
---

## Définition

La **loi de Brooks** contre-intuitive au premier abord : on imaginerait qu'ajouter des mains accélère le travail. Mais dans un projet logiciel en retard, chaque nouvelle personne doit être formée, intégrée, et commence à générer des échanges supplémentaires avec toutes les autres.

Le nombre de canaux de communication croît en **n(n−1)/2** : 3 personnes → 3 canaux, 5 personnes → 10 canaux, 8 personnes → 28 canaux. Chaque nouveau canal est une source de malentendus, de réunions, et de temps perdu. La coordination dépasse rapidement le gain de productivité.

## Pourquoi c'est important

Cette loi explique pourquoi les "pompiers" qu'on envoie sur un projet en crise aggravent souvent la situation. Elle plaide pour des équipes petites, stables, et bien délimitées plutôt que pour des renforts massifs en fin de projet.

Elle a aussi des implications profondes sur l'architecture logicielle : Conway's Law prédit que les systèmes ressemblent à la structure de communication des équipes qui les construisent, d'où l'intérêt de découper les équipes comme on veut découper le système.

## Exemples concrets

**Projet web en retard** : 4 développeurs ajoutés la dernière semaine aboutissent à une livraison avec encore 4 semaines de retard supplémentaires.

**Migrations de systèmes** : les grands projets SAP ou ERP sont réputés pour leurs dépassements malgré des effectifs croissants.

**L'escalade de ressources** : en consulting, plus d'interlocuteurs signifie plus de réunions de coordination, et donc moins de code produit.
