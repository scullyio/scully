---
title: Configuration
order: 300
---

# Scully Configuration

The central part of a Scully project is the `scully.config.js` file. This file exports the Scully build configuration for an application.

If you are new to Scully, it is recommended to read the [Getting Started](getting-started.md) documentation.

If you want to enhance a Scully project, read the [Utils](utils.md) documentation.

The `scully.config.js` file's structure is shown below:

- [Scully Configuration](#scully-configuration)
  - [ScullyConfig Interface](#scullyconfig-interface)
  - [scullyConfig properties explained](#scullyconfig-properties-explained)
    - [projectRoot](#projectroot)
    - [homeFolder](#homefolder)
    - [outDir](#outdir)
    - [distFolder](#distfolder)
    - [routes](#routes)
      - [handled Routes](#handled-routes)
      - [unhandled Routes](#unhandled-routes)
    - [extraRoutes](#extraroutes)
    - [appPort](#appport)
    - [staticport](#staticport)
    - [proxyConfig](#proxyconfig)
    - [puppeteerLaunchOptions](#puppeteerlaunchoptions)
    - [hostName](#hostname)
    - [hostUrl](#hosturl)
    - [guessParserOptions](#guessparseroptions)

## `ScullyConfig` Interface

```ts
export interface ScullyConfig {
  projectRoot: string;
  homeFolder: string;
  outDir?: string;
  distFolder?: string;
  routes: RouteConfig;
  extraRoutes?: string[];
  appPort: number;
  staticport: number;
  puppeteerLaunchOptions?: LaunchOptions;
  hostName?: string;
  hostUrl?: string;
  guessParserOptions?: {excludedFiles: string[]};
}
```

The `ScullyConfig` interface provides parameters for configuring how Scully works in a project.

## scullyConfig File's Properties

### projectRoot

`projectRoot` - The project's from which Scully generates the static content.

This property is **_mandatory_**, and Scully automatically sets this property to the default Angular project.

### IMPORTANT:

_this property won't be \*\*\_mandatory_\*\* anymore in future releases.\_

### homeFolder

`homeFolder` - A reference to the Angular project's root folder. This property is for internal use, and it defaults to the angular.json file's location.

### outDir

`outDir` - The folder's path where Scully leaves the statics files.

The default path is:

```
./dist/static
```

### distFolder

`distFolder` - Path to the Angular application's dist folder. Scully takes the `angular.json` file's default path. This option can be modify according to the needs.

### routes

Scully has the two following types of routes:

#### Handled Routes

Routes with static params.

Eg.

```
/foo/1
```

#### Unhandled Routes

Routes with dynamic data.

Eg.

```
/foo/:id
```

All unhandled need to be handle through plugins. For more information about router plugins read the [Plugins](plugins.md) documentation.

### extraRoutes

`extraRoutes` - Allows developers to add an array of unhandled routes. These routes can exist in an AngularJS, React, or any other framework.

It can be handle `:string`, `Promise<string>` or `Promise<Array<string>>`

The **extra routes** array requires parameters of type: `:string`, `Promise<string>` or `Promise<Array<string>>`

Eg.

```typescript
extraRoutes: ['/foo/id', new Promise('/bar/barId'), new Promise(['/foo/fooId', '/bar/id'])];
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

For more details look at [this](https://github.com/chimurai/http-proxy-middleware/blob/master/README.md).

Scully uses the same config format as [webpackDevServer](https://webpack.js.org/configuration/dev-server/#devserverproxy).

This is an optional property, and it is also used by the [Angular CLI](https://angular.io/guide/build#proxying-to-a-backend-server)

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
