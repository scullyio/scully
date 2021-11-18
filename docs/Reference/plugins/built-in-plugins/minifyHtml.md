---
title: minify html Plugin
published: false
lang: en
position: 100
---


# `minify-html` Plugin

## Overview
This `postProcessByHtml` plugin will minify the HTML of your pre-rendered pages. 

Removing unnecessary code will decrease the size of your files.
This will speed up your loading times and mobile scores even more!

## Getting Started

### 1. Install the plugin:

To install this library with `npm` run

```bash
$ npm install --save-dev @scullyio/scully-plugin-minify-html
```

This package depends on the [`html-minifier-terser`](https://www.npmjs.com/package/html-minifier-terser) package.
It will be installed automatically when installing this package. 

### 2. Use the plugin:

Then add it to your `scully.<projectname>.config.ts` like this:

```typescript
import { minifyHtml } from '@scullyio/scully-plugin-minify-html';

const postRenderers = [minifyHtml];

const defaultPostRenderers = [minifyHtml];

export const config: ScullyConfig = {
  /** more config here */
  defaultPostRenderers,
  /** more config here */
  routes: {
    /** more config here */
  },
};
```

The above config will use the plugin on _all_ routes. If you want to use in on a single route, add it to the config of that particular route like this:

```typescript
export const config: ScullyConfig = {
  /** more config here */
  routes: {
    someRoute: {
      type: 'contentFolder', // Or any other type
      postRenderers: = [minifyHtml],
    },
     /** more route configs here */
  }
}
```

## Settings

You can configure this plugin by using the `setPluginConfig` helper like this:

```typescript
setPluginConfig(minifyHtml, {
  minifyJS: false,
});
```

The `minifyHtml` plugin uses [html-minifier](https://www.npmjs.com/package/html-minifier) under the hood, so we can configure the minify options that are being used.
The available options can be found in the interface [`Options`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/html-minifier/index.d.ts)

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
  ignoreCustomComments: [
    /scullyContent-(begin|end)/
  ],
  // scully specific data injection
  // this will always be added in the final minifyOptions config
  ignoreCustomFragments: [
    /<script id="ScullyIO-transfer-state">[.\s\S]*<\/script>/
  ]
};
```
