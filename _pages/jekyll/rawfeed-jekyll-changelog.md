---
layout: page
title: "Changelog - rawfeed-jekyll"
permalink: /rawfeed-jekyll/changelog/
---

{%- assign tag = "/rawfeed-jekyll/releases/tag" | prepend: "https://github.com/rawfeed" -%}

# Changelog - `rawfeed-jekyll`

All important changes to this project are listed here.

## [[1.0.1]({{ tag }}/v1.0.1){:target="_blank"}]

**Released on: 2026-06-25**

### Bug

- fix(blog): zero-pad day in search result date format
- fix(blog): search results showing undefined date and link not navigating
- ci: remove Ruby 3.2 from test matrix (EOL, io-event requires >= 3.3)

### Chore

- update ci.yml
- pass RAWFEED_DEV_PATH as direct environment variable to ruby/setup-ruby step
- disable github-pages.yml

---

## [[1.0.0]({{ tag }}/v1.0.0){:target="_blank"}]

**Released on: 2026-06-24**

### Feature

- Add RSpec test suite with 61 examples and CI coverage
- Add CI workflows for GitHub Actions and GitLab CI (modular)
- Add `rawfeed build` and `rawfeed serve` commands with Jekyll options passthrough
- Add `rawfeed backup` command with `--destination` and `--append` options
- Add `rawfeed new . --force` to create site in current directory
- Add image minification with webp and avif format conversion
- Switch blog search from simple-jekyll-search to Fuse.js
- Add option to enable/disable TOC in post/page front matter
- Display post tags inline without list markers
- Add robots.txt in dev and gem builds
- Add dynamic text behind YAML configuration
- Add CONTRIBUTING.md, bug report template, PR template
- Add GitHub contribution templates, release workflow, and changelog generator
- Add gem http_parser.rb in Gemfile

### Refactor

- Migrate from Node.js to Ruby for minification and cleaning (remove npm dependency)
- Reorganize `_data` files into 3-level structure (`_data/screen/`)
- Rename `header` to `navbar`; rename `options.yml` to `generic.yml`
- Move all Jekyll dependencies from gemspec to Gemfile
- Replace ruby-vips with mini_magick for image processing
- Add rubyzip as runtime dependency
- Modularize library structure into logical subdirectories
- Change all comments from Portuguese to English
- Update project slogan

### Bug

- fix(ruby): guard pub plugin against nil theme and improve image minifier security
  - pub.rb: use safe navigation (&.) on site.theme with fallback to site.source
  - image_minifier.rb: add shell_escape helper to prevent shell injection via filenames
- fix(ruby): resolve undefined constants, unchecked errors, and backup robustness
  - post.rb: use Rawfeed::CONFIG['DRAFTS_DIR'] instead of undefined DRAFTS_DIR constant
  - utils.rb: narrow rescue to ArgumentError instead of bare rescue
  - tools.rb: check system() exit status and print error on failure
  - backup.rb: replace colons with hyphens in zip filename for Windows compat
- fix(include): load Chart.js script only once to prevent duplicate script tags
- fix(layout): use bracket notation for CSP hyphen keys; correct update_date variable
- fix(js): add null guards across multiple scripts to prevent TypeError
- fix(core): prevent HTML minifier from collapsing whitespace inside pre, code, textarea, svg
- fix(datelang): correct path error; fix invalid date format `%b %d, %Y`
- fix: README.md and ci.yml using wrong command (Jekyll instead of rawfeed)
- fix: add missing front matter to pixel posts
- fix: remove whitespace between menu-wrap-link and menu items
- fix: resolve rubyzip loading error in Jekyll theme initialization
- fix: simplify image minification using ImageMagick system commands
- fix: prevent nested folder creation with `rawfeed new . --force`
- fix(robots): rename robots.tx to robots.txt for proper crawler recognition
- fix: correct GEM_ROOT and template path logic in Installer
- fix: correct spelling errors across multiple files
- fix: remove reading_time remnants after deprecation
- fix: remove date url search
- fix: various CLI command corrections

---

## [[0.3.1]({{ tag }}/v0.3.1){:target="_blank"}]

**Released on: 2026-04-04**

## Bug

- Correcting relative URL error

---

## [[0.3.0]({{ tag }}/v0.3.0){:target="_blank"}]

**Released on: 2026-04-04**

## Feature

- Adding a donation page.
- Improving the Table of Contents for posts and pages. Now it's floating!
- New script example for a contact page in Google Apps Script.

## Bug

- SEO errors have been corrected.

---

## [[0.2.11]({{ tag }}/v0.2.11){:target="_blank"}]

**Released on: 2026-03-19**

## Bug

- fix: changing CORS to text/plain instead of json

---

## [[0.2.10]({{ tag }}/v0.2.10){:target="_blank"}]

**Released on: 2026-03-18**

## Bug

- Correcting a bug in the Google Analytics 4 script and adding cookies to the 'config'.

---

## [[0.2.9]({{ tag }}/v0.2.9){:target="_blank"}]

**Released on: 2026-03-14**

## Update

- SEO improvements
- Upgrading to Google Analytics 4

---

## [[0.2.8]({{ tag }}/v0.2.8){:target="_blank"}]

**Released on: 2025-11-05**

## Bugfix

- Correcting error in footer that was overlapping the page

---

## [[0.2.7]({{ tag }}/v0.2.7){:target="_blank"}]

**Released on: 2025-10-31**

## Bugfix

- Set default value for margin-bottom ([#5](https://github.com/rawfeed/rawfeed-jekyll/issues/6))
- Correcting relative URL error in the `pub` layout.

---

## [[0.2.6]({{ tag }}/v0.2.6){:target="_blank"}]

**Released on: 2025-10-31**

## Bugfix

- Fix: Fixes the bug where the pub.html layout is not found in the theme. ([#5](https://github.com/rawfeed/rawfeed-jekyll/issues/5))

---

## [[0.2.5]({{ tag }}/v0.2.5){:target="_blank"}]

**Released on: 2025-10-31**

### Added

- Add new feature to `/pub/` ([#5](https://github.com/rawfeed/rawfeed-jekyll/issues/5))

---

## [[0.2.4]({{ tag }}/v0.2.4){:target="_blank"}]

**Released on: 2025-10-28**

### Added

- New functionality for customizing styles. Now you can create an `assets/css/custom.css` file
  to customize it. See [documentation](https://rawfeed.github.io/rawfeed-jekyll#style)

### Changed

- Changing the Javascripts to fallback.

---

## [[0.2.3]({{ tag }}/v0.2.3){:target="_blank"}]

**Released on: 2025-10-27**

### Bugfix

- It's loading the `_config.yml` file instead of `options.yml` in the plugin `reading_time`

---

## [[0.2.2]({{ tag }}/v0.2.2){:target="_blank"}]

**Released on: 2025-10-27**

### Bugfix

- It's loading the `_config.yml` file instead of `options.yml` in the plugin `datelang`

---

## [[0.2.1]({{ tag }}/v0.2.1){:target="_blank"}]

**Released on: 2025-10-26**

### Bugfix

- Critical error! Correcting URL error for images on the pixels page.

---

## [[0.2.0]({{ tag }}/v0.2.0){:target="_blank"}]

**Released on: 2025-10-26**

### Added

Big update!!!

- Several bugs have been fixed, such as spacing inconsistencies and misapplied fonts.
- Several features have been added, including: a new font, site options now in the
**_data/options.yml** file, new commands, a new **pixel** layout, an image gallery, and many others.

### Bugfix

- HTML overflow fix

### Changed

- Replacing Gulp with Npm tasks

---

## [[0.1.4]({{ tag }}/v0.1.4){:target="_blank"}]

**Released on: 2025-10-15**

### Added

- Adding copyright since and current date (year) automatically
- Site security improvements with `CSP` tag
- Color contrast improvement (accessibility)
- Adding an "in_menu" option to pages. Now you can create pages without it being in the menu.
- Adding emoji option to menu

### Bugfix

- Bug fixes in the website style.
- Correction on the resume page in print mode.
- Improving footer inconsistency on mobile

---

## [[0.1.3]({{ tag }}/v0.1.3){:target="_blank"}]

**Released on: 2025-10-14**

### Bugfix

- Bug fixes in the website style.

---

## [[0.1.2]({{ tag }}/v0.1.2){:target="_blank"}]

**Released on: 2025-10-14**

### Bugfix

- Fixing video include url bug
- Markdown errors on pages have been fixed. Some styles were missing.

### Added

#### Sections to the Resume: "Certificate" add "Markdown text"

In the `_data/resume.yml` file new sections added:

```yml
# section: [Certificates]
certificates:
  enable: true
  caption: Certificates
  section:
    - course: LPIC-2
      certificate: https://github.com/williamcanin/rawfeed
      period:
        year: 2020
        hours: 20 hours
      company:
        name: Linux Professional Institute
        site: https://www.lpi.org

# section: [Markdown]
markdown:
  enable: true
  caption: Notes
  content: |
    - I led a class of **Computer Engineering** students in the modern **AI course**.
    It was over **170 hours** of classes.
```

#### Datelang plugin

Adding plugin to display date according to the applied language.

In the `_config.yml` file you now need the **section: [datelang]**. Add this code:

```yml
# section: [datelang]
datelang:
  format: "%b %-d, %Y"
  lang: "en_US" # en_US | pt_PT | jp_JP | ch_CH | es_ES | fr_FR | it_IT | de_DE | ru_RU
```

#### Reading time for posts and page

Posts and pages now have a reading time warning. It can be enabled or disabled completely
in `_config.yml`. On a page level, the control is unique; each page will have the `reading_time:`
option. The **Reading time** section in `_config.yml` looks like this:

```yml
# section: [Reading time]
reading_time:
  enable: true
  words_per_minute: 180
  message: ["Read this post in approximately", "Read this post in less than"]
  minutes_label: ["minute", "minutes"]
```

---

## [[0.1.1]({{ tag }}/v0.1.1){:target="_blank"}]

**Released on: 2025-10-12**

### Bugfix

- CRUCIAL! Fixing "relative_url" error for url with baseurl.
  When using site with baseurl in _config.yml, all menu URLs and other files pointed to the wrong
  location. This release fixed this crucial bug.

---

## [[0.1.0]({{ tag }}/v0.1.0){:target="_blank"}]

**Released on: 2025-10-12**

### Added

- One-command installation (via Unix);
- A terminal emulator on the home page with commands;
- Commands for manipulating page headers, posts and drafts in markdown;
- Smart floating TOC in posts;
- Theme change: light/dark;
- Chart in posts;
- Stylized Markdown;
- Bootstrap 5
- Avatar opens in modal with inversion animation for each different theme (light/dark);
- Enables and Disables weblog;
- Home page with about or blog, you decide with one command;
- A quick search field on the weblog using keyword and date;
- Weblog pagination;
- YouTube video in weblog posts;
- Social network link on the home page or by command in the terminal;
- Feed in weblog;
- SEO-rich website;
- Entire site minified in build: html, images, css and javascript.
- Maintenance page;
- Comments on blog posts with Giscus or Disqus (only in production [jekyll build]);
- Google Analytics (only in production [jekyll build]);
