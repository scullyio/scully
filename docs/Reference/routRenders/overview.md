---
title: RouteRender plugins
published: true
lang: en
position: 120
---

# routeRender plugins.

The `routeRenderer` is responsible for creating an HTML string from a `handledRoute`.
It receives a [handledRoute](/docs/concepts/handled-routes.md), and should return a string containing the entire contents of the page.

There are currently 3 different types.
1. Puppteer. The default. comes from the package [`@scullyio/scully-plugin-puppeteer`](https://github.com/scullyio/scully/tree/main/libs/plugins/scully-plugin-puppeteer)
Uses Puppteer to control Chrome, and retreives the pages HTML
2. Playwright. Comes from the package [`@scullyio/scully-plugin-playwright`](https://github.com/scullyio/scully/tree/main/libs/plugins/scully-plugin-playwright)
Uses MS-Playwright to render the pages to HTML
3. SPS (Scully Platform Server Renderer). Is installed by default.
Uses Angular platform server to render the pages to HTML
