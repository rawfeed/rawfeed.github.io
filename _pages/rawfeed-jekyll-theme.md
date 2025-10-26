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

| Required | Version | How to verify | How to install                    |
| -------- | ------- | ------------- | --------------------------------- |
| Git      | >= 2    | `git -v`      | [Git](http://git-scm.com/){:target="_blank"}        |
| Ruby     | >= 3.0  | `ruby -v`     | [Ruby](https://www.ruby-lang.org){:target="_blank"} |
| Gem      | >= 3.0  | `gem -v`      | **Ruby** contains **Gem**         |
| Bundler  | >= 2.0  | `bundler -v`  | `gem install bundler`             |
| Node.js  | >= 20   | `node -v`     | [Node.js](https://nodejs.org){:target="_blank"}      |
| Npm      | >= 9    | `npm -v`      | **NodeJS** contains **Npm**       |

# Features

- One-command installation (via Unix or PowerShell);
- A terminal emulator on the home page with commands;
- Commands for manipulating page headers, posts and drafts in markdown;
- Smart floating TOC in posts;
- Theme change: light/dark;
- Chart in posts;
- Stylized Markdown;
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
- Page of Pixels (Images)
- and more [here](#vendors)

# Installation

Run the command below:

```shell
git clone https://github.com/rawfeed/rawfeed-jekyll-starter.git "my-site"; cd my-site; rm -rf .git; npm install
```

# Usage

After installation, run the command below to see the **rawfeed** command menu:

```shell
npm run help
```

# Settings

## Avatar and Favicon

**(1)** - Create the folder directory: `assets/images`.

**(2)** - Place your website's images (.jpg or .png) inside this `assets/images` directory.

> Recommendation: Use a 4x4 image.

**(3)** - In the `_data/options.yml` file, in the `section: [avatar]`, change the value of "`avatar.image`"
to the name of your images. For example:

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

For the favicon, you can do the same: place your favicon (.png) in the `assets/images` directory.

## Posts

Creating a blog post is very easy, first you create a draft (`npm run create:draft`) and after you finish
the draft, you move it to the post with the command `npm run post:draft`.

> Note: If you start the server (`npm run serve`), drafts will appear in posts, but they will not
go into production mode (`npm run build`).

**Comments:**

Post comments use [Giscus](https://giscus.app){:target="_blank"} or [Disqus](https://disqus.com){:target="_blank"},
configurable in the `_data/options.yml` file under `section: [blog]`. Whichever one you choose,
you must set the appropriate settings in the `_config.yml` file under `section: [blog]`, and
each post must have `comments: true` set.

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
  <a href="https://github.com/williamcanin/donations/blob/main/README.md">
    <img width="160" height="100" src="https://raw.githubusercontent.com/williamcanin/donations/main/svg/donate/donate-hand.svg" alt="Donations"/>
  </a>
</div>

# Changelog

See all version changes [here](/rawfeed-jekyll/changelog/)

# License

The theme is available as open source under the terms of [this License](/rawfeed-jekyll/license/).
