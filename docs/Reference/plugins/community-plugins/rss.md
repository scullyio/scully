---
title: RSS Plugin
published: true
lang: en
position: 100
---

# `rss` Plugin

<div class="docs-link_table">
  <a class="homepage" href="https://github.com/notiz-dev/scully-plugins"></a>
  <a class="repository" href="https://github.com/notiz-dev/scully-plugins/tree/master/plugins/rss"></a>
</div>

## Overview

`scully-plugin-rss` is a `routeDiscoveryDone` plugin for [Scully](http://scully.io/). A RSS Feed is created from your content using [feed](https://github.com/jpmonette/feed) and [showdown](https://github.com/showdownjs/showdown).

The rss feed is available at:

- your-domain.de/feed.json
- your-domain.de/feed.atom
- your-domain.de/feed.xml

To change the filename of the feed, use the `filename` attribute in your rss.config.json file, as seen below. The default value is feed, but you can change it to whatever you'd like.

## Installation

Install the RSS Feed plugin using the command

```bash
npm install @notiz/scully-plugin-rss --save-dev
```

> **Note**: `routeDiscoveryDone` plugin requires `@scullyio/scully` in version ^1.0.5 or above to [correctly parse](https://github.com/scullyio/scully/pull/1140) date values from markdown front matter.

## Usage

Import the plugin in the Scully config file `scully.app-name.config.ts`:

```ts
import { ScullyConfig } from '@scullyio/scully';
import '@notiz/scully-plugin-rss';

export const config: ScullyConfig = {
  projectRoot: './src/app',
  routes: {
    ...
  },
};
```

It will run on only routes that include `/blog` unless specified otherwise in the `rss.config.json` file. The order of the posts will be oldest first unless the `newestPostsFirst` option is set in the config.

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
  "filename": "feed",
  "feedLinks": {
    "atom": "https://your-domain.com/feed.atom",
    "json": "https://your-domain.com/feed.json",
    "xml": "https://your-domain.com/feed.xml"
  },
  "outDir": "./dist/static",
  "categories": ["Categories", "of", "your", "choice"],
  "blogPostRouteSlug": "/blog",
  "newestPostsFirst": true
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
