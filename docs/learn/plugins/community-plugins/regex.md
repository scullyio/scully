---
title: regex Plugin
published: true
lang: en
navlist_textFormat_none: true
---

# `regex` Plugin <!-- omit in toc -->

<div class="docs-link_table">
  <a class="homepage" href="https://github.com/gammastream/scully-plugins"></a>
  <a class="repository" href="https://github.com/gammastream/scully-plugins/tree/master/projects/scully-plugin-regex"></a>
</div>

<div class="docs-toc"></div>

- [Overview](#overview)
- [Installation](#installation)
- [Usage](#usage)
- [Questions or Issues](#questions-or-issues)

## Overview

This `postRenderer` plugin for Scully will apply the configured regex replacements to your Scully rendered HTML.

_Version 2.0.0 introduces breaking changes in the way the plugin is configured. It allows for a bit of decoupling from the main ScullyConfig_

## Installation

To install this library with npm run:

```
$ npm install @gammastream/scully-plugin-regex --save-dev
```

## Usage

Add the plugin to the defaultPostRenderers to execute it on all rendered pages:

```typescript
import { ScullyConfig, setPluginConfig } from '@scullyio/scully';
import { getRegexPlugin } from '@gammastream/scully-plugin-regex';

const RegexPlugin = getRegexPlugin();
setPluginConfig(RegexPlugin, {
  replacements: [
    {
      from: 'foo',
      to: 'foobar',
    },
    {
      from: new RegExp(
        '([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+.[a-zA-Z0-9._-]+)',
        'gi'
      ),
      to: '<a href="mailto:$1">$1</a>',
    },
  ],
  routes: {
    '/products/:productId': {
      replacements: [
        {
          from: 'foo',
          to: 'foofoo',
        },
      ],
    },
  },
});

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'scully-plugins',
  outDir: './dist/static',
  defaultPostRenderers: [RegexPlugin],
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
