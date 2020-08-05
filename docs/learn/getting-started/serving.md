---
title: Serving a Scully app
published: true
lang: en
navlist_position: 400
---

# Serving a Scully app

## Overview

After [building](/docs/learn/getting-started/building), see the output and test how it runs as a statically generated webpage.

To see the pre-rendered site, open the `/dist/static` folder where you can find one `index.html` for every route in your app. Hence, if the application has 1000 routes, there should be 1000 `index.html` files in the `dist/static` folder.

These `index.html` files are jamstack-packed with HTML and CSS. This means that Scully built successfully, and that your site is now pre-rendered.

Scully provides a server, so that you can test out your jamstack site after the Scully build. To launch Scully's test server, run the following command:

```bash
npm run scully:serve
```

This command actually launches **2 (two)** servers. The first one is hosting the results of `ng build`, and the second server hosts the results of the Scully build. This allows you to test both versions of your built app. Very cool!

<div class="docs-prev_next">
  <a class="prev" href="/docs/learn/getting-started/building">Building a Scully app</a>
  <a class="next" href="/docs/learn/getting-started/tips-for-testing">Tips for testing a Scully app</a>
</div>
