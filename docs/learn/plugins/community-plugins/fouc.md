---
title: fouc Plugin
published: true
lang: en
navlist_textFormat_none: true
---

# `fouc` Plugin <!-- omit in toc -->

<div class="docs-link_table">
  <a class="homepage" href="https://github.com/notiz-dev/scully-plugins"></a>
  <a class="repository" href="https://github.com/notiz-dev/scully-plugins/tree/master/plugins/fouc"></a>
</div>

<div class="docs-toc"></div>

- [Overview](#overview)
- [Installation](#installation)
- [Usage](#usage)

## Overview

`scully-plugin-fouc` is a `postRenderer` plugin for Scully to prevent <b>f</b>lash <b>o</b>f <b>u</b>nstyled <b>c</b>ontent.

## Installation

To install this plugin with `npm` run:

```bash
$ npm install @notiz/scully-plugin-fouc --save-dev
```

## Usage

Add the plugin to the defaultPostRenderers in your scully.config:

```json
require("@notiz/scully-plugin-fouc");

exports.config = {
  projectRoot: "./src/app",
  defaultPostRenderers: ["fouc"],
  routes: {}
};
```

If you want to use the plugin for a specific route do:

```typescript
require('@notiz/scully-plugin-fouc');

exports.config = {
  ...
  routes: {
    '/blog/:slug': {
      type: 'contentFolder',
      slug: {
        folder: './content/blog'
      },
      postRenderers: ['fouc']
    }
  }
  ...
};
```
