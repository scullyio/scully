---
title: Plugins
published: true
lang: en
position: 120
---

# Plugins

## Plugin System Overview

The plugin system allows you to define your own plugins in order to have a fine-grained control over Scully's pre-render process.
There are nine main types of plugins, and you can make your own custom plugins off any of those types.
A Plugin is a function that returns a promise, or an async function. When a plugin fails, this is gracefully handled by Scully.
When you set the `--pluginsError=false` cmd-line option, Scully will continue rendering, even when a plugin fails. Also timing data is gatherered from every use of a plugin.

When you want to [build your own plugin](/docs/Reference/plugins/custom-plugins/overview)

## Types

#### [Router](/docs/Reference/plugins/types/router)

`router` plugins teach Scully how to get the required data to be pre-render pages from the route-params.

#### [postProcessByHtml](/docs/Reference/plugins/types/render)

`postProcessByHtml` plugins are used to transform the rendered HTML.
After the Angular application renders, the HTML content is passed to a `postProcessByHtml` plugin where it can be further modified.

#### [postProcessByDom](/docs/Reference/plugins/types/render)

`postProcessByDom` plugins are used to transform the rendered HTML.
After the Angular application renders, the HTML content is passed to a `postProcessByDom` plugin where it can be further modified.

### [Route process](/docs/Reference/plugins/types/route-process)

'routeProcess' plugins are plugins that can modify the handled route array, before rendering the routes starts

#### [Content or File handler plugins](/docs/Reference/plugins/types/fileHandler)

`fileHandler` plugins are used by the [`contentFolder`](/docs/Reference/plugins/built-in-plugins/contentFolder) plugin during the render process. The [`contentFolder`](/docs/Reference/plugins/built-in-plugins/contentFolder) plugin processes the folders for markdown files or other file type the folders may contain. The render process processes any existing `fileHandler` plugin for any file extension type.

#### [Route discovery done](/docs/Reference/plugins/types/routeDiscoveryDone)

`routeDiscoveryDone` plugins are called automatically after all routes have been collected and all router plugins have finished.

### [All done](/docs/Reference/plugins/types/allDone)

`allDone` plugins are like `routeDiscoveryDone` plugins, except they are called _after_ Scully finishes executing all its processes.

### [System](/docs/Reference/plugins/types/system)

### [Enterprise](/docs/Reference/plugins/types/enterprise)
