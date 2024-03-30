---
layout: post
title:  "What makes a good test?"
description: "General guidelines for tests"
date: 2024-03-27
---

I started writing a post about testing methodology. This post was getting away from me, it turns out I have _a lot_ of opinions on tests. I've decided to break it into smaller more consumable posts about specific aspects of testing with this first one being a much more general checklist I expect from my tests.

## What makes a good test

- Fails when your system does not behave the way it should do
- Passes when your system behaves as it is supposed to
- Tells you what went wrong
- Tells you _what_ your system does

## What makes a bad test

- Produces false positives and false negatives
- Is flaky
- Tells you _how_ you have written your system
- Tells you _something_ went wrong, but not what it was
- Is not deterministic

I'll link below to a series of follow up posts expanding on the specifics of the above as I write them. I think the first will be called "Letting your tests make a Mockery of you" so I'm sure we can all guess the subject matter.
