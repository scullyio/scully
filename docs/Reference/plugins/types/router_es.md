---
title: Complemento del tipo router
published: true
lang: es
position: 100
---

# Complemento de tipo `router`

## Visión General

Cualquier ruta en la aplicación que contenga un `router-parameter` deben estar configuradas en un **complemento router**. El complemento le enseña a Scully como obtener información para pre-renderizar para las páginas web a partir de route-params.

## Uso

Veamos una aplicación que tiene una ruta como esta: `{path: 'user/:userId', component: UserComponent}`. Para que Scully pre-renderice la página web, necesita saber la lista completa de ids de usuarios que serán usados para el parámetros `:userId`. Si la aplicación tiene 5 usuario con IDs 1, 2, 3, 4 y 5: Scully debe renderizar las siguientes rutas:

```
/user/1
/user/2
/user/3
/user/4
/user/5
```

Un **complemento `router`** es usado para convertir route-config en una lista de rutas que Scully pueda rastrear

## Creando un complemento `router`

Vamos a implementar un **complemento `router`** que retorne una ruta en 5 rutas `HandledRoutes` distintas para una aplicación que contiene la siguiente ruta `/user/:userId`.

```javascript
const { registerPlugin } = require('@scullyio/scully');

function userIdPlugin(route: string, config = {}): Promise<HandledRoute[]> {
  return Promise.resolve([
    { route: '/user/1' },
    { route: '/user/2' },
    { route: '/user/3' },
    { route: '/user/4' },
    { route: '/user/5' },
  ]);
}

registerPlugin('router', 'userIds', userIdPlugin, validator);
```

Luego de implementar el complemento, hay que configurar `scully.config.ts` para usar el complemento.

## Configurando el complemento `router`

La siguiente configuración usa el complemento `userIds` para obtener `HandledRoute[]` a partir de la implementación vista:

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

## Interfaz

### Interfaz `HandledRoute`

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

La interfaz `HandledRoute` provee todas las propiedades necesarias para desarrollar tu propio complemento.

#### `route: string`

Una ruta de la aplicación para ser manejadas por Scully.
Corresponde a la información una ruta _completa_. Esto significa que no debe tener variables definidas.
`#` no está permitido, y los `query parameters` son ignorados.

#### `type: RoutesTypes`

Indica el tipo de complemento. Contiene el nombre del complemento que debería manejarlo.
Este es un campo obligatorio y _debe_ ser definido. Si falta este campo, Scully terminá su ejecución porque no sabrá qué hacer.

#### `defaultPostRenderers?: string[]`

Arreglo con un string con los identificadores de los content-renderers que ejecutaran todas las rutas.

#### `postRenderers?: string[]`

Arreglo de nombres de complementos que se ejecutarán después de renderizar la página inicial.

Cada uno de los complementos en este arreglo renderizán en el orden establecido, recibirán el HTML resultante del complemento anterior.

Además, este arreglo _reemplaza_ el arreglo de `defaultPostRenderers`.

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

El `defaultPostRenderers` y `postRenderers` son está diseñados para poder reemplzar los renderizadores por defecto. Además, el diseño actual es versátil, flexible y facilita el reemplazo de post-renderes.

¡No te olvides de agregar el `defaultPostRenderers`!

#### `templateFile?: string`

El nombre del archivo que contiene la plantillaque a renderizar **¡No tiene relación con las plantillas Angular!**

Esta propiedad es especifica para `contentFolder`. Contiene la ruta completa al archivo que se usará para generar el contenido.

Recuerda que el contenido será insertado _despues_ del renderizado inicial.

#### `data?: RouteData`

Los datos que hay en esta propiedad serán agregados en `scully.routes.json`
Esta información también se extiende en las rutas `contentFolder` con los datos del encabezado del archivo template.

```typescript
export interface RouteData {
  title?: string;
  author?: string;
  published?: boolean;
  [prop: string]: any;
}
```

### Router Plugin Interface

Un **complemento router** es una función que devuelve una `Promise<HandledRoute[]>`.

La interfaz `HandledRoute` se describe como se ve arriba. Recibe un string con una ruta no controlada y una configuración de ruta específica.

La función de un complemento router debe lucir así:

```typescript
function exampleRouterPlugin(
  route: string,
  config: any
): Promise<HandledRoute[]> {
  // Must return a promise
}
```

`HandledRoute[]` obtiene los datos agregados en el archivo generado `scully-routes.json` por el comando `npm run scully`.
