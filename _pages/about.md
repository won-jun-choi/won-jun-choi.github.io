---
layout: single
permalink: /
title: "Wonjun Choi"
excerpt: "Ph.D. candidate in Economics at Emory University."
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

<p class="intro-affiliation">Department of Economics · Emory University</p>

**I am on the 2026–2027 academic job market.**

I am a Ph.D. candidate in Economics at Emory University, with an expected graduation date of Spring 2027. My fields are econometrics theory, causal inference, and machine learning.

<div class="profile-actions">
  <a class="btn btn--primary" href="{{ '/files/CV.pdf' | relative_url }}">Download CV <span class="button-format">PDF</span></a>
  <a class="btn btn--inverse" href="mailto:{{ site.author.email }}">Contact</a>
</div>

## Research fields

<ul class="research-fields">
{% for field in site.data.research.fields %}
  <li>{{ field }}</li>
{% endfor %}
</ul>

## Job Market Paper

<div class="featured-paper">
  <h3><a href="{{ '/research/#job-market-paper' | relative_url }}">{{ site.data.research.job_market_paper.title }}</a></h3>
  <p>{{ site.data.research.job_market_paper.abstract }}</p>
  <a class="text-link" href="{{ '/research/' | relative_url }}">Research and work in progress <span aria-hidden="true">→</span></a>
</div>
