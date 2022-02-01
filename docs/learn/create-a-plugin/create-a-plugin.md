---
title: Create a Custom Scully Plugin
lang: en
position: 20
published: true
---

## [Overview](#overview)

Scully has a robust plugin system that allows you to alter the data before, during, and after the app is generated. For example, after the routes are created you can create a sitemap or an RSS feed. The plugin system gives easy access to all the routes after they've been found and generated. In this guide, you'll learn about the different types of plugins and how you can create your own custom plugin.

## [Plugin Types](#plugin-types)

There are several types of plugins you can create for your Scully app, depending on when in the build pipeline you need to jump in. Here are the different types of plugins you can create and a brief explanation of each, [pulled directly from Scully's docs](https://scully.io/docs/Reference/plugins/overview/):

- `router` plugins teach Scully how to get the required data to be pre-render pages from the route-params.
- `postProcessByHtml` plugins are used to transform the rendered HTML. After the Angular application renders, the HTML content is passed to a `postProcessByHtml` plugin where it can be further modified.
- `postProcessByDom` plugins are used to transform the rendered HTML. After the Angular application renders, the HTML content is passed to a `postProcessByDom` plugin where it can be further modified.
- `routeProcess` plugins are plugins that can modify the handled route array, before rendering the routes starts
- `fileHandler` plugins are used by the `contentFolder` plugin during the render process. The `contentFolder` plugin processes the folders for markdown files or other file type the folders may contain. The render process processes any existing `fileHandler` plugin for any file extension type.
- `routeDiscoveryDone` plugins are called automatically after all routes have been collected and all `router` plugins have finished.
- `allDone` plugins are like `routeDiscoveryDone` plugins, except they are called after Scully finishes executing all its processes.
- Scully has a category of system plugins. Unlike the other plugin categories those plugins don't have a set interface, and do use a symbol for their name.

With these seven types of plugins, you can create a lot of extra functionality in your Scully app. For example, I recently wanted the title from my blog posts (written in Markdown) to be added as the HTML document's title. There are several ways to do this, but one way is to write a custom `postProcessByHtml` plugin. This plugin gives you access to the rendered HTML of a page, as well as some data about the route, and allows you to alter it in some way. In my case, I looked for the `title` attribute on the route's data and added that to the rendered HTML.

Another type of plugin that's useful is the `routeDiscoveryDone` plugin. This type of plugin is called after Scully finds all the routes in the app and any `router` plugins are done running. A use case for this plugin is creating an RSS feed from the routes in your Scully application. You can see [an example here](https://github.com/notiz-dev/scully-plugins).

Now that we've covered the types of plugins that you can create and a couple examples of use cases, let's look at how you can create a custom plugin.

## [Plugin Return Values](#plugin-return-values)

All Scully plugins return a `Promise<unknown>`, as illustrated in the interface:

```ts
interface plugin {
  (...parameters:any) => Promise<unknown>
}
```

For example, a `render` plugin returns a Promise<string>. A `router` plugin returns an array of `HandledRoute`s wrapped in a `Promise`, or in other words `Promise<HandledRoute[]>`. Some plugins don't actually return anything, but the return value is still wrapped in a `Promise`, so its return value is `Promise<void>`.

It's important to know that all the plugins return a `Promise` so that if you need to invoke the function you remember to `await` the result, or chain a `.then` to the function call.

## [Creating a Custom Scully Plugin](#creating-a-custom-scully-plugin)

When you initialize your Angular application with the Scully schematic, a folder is created called `scully`. Inside that folder is another folder, `plugins`. The skeleton code for a plugin is created for you, or you can create your own plugin file. There are two main parts to the plugin: the plugin function and the registration of the plugin. Here's an example of the plugin function for a `postProcessByHtml` plugin:

```ts
// ./scully/plugins/custom-plugin.ts

export const customPlugin = Symbol('customPlugin');

const customPluginFunction = async (
  html: string,
  route: HandledRoute
): Promise<string> => {
  // do something
  return Promise.resolve(html);
};
```

> Quick note: you can identify a plugin by using a `string` or a `Symbol`. Either way works fine, but the upside to using a `Symbol` is that there will be no name collisions. If you need more information on `Symbol`s, [you can read this blog post](https://www.prestonlamb.com/blog/javascript-primitive-types). In short, `Symbol` values are guaranteed to be unique, even if you pass the same string into the `Symbol` constructor for two separate variables. So, for plugins, this means no name collisions.

This function has two parameters, the rendered html, and the route. The latter contains any route data from Scully. At the end of the plugin, the HTML should be returned. Before returning it, you can alter it in any way you need to. Here's an example of a `routeDiscoveryDone` plugin:

```ts
// ./scully/plugins/custom-plugin.ts

export const customPlugin = Symbol('customPlugin');

function customPluginFunction(routes: HandledRoute[]) {
  const blogPosts = routes.filter((r: HandledRoute) =>
    r.route.includes('/blog')
  );
  // Do something with the blog posts
}
```

This type of plugin receives an array of `routes`, allowing you to do what you need with them. As a side note, this is the type of above-mentioned RSS plugin by the team at Notiz.dev.

After the function is created, you need to register the plugin. You can do that by importing the `registerPlugin` method from `@scullyio/scully`. The method takes a plugin type, plugin name, and plugin function as parameters. Here's an example of registering a plugin:

```ts
// ./scully/plugins/custom-plugin.ts

const { registerPlugin } = require('@scullyio/scully');

registerPlugin('postProcessByHtml', customPlugin, customPluginFunction);
```

Now that the plugin is registered, you're ready to use it. For `postProcessByHtml` plugins, you need to add the name of the plugin to the `defaultPostRenderers` array in the top level of the site's Scully config or the `postRenderers` array for a specific set of routes in the Scully config:

```ts
// scully.your-site.config.ts

import { customPlugin } from './scully/plugins/custom-plugin';

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'personal-site',
  outDir: './dist/static',
  routes: {
    '/blog/:slug': {
      type: 'contentFolder',
      slug: {
        folder: './blog',
      },
      postRenderers: [customPlugin],
    },
  },
  defaultPostRenderers: [customPlugin],
};
```

For the `routeDiscoveryDone` plugins, they just need to be registered with Scully from the `scully.my-site.config.ts` file to be run. They don't need to be added to the `postRenderers` or `defaultPostRenderers` array like the `postProcessByHtml` plugin.

## [Example Plugins](#example-plugins)

The Scully GitHub repository has [some example plugins](https://github.com/scullyio/scully/tree/main/demos/plugins) that can be used as a template for you to build your own. In addition, you should be able to browse the repositories of community plugins to see how the plugins are created. Here is a list of some community plugins that are good examples:

- [scully-plugin-amp-css](https://github.com/pjlamb12/scully-plugin-amp-css)
- [@notiz-dev/scully-plugin-rss](https://github.com/notiz-dev/scully-plugins/tree/master/plugins/rss#readme)
- [@notiz-dev/scully-plugin-fouc](https://github.com/notiz-dev/scully-plugins/tree/master/plugins/fouc#readme)
- [scully-plugin-disable-angular](https://github.com/samvloeberghs/kwerri-oss/tree/master/projects/scully-plugin-disable-angular)
- [scully-plugin-sitemap](https://github.com/gammastream/scully-plugins/tree/master/projects/scully-plugin-sitemap)

## [`findPlugin` Method](#findplugin-method)

The Scully team doesn't recommend you export the plugin function from the file where the plugin is defined. This ensures that the plugin function doesn't bleed out into other parts of the system. There are times, though, when you need to invoke the plugin function manually. If you need to do this, you can get access to the plugin with the `findPlugin` method provided by Scully. The method takes one to three parameters. They are:

- The plugin type, name, or symbol
- The plugin name or symbol
- a `throwOnNotFound` boolean

If you pass the plugin type (i.e. `RenderPlugin` or `RouterPlugin`) as the first parameter, the second parameter needs to be passed as well and should be the name or `Symbol` of the plugin. If the first parameter is the name or `Symbol`, you don't need any other parameters.

The `throwOnNotFound` boolean is defaulted to true, and will generally not be needed by external programs. However, if you're using optional plugins then you can change this value to `false`. If the plugin is not found, the function will return `undefined`.

```ts
// ./scully/plugins/custom-plugin.spec.ts
const pluginName = Symbol('customPlugin');
const customPlugin = findPlugin(pluginName);
```

Now that you have access to the plugin, you can invoke it by passing it the needed parameters. For example, a `postProcessByHtml` plugin generally needs an `html` string and a `HandledRoute`. A `router` plugin generally takes a `route` string and a `config` parameter.

```ts
// ./scully/plugins/custom-plugin.spec.ts

const pluginResult = await customPlugin(htmlString, handledRouteData);
```

Another reason you might need the `findPlugin` method is to create a new plugin by composing other plugins. For example, let's say you have two `postProcessByHtml` plugins, `pageTitle` and `canonicalLink`. Next, you want to create a new plugin called `seo`. This plugin will run the first two plugins, and then do some more work. That new plugin may look like this:

```ts
registerPlugin('postProcessByHtml', 'seo', async (html, route) => {
  const pageTitle = findPlugin('pageTitle');
  const canonicalLink = findPlugin('canonicalLink');

  html = await pageTitle.then(canonicalLink);

  // Do some more SEO work

  return Promise.resolve(html);
});
```

You now have a new `postProcessByHtml` plugin called `seo` that does all of your SEO work for you, with the help of a couple other plugins.

## [Conclusion](#conclusion)

Scully's plugin system is incredibly powerful and gives you the ability to add any extra features that you might need. There is a growing catalogue of community plugins, all of which are relatively simple to add to your site and add great value. Most, if not all, are [on NPM and start with `scully-plugin`](https://www.npmjs.com/search?q=scully-plugin). If you can't find what you need, create your own!
