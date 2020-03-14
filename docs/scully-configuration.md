---
title: Configuration
order: 300
---

# Scully Configuration

The center of every Scully project is the file `scully.config.js`. This config file must export the configuration for your
scully build.

If you are starting to use Scully we highly recommend read the [Getting Started](getting-started.md) section,
also if you want to enhance your project made with Scully, visit the [Utils](utils.md) section and see
or teach to the community how to combine Scully with others tools.

- [Scully Configuration](#scully-configuration)
  - [`ScullyConfig` Interface](#scullyconfig-interface)
  - [scullyConfig properties explained](#scullyconfig-properties-explained)
    - [projectRoot](#projectroot)
    - [homeFolder](#homefolder)
    - [outDir](#outdir)
    - [distFolder](#distfolder)
    - [proxyConfig](proxyConfig)
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

`ScullyConfig` interface provide the parameters to configure how Scully works in your project.

## scullyConfig properties explained

### projectRoot

`projectRoot` is reference to the path to the project where Scully will intervene.

This property is **_mandatory_**, Scully fills automatically post installation,

**_IMPORTANT_** this property won't be **_mandatory_** anymore in future releases.

### homeFolder

`homeFolder` is reference to your project root folder.
This property is for internal use mostly, it defaults to the location where angular.json is.

### outDir

`outDir` is reference to the path folder which Scully will take to put the statics files.
By default the path is:

```
./dist/static
```

### distFolder

`distFolder` option provide to Scully the path to the compiled Angular application. By default Scully take the path
reading the `angular.json`. You can set it up follow your needs.

### routes

Scully sort routes in 2 types:

- handled
- unhandled

#### handled Routes

handled routes reference to routes with static params.

```
/foo/1
```

#### unhandled Routes

handled routes reference to routes with dynamic data.

```
/foo/:id
```

## proxyConfig

Takes a relative filename filename for a proxy config file. For details look at [this](https://github.com/chimurai/http-proxy-middleware/blob/master/README.md). We use the same config format as [webpackDevServer](https://webpack.js.org/configuration/dev-server/#devserverproxy).

`routes` is a reference to all unhandled routes which Scully will transform to handled, using plugins.
If you want to know more about plugins go to [Plugins](plugins.md) section.

### extraRoutes

The `extraRoutes` property allow to the developer add an array of unhandled routes to discover by Scully.
These can be routes that exist in AngularJS, or in React, or in whatever Framework's router.

It can be handle `:string`, `Promise<string>` or `Promise<Array<string>>`

```typescript
extraRoutes: ['/foo/id', new Promise('/bar/barId'), new Promise(['/foo/fooId', '/bar/id'])];
```

### appPort

Scully provides you a server to check how your Angular app works.
`appPort` is the property to configure the port which your Angular app will run.

The port by default is: `1864`

### staticport

Similarly as _appPort_, the property `staticport` allows the developer to set up a port to execute a server,
which will serve static files compiled by Scully.

The port by default is: `1668`

### proxyConfig

Optional, when you need a proxy, we can read the proxy config file that is also used by the [Angular CLI](https://angular.io/guide/build#proxying-to-a-backend-server)

### puppeteerLaunchOptions

When in a restricted environment there is a change the default options for puppeteer won't work. In such a case
this option can override the puppeteerLaunchOptions with settings that match this environment.
Word of warning, some settings might interfer with the way Scully is working, creating errornous results.
Follow [this link](https://pptr.dev/#?product=Puppeteer&version=v2.0.0&show=api-puppeteerlaunchoptions) for more information

### hostName

Use a different name as `localhost` for the local server. Needed if doe to environmental restrictions localhost isn't usable

### hostUrl

Connect to another server. If your app has special demands to host it, you might need to use your own server. When that is needed you can provide this setting to let Scully knows where to look for your running app. Make sure the server is up and running, and hosting the correct application.

### guessParserOptions

These are the `guessParserOptions` that get passed to the `guess-parser` library. Currently the only property supported
`excludedFiles`, which allows you to exclude files from the `guess-parser` route discovery process.

[Full Documentation ➡️](scully.md)
