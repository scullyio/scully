---
title: md Plugin
published: true
lang: en
position: 100
---

# `md` Plugin

## Overview

Adds capability to render markdown files as html. It also ships with a compact version of prism.js to highlight code snippets.

## Usage

In the application's `scully.your-app.config.file`:

1.  Enable the highlight option by adding the following:

```typescript
setPluginConfig('md', { enableSyntaxHighlighting: true });
```

2.  To import any extra language support, you need to load it using prism loadLanguages. Add the following code to your config file

```typescript
/** this line goes into your scully.<app>.config.ts */
import loadLanguages from 'prismjs/components/index.js';
/** The Markdown plugin already loads those languages: */
loadLanguages(['javascript', 'typescript', 'css', 'scss', 'markdown', 'bash', 'json']);
```

3. Import your desired theme in the application's styles.css:

```css
/* include CSS for prism toolbar */
@import '~prismjs/plugins/toolbar/prism-toolbar.css';
/* check node_modules/prismjs/themes/ for the available themes */
@import '~prismjs/themes/prism-tomorrow';
```

e.g.

```typescript
// scully.your-app.config.ts

import { setPluginConfig, ScullyConfig } from '@scullyio/scully';
import 'prismjs/components/prism-java.js'; // example language support

export const config: ScullyConfig = {
  routes: {
    '/blog/:slug': {
      type: 'contentFolder',
      slug: {
        folder: './blog',
      },
    },
  },
};
```

Visit [prismjs](https://prismjs.com/) for more information.
