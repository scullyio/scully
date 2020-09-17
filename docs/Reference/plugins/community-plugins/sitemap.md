---
title: sitemap Plugin
published: true
lang: en
position: 100
---

# `sitemap` Plugin

<div class="docs-link_table">
  <a class="homepage" href="https://github.com/gammastream/scully-plugins"></a>
  <a class="repository" href="https://github.com/gammastream/scully-plugins/tree/master/projects/scully-plugin-sitemap"></a>
</div>

## Overview

This `routeDiscoveryDone` plugin for Scully that will generate one or more sitemaps for your generated routes.

_Version 1.0.0 introduces breaking changes as the plugin has been rewritten to take advantage of the new `routeDiscoveryDone` plugin type rather the old way of using a `render` plugin. This has the major benefit of only generating the sitemaps once per run – instead of after each page render._

## Installation

To install this library with `npm` run:

```
$ npm install @gammastream/scully-plugin-sitemap --save-dev
```

## Usage

Within your Scully config (typescript), get and configure the plugin like so:

```typescript
import { ScullyConfig, setPluginConfig } from '@scullyio/scully';
import { getSitemapPlugin } from '@gammastream/scully-plugin-sitemap';

const SitemapPlugin = getSitemapPlugin();
setPluginConfig(SitemapPlugin, {
  urlPrefix: 'https://gamma.stream',
  sitemapFilename: 'sitemap.xml',
  changeFreq: 'monthly',
  priority: [
    '1.0',
    '0.9',
    '0.8',
    '0.7',
    '0.6',
    '0.5',
    '0.4',
    '0.3',
    '0.2',
    '0.1',
    '0.0',
  ],
  ignoredRoutes: ['/404'],
  routes: {
    '/products/:productId': {
      changeFreq: 'daily',
      priority: '0.9',
      sitemapFilename: 'sitemap-products.xml',
    },
  },
});

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'scully-plugins',
  outDir: './dist/static',
  routes: {
    '/products/:productId': {
      type: 'json',
      productId: {
        url: 'http://localhost:4200/assets/products.json',
        property: 'id',
      },
    },
  },
};
```

Build app and run scully like normal.

```
npm run build
npm run scully
```

## Configuring Priority

The priority of a route can be configured by setting the priority level based on the number of segments in a given route.

```typescript
[
  '1.0', // `/` - [ '' ] (1 segment)
  '0.9', // `/services` - [ '', 'services' ] (2 segments)
  '0.8', // `/services/hosting` - [ '', 'services', 'hosting' ]
  // etc...
];
```

## Notes

- Currently, the default priority (0.5) is assigned to all routes. Planned for a future update is the ability to assign a priority based on the number of segments in a route. (Completed in v0.0.4)
- Sitemap is regenerated with every route. At some time in the future, we expect Scully to support a class of plugins that run after it is finished generating all the routes. (Completed in v1.0.0)

## Questions or Issues

If you have any issues you can raise them here or contact me at: [GammaStream](https://gamma.stream/)
