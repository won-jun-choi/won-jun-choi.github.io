---
layout: single
title: "Research"
permalink: /research/
author_profile: true
redirect_from:
  - /publications/
---

## Job Market Paper {#job-market-paper}

### {{ site.data.research.job_market_paper.title }}

{{ site.data.research.job_market_paper.abstract }}

## Work in Progress

{% for paper in site.data.research.work_in_progress %}
### {{ paper.title }}

<p class="entry-meta">with {{ paper.coauthors | join: ' and ' }}</p>

{{ paper.description }}

{% endfor %}
