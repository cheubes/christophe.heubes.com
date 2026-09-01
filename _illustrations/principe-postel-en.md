---
layout: illustration
title: "Postel's Law"
slug: principe-postel
category: "Engineering & Technology"
tagline: "Be liberal in what you accept, conservative in what you send."
description: "Principle by Jon Postel (RFC 793, 1980): to ensure interoperability, a system must accept varied or imperfect inputs, but produce outputs that strictly conform to standards."
lang: en
ref: illustration-principe-postel
flag: 🇬🇧
permalink: /en/illustrations/principe-postel/
---

## Definition

**Postel's Law** (the *Robustness Principle*) was stated by Jon Postel in the TCP protocol specification in 1980. His original formulation: *"Be conservative in what you do, be liberal in what you accept from others."*

The idea is simple: for a network or system to be robust, implementations must tolerate others' imperfections (slightly different formats, missing fields, unexpected spacing) while emitting perfectly standard-compliant messages.

## Why it matters

This principle contributed to the extraordinary robustness of the Internet. Web browsers became champions of tolerance: they display malformed HTML, unknown attributes, incorrectly closed tags: without crashing. This permissiveness at input allowed the web to grow even with imperfect publishing tools.

However, the principle is also controversial: excessive tolerance at input can propagate malformed behaviors and make diagnosis difficult. Some engineers now advocate a stricter approach to force better discipline from emitters.

## Concrete examples

**Web browsers**: Chrome and Firefox display invalid HTML without error, liberal at input.

**HTTP servers**: they return strictly formatted responses per RFC, conservative at output.

**JSON parsers**: modern implementations accept trailing commas or comments, even though the JSON standard forbids them.

**Email clients**: they accept malformed emails at input, but only send RFC-compliant messages.
