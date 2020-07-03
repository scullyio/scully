---
title: Plugins
order: 700
lang: es
---

# Plugins

Scully utiliza un sistema de plugins que permite a los usuarios definir nuevas formas en las que Scully haga el pre-render de la aplicación. Hay cinco tipos
principales de plugins:

1. [Router Plugin](#router-plugin)
2. [Render Plugin](#render-plugin)
3. [File Handler Plugin](#file-handler-plugin)
4. [routeDiscoveryDone plugin](#routediscoverydone-plugin)
5. [allDone plugin](#alldone-plugin)

Puede encontrar una lista de plugins disponibles la documentación de [plugins recomendados ](recommended-plugins_es.md).

---

## Cómo Registerar un Plugin

La función `registerPlugin` agrega un nuevo plugin a Scully y tiene 5 parámetros:

- type
- name
- plugin
- validator (optional)
- options (optional)

### type: string

`type` - Indica el tipo de the plugin. Los tipos existentes son: `router`, `render`, `fileHandler`, `allDone`, o `routeDiscoveryDone`.

### name: string

`name` - El nombre del plugin. Este debe ser único para el tipo de plugin. Para remplazar un plugin existente, agregue la opción `replaceExistingPlugin`.

### plugin: any

`plugin` - La función del plugin. Los tipos de plugins estan explicados en su propia descripción.

### validator: función (optional)

`validator` - Función de validación que debe regresar un arreglo de errores. Si no hay errores, debe regresar un valor `false`. Si regresa un `string<array>`, esos strings son los erroresa mostrar y el proceso en ejecición es abortado.

> Tip: Agregar color a los errores de validació utilizando la extensión de color de Scully.

##### Ejemplo de un Validator

```typescript
import { yellow } from '@scullyio/scully';

// Código omitido

const validator = async options => {
  const errors = [];

  if (options.numberOfPages && typeof options.numberOfPages !== 'number') {
    errors.push(
      `my-custom-plugin numberOfPages should be a number, not a ${yellow(
        typeof options.numberOfPages
      )}`
    );
  }

  return errors;
};
```

### Opciones

El objeto `optinal` permite agregar las opciones del plugin. Por el momento, la única opción disponible es `replaceExistingPlugin`.

## Router Plugin

Cada ruta en la aplicación que contiene un parámetro de ruta debe ser configurado en un **router plugin**. El plugin enseña a Scully como obtener los datos que requiere para hacer el pre-render de las páginas provenientes de los parámetros de ruta.

Suponga que la aplicación tiene una ruta como esta: `{path: 'user/:userId', component: UserComponent}`. Para que Scully haga el pre-render del sitio web, necesita la lista completa de los IDs de Usuario que serán usados el el parámetro de ruta `:userId`. Si la tuviera cinco usuarios con IDs 1, 2, 3, 4 y 5; Scully necesitaría mostrar las siguientes rutas:

```
/user/1
/user/2
/user/3
/user/4
/user/5
```

Un **router plugin** se usa para convertir la configuración de ruta con una variable en una lista de rutas que Scully pueda mostrar.

### Interface `HandledRoute`

```typescript
interface RouteConfig {
  /** esta ruta checa inactividad de manera manual */
  manualIdleCheck?: boolean;
  /** tipo de la ruta */
  type?: string;
  /**
   * una función opcional que se ejecuta al mostrar la página.
   * Recive el string de la ruta y su configuración.
   */
  preRenderer?: (route: HandledRoute) => Promise<void | false>;
  /** Permitir en cualquier otra configuración posible, depende de los plugins */
  [key: string]: any;
}

export interface HandledRoute {
  /** La ruta _completa_ */
  route: string;
  /** String, debe ser el nombre de un plugin existente */
  type: string;
  /** la parte relevante de scully-config  */
  config?: RouteConfig;
  /** variables expuestas a angular _¡solo mientras se hace el render!_ */
  exposeToPage?: {
    manualIdle?: boolean;
    transferState?: Serializable;
    [key: string]: Serializable;
  };
  /** datos que serán inyectados en la página estática */
  injectToPage?: {
    [key: string]: Serializable;
  };
  /** arreglo con los nombres de los plugins que serán ejecutados */
  postRenderers?: string[];
  /** el "path" del archivo de contenido */
  templateFile?: string;
  /**
   * datos adicionales que terminarán en el archivo scully.routes.json
   * los datos del frontMatter también serán agregados aquí.
   */
  data?: RouteData;
}
```

La interface `HandledRoute` proporciona las propiedades necesarias para desarrollar su propio plugin.

### route: string

`route` - Una ruta de aplicación que será manejada por Scully. Esta es la información _completamente calificada_ de la route. Esto quiere decir que no debe haber variables restantes aquí. Además el símbolo `#` no está permitido y los parámetros query de ruta son ignorados.

### type: RoutesTypes

`type` - Indica el tipo de plugin. Contiene el nombre del plugin de ruta. Este campo es obligatorio y _debe_ ser proporcionado. Cuando el tipo no existe, Scully finaliza ya que no sabe que hacer.

### defaultPostRenderers?: string[]

`defaultPostRenderers` - Arreglo con ID's de tipo string con los content-renderers que serán ejecutados en todas las rutas.

### postRenderers?: string[]

`postRenderers` - Arreglo de nombres de plugins que se ejecutarán desplues de mostrar la página de inicio. Cada uno de los plugins en este arreglo se mostrarán en el orden en el que aparecen y recibiran el HTML resultante del plugin anterior.
Además, teste arreglo _reemplaza_ el arreglo `defaultPostRenderers`.

```typescript
const defaultPostRenderers = ['seoHrefOptimise'];
const sampleConf: ScullyConfig = {
  defaultPostRenderers,
  routes: {
    /** obtiene los postrenderes por defecto */
    normalRoute: {
      type: 'default'
    },
    /** agrega los postrenderes por defecto */
    someRoute: {
      type: 'default',
      postRenderers: [...defaultPostRenderers, 'myAddition']
    },
    /** remueve los postrenderes por de fecto */
    someOtherRoute: {
      type: 'default',
      postRenderers: ['unique']
    }
  }
};
```

Los `defaultPostRenderers` y los `postRenderers` están diseñados de esta manera con la finalidad de permitirle deshacerse de los renderers por defecto.
Además, este diseño actual de los renders se adapta fácilmente a los diversos casos de uso.

!No olvide agregar los `defaultPostRenderers`!

### templateFile?: string

`templateFile` - ¡No relacionado con la plantilla Angular! El nombre del archivo que contiene la plantilla que se mostrará. Esta propiedad es específica del contentFolder. Contiene el "path" completo al archivo que debe ser utilizado para generar el contenido. Recuerde que dicho contenido será insertado _despues_ del render inicial.

### data?: RouteData

`data` - Los datos agregados a esta propiedad serán agregados a las rutas en `scully.routes.json`. Estos datos también serán extendidos en las rutas del contentFolder.

```typescript
export interface RouteData {
  title?: string;
  author?: string;
  published?: boolean;
  [prop: string]: any;
}
```

### Interface Router Plugin

Un **router plugin** es una función que regresa un `Promise<HandledRoute[]>`. La interface `HandledRoute` se describe en el código anterior. Recibe un string con la ruta aun no manejada y la configuración para esa ruta en específico.

Una función de plugin de ruta se muestra a continuación:

```typescript
function exampleRouterPlugin(
  route: string,
  config: any
): Promise<HandledRoute[]> {
  // Debe regresar una promesa
}
```

Los datos del `HandledRoute[]` son agregados al archivo `scully-routes.json` generado por el comando `npm run scully`.

### Creando un Router Plugin

Se implementará un **router plugin** que regresa la ruta original en HandledRoutes distintas como se mostró en el ejemplo anterior que contiene la siguiente ruta: `/user/:userId`.

```javascript
const { registerPlugin } = require('@scullyio/scully');

function userIdPlugin(route: string, config = {}): Promise<HandledRoute[]> {
  return Promise.resolve([
    { route: '/user/1' },
    { route: '/user/2' },
    { route: '/user/3' },
    { route: '/user/4' },
    { route: '/user/5' }
  ]);
}

registerPlugin('router', 'userIds', userIdPlugin, validator);
```

Después de implementar el plugin, configure el archivo `scully.config.ts` para poder utilizarlo.

### Configurando un Router Plugin

La siguinte configuración usa el plugin de ruta `userIds` para obtener el `HandledRoute[]` para la configuración anterior:

```typescript
// scully.config.ts
import './myPlugins/userIdPlugin';
exports.config = {
  // Agregue las siguientes rutas a su archivo
  routes: {
    '/user/:userId': {
      type: 'userIds'
    }
  }
};
```

## Render Plugin

Un **render plugin** se usa para transformar el HTML que se muestra en las páginas.

Después de que la aplicación de Angular se muestra, el contenido HTML pasa al **render plugin** donde puede seguir siendo modificado.

Un render plugin podría ser utilizado también para transformar una página que contenga markdown en una web que muestre dicho contenido.

### Render Plugin Interface

A **render plugin** es una función que regresa `Promise<String>`. El string en la promesa debe ser transformado a
HTML. La interface se muestra a continuación:

```typescript
function exampleContentPlugin(
  HTML: string,
  route: HandledRoute
): Promise<string> {
  // Debe regresar una promesa
}
```

### Haciendo Un Render Plugin

El siguiente ejemplo de **render plugin** agrega un título al encabezado de la página sí esta no tiene uno.

```typescript
const { registerPlugin } = require('@scullyio/scully');

function defaultTitlePlugin(html, route) {
  // Si el documento no tiene título
  if (html.indexOf('<title') < 0) {
    const splitter = '</head>';
    const [begin, end] = html.split(splitter);
    const defaultTitle = `<title>The Truth Is Out There!</title>`;
    return Promise.resolve(`${begin}${defaultTitle}${splitter}${end}`);
  }
  return Promise.resolve(html);
}

// NO OLVIDE REGISTRAR EL PLUGIN
const validator = async conf => [];
registerPlugin('render', 'defaultTitle', defaultTitlePlugin, validator);

module.exports.defaultTitlePlugin = defaultTitlePlugin;
```

En el ejemplo anterior, el contenido HTML de la aplicación de Angular es transformado para incluir un título porque no se encontró ninguno.

El siguiente ejemplo reemplaza cualquier instancia de `:)` por un emoji sonriente.

```typescript
const { registerPlugin } = require('@scullyio/scully');

function smileEmojiPlugin(html, route) {
  return Promise.resolve(html.replace(/\:\)/g, '😊'));
}
// NO OLVIDE REGISTRAR EL PLUGIN
const validator = async conf => [];
registerPlugin('render', 'smiles', smileEmojiPlugin, validator);

module.exports.smileEmojiPlugin = smileEmojiPlugin;
```

---

## File Handler Plugin

Un **file handler plugin** es usado por el plugin `contentFolder` durante el proceso de `render`. El plugin `contentFolder`
procesa las carpetas con archivos markdownu otro tipo de archivo que contenga. El `render` procesa cualquier plugin `fileHandler` existente para cualquier tipo de extensión de archivo.

Scully tiene dos plugins `fileHandler`. El [markdown plugin](../scully/fileHanderPlugins/markdown.ts) y
el [asciidoc plugin](../scully/fileHanderPlugins/asciidoc.ts). Estos plugins manejan y procesan el
contenido de los archivos correspondientes a su tipo mientras leen los archivos del sistema.

Si desea soportar archivos `.docx`, `.csv`, o de cualquier otro tipo; es necesario agregar un plugin que maneje esos tipos de archivos.
El plugin `contentFolder` se encarga de mostrar el contenido del tipo de archivo correspondiente. Sin embargo, si los archivos necesitan ser transformados despues de que el plugin `contentFolder` los muestre;
Es necesario un plugin de tipo `fileHandler`.

### Interface File Handler Plugin

Un **file handler plugin** es una función que regresa una `Promise<string>`. La interface se muestra a continuación:

```typescript
function exampleFileHandlerPlugin(rawContent: string): Promise<string> {
  // Debe regresar una promesa
}
```

### Haciendo Un File Handler Plugin

El siguiente ejemplo de **file handler plugin** maneja archivos de tipo `.cvs` al envolverlos en un bloque de código. Se podría escribir un plugin mucho más elaborad que creara una tabla o una cuadrícula para los datos.

```typescript
function csvFilePlugin(raw) {
  return Promise.resolve(`<pre><code>${code}</code></pre>`);
}
// NO OLVIDE REGISTRAR EL PLUGIN
registerPlugin('fileHandler', 'csv', { handler: csvFilePlugin });
module.exports.csvFilePlugin = csvFilePlugin;
```

### Ejemplos deFile Handler Plugin

Aquí hay algunos links de **render plugins** ya incluidos en Scully:

- [asciidoc Plugin](../scully/fileHanderPlugins/asciidoc.ts)
- [markdown Plugin](../scully/fileHanderPlugins/markdown.ts)

## RouteDiscoveryDone Plugin

Este tipo de plugin es llamado automáticamente despues de que todas las rutas han sido recogidas y que todos los plugins de ruta hayan terminado. Reciben una copia del arreglo `handledRoute` y regresan `void`.

## AllDone Plugin

Un plugin de tipo `allDone` es parecido a un plugin `routeDiscoveryDone` con la expeción de que se llama _después_ de que Scully termina de ejecutar todos los procesos.
