---
lang: en
position: 100
published: true
title: Handled Routes
---

# Handled routes

When we take an [unhandled route](/docs/concepts/unhandled-routes), and run that through a [router plugin](/docs/Reference/plugins/types/router), on the other end should come out a handled route. This means a plugin would get a route like this:

```html
/user/:id
```

and returns something like:

```typescript
const handledRoutes:HandledRoute[] = [
  {
    route: '/user/1'
    type: 'json'
  },
  {
    route: '/user/2'
    type: 'json'
  },
  ...
  {
    route: '/user/10'
    type: 'json'
  },
]
```

We will take those routes, and add the `config` and `rawRoute` for each of them.

> **_Note:_** All unhandled routes are being fed to a routerPlugin, even the ones that have no config. Those are handled by the default RouterPlugin

## The handled route interface

```typescript
export interface HandledRoute {
  /** the _complete_ route */
  route: string;
  /** the raw route, will be used by puppeteer over the route.route, will be used as is. must include the http(s):// part and eventual params*/
  rawRoute?: string;
  /** String, must be an existing plugin name. mandatory */
  type?: string;
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
  postRenderers?: (string | symbol)[];
  /** the path to the file for a content file */
  templateFile?: string;
  /** optional title, if data holds a title, that will be used instead */
  title?: string;
  /**
   * additional data that will end up in scully.routes.json
   * the frontMatter data will be added here too.
   */
  data?: RouteData;
  /**
   * Plugin to use for rendering
   * Default to puppeteer
   * this support different renders: puppeteer / imgRender / universal / others
   */
  renderPlugin?: string | symbol;
}
```

```typescript
export interface RouteConfig {
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
```

### ContentTextRoute

There is a extension of handled routes specially for the contentTestPlugin

```typescript
export interface ContentTextRoute extends HandledRoute {
  /** the type of content (MD/HTML this determines what plugin us used for render) */
  contentType?: string;
  /** The actual raw content that will be rendered into scully-content */
  content?: string;
}
```
