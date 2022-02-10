---
title: Page Title Plugin
published: true
lang: en
position: 100
---

# `page-title` Plugin

<div class="docs-link_table">
  <a class="homepage" href="https://github.com/pjlamb12/scully-plugin-page-title"></a>
  <a class="repository" href="https://github.com/pjlamb12/scully-plugin-page-title"></a>
</div>

## Overview

The purpose of the Scully Page Title plugin is to replace a page's title with whatever is provided on the route data. For blog posts, this could be the title of the blog post. This will help with SEO on blog posts and pages in your application.

## Features

- ✅ Replaces page title with the title from the route data
- ✅ Improves site SEO

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [FAQ](#faq)

## Installation

### NPM

`npm install scully-plugin-page-title --save-dev`

### Yarn

`yarn add scully-plugin-page-title --dev`

## Usage

Render plugins get access to information about the route, and the plugin looks for the title in the following locations in order:

- `route.title`
- `route.data.title`
- `route.pageTitle`
- `route.data.pageTitle`
- `route.page_title`
- `route.data.page_title`

> If the title is set in the frontmatter of a markdown file, the attribute shows up on `route.data`.

To use this plugin, you need to just require the package inside the Scully `config.ts` for your project, i.e. `scully.your-project-name.config.ts`. After requiring the plugin, add it to the `defaultPostRenderers` array for the site:

```ts
// scully.your-project-name.config.ts
require('scully-plugin-page-title');

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'your-project-name',
  outDir: './dist/static',
  routes: {},
  defaultPostRenderers: ['changeTitlePlugin']
};
```

If you only want it to be added to some routes, add it like this:

```ts
// scully.your-project-name.config.ts
require('scully-plugin-page-title');

export const config: ScullyConfig = {
  ...
  routes: {
    '/blog/:slug': {
      type: 'contentFolder',
      slug: {
        folder: './blog'
      },
      postRenderers: ['changeTitlePlugin']
    }
  }
  ...
};
```

That's all it takes for the plugin to be included and run on the pages in your app.
