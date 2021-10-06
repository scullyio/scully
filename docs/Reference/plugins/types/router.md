---
title: router Plugin Type
published: true
lang: en
position: 100
---

# `router` Plugin Type

## Overview

Any route in the application that contains a router-parameter must be configured in a **router plugin**. The plugin teaches Scully how to get the required data to be pre-render in the web-pages from the route-params.

## Usage

Suppose the application has a route like this one: `{path: 'user/:userId', component: UserComponent}`. In order for Scully to pre-render the website, it needs to know the complete list of User IDs that will be used in that route parameter `:userId`. If the app had 5 users with the IDs 1, 2, 3, 4, and 5; Scully would need to render the following routes:

```
/user/1
/user/2
/user/3
/user/4
/user/5
```

A **`router` plugin** is used to convert the raw route-config into a list of routes that Scully can then crawl/render.

## Making a `router` Plugin

Lets implement a **`router` plugin** that turns the raw route into five distinct `HandledRoutes` from an application containing the following route: `/user/:userId`.

```typescript
import { HandledRoute, registerPlugin } from "@scullyio/scully"

function userIdPlugin(route: string, config = {}): Promise<HandledRoute[]> {
  return Promise.resolve([
    { route: '/user/1' },
    { route: '/user/2' },
    { route: '/user/3' },
    { route: '/user/4' },
    { route: '/user/5' },
  ]);
}

const validator = async (conf) => [];
registerPlugin('router', 'userIds', userIdPlugin, validator);
```

After implementing the plugin, configure the `scully.config.ts` in order to use it.

## Configuring a `router` Plugin

The following configuration uses the `userIds` router plugin to get the `HandledRoute[]` for the above implementation:

```typescript
// scully.config.ts
import './myPlugins/userIdPlugin';
exports.config = {
  // Add the following to your file
  routes: {
    '/user/:userId': {
      type: 'userIds',
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

### Router Plugin Interface

A **router plugin** is a function that returns a `Promise<HandledRoute[]>`.

The `HandledRoute` interface is described above. It receives a string with the unhandled route, and the config for that specific route.

A router plugin function should be as follows:

```typescript
function exampleRouterPlugin(
  route: string,
  config: any
): Promise<HandledRoute[]> {
  // Must return a promise
}
```

The `HandledRoute[]` gets it data added into the `scully-routes.json` file generated by the `npx scully` command.
