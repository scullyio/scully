---
title: findPlugin
published: true
lang: en
position: 100
---

# findPlugin

The [`findPlugin`](https://github.com/scullyio/scully/blob/main/libs/scully/src/lib/pluginManagement/pluginConfig.ts#L49) function retrieves a plugin from Scully and returns it. It takes up to three parameters, but at least the first is required. If the first parameter is the type of the plugin (i.e. `render` or `allDone`), the second parameter needs to be the plugin name or Symbol. You can also just pass the plugin's name or symbol as the first and only parameter if you'd like.

```typescript
findPlugin(pluginType | name | symbol, name | symbol, (throwOnNotFound = true));
```

#### pluginType: PluginTypes

- [The plugin's type](/docs/Reference/plugins/types/overview).

#### name: string | symbol

- The plugin's name.
- This must be unique for the type of plugin.

#### throwOnNotFound

- This parameter defaults to `true`
- Not generally needed for external use
- If you want to use optional plugins, set the parameter to false. If the plugin is not found, the function returns `undefined`.

## Example

If you need access to a plugin somewhere to invoke the plugin, you can use the `findPlugin` method. The method returns an instance of the plugin that can be invoked. At that point, you will just need to pass the plugin its required parameters. For example, a `render` plugin generally needs a string that represents the HTML as the first parameter, and a `HandledRoute` as the second parameter. A `router` plugin takes an array of `HandledRoute`s.

```typescript
const routerPlugin = findPlugin('myRouterPlugin');
const pluginResult = await routerPlugin(routes);

// OR

const renderPlugin = findPlugin(RenderPlugin, 'myRenderPlugin');
const pluginResult = await renderPlugin(htmlString, handledRouteData);
```
