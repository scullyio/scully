---
lang: es
position: 100
published: true
title: Configuración de Scully
---

# Configuración de Scully

<div class="docs-link_table">
  <a class="view-in-repo" href="https://github.com/scullyio/scully/blob/main/libs/scully/src/lib/utils/interfacesandenums.ts"></a>
</div>

## Visión General

La parte central de un proyecto Scully es el archivo `scully.<projectname>.config.ts`. Este archivo exporta la configuración de Scully para la aplicación.

Si eres nuevo con Scully, recomendamos leer la documentacion [primeros pasos](docs/learn/getting-started/requirements).

El estructura del archivo `scully.<projectname>.config.ts` es:

## Interfaz

```typescript
export interface ScullyConfig {
  /** is this a bare project (without angular.json?) */
  bareProject?: boolean;
  /** the name of the project we are using. Provided by Scully itself */
  projectName?: string;
  /** the folder where project is. Can be any off the projects in a repo, read from angular.json */
  projectRoot?: string;
  /** the folder where the project sources resides, read from angular.json */
  sourceRoot?: string;
  /** Array with string ID's of the content-renderers that will be run on all routes */
  defaultPostRenderers?: (string | symbol)[];
  /** the root of the project (where angular.json lives) */
  homeFolder?: string;
  /** the destination of the Scully generated files */
  outDir?: string;
  /** the folder used by the scully server to serve the generated files. defaults to outDir */
  outHostFolder?: string;
  /** the place where distribution files of the project are. Should be a subfolder of dist. */
  distFolder?: string;
  /** the folder used to serve the angular distribution files, defaults to distFolder */
  hostFolder?: string;
  /** transferState only inlined into page, and not written into separate data.json */
  inlineStateOnly?: boolean;
  /** routes that need additional processing have their configuration in here */
  routes: RouteConfig;
  /** routes that are in the application but have no route in the router */
  extraRoutes?: string | string[] | Promise<string[] | string>;
  /** Port-number where the original application is served */
  appPort?: number;
  /** Boolean that determines saving of site-tumbnails files */
  thumbnails?: boolean;
  /** port-number where the Scully generated files are available */
  staticPort?: number;
  /** port for the live reload service */
  reloadPort?: number;
  /** optional proxy config file, uses the same config file as the CLI */
  proxyConfig?: string;
  /** optional launch-options for puppeteer */
  puppeteerLaunchOptions?: PuppeteerNodeLaunchOptions;
  /** hostname to use for local server, defaults to `localhost` */
  hostName?: string;
  /** optional hostURL, if this is provided, we are going to use this server instead of the build-in one. */
  hostUrl?: string;
  /** optional guessParserOptions, if this is provided we are going to pass those options to the guess parser. */
  guessParserOptions?: GuessParserOptions;
  /** the maximum of concurrent puppeteer tabs open. defaults to the available amounts of cores */
  maxRenderThreads?: number;
  /** the resource types to ignore when generating pages via Puppeteer */
  ignoreResourceTypes?: ResourceType[];
  /** how to handle 404 in Scully server */
  handle404?: string;
}
```

## Properties

La interfaz `ScullyConfig` provee los parametros para configurar como Scully trabaja en un proyecto.

#### projectRoot

El nombre del proyecto que Scully generará el contenido estático.

#### homeFolder

Una referencia a la carpeta raíz del proyecto Angular.
Esta propiedad es para uso interno, y por defecto para la ubicación para el archivo angular.json.

#### outDir

La ubicación de la carpeta donde Scully dejará los archivos estáticos.
No debe ser igual al utilizado en `distFolder`.
Por defecto es:

```
./dist/static
```

#### distFolder

Ubicación a la carpeta dist de la aplicación Angular.
Scully toma la ubicación del archivo `angular.json` y la usará esta carpeta para el renderizado.
Esta opción puede ser modificada a tus necesidades.

#### routes

Scully tiene dos tipos de rutas, [rutas no manejadas](/docs/concepts/unhandled-routes) y [rutas manejadas](/docs/concepts/handled-routes):

Todas las rutas no manejadas con información dinámica necesitan ser manejadas por un complemento de rutas. Cuando hay una ruta con datos dinámicos que no tiene configuración, será informada en la pantalla y se no se procesará.

> **Esto significa que NO HAY ARCHIVOS ESTATICOS para rutas con DATOS DINÁMICOS**

Para mas información sobre complementos router, vista la documentación de [complementos](/docs/Reference/plugins/overview).

#### extraRoutes

Permite a los desarrolladores agregar un arreglo de rutas no manejadas. Esas rutas pueden existir en AngularJS, React o cualquier otro framework.

```typescript
extraRoutes: [
  '/foo/:id',
  new Promise('/bar/:barId'),
  new Promise(['/foo/:fooId', '/bar/:id']),
];
```

#### appPort

Scully provee un servidor para renderizar la aplicación Angular. Esto significa que toma tu aplicación de la carpeta dist y la aloja en `http://localhost:1864`.(al menos que no hayas modificado la configuración por defecto). Es en esta ubicación donde el proceso de renderizado observa cuando debe renderizar.

Configura el puerto donde la aplicación Angular se ejecuta.

Por defecto es el puerto: `1864`.

#### staticPort

Similar a [appPort](#appport-number), `staticport` provee un servidor para renderizar los archivos estáticos compilados por Scully. Esto significa que, (al menos que no hayas modificado la configuración por defecto) puedes examinar el resultado de Scully en `http://localhost:1668`.

El puerto por defecto es: `1668`

#### proxyConfig

Toma el nombre del archivo relativo para el archivo de configuración de proxy.

Para mas detalles visita [http-proxy-middleware](https://github.com/chimurai/http-proxy-middleware)  
Scully usa el mismo formato de configuración que [webpackDevServer](https://webpack.js.org/configuration/dev-server/#devserverproxy)  
Esta es una propiedad opcional, y es sólo utilizada por [Angular CLI](https://angular.io/guide/build#proxying-to-a-backend-server)

También puede ser provisto con el parámetro en la consola de comandos `--proxy filename`.

#### puppeteerLaunchOptions

Si la aplicación se encuentra en un entorno restringido, las opciones por defecto de puppeteer pueden no funcionar. En este paso, esta opción puede ser sobreescrita con la configuración especifica para ese entorno.

**Una palabra de advertencia,** algunas configuraciones pueden interferir con la manera en que Scullly funciona, creando resultados incorrectos.
Lea mas sobre [puppeteerlaunchoptions](https://pptr.dev/#?product=Puppeteer&version=v2.0.0&show=api-puppeteerlaunchoptions) para más información.

#### hostName

Permite configurar un nombre diferente para `localhost`.

#### hostUrl

Conecta tu aplicación a un host diferente. Esto es útil cuando usas tu propio servidor.

#### guessParserOptions

El `guessParserOptions`que se pasa a la librería `guess-parser`.

Actualmento sólo soporta la propiedad `excludedFiles`, y es excluida del proceso de descubrimiento de rutas del `guess-parser`.

#### ignoreResourceTypes

El arreglo `ignoreResourceTypes` es pasado a `puppeteerRenderPlugin`.  
Cualqueir `ResourceType` que es observado y se encuentra en este arreglo, es ignorado por la instancia de Puppeteer que renderiza la página solicitada.
Por ejemplo, si agregas un `image` y `font`, todas las peticiones de imágenes y fuentes cargadas en tus páginas serán ignoradas.

#### handle404

Cómo maneja el servidor de Scully las rutas que **no** estan provistas en tu aplicación.
cuando el servidor recibe una petición de una ruta (file) que no existen en el sistema de archivos, esta opción define como manejar esta ruta.

| opción         | resultado                                                                     |
| -------------- | ----------------------------------------------------------------------------- |
| `""` (defecto) | Renderizará una página 404 y diparará una advertencia durante el renderizado. |
| `index`        | Renderizará `index.html` de la carpeta raíz dist.                             |
| `baseOnly`     | Usará express para comparar las rutas no manejadas.                           |
| `404`          | Renderizará `404.html` de la carpeta raíz dist.                               |
| `none`         | Dejará que express maneja la petición                                         |
