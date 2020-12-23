---
title: findPlugin
published: true
lang: en
position: 100
---

# findPlugin

The [`findPlugin`](https://github.com/scullyio/scully/blob/main/libs/scully/src/lib/pluginManagement/pluginConfig.ts#L49) function retrieves a plugin from Scully and returns it. It takes a single parameter:

```typescript
findPlugin(name: string | symbol)
```

#### name: string | symbol

- The plugin's name.
- This must be unique for the type of plugin.

## Example

If you need access to a plugin somewhere to invoke the plugin, you can use the `findPlugin` method. The method returns an instance of the plugin that can be invoked. At that point, you will just need to pass the plugin its required parameters. For example, a `render` plugin generally needs a string that represents the HTML as the first parameter, and a `HandledRoute` as the second parameter. A `router` plugin takes an array of `HandledRoute`s.

```typescript
const routerPlugin = findPlugin('myRouterPlugin');
const pluginResult = await routerPlugin(routes);

// OR

const renderPlugin = findPlugin('myRenderPlugin');
const pluginResult = await renderPlugin(htmlString, handledRouteData);
```
