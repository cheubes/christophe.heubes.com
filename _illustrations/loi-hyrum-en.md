---
layout: illustration
title: "Hyrum's Law"
slug: loi-hyrum
category: "Engineering & Technology"
tagline: "With enough users, all observable behavior becomes a dependency."
description: "Law stated by Hyrum Wright (Google engineer): regardless of what the documented interface says, users will eventually depend on every observable behavior of a system."
lang: en
ref: illustration-loi-hyrum
flag: 🇬🇧
permalink: /en/illustrations/loi-hyrum/
---

## Definition

**Hyrum's Law** (or the *Law of Implicit Interfaces*) expresses an uncomfortable truth for any engineer: once a system has enough users, the documented interface becomes secondary. What matters is the full set of behaviors that users have observed, including bugs, side effects, and unintentional behaviors.

If you fix a bug that nobody was supposed to use, you will break someone. If you optimize a 200ms latency to 50ms, you will break someone who relied on that delay to synchronize their calls. Every observable behavior eventually becomes an implicit dependency.

## Why it matters

This law has profound implications for API design and large-scale systems. It explains why major tech companies (Google, Amazon, Stripe) invest heavily in backward compatibility: not out of conservatism, but because at their scale, every visible change breaks someone.

It also argues for practices like strict API versioning, long deprecation periods, and proactive communication about changes.

## Concrete examples

**Google and APIs**: unintentional behaviors were maintained for years because thousands of developers depended on them.

**Python 2 to Python 3**: the migration took over a decade due to dependencies on "accidental" Python 2 behaviors.

**JSON field capitalization**: an internal service fixes it, and dozens of consumers doing case-sensitive comparisons break in production.

**Performance bug as feature**: users calibrated their timeouts on the "broken" response time. Fixing it breaks them.
