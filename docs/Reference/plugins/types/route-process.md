---
title: Route Process Plugin Type
published: true
lang: en
position: 100
---

# `routeProcess` Plugin Type

## Overview

Any route in the application that contains a router-parameter must be configured in a **route process plugin**.
The plugin teaches Scully how to get the required data to be pre-render in the web-pages from the route-params.

A `route process plugin` allows you to manipulate any of those routes.

## Usage

Suppose the application has the following routes already configured by a [route process plugin](/docs/Reference/plugins/types/router):

```
/user/1
/user/2
/user/3
/user/4
/user/5
```

If you want to remove routes: `'user/3` and `'user/5`. A **`route process` plugin** can be used for this.

## Making a `route process` Plugin

Lets implement a **`route process` plugin** that removes 2 `HandledRoutes` from an application containing the following route: `/user/:userId`.

```javascript
const { registerPlugin } = require('@scullyio/scully');

function removeUserIdPlugin(
  routes: HandledRoute[],
  config = {}
): Promise<HandledRoute[]> {
  return Promise.resolve([{ route: '/user/3' }, { route: '/user/5' }]);
}

registerPlugin('router', 'removeUserIds', removeUserIdPlugin, validator);
```

After implementing the plugin, configure the `scully.config.ts` file in order to use it.

## Configuring a `route process` Plugin

The following configuration uses the `removeUserIds` route process plugin to process the `HandledRoute[]` received for the above implementation:

```typescript
// scully.config.ts
import './myPlugins/removeUserIdPlugin';
exports.config = {
  // Add the following to your file
  routes: {
    '/user/:userId': {
      type: 'removeUserIds',
    },
  },
};
```

## Interfaces

### `HandledRoute` Interface

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
  preRenderer?: (route?: string, config?: RouteConfig) => Promise<void | false>;
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

#### `route: string`

An application route to be handled by Scully.  
This is the _fully qualified_ route info. That means there should be no variables left in there.  
`#` are not allowed, and query parameters are ignored.

#### `type: RoutesTypes`

Indicates the type of plugin. Contains the name of the routing plugin that should handle this.

This is a mandatory field that _must_ be provided. When the type doesn't exist, Scully will terminate, as it doesn't know what to do.

#### `defaultPostRenderers?: string[]`

Array with string ID's of the content-renderers that will be run on all routes.

#### `postRenderers?: string[]`

Array of plugin names to be executed after the initial page render.

Each of the plugins in this array will be rendered in the order they appear, and they will receive the output HTML from the previous plugin.

Moreover, this array _replaces_ the `defaultPostRenderers` array.

```typescript
const defaultPostRenderers = ['seoHrefOptimise'];
const sampleConf: ScullyConfig = {
  defaultPostRenderers,
  routes: {
    /** gets the default postrenderes */
    normalRoute: {
      type: 'default',
    },
    /** adds to the default postrenderes */
    someRoute: {
      type: 'default',
      postRenderers: [...defaultPostRenderers, 'myAddition'],
    },
    /** removes the default postrenderes */
    someOtherRoute: {
      type: 'default',
      postRenderers: ['unique'],
    },
  },
};
```

The `defaultPostRenderers` and `postRenderers` are designed this way in order to allow you to dispose of the default renderers. Moreover, the current design is versatile, flexible, and it makes it easy to opt-out.

Do not forget to add the `defaultPostRenderers`!

#### `templateFile?: string`

The file's name containing the template to be rendered. **Unrelated to the Angular template!**

This property is specific to `contentFolder`. It contains the full path to the file that should be used to generate the content.

Remember that content will be inserted _after_ the initial rendering.

#### `data?: RouteData`

The data added to this property will be added to the routes data in `scully.routes.json`  
This data will also be extended in `contentFolder` routes with the front-matter data out of the start of the templateFile.

```typescript
export interface RouteData {
  title?: string;
  author?: string;
  published?: boolean;
  [prop: string]: any;
}
```

### Route Process Plugin Interface

export type RouteProcess = (routes: HandledRoute[]) => Promise<HandledRoute[]>;

A **route process plugin** is a function that that receives an array of `HandledRoute` to b processed and it returns them.

The `HandledRoute` interface is described above. It receives a string with the unhandled route, and the config for that specific route.

A route process plugin function should be as follows:

```typescript
function exampleRouterPlugin(routes: HandledRoute[]): Promise<HandledRoute[]> {}
```

It receives an array of `HandledRoute`. Then, it waits for each route to be processed and then they are returned.
Then, they are added into the `scully-routes.json` file generated by the `npm run scully` command.
