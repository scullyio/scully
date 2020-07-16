---
title: http404 Plugin
published: true
navlist_textFormat_none: true
---

# `http404` Plugin <!-- omit in toc -->

<div class="docs-link_table">
  <a class="homepage" href="https://github.com/gammastream/scully-plugins"></a>
  <a class="repository" href="https://github.com/gammastream/scully-plugins/tree/master/projects/scully-plugin-http404"></a>
</div>

<div class="docs-toc"></div>

- [Overview](#overview)
- [Installation](#installation)
- [Usage](#usage)
- [Questions or Issues](#questions-or-issues)

## Overview

This `postRenderer` plugin for Scully will create a `/404.html` page for the configured `/404` route. This is handy for generating custom 404 error pages within your Angular application while maintaining compatibility with the [firebase hosting requirements](https://firebase.google.com/docs/hosting/full-config#404) for 404s.

_Version 1.0.0 introduces breaking changes in the way the plugin is registered and configured. Please update your configurations_

## Installation

To install this library with `npm` run:

```
$ npm install @gammastream/scully-plugin-http404 --save-dev
```

## Usage

Create a 404 route in the root router:

```typescript
RouterModule.forRoot([
  {
    path: 'a',
    component: PageComponent,
  },
  {
    path: 'b',
    component: PageComponent,
  },
  {
    path: 'c',
    component: PageComponent,
  },
  {
    path: '',
    component: PageComponent,
  },
  {
    path: '404',
    component: Http404Component,
  },
  {
    path: '**',
    component: Http404Component,
  },
]);
```

Add the plugin to the `defaultPostRenderers` to execute it on the `/404` route:

```typescript
import { ScullyConfig, setPluginConfig } from '@scullyio/scully';
import { getHttp404Plugin } from '@gammastream/scully-plugin-http404';

const Http404Plugin = getHttp404Plugin();

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'scully-plugins',
  outDir: './dist/static',
  defaultPostRenderers: [Http404Plugin],
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

## Questions or Issues

If you have any issues you can raise them here or contact me at: [GammaStream](https://gamma.stream/)
