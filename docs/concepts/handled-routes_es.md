---
lang: es
position: 100
published: true
title: Rutas controladas
---

# Rutas controladas

Cuando tomamos una [ruta no controlada](/docs/concepts/unhandled-routes), y ejecuta utilizando el [plugin de router](/docs/Reference/plugins/types/router), al terminar su ejecución debería existir una ruta controlada. Esto significa que el plugin toma una ruta como esta:

```html
/user/:id
```

y devuelve algo así:

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

Tomaremos esas rutas y agregaremos el `config` y `rawRoute` por cada una de ellas.

> **_Nota:_** Todas las rutas no controladas son envíadas al plugin de router, incluso las que no tienen configuración. Aquellas son manejadas por el manejador de rutas por defecto

## La interfaz del manejador de rutas

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
