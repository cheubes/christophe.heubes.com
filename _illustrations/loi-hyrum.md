---
layout: illustration
title: "Loi de Hyrum"
slug: loi-hyrum
category: "Ingénierie & Technologie"
tagline: "Avec suffisamment d'utilisateurs, tout comportement observable devient une dépendance."
description: "Loi énoncée par Hyrum Wright (ingénieur Google) : quelle que soit l'interface documentée, les utilisateurs finissent par dépendre de tous les comportements observables d'un système."
lang: fr
ref: illustration-loi-hyrum
---

## Définition

La **loi de Hyrum** (ou *loi des interfaces implicites*) exprime une vérité inconfortable pour tout ingénieur : dès qu'un système a suffisamment d'utilisateurs, l'interface documentée devient secondaire. Ce qui compte, c'est l'ensemble des comportements que les utilisateurs ont observés : y compris les bugs, les effets de bord, et les comportements non intentionnels.

Si vous corrigez un bug que personne n'était censé utiliser, vous casserez quelqu'un. Si vous optimisez une latence de 200ms à 50ms, vous casserez quelqu'un qui comptait sur ce délai pour synchroniser ses appels. Tout comportement observable finit par être une dépendance implicite.

## Pourquoi c'est important

Cette loi a des implications profondes pour la conception d'API et de systèmes à grande échelle. Elle explique pourquoi les grandes entreprises tech (Google, Amazon, Stripe) investissent massivement dans la rétrocompatibilité : non par conservatisme, mais parce qu'à leur échelle, chaque changement visible casse quelqu'un.

Elle argumente aussi pour des pratiques comme le versioning strict d'API, les périodes de dépréciation longues, et la communication proactive des changements.

## Exemples concrets

**Google et les API** : des comportements involontaires ont été maintenus pendant des années parce que des milliers de développeurs en dépendaient.

**Python 2 vers Python 3** : la migration a duré plus d'une décennie à cause de dépendances sur des comportements « accidentels » de Python 2.

**Capitalisation d'un champ JSON** : un service interne le corrige, et des dizaines de consumers qui font une comparaison case-sensitive cassent en production.

**Bug de performance devenu fonctionnalité** : des utilisateurs ont calibré leurs timeout sur le temps de réponse « cassé ». Le corriger les casse.
