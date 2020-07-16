---
title: disableAngular Plugin
published: true
navlist_textFormat_none: true
---

# `disableAngular` Plugin <!-- omit in toc -->

<div class="docs-link_table">
  <a class="repository" href="https://github.com/samvloeberghs/kwerri-oss/tree/master/projects/scully-plugin-disable-angular"></a>
</div>

<div class="docs-toc"></div>

- [Overview](#overview)
- [Installation](#installation)
- [Usage](#usage)
- [Clearing dynamic state](#clearing-dynamic-state)

## Overview

This `postRenderer` plugin for Scully removes the static assets that bootstrap the Angular application. Optionally you can also remove the dynamic transfer state from the HTML.

If you are only using Angular to build a static / informational website with little extra functionality it could be overkill to still use Angular on the frontend.

Disabling Angular on the frontend will speed up your loading times and mobile scores even more!

## Installation

To install this library with `npm` run:

```
$ npm install scully-plugin-disable-angular --save-dev
```

or with `yarn`

```
$ yarn add scully-plugin-disable-angular
```

## Usage

Import and add the plugin to the `defaultPostRenderers` to execute it on all rendered pages or use the postRenderers on a route configuration to execute it for a specific route:

**Important:** the current implementation of Scully is that if you provide a `postRenderers` option on a route level, it will ignore the configuration of the `defaultPostRenderers` option at the root level of the config.

For more information, check out: [https://github.com/scullyio/scully/issues/595](https://github.com/scullyio/scully/issues/595)

```typescript
const { RouteTypes } = require('@scullyio/scully');
const { DisableAngular } = require('scully-plugin-disable-angular');

const postRenderers = [DisableAngular];

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

Now build your app with the `--stats-json` flag enabled as the plugin needs to know which assets have been build for your app. Then just run the Scully command.

```
npm run build -- --prod --stats-json
npm run scully
```

## Clearing dynamic state

When disabling Angular in your prerendered pages there is no point in keeping the dynamic state serialized in your HTML. By providing the option `removeState` to the configuration the plugin will remove this state from the HTML.

```typescript
const { RouteTypes, setPluginConfig } = require('@scullyio/scully');
const { DisableAngular } = require('scully-plugin-disable-angular');

const postRenderers = [DisableAngular];

setPluginConfig(DisableAngular, 'render', {
  removeState: true,
});

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
