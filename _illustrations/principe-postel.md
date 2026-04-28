---
layout: illustration
title: "Principe de Postel"
slug: principe-postel
category: "Ingénierie & Technologie"
tagline: "Sois libéral dans ce que tu acceptes, conservateur dans ce que tu émets."
description: "Principe de Jon Postel (RFC 793, 1980) : pour assurer l'interopérabilité, un système doit accepter des entrées variantes ou imparfaites, mais produire des sorties strictement conformes aux standards."
lang: fr
ref: illustration-principe-postel
---

## Définition

Le **principe de Postel** (*Robustness Principle*) a été énoncé par Jon Postel dans la spécification du protocole TCP en 1980. Sa formulation originale : *"Be conservative in what you do, be liberal in what you accept from others."*

L'idée est simple : pour qu'un réseau ou un système soit robuste, les implémentations doivent tolérer les imperfections des autres (formats légèrement différents, champs manquants, espacements inattendus) tout en émettant des messages parfaitement conformes aux standards.

## Pourquoi c'est important

Ce principe a contribué à la robustesse extraordinaire d'Internet. Les navigateurs web sont devenus des champions de la tolérance : ils affichent du HTML mal formé, des attributs inconnus, des balises incorrectement fermées : sans planter. Cette permissivité à l'entrée a permis au web de grandir même avec des outils de publication imparfaits.

Cependant, le principe est aussi controversé : une tolérance excessive à l'entrée peut propager des comportements malformés et rendre les diagnostics difficiles. Certains ingénieurs préconisent aujourd'hui une approche plus stricte pour forcer une meilleure discipline chez les émetteurs.

## Exemples concrets

**Navigateurs web** : Chrome et Firefox affichent du HTML invalide sans erreur, libéraux à l'entrée.

**Serveurs HTTP** : ils renvoient des réponses strictement formatées selon les RFC, conservateurs à la sortie.

**Parsers JSON** : les implémentations modernes acceptent des virgules trailing ou des commentaires, même si le standard JSON les interdit.

**Clients email** : ils acceptent des emails malformés en entrée, mais n'envoient que des messages RFC-conformes.
