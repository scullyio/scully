---
title: Scully util functions
lang: en
position: 170
---

# Utility functions

Scully exposes a number of helper functions that aim to make it easier to build plugins

## routeSplit

Usage:

```typescript
const { parts, params, createPath } = routeSplit(route);
```

Takes an unhandled route, and returns:

- createPath. A function that takes the same amount of parameters as there are in the URL and returns a fully filled in route
- parts. An array with all parts split at as a object `{part:textOfPat, position}`
- params. An object where all parameters are a property

Usually, you only need to use the `createPath` function.

Here the use is demonstated in a sample:

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

Usage:

```typescript
httpGetJson(url).then((response) => console.log(response));
```

Or in an async function:

```typescript
const response = await httpGetJson(url);
```

Takes a URL, and returns a promise that resolves into the object representing the json returned by the URL.
The URL has to respond to a GET request with a json object and a `Content-Type: application/json` header.

Here the use is demonstrated in a sample:

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

Then on your config do something like:

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
