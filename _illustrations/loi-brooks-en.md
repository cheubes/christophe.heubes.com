---
layout: illustration
title: "Brooks's Law"
slug: loi-brooks
category: "Engineering & Technology"
tagline: "Adding developers to a late project makes it later."
description: "Law by Fred Brooks (The Mythical Man-Month, 1975): adding human resources to a late software project delays it further, because of the exponential cost of communication."
lang: en
ref: illustration-loi-brooks
---

## Definition

**Brooks's Law** is counterintuitive at first glance: one would expect that adding hands speeds up the work. But on a late software project, every new person must be trained, onboarded, and immediately generates additional exchanges with all the others.

The number of communication channels grows as **n(n−1)/2**: 3 people → 3 channels, 5 people → 10 channels, 8 people → 28 channels. Each new channel is a source of misunderstandings, meetings, and lost time. Coordination quickly outweighs any productivity gain.

## Why it matters

This law explains why the "firefighters" sent to a troubled project often make things worse. It argues for small, stable, well-bounded teams rather than mass reinforcement at the end of a project.

It also has profound implications for software architecture: Conway's Law predicts that systems mirror the communication structure of the teams that build them, hence the value of structuring teams the way you want to structure the system.

## Concrete examples

**Late web project**: adding 4 developers in the last week results in delivery with 4 additional weeks of delay.

**System migrations**: large SAP or ERP projects are notorious for overruns despite growing headcount.

**Resource escalation**: in consulting, more stakeholders means more coordination meetings and less code written.
