---
title: routeDiscoveryDone Plugin Type
published: true
lang: en
position: 100
---

# `routeDiscoveryDone` Plugin Type

## Overview

This type of plugin is called automatically after all routes have been collected, and all router plugins have finished.

It receives a shallow copy of the `handledRoute` array, and returns `void`. It's ideal for a plugin that does some task with all the routes. For example, creates an RSS feed from the blog posts. Once all the routes have been collected, this plugin can be called and the feed created from those routes.

Here's an example of a `routeDiscoveryDone` plugin:

```ts
const { registerPlugin } = require('@scullyio/scully');

function customPlugin(routes: HandledRoute[]) {
  const blogPosts = routes.filter((r: HandledRoute) => r.route.includes('/blog'));
  console.log(JSON.stringify(blogPosts, null, 2));
}

const validator = async () => [];
registerPlugin('routeDiscoveryDone', 'customPlugin', customPlugin, validator);
```
