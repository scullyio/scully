---
title: minifyHtml Plugin
published: true
lang: en
position: 100
---

# `minifyHtml` Plugin <!-- omit in toc -->

<div class="docs-link_table">
  <a class="repository" href="https://github.com/samvloeberghs/kwerri-oss/tree/master/projects/scully-plugin-minify-html"></a>
</div>

<div class="docs-toc"></div>

- [Overview](#overview)
- [Installation](#installation)
- [Usage](#usage)
  - [Configuring the `html-minifier` options](#configuring-the-html-minifier-options)

## Overview

This `postRenderer` plugin for Scully will minify the HTML of your prerendered pages.

Removing unnecessary code will decrease the size of your files.
This will speed up your loading times and mobile scores even more!

## Installation

To install this library with `npm` run

```
$ npm install scully-plugin-minify-html --save-dev
```

or with `yarn`

```
$ yarn add scully-plugin-minify-html
```

This package depends on the [`html-minifier`](https://www.npmjs.com/package/html-minifier) package.
It will be installed automatically when installing this package.

## Usage

Import and add the plugin to the `defaultPostRenderers` to execute it on all rendered pages
or use the `postRenderers` on a route configuration to execute it for a specific route.

**Important:** the current implementation of Scully is that if you provide a `postRenderers` option
on a route level, it will ignore the configuration of the `defaultPostRenderers` option at
the root level of the config.

For more information, check out: https://github.com/scullyio/scully/issues/595

```javascript
const { RouteTypes } = require('@scullyio/scully');
const { MinifyHtml } = require('scully-plugin-minify-html');

const postRenderers = [MinifyHtml];

exports.config = {
  projectRoot: './src/app',
  defaultPostRenderers: postRenderers, // for all routes
  routes: {
    '/blog/:slug': {
      type: RouteTypes.contentFolder,
      slug: {
        folder: './blog',
      },
      postRenderers: postRenderers, // per route config
    },
  },
};
```

Now build your app and then just run the Scully command.

```shell script
npm run build --prod
npm run scully
```

### Configuring the `html-minifier` options

The `MinifyHtml` plugin uses [html-minifier](https://www.npmjs.com/package/html-minifier) under the hood, so we can configure the minify options that are being used.
The available options can be found in the interface [`Options`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/main/types/html-minifier/index.d.ts)

**The default configuration is currently set at:**

```typescript
import { Options } from 'html-minifier';

const defaultMinifyOptions: Options = {
  caseSensitive: true,
  removeComments: true,
  collapseWhitespace: true,
  collapseBooleanAttributes: true,
  removeRedundantAttributes: true,
  useShortDoctype: true,
  removeEmptyAttributes: true,
  minifyCSS: true,
  minifyJS: true,
  removeScriptTypeAttributes: true,
  removeStyleLinkTypeAttributes: true,
  // don't remove attribute quotes, not all social media platforms can parse this over-optimization
  removeAttributeQuotes: false,
  // don't remove optional tags, like the head, not all social media platforms can parse this over-optimization
  removeOptionalTags: false,
  // scully specific HTML comments
  // this will always be added in the final minifyOptions config
  ignoreCustomComments: [/scullyContent-(begin|end)/],
  // scully specific data injection
  // this will always be added in the final minifyOptions config
  ignoreCustomFragments: [/\/\*\* ___SCULLY_STATE_(START|END)___ \*\//],
};
```

Configuring the options can be done via the `setPluginConfig` function.
You can specifiy a subset of the minification options that will override the default configuration.

```javascript
const { RouteTypes, setPluginConfig } = require('@scullyio/scully');
const { MinifyHtml, MinifyHtmlOptions } = require('scully-plugin-minify-html');

const postRenderers = [MinifyHtml];

const minifyHtmlOptions: MinifyHtmlOptions = {
  minifyOptions: {
    removeComments: false,
  },
};
setPluginConfig(MinifyHtml, 'render', minifyHtmlOptions);
// or
// setPluginConfig(MinifyHtml, minifyHtmlOptions);

exports.config = {
  projectRoot: './src/app',
  defaultPostRenderers: postRenderers,
  routes: {
    '/blog/:slug': {
      type: RouteTypes.contentFolder,
      slug: {
        folder: './blog',
      },
      postRenderers: postRenderers,
    },
  },
};
```
