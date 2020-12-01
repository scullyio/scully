---
title: critical css Plugin
published: true
lang: en
position: 100
---

# `critical-css` Plugin

## Overview

Scully uses this plugin to inline the critical above the fold CSS into the HTML, and then **lazy-load** the CSS that is needed for the rest of the page.This will remove CSS from being blocking. It will be ready before your SPA will boot.

## Install

```
npm install -D @scullyio/scully-plugin-critical-css
```

## Usage

Add it to your `scully.<projectname>.config.ts` like this:

```typescript
import { criticalCSS } from '@scullyio/scully-plugin-critical-css';

/** the seoHrefOptimise is optional **/
const defaultPostRenderers = ['seoHrefOptimise', criticalCSS];

export const config: ScullyConfig = {
  /** more config here */
  defaultPostRenderers,
  /** more config here */
  routes: {
    /** more config here */
  },
};
```

The above config will use the plugin on all routes. If you want to use in on a single route, add it to the config of that particular route like this:

```typescript
export const config: ScullyConfig = {
  /** more config here */
  routes: {
    someRoute: {
      type: 'contentFolder', // Or any other type
      postRenderers: = [criticalCSS],
    },
     /** more route configs here */
  }
}
```

## Settings

You can configure this plugin by using the setPluginConfig helper like this:

```typescript
setPluginConfig(criticalCSS, {
  inlineImages: false,
});
```

The plugin had the following settings:

```typescript
export interface CriticalCSSSettings {
  /** inline images into the pages when smaller then 10240 bytes */
  inlineImages?: boolean;
  /** Width of the target viewport */
  width?: number;
  /** Height of the target viewport */
  height?: number;
  /** An array of objects containing height and width. Takes precedence over width and height if set */
  dimensions?: {
    width: number;
    height: number;
  }[];
  /** An array with fully qualified paths to assets, if none is given, the root, and the root/assets will be used to look for static assets*/
  assets?: string[];
  /** Ignore some css rules */
  ignore?: {
    atrule?: string[];
    rule?: string[];
    decl?: (node, value) => boolean;
  };
}
```

For details see the [critical tool page](https://github.com/addyosmani/critical)
