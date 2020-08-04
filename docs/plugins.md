---
title: Plugins
order: 700
lang: en
---

# Plugins

Scully uses a plugin system that allows users to define new ways for Scully to pre-render an application. There are five main
types of plugins:

1. [Router Plugin](#router-plugin)
2. [Render Plugin](#render-plugin)
3. [File Handler Plugin](#file-handler-plugin)
4. [routeDiscoveryDone plugin](#routediscoverydone-plugin)
5. [allDone plugin](#alldone-plugin)

You can find a list of available plugins in the [recommended plugins](recommended-plugins.md) documentation.

---

## Registering a Plugin

The `registerPlugin` function adds a new plugin to Scully. This function has 5 parameters:

- type
- name
- plugin
- validator (optional)
- options (optional)

### type: string

`type` - Indicates the plugin's type. The existing types are: `router`, `render`, `fileHandler`, `allDone`, or `routeDiscoveryDone`.

### name: string

`name` - The plugin's name. This must be unique for the type of plugin. To replace an existing plugin, set the `replaceExistingPlugin` option.

### plugin: any

`plugin` - The plugin's function. It contains the plugin's logic. The plugin types are described in their own type descriptions

### validator: function (optional)

`validator` - A validation function. It should return an array of errors. if there are no errors, it should return a `false` value. If it returns a `string<array>`, those strings are displayed as errors, and the process is aborted.

> Tip: Add color to the validator errors by using the colors exported from Scully.

##### Validator Example

```typescript
import { yellow } from '@scullyio/scully';

// Omitted code ...

const validator = async options => {
  const errors = [];

  if (options.numberOfPages && typeof options.numberOfPages !== 'number') {
    errors.push(
      `my-custom-plugin numberOfPages should be a number, not a ${yellow(
        typeof options.numberOfPages
      )}`
    );
  }

  return errors;
};
```

### Options

The `optinal` object can be used to set the plugin options. At the moment, the only available option is `replaceExistingPlugin`.

## Router Plugin

Any route in the application that contains a router-parameter must be configured in a **router plugin**. The plugin teaches Scully how to get the required data to be pre-render in the web-pages from the route-params.

Suppose the application has a route like this one: `{path: 'user/:userId', component: UserComponent}`. In order for Scully to pre-render the website, it needs to know the complete list of User IDs that will be used in that route parameter `:userId`. If the app had 5 users with the IDs 1, 2, 3, 4, and 5; Scully would need to render the following routes:

```
/user/1
/user/2
/user/3
/user/4
/user/5
```

A **router plugin** is used to convert the raw route-config into a list of routes that Scully can then crawl/render.

### `HandledRoute` interface

```typescript
interface RouteConfig {
  /** this route does a manual Idle check */
  manualIdleCheck?: boolean;
  /** type of the route  */
  type?: string;
  /**
   * an optional function that will be executed on render.
   * Receives the route string, and the config of this route.
   */
  preRenderer?: (route: HandledRoute) => Promise<void | false>;
  /** Allow in every other setting possible, depends on plugins */
  [key: string]: any;
}

export interface HandledRoute {
  /** the _complete_ route */
  route: string;
  /** String, must be an existing plugin name */
  type: string;
  /** the relevant part of the scully-config  */
  config?: RouteConfig;
  /** variables exposed to angular _while rendering only!_ */
  exposeToPage?: {
    manualIdle?: boolean;
    transferState?: Serializable;
    [key: string]: Serializable;
  };
  /** data will be injected into the static page */
  injectToPage?: {
    [key: string]: Serializable;
  };
  /** an array with render plugin names that will be executed */
  postRenderers?: string[];
  /** the path to the file for a content file */
  templateFile?: string;
  /**
   * additional data that will end up in scully.routes.json
   * the frontMatter data will be added here too.
   */
  data?: RouteData;
}
```

The `HandledRoute` interface provides the needed properties to develop your own plugin.

### route: string

`route` - An application route to be handled by Scully. This is the _fully qualified_ route info. That means that there should be no variables left in there. Also no `#` are allowed, and query parameters are ignored.

### type: RoutesTypes

`type` - Indicates the type of plugin. Contains the name of the routing plugin that should handle this. This is a mandatory field that _must_ be provided. When the type doesn't exist, Scully will terminate, as it doesn't know what to do.

### defaultPostRenderers?: string[]

`defaultPostRenderers` - Array with string ID's of the content-renderers that will be run on all routes.

### postRenderers?: string[]

`postRenderers` - Array of plugin names to be executed after the initial page render. Each of the plugins in this array will be rendered in the order they appear, and they will receive the output HTML from the previous plugin.
Moreover, this array _replaces_ the `defaultPostRenderers` array.

```typescript
const defaultPostRenderers = ['seoHrefOptimise'];
const sampleConf: ScullyConfig = {
  defaultPostRenderers,
  routes: {
    /** gets the default postrenderes */
    normalRoute: {
      type: 'default'
    },
    /** adds to the default postrenderes */
    someRoute: {
      type: 'default',
      postRenderers: [...defaultPostRenderers, 'myAddition']
    },
    /** removes the default postrenderes */
    someOtherRoute: {
      type: 'default',
      postRenderers: ['unique']
    }
  }
};
```

The `defaultPostRenderers` and `postRenderers` are designed this way in order to allow you to dispose off the default renderers.
Moreover, the current design is versatile, flexible, and it makes it easy to opt-out.

Do not forget to add the `defaultPostRenderers`!

### templateFile?: string

`templateFile` - Unrelated to the angular template!. The file's name containing the template to be rendered. This property is specific to contentFolder. It contains the full path to the file that should be used to generate the content. Remember that content will be inserted _after_ the initial rendering.

### data?: RouteData

`data` - The data added to this property will be added to the routes data in the `scully.routes.json`. This data will also be extended in contentFolder routes with the front-matter data out of the start of the templateFile.

```typescript
export interface RouteData {
  title?: string;
  author?: string;
  published?: boolean;
  [prop: string]: any;
}
```

### Router Plugin Interface

A **router plugin** is a function that returns a `Promise<HandledRoute[]>`. The `HandledRoute` interface is described above. It receives a string with the unhandled route, and the config for that specific route.

A router plugin function should be as follows:

```typescript
function exampleRouterPlugin(
  route: string,
  config: any
): Promise<HandledRoute[]> {
  // Must return a promise
}
```

The `HandledRoute[]` gets its data added into the `scully-routes.json` file generated by the `npm run scully` command.

### Making A Router Plugin

Lets implement the **router plugin** that turns the raw route into five distinct HandledRoutes from the previous example of an application containing the following route: `/user/:userId`.

```javascript
const { registerPlugin } = require('@scullyio/scully');

function userIdPlugin(route: string, config = {}): Promise<HandledRoute[]> {
  return Promise.resolve([
    { route: '/user/1' },
    { route: '/user/2' },
    { route: '/user/3' },
    { route: '/user/4' },
    { route: '/user/5' }
  ]);
}

registerPlugin('router', 'userIds', userIdPlugin, validator);
```

After implementing the plugin, configure the `scully.config.ts` in order to use it.

### Configuring a Router Plugin

The following configuration uses the `userIds` router plugin to get the `HandledRoute[]` for the above implementation:

```typescript
// scully.config.ts
import './myPlugins/userIdPlugin';
exports.config = {
  // Add the following to your file
  routes: {
    '/user/:userId': {
      type: 'userIds'
    }
  }
};
```

## Router Process Plugin

A router process plugin is almost identical to a Router Plugin with the difference that it waits for each route to process. Moreover, it uses the returned handledroutes instead of the incoming ones.

## Render Plugin

A **render plugin** is used to transform the rendered HTML.

After the Angular application renders, the HTML content is passed to a **render plugin** where it can be further modified.

A render plugin could be used to transform a page containing markdown into a page that renders it.

### Render Plugin Interface

A **render plugin** is a function that returns a `Promise<String>`. The string in the promise must be the transformed
HTML. The interface looks like this:

```typescript
function exampleContentPlugin(
  HTML: string,
  route: HandledRoute
): Promise<string> {
  // Must return a promise
}
```

### Making A Render Plugin

The following **render plugin** example adds a title to the header to a page if it does not find one.

```typescript
const { registerPlugin } = require('@scullyio/scully');

function defaultTitlePlugin(html, route) {
  // If no title in the document
  if (html.indexOf('<title') < 0) {
    const splitter = '</head>';
    const [begin, end] = html.split(splitter);
    const defaultTitle = `<title>The Truth Is Out There!</title>`;
    return Promise.resolve(`${begin}${defaultTitle}${splitter}${end}`);
  }
  return Promise.resolve(html);
}

// DON NOT FORGET REGISTER THE PLUGIN
const validator = async conf => [];
registerPlugin('render', 'defaultTitle', defaultTitlePlugin, validator);

module.exports.defaultTitlePlugin = defaultTitlePlugin;
```

In the above example, the Angular app's HTML content is transformed to include a title because anyone was found.

The next example replaces any instances of `:)` with an smiley emoji.

```typescript
const { registerPlugin } = require('@scullyio/scully');

function smileEmojiPlugin(html, route) {
  return Promise.resolve(html.replace(/\:\)/g, '😊'));
}
// DON NOT FORGET REGISTER THE PLUGIN
const validator = async conf => [];
registerPlugin('render', 'smiles', smileEmojiPlugin, validator);

module.exports.smileEmojiPlugin = smileEmojiPlugin;
```

---

## File Handler Plugin

A **file handler plugin** is used by the `contentFolder` plugin during the `render` process. The `contentFolder`
plugin processes the folders for markdown files or other file type the folders may contain. The `render` process any existing `fileHandler` plugin for any file extension type.

Scully comes with two built-in `fileHandler` plugins. The [markdown plugin](../scully/fileHanderPlugins/markdown.ts) and
the [asciidoc plugin](../scully/fileHanderPlugins/asciidoc.ts). These plugins handle and process the
content of those file types as they are read from the file system.

If you want to support `.docx` files, or `.csv` files, or any other file type; a file handler for those file types need to be added.
The `contentFolder` plugin takes care of reading those files from the filesystem. However, if the files need to be transformed after the `contentFolder` plugin reads them;
A `fileHandler` plugin is required.

### File Handler Plugin Interface

A **file handler plugin** is a function that returns a `Promise<string>`. The interface looks like follows:

```typescript
function exampleFileHandlerPlugin(rawContent: string): Promise<string> {
  // Must return a promise
}
```

### Making A File Handler Plugin

The following **file handler plugin** example handles `.cvs` files by wrapping them into a code block. You could write a much more elaborate plugin that creates a table or a grid for the data.

```typescript
function csvFilePlugin(raw) {
  return Promise.resolve(`<pre><code>${code}</code></pre>`);
}
// DO NOT FORGET TO REGISTER THE PLUGIN
registerPlugin('fileHandler', 'csv', { handler: csvFilePlugin });
module.exports.csvFilePlugin = csvFilePlugin;
```

### File Handler Plugin Examples

Here are some links to built-in **render plugins** in Scully:

- [asciidoc Plugin](../scully/fileHanderPlugins/asciidoc.ts)
- [markdown Plugin](../scully/fileHanderPlugins/markdown.ts)

## RouteDiscoveryDone Plugin

This type of plugin is called automatically after all routes have been collected, and all router plugins have finished. It receives a shallow copy of the `handledRoute` array, and it returns `void`.

## AllDone Plugin

An `allDone` plugin is like a `routeDiscoveryDone` plugin, expect it is called _after_ Scully finishes executing all its processes.
