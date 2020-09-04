---
title: Scully Config
published: true
lang: en
position: 100
---

# Scully Config

<div class="docs-link_table">
  <a class="view-in-repo" href="https://github.com/scullyio/scully/blob/main/libs/scully/src/lib/utils/interfacesandenums.ts"></a>
</div>

## Overview

The central part of a Scully project is the `scully.<projectname>.config.ts` file. This file exports the Scully build configuration for an application.

If you are new to Scully, it is recommended to read the [Getting Started](docs/learn/getting-started/requirements/) documentation.

<!--- TODO: If you want to enhance a Scully project, read the [Utils](utils.md) documentation. --->

The `scully.<projectname>.config.ts` file's structure is shown below:

## Interface

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
  defaultPostRenderers?: string[];
  /** the root of the project (where angular.json lives) */
  homeFolder?: string;
  /** the destination of the Scully generated files */
  outDir?: string;
  /** the place where distribution files of the project are. Should be a subfolder of dist. */
  distFolder?: string;
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

## Properties

The `ScullyConfig` interface provides parameters for configuring how Scully works in a project.

#### `projectRoot?:` _`string`_

The project's from which Scully generates the static content.

#### `homeFolder?:` _`string`_

A reference to the Angular project's root folder.  
This property is for internal use, and it defaults to the angular.json file's location.

#### `outDir?:` _`string`_

The folder's path where Scully leaves the statics files.  
This should not be the same as the `distFolder`.  
The default path is:

```URL
./dist/static
```

#### `distFolder?:` _`string`_

Path to the Angular application's dist folder.  
Scully takes the `angular.json` file's default path, and will use this folder during rendering.  
This option can be modified according to your needs.

#### `logFileSeverity:` _`LogSeverity`_

Determines what of the Scully output will be written into the `scully.log` file in the root of the project.

| option | result                        |
| ------ | ----------------------------- |
| `0`    | Logs everything               |
| `1`    | Logs warnings and errors only |
| `2`    | Logs errors only              |

#### `routes:` _`RouteConfig`_

Scully has two types of routes, **unhandled routes** and **handled routes**:

##### Unhandled Routes

Routes with dynamic data. This are the routes as you would use them inside your app. Those routes can come from the automated route discovery, or from the extraRoutes property in the `scully.<projectname>.config.ts`. Eg:

```URL
/foo/:id
```

All unhandled routes with dynamic data need to be handled through plugins. When there is a route with dynamic data that has no configuration in the configs routes, it will be logged to screen and skipped during processing.

**This means there will be NO STATIC FILES for ROUTES which HAVE DYNAMIC DATA but NO CONFIG**

For more information about router plugins read the [Plugins](/docs/learn/plugins/overview) documentation.

##### Handled Routes

Routes with static params. Eg:

```URL
/foo/1
```

#### `extraRoutes?:` _`string | string[] | Promise<string[] | string>`_

Allows developers to add an array of unhandled routes. These routes can exist in AngularJS, React, or any other framework.

```typescript
extraRoutes: [
  '/foo/:id',
  new Promise('/bar/:barId'),
  new Promise(['/foo/:fooId', '/bar/:id']),
];
```

#### `appPort?:` _`number`_

Scully provides a server to to render the Angular application.

Configure the port where the Angular application runs.

The default port is: `1864`

#### `staticPort?:` _`number`_

Similar to [_`appPort`_](#appport-number), `staticport` provides a server to to render the static files compiled by Scully.

The default port is: `1668`

#### `proxyConfig?:` _`string`_

Takes a relative filename for a proxy config file.

For more details look at [http-proxy-middleware](https://github.com/chimurai/http-proxy-middleware)  
Scully uses the same config format as [webpackDevServer](https://webpack.js.org/configuration/dev-server/#devserverproxy)  
This is an optional property, and it is also used by the [Angular CLI](https://angular.io/guide/build#proxying-to-a-backend-server)

This can also be provided with the `--proxy filname` command line flag

#### `puppeteerLaunchOptions?:` _`LaunchOptions`_

If the application is in a restricted environment, puppeteer's default options may not work. In that case,
this option can be overwrite with settings that match a specific environment.

**A word of warning,** some settings might interfere with the way Scully is working, creating inaccurate results.  
Read about [puppeteerlaunchoptions](https://pptr.dev/#?product=Puppeteer&version=v2.0.0&show=api-puppeteerlaunchoptions) for more information.

#### `hostName?:` _`string`_

Allows to set a different name for the `localhost`.

#### `hostUrl?:` _`string`_

Connects your application to a different host. This is useful when using your own server.

#### `guessParserOptions?:` _`GuessParserOptions`_

The`guessParserOptions` that get passed to the `guess-parser` library.

Currently, the only supported property is `excludedFiles`, and it excludes files from the `guess-parser` route discovery process.

#### `ignoreResourceTypes?:` _`ResourceType[]`_

The `ignoreResourceTypes` array that get passed to the `puppeteerRenderPlugin`.  
Any `ResourceType` that is listed here will be ignored by the Puppeteer instance rendering the requested page.  
For example if you add `image` and `font` all requests to images and fonts loaded on your pages will be ignored.

#### `handle404?:` _`string`_

How routes which are **not**provided in the application, are handled by the Scully server.  
When the server gets a request for a route (file) that does not exist on the file-system, this option amends how that route is handled.

| option         | result                                                       |
| -------------- | ------------------------------------------------------------ |
| `""` (default) | Will render a 404 page, and raise a waring during rendering. |
| `index`        | Will render the `index.html` from the dist root folder.      |
| `baseOnly`     | Will use express route matcher on unhandled routes only.     |
| `404`          | Will render the `404.html` from the dist root folder.        |
| `none`         | Will leave it up to the express software layer.              |
