---
title: "Building Fast Sites with Astro"
description: "Why I chose Astro for my portfolio and what makes it a great choice for content-focused sites."
pubDate: "2024-02-20"
tags: ["astro", "web", "performance"]
draft: false
---

When I set out to rebuild my portfolio, I had a few hard requirements: it had to be fast, easy to maintain, and ship zero unnecessary JavaScript to the browser. After evaluating options, I landed on [Astro](https://astro.build).

## What makes Astro different

Most JavaScript frameworks send a full application bundle to the browser, even for mostly-static content. Astro flips this: it renders to HTML at build time and ships **zero JS by default**. You opt into interactivity only where you need it.

For a portfolio site — which is 95% static content — this is the right model.

## The result

The site scores 100 on Lighthouse performance, loads in under 1 second on a slow 3G connection, and the entire bundle is under 50kB. Not because I spent hours optimizing, but because Astro's defaults are already excellent.

## Should you use it?

If your site is content-focused (portfolio, blog, docs, marketing), yes. If you need rich client-side interactivity (dashboards, complex apps), you'd be better served by a full framework.

For everything in between, Astro's [islands architecture](https://docs.astro.build/en/concepts/islands/) lets you mix and match.
