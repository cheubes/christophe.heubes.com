---
layout: illustration
title: "Clôture de Chesterton"
slug: cloture-chesterton
category: "Épistémologie"
tagline: "Ne supprime pas ce que tu ne comprends pas encore."
description: "Principe formulé par G. K. Chesterton en 1929 : avant de supprimer une règle ou une structure existante, il faut comprendre pourquoi elle a été mise en place."
lang: fr
ref: illustration-cloture-chesterton
flag: 🇫🇷
permalink: /illustrations/cloture-chesterton/
---

## Définition

La **clôture de Chesterton** est un principe de prudence intellectuelle formulé par G. K. Chesterton dans son essai *The Thing* (1929) :

> « Il y a dans notre temps une pensée superficielle qui se résume ainsi : "Je ne vois pas l'utilité de cette clôture, donc elle doit être supprimée." Le vrai libéral répond : "Si vous ne voyez pas son utilité, je ne vous laisserai pas la supprimer. Allez réfléchir. Puis, quand vous pouvez me dire pourquoi elle a été construite, je vous permettrai peut-être de la détruire." »

La règle est simple : **ne supprime jamais une chose avant de comprendre pourquoi elle existe**. Ce que tu perçois comme inutile ou obsolète a peut-être une raison que tu ne vois pas encore.

## Pourquoi c'est important

Ce principe s'oppose à la réforme aveugle et à l'"optimisation" sans compréhension :

**En ingénierie** : supprimer du code "mort" sans comprendre pourquoi il a été écrit peut éliminer une protection contre un cas edge rare mais critique. La règle de lint ignorée depuis 2 ans protégeait peut-être contre une vulnérabilité réelle.

**En management** : abolir une réunion hebdomadaire perçue comme inutile peut casser un canal de coordination informel qui ne sera visible qu'après sa disparition.

**En politique** : démanteler une régulation sans en comprendre l'origine historique peut réactiver exactement le problème qu'elle cherchait à contenir.

**En architecture logicielle** : refactoriser "cette couche absurde d'abstraction" peut révéler, trop tard, qu'elle absorbait des problèmes de performance ou de concurrence non documentés.

La clôture de Chesterton s'applique particulièrement aux systèmes complexes, évolutifs, ou hérités, où la mémoire organisationnelle est fragmentée et les raisons originelles oubliées.

## Exemples concrets

**La règle métier incompréhensible** : toute entreprise mature a ses "règles imbéciles", délais absurdes, validations redondantes, formats étranges. Souvent, elles codifient une régulation légale, une fraude passée, ou un incident client grave. Les supprimer sans investigation peut coûter cher.

**Le test unitaire "bizarre"** : ce test qui vérifie quelque chose d'apparemment évident a probablement été écrit après un bug en production. Le supprimer parce qu'il "teste du code trivial" est dangereux.

**La réglementation bancaire** : les règles de séparation des activités, les réserves obligatoires, les limites d'exposition : chacune est née d'une crise financière. Les assouplir sans comprendre leur origine peut recréer exactement la même crise.

**Contre-mesures** : documenter la raison d'être des règles et décisions importantes ("Architecture Decision Records" en dev), tenir un historique des incidents ayant motivé chaque contrainte, et systématiquement demander "pourquoi ?" avant tout "on pourrait simplifier ça".

> La meilleure raison pour garder quelque chose, c'est de comprendre pourquoi on en a eu besoin.
