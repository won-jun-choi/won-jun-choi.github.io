# Wonjun Choi's academic website

Source for <https://won-jun-choi.github.io/>, built with [Academic Pages](https://academicpages.github.io/) and hosted by GitHub Pages.

## Content

- `_pages/about.md`: home page
- `_pages/research.md`: job market paper and work in progress
- `_pages/teaching.html`: teaching experience
- `_pages/cv.html`: web CV
- `_data/research.yml`, `_data/teaching.yml`, `_data/cv.yml`: shared CV information
- `files/CV.pdf`: downloadable CV
- `_config.yml`: identity, contact links, and site settings
- `_sass/_custom.scss`: personal style refinements

Content was updated from the CV supplied on October 6, 2026. The PDF is copied without modification. No paper download links are published until paper files are supplied.

## Preview

With a supported Ruby version and Bundler installed:

```sh
bundle install
bundle exec jekyll serve --host 127.0.0.1
```

Open <http://127.0.0.1:4000/>. For a production check, run `JEKYLL_ENV=production bundle exec jekyll build --safe`.

## Template provenance

The framework directories (`_includes`, `_layouts`, `_sass`, and `assets`) were updated from `academicpages/academicpages.github.io` at commit `c089e79c7bce7ff453de525bc0bb80c261400cf6`. Demonstration publications, talks, teaching, blog posts, and files were removed. Academic Pages and Minimal Mistakes attribution is retained in the site footer and MIT license.
