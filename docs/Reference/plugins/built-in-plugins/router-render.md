---
title: router render Plugin
published: true
lang: en
position: 100
---

# `router-render` Plugin

## Overview

Scully by default use puppeteer to render the router pages.
With this type of plugin, you can render with your custom/other render the URL.

For use the `router-render` you need to add in your app config the routes and send the data.

`scully.{{your_app}}.config.ts`

```typescript
  proxyConfig: 'proxy.conf.js',
  // maxRenderThreads: 4,
  routes: {
    // here i need a routePlugin with renderPlugin
    '/url/some_url': {
      type: 'pluginHandler',
      options: {
        folder: '/example/folder',
      },
    },
```

And you need to register the plugin, the plugin system uses the registerPlugin for that (for more information check [register a new plugin](/docs/Reference/plugins/custom-plugins/register-a-new-plugin.md) docs)

`scully.{{your_app}}.config.ts`

```typescript
registerPlugin('router', 'pluginHandler', (url, options) => {
  // read the folder and all the files routes.
  return [{ route: '/example/folder/file-1', renderPlugin: 'PageOptimizer' }];
});
```

In this case, Scully will try to render this URL with `PageOptimizer` plugin, if get any problem for render with the plugin, Scully will retry with the puppeteer.
