---
layout: page
category: product
title: "Jekyll Theme"
repo_name: "`rawfeed-jekyll`"
description: A raw Jekyll theme for minimalists
src_url: https://github.com/rawfeed/rawfeed-jekyll
badge:
  url: https://badge.fury.io/rb/rawfeed
  img-src: https://badge.fury.io/rb/rawfeed.svg?icon=si%3Arubygems
  alt: Gem Version
  height: 18
btn:
  preview:
    title: Theme Preview
    url: https://rawfeed.github.io/rawfeed-jekyll/preview/
permalink: /rawfeed-jekyll/
---

# Requirements

| Required | Version   | How to verify  | How to install                                       |
| -------- | --------- | -------------- | ---------------------------------------------------- |
| Git      | >= 2      | `git -v`       | [Git](http://git-scm.com/){:target="_blank"}         |
| Ruby     | >= 3.0.0  | `ruby -v`      | [Ruby](https://www.ruby-lang.org){:target="_blank"}  |
| Gem      | >= 3.0    | `gem -v`       | **Ruby** contains **Gem**                            |
| Bundler  | >= 2.0    | `bundler -v`   | `gem install bundler`                                |

# Features

- One-command installation via Ruby gem;
- A terminal emulator on the home page with interactive commands;
- Full CLI (`rawfeed`) for managing posts, pages, pixels, and site settings;
- Smart floating TOC in posts;
- Theme change: light/dark;
- Chart in posts using Chart.js;
- Stylized Markdown;
- Avatar with flip animation and modal preview for each theme (light/dark);
- Enable/disable weblog with one command;
- Home page with about or blog — you decide with one command;
- Quick search on weblog using keyword (powered by Fuse.js);
- Weblog pagination (using `jekyll-paginate-v2`);
- YouTube video embedding in posts;
- Social network links on the home page or via terminal command;
- Feed in weblog;
- SEO-rich website;
- Entire site minified in build: html, images, css and javascript;
- Maintenance page;
- Comments on blog posts with Giscus or Disqus (only in production mode);
- Google Analytics (only in production mode);
- Pixels page (image gallery);
- Resume page with print support;
- Donation page with QR codes;
- Contact page with Google Apps Script integration and reCAPTCHA support;
- Backup your entire site with one command;
- and more [here](#vendors)

# Installation

Run the commands below:

```shell
git clone --depth=1 https://github.com/rawfeed/rawfeed-jekyll-starter.git "my-site"
cd my-site
rm -rf .git
bundle install
```

# Usage

After installation, use the **rawfeed** CLI to manage your site. Run the command below to see all available commands:

```shell
bundle exec rawfeed help
```

Some common commands:

| Command | Description |
| ------- | ----------- |
| `rawfeed serve` | Start the development server |
| `rawfeed build` | Build the site for production |
| `rawfeed create:draft` | Create a new draft post |
| `rawfeed create:page` | Create a new page |
| `rawfeed create:pixel` | Create a new pixel post |
| `rawfeed post:draft` | Promote a draft to a published post |
| `rawfeed home:about` | Set home page to about |
| `rawfeed home:blog` | Set home page to weblog |
| `rawfeed blog:enable` / `rawfeed blog:disable` | Enable or disable the weblog |
| `rawfeed pixels:enable` / `rawfeed pixels:disable` | Enable or disable pixels |
| `rawfeed minify` | Minify HTML, images and JS in `_site/` |
| `rawfeed backup` | Create a backup of your site |
| `rawfeed clean --cache` / `rawfeed clean --all` | Clean Jekyll cache or entire project |

# Settings

Configuration is organized in YAML files under `_data/`. General settings are in `_data/generic.yml`, and page-specific settings are in `_data/screen/` (e.g. `navbar.yml`, `blog.yml`, `footer.yml`, `home.yml`, etc.).

## Avatar and Favicon

**(1)** - Create the folder directory: `assets/images`.

**(2)** - Place your website's images (.jpg or .png) inside this `assets/images` directory.

> Recommendation: Use a 4x4 image.

**(3)** - In the `_data/screen/navbar.yml` file, configure the avatar images:

```yml
avatar:
  open: true
  flip: true
  # note: the image (.jpg|.png) will be searched in the directory: assets/images/
  image:
    front:
      light: your_image_light.png
      dark: your_image_dark.png
    back: your_image_back.png
```

For the favicon, place your favicon (.png) in the `assets/images` directory.

## Style

If you want to change the MAIN colors of **rawfeed-jekyll**, you can also do that by simply creating the
`assets/css/custom.css` file and adding the structure below for the **light** and **dark** themes:

```css
:root[data-theme="light"] {
  --bg-color: #c2c2c2 !important;
  --primary-color: blue !important;
  --text-color: black !important;
}

:root[data-theme="dark"] {
  --bg-color: #222222 !important;
  --primary-color: cyan !important;
  --text-color: white !important;
}
```

> Note: Don't forget the `!important`

## Posts

Creating a blog post is very easy, first you create a draft using the CLI:

```shell
bundle exec rawfeed create:draft
```

After you finish writing, promote it to a published post:

```shell
bundle exec rawfeed post:draft
```

> Note: If you start the server (`rawfeed serve`), drafts will appear in posts, but they will not
go into production mode (`rawfeed build`).

**Comments:**

Post comments use [Giscus](https://giscus.app){:target="_blank"} or [Disqus](https://disqus.com){:target="_blank"},
configurable in the `_data/screen/blog.yml` file under the `comments` section. Whichever one you choose,
you must set the appropriate provider and credentials there, and each post must have `comments: true`
in its front matter.

To learn more about both, such as how to set them up, visit [Giscus](https://giscus.app){:target="_blank"} or
[Disqus](https://disqus.com){:target="_blank"}.

# Vendors

[ Technologies and Services Used ]

This [Jekyll](https://jekyllrb.com){:target="_blank"} theme was developed using the following services and
technologies, to whom we would like to thank for their work and availability:

| Vendor | Link | Use in Theme |
| -------- | ------- | ------- |
| **Bootstrap 5** | [https://getbootstrap.com](https://getbootstrap.com/){:target="_blank"} | Framework for responsive design and base components |
| **Font Awesome** | [https://fontawesome.com](https://fontawesome.com/){:target="_blank"} | Providing vector icons |
| **Google Fonts** | [https://fonts.google.com](https://fonts.google.com/){:target="_blank"} | Styling and appearance of texts (custom fonts) |
| **Google Apps Script** | [https://developers.google.com/apps-script](https://developers.google.com/apps-script){:target="_blank"} | Email sending and form processing functionality (Contact page). |
| **Google reCAPTCHA** | [https://www.google.com/recaptcha/about/](https://www.google.com/recaptcha/about/){:target="_blank"} | Form spam protection (if implemented). |
| **Giscus** | [https://giscus.app](https://giscus.app/){:target="_blank"} | *GitHub Discussions-based commenting system option* |
| **Disqus** | [https://disqus.com](https://disqus.com/){:target="_blank"} | *Comment system option* |

## Donation

Click on the image below to be redirected the donation forms:

<div class="donate">
  <a class="not_arrow_blank" href="https://williamcanin.github.io/donate/" target="_blank">
    <img width="160" height="100" src="https://raw.githubusercontent.com/williamcanin/donations/main/svg/donate/donate-hand.svg" alt="Donations"/>
  </a>
</div>

# Changelog

See all version changes [here](/rawfeed-jekyll/changelog/)

# License

The theme is available as open source under the terms of [this License](/rawfeed-jekyll/license/).
