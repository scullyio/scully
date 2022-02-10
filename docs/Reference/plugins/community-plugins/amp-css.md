---
title: AMP CSS
published: true
lang: en
position: 100
---

# AMP CSS Plugin

<div class="docs-link_table">
  <a class="homepage" href="https://github.com/pjlamb12/scully-plugin-amp-css"></a>
  <a class="repository" href="https://github.com/pjlamb12/scully-plugin-amp-css"></a>
</div>

## Overview

The purpose of the Scully AMP CSS plugin is to take all `style` tags from rendered pages and combine them into a single style tag located in the `head` tag of a given page. This is a requirement for AMP pages given by Google. [This talk here](https://www.loom.com/share/35330a858cd741ba92e8be0c0496ffbb) talks in some part about this requirement. Scully makes this relatively easy because after each page is rendered, a plugin can be run to do something to that page; in this case to combine all the styles into a single `style` tag.

## Features

- ✅ Combines the contents of all `style` tags into a single `style` tag
- ✅ Puts the combined styles into the document's `head` tag
- ✅ Removes all the extra `style` tags

## Installation

### NPM

`npm install scully-plugin-amp-css --save-dev`

### Yarn

`yarn add scully-plugin-amp-css --dev`

## Usage

To use this plugin, you need to just require the package inside the Scully `config.ts` for your project, i.e. `scully.your-project-name.config.ts`. After requiring the plugin, add it to the `defaultPostRenderers` array for the desired routes that the plugin should be run on. In most (if not all cases), this would be on all routes, but you need to add it to those routes for it to work.

```ts
// scully.your-project-name.config.ts
require('scully-plugin-amp-css');

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'your-project-name',
  outDir: './dist/static',
  routes: {},
  defaultPostRenderers: ['combineStylesAmpPlugin']
};
```

That's all it takes for the plugin to be included and run on the pages in your app.

**_Make sure to run include this plugin before other CSS plugins, like the [critical CSS plugin](https://www.npmjs.com/package/@scullyio/scully-plugin-critical-css)._**
