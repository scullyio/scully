---
title: Configuration
order: 300
lang: en
---

# Scully Configuration

The central part of a Scully project is the `scully.<projectname>.config.ts` file. This file exports the Scully build configuration for an application.

If you are new to Scully, it is recommended to read the [Getting Started](getting-started.md) documentation.

<!--- TODO: If you want to enhance a Scully project, read the [Utils](utils.md) documentation. --->

The `scully.<projectname>.config.ts` file's structure is shown below:

- [Scully Configuration](#scully-configuration)
  - [Scully Config Interface](#scully-config-interface)
  - [scullyConfig File's Properties](#scullyconfig-files-properties)
    - [projectRoot](#projectroot)
    - [homeFolder](#homefolder)
    - [outDir](#outdir)
    - [outHostFolder](#outHostFolder)
    - [logFileSeverity](#logfileseverity)
    - [handle404](#handle404)
    - [distFolder](#distfolder)
    - [hostFolder](#hostFolder)
    - [routes](#routes)
      - [Unhandled Routes](#unhandled-routes)
      - [Handled Routes](#handled-routes)
    - [extraRoutes](#extraroutes)
    - [appPort](#appport)
    - [staticPort](#staticport)
  - [proxyConfig](#proxyconfig)
    - [puppeteerLaunchOptions](#puppeteerlaunchoptions)
    - [hostName](#hostname)
    - [hostUrl](#hosturl)
    - [guessParserOptions](#guessparseroptions)
    - [ignoreResourceTypes](#ignoreresourcetypes)

## Scully Config Interface

```ts
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
  /** Set what is what is written to the logfile, defaults to warnings and errors */
  logFileSeverity?: LogSeverity;
  /** routes that need additional processing have their configuration in here */
  routes: RouteConfig;
  /** routes that are in the application but have no route in the router */
  extraRoutes?: string | string[] | Promise<string[] | string>;
  /** Port-number where the original application is served */
  appPort?: number;
  /** Boolean that determines saving of site-tumbnails files */
  thumbnails?: boolean;
  /** port-number where the Scully generated files are available */
  staticport?: number;
  /** port for the live reload service */
  reloadPort?: number;
  /** optional proxy config file, uses the same config file as the CLI */
  proxyConfig?: string;
  /** optional launch-options for puppeteer */
  puppeteerLaunchOptions?: LaunchOptions;
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

The `ScullyConfig` interface provides parameters for configuring how Scully works in a project.

## scullyConfig File's Properties

### projectRoot

`projectRoot` - The project's from which Scully generates the static content.

### homeFolder

`homeFolder` - A reference to the Angular project's root folder. This property is for internal use, and it defaults to the angular.json file's location.

### outDir

`outDir` - The folder's path where Scully leaves the statics files. This should not be the same as the distFolder.

### outHostFolder

`outHostFolder` The folder that is used to host the static files, defaults to the outDir. You can use this when you need to change the baseHref of pages.

The default path is:

```URL
./dist/static
```

### logFileSeverity

`logFileSeverity` - determine what of the Scully output will be written into the `scully.log` file in the root of the project.
options:

- 0 logs everything
- 1 logs warnings and errors only
- 2 logs errors only

### handle404

`handle404` - how routes that are not provided in the application are handled by the Scully server. When the server gets a request for a route(file) that does not exists on the file-system, this option amends ow that is handled.

- "" (default) is to render a 404 page, and raise a waring during rendering.
- `index` will render the `index.html` from the dist root folder
- `baseOnly` will use express route matcher on unhandled routes only
- `404` will render the `404.html` from the dist root folder.
- `none` option will leave it up to the express software layer.

### distFolder

`distFolder` - Path to the Angular application's dist folder. Scully takes the `angular.json` file's default path. This option can be modify according to the needs. This folder will be used by Scully during rendering.

### hostFolder

`hostFolder` The folder that is used to host the Angular distribution files, defaults to the distFolder. You can use this when changed the base-href with the Angular-CLI. Make sure the folders are matching the base-href settings, otherwise Scully will not be able to render your site.

### routes

Scully has the two following types of routes:

#### Unhandled Routes

Routes with dynamic data. This are the routes as you would use them inside your app. Those routes can come from the automated route discovery, or from the extraRoutes property in the `scully.<projectname>.config.ts`

Eg.

```URL
/foo/:id
```

All unhandled routes with dynamic data need to be handled through plugins. When there is a route with dynamic data that has no configuration in the configs routes, it will be logged to screen and skipped during processing.

**THIS MEANS THERE WILL BE NO STATIC FILES FOR ROUTES THAT HAVE DYNAMIC DATA BUT NO CONFIG**

For more information about router plugins read the [Plugins](plugins.md) documentation.

#### Handled Routes

Routes with static params.

Eg.

```URL
/foo/1
```

### extraRoutes

`extraRoutes` - Allows developers to add an array of unhandled routes. These routes can exist in an AngularJS, React, or any other framework.

It can handle `string`, `string[]`, `Promise<string>` or `Promise<string[]>`

```typescript
extraRoutes: [
  '/foo/:id',
  new Promise('/bar/:barId'),
  new Promise(['/foo/:fooId', '/bar/:id']),
];
```

### appPort

Scully provides a server to to render the Angular application.

`appPort` - Configure the port where the Angular application runs.

The default port is: `1864`

### staticPort

Similar to _appPort_, `staticport` provides a server to to render the static files compiled by Scully.

The default port is: `1668`

## proxyConfig

Takes a relative filename for a proxy config file.

For more details look at [this](https://github.com/chimurai/http-proxy-middleware).

Scully uses the same config format as [webpackDevServer](https://webpack.js.org/configuration/dev-server/#devserverproxy).

This is an optional property, and it is also used by the [Angular CLI](https://angular.io/guide/build#proxying-to-a-backend-server)

This can also be provided with the `--proxy filname` command line flag

### puppeteerLaunchOptions

If the application is in a restricted environment, puppeteer's default options may not work. In that case,
this option can be overwrite with settings that match a specific environment.

Word of warning, some settings might interfere with the way Scully is working, creating inaccurate results.
Follow [this link](https://pptr.dev/#?product=Puppeteer&version=v2.0.0&show=api-puppeteerlaunchoptions) for more information.

### hostName

Allows to set a different name for the `localhost`.

### hostUrl

Connects your application to a different host. This is useful when using your own server.

### guessParserOptions

The`guessParserOptions` that get passed to the `guess-parser` library. Currently, the only supported property is
`excludedFiles`, and it excludes files from the `guess-parser` route discovery process.

### ignoreResourceTypes

The `ignoreResourceTypes` array that get passed to the `puppeteerRenderPlugin`.
Any `ResourceType` that is listed here will be ignored by the Puppeteer instance rendering the requested page.
For example if you add `image` and `font` all requests to images and fonts loaded on your pages will be ignored.
