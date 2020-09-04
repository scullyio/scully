---
title: plugins
published: true
lang: en
position: 100
---

# Plugins

## Plugin System Overview

The plugin system allows you to define your own plugins in order to have a fine-grained control over Scully's pre-render process.
There are six main types of plugins, and you can make your own custom plugins off any of those types.

First, [create the plugin function](/docs/learn/plugins/create-a-plugin-function.md).

Second, [register a new plugin](/docs/learn/plugins/register-a-new-plugin.md).

Finally, [use a custom plugin](/docs/learn/plugins/use-a-custom-plugin).

Or, follow the [step by step guide](/docs/learn/plugins/).

## Types

<div class="docs-toc no-spacing"></div>

- [`router`](#router)
- [`render`](#render)
- [`fileHandler`](#filehandler)
- [`routeDiscoveryDone`](#routediscoverydone)
- [`allDone`](#alldone)

#### [`router`](/docs/learn/plugins/types/router)

`router` plugins teach Scully how to get the required data to be pre-render pages from the route-params.

#### [`render`](/docs/learn/plugins/types/render)

`render` plugins are used to transform the rendered HTML.  
After the Angular application renders, the HTML content is passed to a `render` plugin where it can be further modified.

#### [`fileHandler`](/docs/learn/plugins/types/file-handler)

`fileHandler` plugins are used by the [`contentFolder`](/docs/learn/plugins/built-in-plugins/contentFolder) plugin during the render process. The [`contentFolder`](/docs/learn/plugins/built-in-plugins/contentFolder) plugin processes the folders for markdown files or other file type the folders may contain. The render process processes any existing `fileHandler` plugin for any file extension type.

#### [`routeDiscoveryDone`](/docs/learn/plugins/types/routeDiscoveryDone)

`routeDiscoveryDone` plugins are called automatically after all routes have been collected and all router plugins have finished.

#### [`allDone`](/docs/learn/plugins/types/allDone)

`allDone` plugins are like `routeDiscoveryDone` plugins, except they are called _after_ Scully finishes executing all its processes.
