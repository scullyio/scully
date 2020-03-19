---
title: Plugins
order: 700
---

# <a name="plugins"></a> Plugins

Scully uses a plugin system to allow users to define new ways for Scully to pre-render your app. There are three main
types of plugins:

1. [Router Plugins](#router-plugin)
1. [Render Plugins](#render-plugin)
1. [File Handler Plugins](#file-plugin)

See [how to register a plugin](#register-plugin).

See our [Recommended Plugins](recommended-plugins.md) page to find a list of available plugins.

---

## Register Plugin

The `registerPlugin` is the method created to add new plugins to scully. This method has 4 parameters:

- type
- name
- plugin
- validator

### type: PluginTypes

`type` is a reference to the type of plugin. It could be `render`, `router` or `fileHandler`.

### name: string

`name` is a reference to the name of the plugin.

### plugin: any

`plugin` is a reference to the plugin function.

### validator: function

`validator` is a reference to the validations function. It should return an array of errors.

> Cool tip: you can add color to the validator errors using the colors inside the `log.ts` file.

### IMPORTANT

Scully plugins are files with `.js` extension, which should be exported and used in `scully.config.js`
file using the `require()` method.

## <a name="router-plugin"></a> Router Plugins

### <a name="router-plugin-what-is"></a> What is a Router Plugin?

Scully needs **router plugins** to discover data needed to pre-render your app's views. Any route that has a route
parameter in it will require you to configure a **router plugin** that teaches Scully how to get the data needed for
those route parameters.

Suppose your app has a route `{path: 'user/:userId', component: UserComponent}`. In order for Scully to pre-render your
app, it needs to know the complete list of User IDs that will be used in that route parameter `:userId`. If your app
had 5 users with the IDs 1, 2, 3, 4, and 5, then Scully would need to render the following routes:

```
/user/1
/user/2
/user/3
/user/4
/user/5
```

A **router plugin** is used to convert the raw route config into a list of routes that Scully can then crawl/render.

## `HandledRoute` interface

```typescript
export interface HandledRoute {
  route: string;
  type: RouteTypes;
  postRenderers?: string[];
  templateFile?: string;
  data?: RouteData;
}
```

The `HandledRoute` interface provides you properties to develop your own plugin.

### route: string

`route` is a reference to the route to handle in your project.

### type: RoutesTypes

`type` is a reference of the router plugin.

It should be to the type of the existing Route plugin.

### postRenderers?: string[]

`postRenderers` is a reference to plugins you want to be executed after Scully's render process.

### templateFile?: string

`templateFile` is a reference to the name of the template to render the content.

**Important**, It's not a reference to the angular template.\_

### data?: RouteData

`data` is a reference to all the metadata we want to add into the static file, it could be:

- title
- author
- A custom property.

```typescript
export interface RouteData {
  title?: string;
  author?: string;
  [prop: string]: any;
}
```

### <a name="router-plugin-interface"></a> Router Plugin Interface

A **router plugin** is a function that returns a `Promise<HandledRoute[]>`. Let's look at the interface of the route
plugin as well as the `HandledRoute`.

```typescript
interface HandledRoute {
  route: string;
}

function exampleRouterPlugin(route: string, config: any): Promise<HandledRoute[]> {
  // must return a promise here
}
```

The `HandledRoute[]` gets added into the `scully-routes.json` that is generated when you run `npm run scully`.

### <a name="router-plugin-how-to"></a> How To Make A Router Plugin

In our previous example of an app with the route `/user/:userId` where we have five distinct userIds, here is a **router
plugin** that would turn the raw route into five distinct HandledRoutes.

```javascript
const {registerPlugin} = require('@scullyio/scully');

function userIdPlugin(route: string, config = {}): Promise<HandledRoute[]> {
  return Promise.resolve([
    {route: '/user/1'},
    {route: '/user/2'},
    {route: '/user/3'},
    {route: '/user/4'},
    {route: '/user/5'},
  ]);
}
// DON'T FORGET THIS STEP
const validator = async conf => [];
registerPlugin('router', 'userIds', userIdPlugin, validator);
```

Once we have built a plugin, we can configure our `scully.config.js` to use our plugin.

### <a name="router-plugin-configure"></a> How To Configure A Router Plugin

The following configuration uses our `userIds` router plugin to get the `HandledRoute[]` for our app:

```javascript
// scully.config.js
exports.config = {
  // Add the following to your file
  routes: {
    '/user/:userId': {
      type: 'userIds',
    },
  },
};
```

The following is an example that uses the [jsonplaceholder](http://localhost:8200/) to fetch a list of
User IDs for my app. It uses the [JSON Plugin](../scully/routerPlugins/jsonRoutePlugin.ts) which is already part of Scully.

```javascript
// scully.config.js
exports.config = {
  // Add the following to your file
  routes: {
    '/user/:userId': {
      type: 'json',
      userId: {
        url: 'http://localhost:8200/users',
        property: 'id',
      },
    },
  },
};
```

The above snippet tells Scully that when it sees a route that matches `/user/:userId` it should use the `json` plugin
to fetch some JSON via HTTP. After declaring the type of `json`, the above example has a key `userId`. The value for
`userId` contains two pieces of data. First, the url that the JSON plugin should go to to get this required JSON. The
second is `property`. The JSON plugin will pluck the provided property name from each of the items in the array. This
means that the array returned by the jsonplaceholder api will each have an `id` property. So instead of returning a list
users, it will return a list of userIds.

The JSON Plugin will optionally accept also a header configuration where you can set specific header that you may have to sent when requesting an API:

```javascript
// scully.config.js
exports.config = {
  routes: {
    '/todos/:todoId': {
      type: 'json',
      todoId: {
        url: 'https://my-api.com/todos',
        property: 'id',
        headers: {
          'API-KEY': '0123456789',
        },
      },
    },
  },
};
```

### <a name="router-plugin-configure"></a> Router Plugin Examples

For those looking to build router plugins for their app, here are links to the built-in **router plugins** in Scully:

- [JSON Plugin](../scully/routerPlugins/jsonRoutePlugin.ts)
- [Content Folder Plugin](../scully/routerPlugins/contentFolderPlugin.ts)

[Back to top](#plugins)

---

## <a name="render-plugin"></a> Render Plugins

### <a name="render-plugin-what-is"></a> What is a Render Plugin?

A **render plugin** is used to transform the HTML that your app rendered. After your Angular app renders the page,
that rendered content/HTML is passed to a **render plugin** where it can be further modified. An example of why you
would want to use a render plugin: to transform a page that contains markdown into a page that contains the rendered
markdown.

### <a name="render-plugin-interface"></a> Render Plugin Interface

A **render plugin** is a function that returns a `Promise<String>`. The string in the promise must be the transformed
HTML. Here is what the interface looks like:

```typescript
function exampleContentPlugin(HTML: string, route: HandledRoute): Promise<string> {
  // must return a promise here
}
```

### <a name="render-plugin-how-to"></a> How To Make A Render Plugin

The following is a sample **render plugin** that adds a title to the head of a page if it doesn't find one.

```typescript
const {registerPlugin} = require('@scullyio/scully');

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
// DON'T FORGET THIS STEP
const validator = async conf => [];
registerPlugin('render', 'defaultTitle', defaultTitlePlugin, validator);

module.exports.defaultTitlePlugin = defaultTitlePlugin;
```

In this example, the HTML that the Angular app rendered is transformed to include a title (if one wasn't found). This
is the primary function of a render plugin.

Here is another example that would replace any instances of `:)` with a smiley emoji:

```typescript
const {registerPlugin} = require('@scullyio/scully');

function smileEmojiPlugin(html, route) {
  return Promise.resolve(html.replace(/\:\)/g, '😊'));
}
// This registers your plugin as
const validator = async conf => [];
registerPlugin('render', 'smiles', smileEmojiPlugin, validator);

module.exports.smileEmojiPlugin = smileEmojiPlugin;
```

### <a name="render-plugin-configure"></a> Render Plugin Examples

Here are links to the built-in **render plugins** in Scully:

- [Route Content Renderer Plugin](../scully/renderPlugins/routeContentRenderer.ts)
- [Content Folder Plugin](../scully/)

[Back to top](#plugins)

---

## <a name="file-plugin"></a> File Handler Plugins

### <a name="file-plugin-what-is"></a> What is a File Handler Plugin?

A **file handler plugin** is used by the `contentFolder` plugin during the `render` process. As the `contentFolder`
plugin processes the folders for markdown files or whatever they contain, it ends that process by seeing if a
`fileHandler` plugin exists for that file extenion type.

Scully comes with two built-in `fileHandler` plugins. The [markdown plugin](../scully/fileHanderPlugins/markdown.ts) and
the [asciidoc plugin](../scully/fileHanderPlugins/asciidoc.ts). These two plugins are there to handle and process the
content of those types of files as they are read from the file system.

Suppose you wanted to support `.docx` files, or `.csv` files, or anything else. You would want to add a file handler
for those types of files. The `contentFolder` plugin will take care of reading those files from the filesystem, but
what if you wanted to transform them somehow AFTER the `contentFolder` plugin reads them. You would need a `fileHandler`
plugin for this.

### <a name="file-plugin-interface"></a> File Handler Plugin Interface

A **file handler plugin** is a function that returns a `Promise<string>`. Here is what the interface looks like:

```typescript
function exampleFileHandlerPlugin(rawContent: string): Promise<string> {
  // must return a promise here
}
```

### <a name="file-plugin-how-to"></a> How To Make A File Handler Plugin

The following is a sample **file handler plugin** that handles CSV by wrapping it in a code block. You could of course,
do something much more elaborate like create a table or a grid for this data. Example:

```typescript
function csvFilePlugin(raw) {
  return Promise.resolve(`<pre><code>${code}</code></pre>`);
}
// This registers your plugin
registerPlugin('fileHandler', 'csv', {handler: csvFilePlugin});

module.exports.csvFilePlugin = csvFilePlugin;
```

### <a name="file-plugin-configure"></a> File Handler Plugin Examples

Here are links to the built-in **render plugins** in Scully:

- [asciidoc Plugin](../scully/fileHanderPlugins/asciidoc.ts)
- [markdown Plugin](../scully/fileHanderPlugins/markdown.ts)

[Back to top](#plugins)

[Full Documentation ➡️](scully.md)
