---
lang: en
position: 10
published: true
title: The Scully process
---

# The Scully process

## overview

Scully is designed to take an app, analyze it, and then write out all the static files needed to represent the known (states/pages/routes) of the application.

## The process

1. Traverse, read the source of the application to find all routes.
2. Merge in [extraRoutes](/docs/Reference/config#extraroutes-string--string--promisestring--string), where we specify routes we know, but can't automatically traverse
3. We now have a list of [unhandled routes]
4. Enrich/expand the found [unhandled routes] routes with router-plugins.
5. Process/change the resulting [handled routes] list with routeProcess plugins.
6. Write out the `scully.routes.json` files.
7. Trigger routeDiscoveryDone with results from 5
8. Trigger the render plugins for each route (render will be specified later)
9. Trigger allDone plugins

Please note that not all of those tasks might need to run every time. Scully will automatically reuse traversed(item 1) routes. A user might be using filters that will limit the work done in item 6. Also, when they use filtering, item 5 will be skipped, because we don’t want to write partial data to the JSON file.

## The render pipeline.

For each [handled route] take the following steps:

1. (optional) Run the preRender function (can be provided in the config for this route), stop processing when `false` is returned. This function might add data to the [handled route], or even change the plugins used. Please note that the route will still be present in the `scully.routes.json` file.
2. Determine if there is a special [renderPlugin](/docs/Reference/plugins/types/render)
3. Use the render plugin from step 2 to return the HTML for the given [handled route]
4. Take the resulting HTML, and invoke all the render plugins for this route in the given order. Each plugin receives an HTML string, and the handledRoute and returns an HTML string.
5. Use the `WriteToStorage` plugin to store the result on local FS. The `WriteToStorage` plugin translates the route.route to a file location. If the content has `transferState` inside, it will extract this, and save it along the `index.html` as `data.json` in the designated location for this route.

## The render plugin

By default Scully will use the puppeteerRender plugin. This plugin can by replaced by setting the `renderPlugin` property on the [handled route]. The plugin is responsible for creating HTML from a route. It will get a [handled route] as paramter, and is responsible for returning the pages _complete_ HTML as a string.

## Meta

This section describes how Scully currently works through the list. Its a bit of a higher-level description, and doesn’t go into much detail.
When started, Scully will compile and load the config file and all the TS files in the plugins (normally `./scully`). Then Scully will check for the server to be active. If not it starts a background server that will host the existing distribution files in a separate process. It will also start puppeteer in a different process so that it can warm up.
Then it will start all the tasks listed in Single application tasks. When it reaches the render task, it will take the list of routes, and run each of it through the render pipeline. After the render pipeline, it will use the writeTostorage plugin to store the final result. It will use all cores (unless limited by settings) to parallelize this task.

[unhandled routes]: /docs/concepts/unhandled-routes
[handled routes]: /docs/concepts/handled-routes
