---
layout: page
permalink: /rawfeed-jekyll/changelog/
---

{%- assign = tag = "/rawfeed-jekyll/releases/tag/" | prepend: "https://github.com/rawfeed" -%}

# Changelog - `rawfeed-jekyll`

All important changes to this project are listed here.

<!-- ## [0.2.0] - 2025-10-xx

### Added

Big update!!!

- Several bugs have been fixed, such as spacing inconsistencies and misapplied fonts.
- Several features have been added, including: a new font, site options now in the
**_data/options.yml** file, new commands, a new **pixel** layout, an image gallery, and many others.

### Bugfix

- HTML overflow fix

### Changed

- Replacing Gulp with Npm tasks (https://github.com/rawfeed/jekyll/releases/tag/v0.1.4) -->

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

## [[0.1.3]({{ tag }}/v0.1.3){:target="_blank"}]

**Released on: 2025-10-14**

### Bugfix

- Bug fixes in the website style.

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

## [[0.1.1]({{ tag }}/v0.1.1){:target="_blank"}]

**Released on: 2025-10-12**

### Bugfix

- CRUCIAL! Fixing "relative_url" error for url with baseurl.
  When using site with baseurl in _config.yml, all menu URLs and other files pointed to the wrong
  location. This release fixed this crucial bug.

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
