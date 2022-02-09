---
title: the routeRenderer plugin
published: true
lang: en
position: 100
---

# `routeRenderer` Plugin

The `routeRenderer` is a scullySystem plugin that can be swapped out to use a different way to render the pages.
It receives a [handledRoute](/docs/concepts/handled-routes.md), and should return a string containing the entire contents of the page.

Its interface is:

```ts
 (route:HandledRoute) => Promise<string>
```

### responisilities.

This plugin is responsible for rendering the actual content from the Angular app. When it throws, it will be retried 3 times before failure
