---
layout: illustration
title: "Conway's Law"
slug: loi-conway
category: "Engineering & Technology"
tagline: "Systems reflect the communication structure of the organisations that build them."
description: "Formulated by Melvin Conway in 1967: any organisation that designs a system will produce a design whose structure mirrors the organisation's own communication structure."
lang: en
ref: illustration-loi-conway
flag: 🇬🇧
permalink: /en/illustrations/loi-conway/
---

## Definition

**Conway's Law** was formulated by American computer scientist Melvin Conway in an article submitted in 1967 to *Harvard Business Review* (rejected, then published in *Datamation*):

> "Any organization that designs a system will produce a design whose structure is a copy of the organization's communication structure."

In other words: **the boundaries in your technical architecture reproduce the communication boundaries of your organisation**. If three teams build a compiler, it will have three passes. If frontend and backend only exchange through a rigid API, it's because the teams only talk through tickets.

## Why it matters

Conway's Law is not a criticism, it is a law of the social nature of systems. It has concrete implications:

**The problem**: if the organisation is poorly structured (silos, poor communication, duplicated responsibilities), the system it produces will be too: regardless of the individual quality of its engineers.

**The inverse (Reverse Conway Maneuver)**: rather than letting the organisation dictate the architecture, *design the target organisation around the desired architecture*. If you want independent microservices, create independent teams with end-to-end ownership. This is the principle behind *product teams* and the *Team Topologies* methodology.

## Concrete examples

**Amazon**: the two-pizza teams architecture (5-8 person teams, autonomous and responsible for an end-to-end service) produced AWS, a collection of independent services with clean APIs. This is not an architectural accident; it directly reflects the organisational structure.

**Monolith → microservices**: companies that try to decompose a monolith without restructuring their teams produce "distributed monoliths", the worst of both worlds. The architecture won't change if the teams don't change.

**Bureaucracy**: an organisation with many hierarchical layers and slow validation processes will produce systems that are slow to deploy, with many dependencies and long release cycles.

> Want to change your architecture? Start by changing your teams.
