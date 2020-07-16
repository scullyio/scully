---
title: contentFolder Plugin
published: true
navlist_textFormat_none: true
---

# `contentFolder` Plugin <!-- omit in toc -->

<div class="docs-link_table">
  <a class="view-in-repo" href="https://github.com/scullyio/scully/blob/main/libs/scully/src/lib/routerPlugins/contentFolderPlugin.ts"></a>
</div>

<div class="docs-toc"></div>

- [Overview](#overview)
- [Usage](#usage)
  - [`router` Plugin](#router-plugin)
  - [`render` Plugin](#render-plugin)

## Overview

The `contentFolder` plugin defines a **folder** in which Scully should look for content to render, and a **route with params** to associate rendered static files with.

It is a combination of a [`router` plugin](/docs/learn/plugins/types/router) and [`render` plugin](/docs/learn/plugins/types/render), and is built into Scully.

## Usage

### `router` Plugin

The `contentFolder` router plugin takes a config in the form of:

```typescript
const contentFolderconfig = {
  routes: {
    '/blog/:slug': {
      type: 'contentFolder',
      slug: {
        folder: './tests/assets/blog-files',
      },
    },
  },
};
```

The config takes and handles only one parameter, called `folder` which is mandatory. It is a file's location relative to the project root.

Scully traverses this folder, and its subfolders in order to make a `HandledRoute` for each file-extension known in there.
`.md`(markdown) and `adoc` (asciiDoc) are known out of the box. That route has a `templateFile` property with the full path to the file. The route reflects the folder structure.

Furthermore, it parses out the date in the front-matter part, and it is added to the handledRoutes `data` property.

### `render` Plugin

The contentFolder render plugin takes the pre-rendered HTML and a `HandlerRoute` in order to read the file indicated by the `templateFile` property.
It extracts the Angular `_ngcontent` id. It looks for the file's extension in the fileHandler plugins, and it uses this plugin to convert the raw content into HTML.

Finally, it adds the `_ngcontent` id to the generated HTML, so that components' style works as expected.

This plugin finds the `<scully-content>` tag, and it injects the HTML as its previous sibling(s).
