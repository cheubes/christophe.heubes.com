---
layout: illustration
title: "Tesler's Law"
slug: loi-tesler
category: "Engineering & Technology"
tagline: "Complexity is incompressible: it shifts, it doesn't disappear."
description: "Law formulated by Larry Tesler (Xerox, Apple): every system has an irreducible amount of complexity that cannot be eliminated, only shifted between user and developer."
lang: en
ref: illustration-loi-tesler
flag: 🇬🇧
permalink: /en/illustrations/loi-tesler/
---

## Definition

**Tesler's Law**, also known as the *Law of Conservation of Complexity*, was formulated by Larry Tesler, an engineer at Xerox PARC and later Apple in the 1980s. His original formulation:

> "Every application must have an inherent amount of irreducible complexity. The only question is: who will have to deal with it: the user, the system developer, or the programmer?"

The complexity of a system never disappears. It only **shifts**: if you hide it from the user, it ends up in the code, the configuration, the maintenance, or the infrastructure. Simplifying an interface means absorbing complexity on the developer side: not eliminating it.

## Why it matters

This law has profound implications for design, engineering, and management:

**In UX**: a simple "Send" button doesn't mean sending is simple. Data validation, error handling, conflict resolution: all of it exists somewhere, managed by the system rather than the user.

**In development**: "zero-configuration" frameworks move complexity from configuration to convention. High-level abstractions hide low-level complexity. Nothing is free.

**In organisations**: a team that "simplifies" its process often transfers the burden to another team, another department, or a customer.

**The limits of simplification**: you cannot simplify indefinitely. There is a threshold below which further reducing visible complexity creates hidden complexity that is more dangerous, the kind the user doesn't see until it's too late.

## Concrete examples

**GPS navigation**: the "enter a destination" interface is simple. But behind it, route planning, map updates, and real-time traffic management are enormously complex: absorbed by the system.

**No-code platforms**: they allow building apps without writing code. But the moment a need falls outside the template, complexity resurfaces, more opaque and harder to manage than raw code.

**All-inclusive insurance**: a simple, readable policy often conceals actuarial and legal machinery of extreme complexity. Visible simplicity is work absorbed by the provider.

**Counter-measures**: identify where complexity is absorbed before simplifying, don't confuse "simple to use" with "simple to build," and explicitly document hidden complexity for future maintainers.

> Simplifying the interface means complicating the engine. The total doesn't change.
