---
title: RSS Plugin
published: true
lang: en
navlist_textFormat_none: true
---

# `rss` Plugin <!-- omit in toc -->

<div class="docs-link_table">
  <a class="homepage" href="https://github.com/notiz-dev/scully-plugins"></a>
  <a class="repository" href="https://github.com/notiz-dev/scully-plugins/tree/master/plugins/rss"></a>
</div>

<div class="docs-toc"></div>

- [Overview](#overview)
- [Installation](#installation)
- [Usage](#usage)

## Overview

`scully-plugin-rss` is a `postRenderer` plugin for [Scully](http://scully.io/) adding creating a rss feed from your content using [feed](https://github.com/jpmonette/feed) and [showdown](https://github.com/showdownjs/showdown).

The rss feed is available at:

- your-domain.de/feed.json
- your-domain.de/feed.atom
- your-domain.de/feed.xml

## Installation

To install this plugin with `npm` run

```
$ npm install @notiz/scully-plugin-rss --save-dev
```

## Usage

Add the plugin to the `defaultPostRenderers` in your `scully.config`:

```js
require('@notiz/scully-plugin-rss');

exports.config = {
  projectRoot: './src/app',
  defaultPostRenderers: ['rss'],
  routes: {},
};
```

If you want to use the plugin for a specific route do:

```js
require('@notiz/scully-plugin-rss');

exports.config = {
  ...
  routes: {
    '/blog/:slug': {
      type: 'contentFolder',
      slug: {
        folder: './content/blog'
      },
      postRenderers: ['rss']
    }
  }
  ...
};
```

Create a `rss.config.json` in your root with the following properties:

```json
{
  "title": "Your Title",
  "description": "Page description",
  "id": "https://your-domain.com",
  "link": "https://your-domain.com",
  "language": "en",
  "image": "https://your-domain.com/featured.png",
  "favicon": "https://you-domain.com/favicon.png",
  "copyright": "2020 your-domain.com",
  "generator": "Page description",
  "feedLinks": {
    "json": "https://your-domain.com/feed.json",
    "atom": "https://your-domain.com/feed.atom"
  },
  "outDir": "./dist/static",
  "categories": ["Categories", "of", "your", "choice"]
}
```

Each RSS Feed item attributes are currently assigned by the following scully route attributes.

| RSS Feed Item | Scully Route                 |
| ------------- | ---------------------------- |
| `title`       | `title`                      |
| `id`          | `slug`                       |
| `link`        | Config Link + `slug`         |
| `description` | `description`                |
| `content`     | `articleHTML`                |
| `author`      | `authors`                    |
| `contributor` | `authors`                    |
| `date`        | `updatedAt` \| `publishedAt` |

Your content should have the following frontmatter in your scully content:

```
---
title: Martial Arts Training
description: Best Martial Arts Training
publishedAt: 2020-03-25T10:12:00.000Z
updatedAt: 2020-03-25T10:12:00.000Z
published: true
tags:
  - training
  - rss
authors:
  - Bruce Lee
---
```
