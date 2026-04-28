---
layout: illustration
title: "Chesterton's Fence"
slug: cloture-chesterton
category: "Epistemology"
tagline: "Don't remove what you don't yet understand."
description: "Principle formulated by G. K. Chesterton in 1929: before removing an existing rule or structure, you must understand why it was put in place."
lang: en
ref: illustration-cloture-chesterton
flag: 🇬🇧
permalink: /en/illustrations/cloture-chesterton/
---

## Definition

**Chesterton's Fence** is a principle of intellectual caution formulated by G. K. Chesterton in his essay *The Thing* (1929):

> "In the matter of reforming things, as distinct from deforming them, there is one plain and simple principle; a principle which will probably be called a paradox. There exists in such a case a certain institution or law; let us say, for the sake of simplicity, a fence or gate erected across a road. The more modern type of reformer goes gaily up to it and says, 'I don't see the use of this; let us clear it away.' To which the more intelligent type of reformer will do well to answer: 'If you don't see the use of it, I certainly won't let you clear it away. Go away and think. Then, when you can come back and tell me that you do see the use of it, I may allow you to destroy it.'"

The rule is simple: **never remove something before understanding why it exists**. What you perceive as useless or obsolete may have a reason you cannot yet see.

## Why it matters

This principle counters blind reform and "optimisation" without understanding:

**In engineering**: removing "dead" code without understanding why it was written can eliminate protection against a rare but critical edge case. The lint rule ignored for 2 years may have been guarding against a real vulnerability.

**In management**: abolishing a weekly meeting perceived as useless can break an informal coordination channel that only becomes visible after it's gone.

**In policy**: dismantling a regulation without understanding its historical origin can reactivate exactly the problem it was designed to contain.

**In software architecture**: refactoring "that absurd layer of abstraction" may reveal, too late, that it was absorbing undocumented performance or concurrency problems.

Chesterton's Fence applies especially to complex, evolving, or legacy systems, where organisational memory is fragmented and original reasons forgotten.

## Concrete examples

**The incomprehensible business rule**: every mature company has its "absurd rules", strange deadlines, redundant validations, odd formats. Often they codify a legal regulation, a past fraud, or a serious customer incident. Removing them without investigation can be costly.

**The "weird" unit test**: the test that checks something apparently obvious was probably written after a production bug. Deleting it because it "tests trivial code" is dangerous.

**Banking regulation**: rules on activity separation, mandatory reserves, exposure limits: each was born from a financial crisis. Relaxing them without understanding their origin can recreate exactly the same crisis.

**Counter-measures**: document the rationale behind important rules and decisions ("Architecture Decision Records" in dev), keep a history of incidents that motivated each constraint, and systematically ask "why?" before any "we could simplify this."

> The best reason to keep something is to understand why you needed it in the first place.
