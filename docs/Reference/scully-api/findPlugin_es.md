---
title: findPlugin
published: true
lang: es
position: 100
---

# findPlugin

La función [`findPlugin`](https://github.com/scullyio/scully/blob/main/libs/scully/src/lib/pluginManagement/pluginConfig.ts#L49) obtiene el complemento de Scully y lo retorna. Toma 3 parámetros, pero sólo el primero es requerido. Si el primer parámtro es un tipo de complemento (por ejemplo:`render` or `allDone`), el segundo parámtro es un nombre de un complmento o un Symbol. También puede pasar el nombre o símbolo del complemento como el primer y único parámetro.

```typescript
findPlugin(pluginType | name | symbol, name | symbol, (throwOnNotFound = true));
```

#### pluginType: PluginTypes

- [The plugin's type](/docs/Reference/plugins/types/overview).

#### name: string | symbol

- El nombre del complemento.
- Debe ser unico para el tipo del complemento.

#### throwOnNotFound

- Por defecto es `true`
- Normalmente se utiliza para uso interno.
- Si desea utilizar complementos opcionales, establezca el parámetro en false. Si no se encuentra el complemento, la función devuelve `undefined`.

## Ejemplo

Si necesitas un acceso a un complmento para invocar, puede usar el método `findPlugin`. El método retorna una instancia del complemento que fué invocado. En este punto, solo necesitas pasar al complemento los parámetros requeridos. Por ejemplo, un complemento `render` normalmente necesita un string que representa el HTML como el primer parámetro, y un `HandleRoute` como segundo parámetro. Un complemnto `router` toma un arreglo de `HandleRoute`'s.

```typescript
const routerPlugin = findPlugin('myRouterPlugin');
const pluginResult = await routerPlugin(routes);

// OR

const renderPlugin = findPlugin(RenderPlugin, 'myRenderPlugin');
const pluginResult = await renderPlugin(htmlString, handledRouteData);
```
