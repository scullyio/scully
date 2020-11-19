---
title: Funciones útiles de Scully
lang: es
position: 170
---

# Funciones útiles de Scully

Scully expone un conjunto de funciones que ayudan a crear complemento más fácilmente

## routeSplit

Uso:

```typescript
const { parts, params, createPath } = routeSplit(route);
```

Toma una ruta no controlada y devuelve:

- createPath. Una función que toma la misma cantidad de parámetros que hay en la url y devuelve una ruta completa
- parts. Un arreglo con todas las partes que componen un objeto `{part:textOfPat, position}`
- params. Un objeto donde todos los parámetros son una propiedad

Normalmente, sólo tengas que usar la función `createPath`.

Aquí podemos ver una demostración de su uso:

```typescript
import {
  HandledRoute,
  registerPlugin,
  routeSplit,
  ScullyConfig,
} from '@scullyio/scully';

/** you can load this data any way you like, even import it from some static TS file isn't a problem. */
const myData = [1, 45, 6, 23, 77];

registerPlugin('router', 'mySample', async (route: string, config) => {
  const { createPath } = routeSplit(route);
  const myRoutes: HandledRoute[] = myData.map((id) => ({
    type: 'mySample',
    route: createPath(`${id}`),
  }));

  return myRoutes;
});

/** in your config do something like:
export const config: ScullyConfig = {
  routes: {
    '/fromData/:id': {
      type: 'mySample',
    },
  },
};
*/
```

## httpGetJson

Uso:

```typescript
httpGetJson(url).then((response) => console.log(response));
```

O en una función asíncrona:

```typescript
const response = await httpGetJson(url);
```

Toma una URl y devuelve un Promise que se resuelve en un objeto que representa el JSON retornado por la URL.
La URL debe responder a una petición GET con un objeto JSON y un header `Content-Type: application/json`.

Esta es una demostración simple de su uso:

```typescript
import {
  HandledRoute
  httpGetJson,
  registerPlugin,
  routeSplit} = from '@scullyio/scully';

registerPlugin('router', 'mySample', async(route: string, config) => {
  const myData = await httpGetJson(config.url);
  const { createPath } = routeSplit(route);
  const myRoutes: HandledRoute[] = myData.map((item) => ({
      route: createPath(item.id)
  }));
  return myRoutes;
})
```

Entonces en la configuracion debe tener esta forma:

```typescript
export const config: ScullyConfig = {
  routes: {
    '/fromData/:id': {
      type: 'mySample',
      url: 'http://localhost:4200/assets/data.json',
    },
  },
};
```

## getHandledRoutes

## setPluginConfig

## getPluginConfig

## findPlugin

## createFolderFor

## getMyConfig

## setMyConfig
