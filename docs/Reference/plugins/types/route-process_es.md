---
title: Tipo de complemento routeProcess
published: true
lang: es
position: 100
---

# Tipo de complemento `routeProcess`

## Visión General

Cualquier ruta dentro de la aplicación que contenga un parámetro deber estar configurado en un **complemento route process**.
El complemento le enseña a Scully como obtener los datos requiridos para pre-renderizar las páginas webs para esos route-params.

Un `complemento route process` permite modificar cualquiera de esas rutas.

## Uso

Imagina una aplicación que tenga las siguientes rutas configuradas por el [complemento route process](/docs/Reference/plugins/types/router):

```
/user/1
/user/2
/user/3
/user/4
/user/5
```

Si quieres removes las rutas `'user/3` u `'user/5`. Un **complemento `route process`** puede hacerlo.

## Creando un Complemento `route process`

Veamos cómo implementar un **complemento `route process`** que elimine 2 `HandledRoutes` de una aplicación que tiene la siguiente ruta: `/user/:userId`.

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

Luego de implementar el complemento, se configura el archivo `scully.config.ts` para que pueda ser usado.

## Configurando el complemento`route process`

La siguiente configuración usa el complemento `removeUserIds` para procesar las `HandledRoute[]` recibidas por la implementacion anterior:

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

La interfaz `HandledRoute` provee las propiedades necesarias para desarrollar tu propio complemento.

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

### Interfaz del complemento de Route Process

```typescript
export type RouteProcess = (routes: HandledRoute[]) => Promise<HandledRoute[]>;
```

Un **complemento route process** es una función que recive un arreglo de `HandledRoute` para ser procesada y luego devuelta

La interfaz `HandledRoute` se descrita arriba, recibe un string junto con una ruta no controlada, y la configuración que especifica esa ruta.

La función del complemento route process debería ser así:

```typescript
function exampleRouterPlugin(routes: HandledRoute[]): Promise<HandledRoute[]> {}
```

Recibe un arreglo de `HandledRoute`. Luego, espera a que procese cada ruta y luego son devueltas
Luego, se agregan dentro del archivo `scully-routes.json` generado por el comando `npm run scully`.
