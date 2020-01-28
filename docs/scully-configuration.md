# Scully Configuration

The center of every scully project is the file `scully.config.js`. This config file must export the configuration for your
scully build.

If you are starting to use scully we highly recommend read the [Getting Started](getting-started.md) section,
also if you want to enhance you project made with scully, visit the [Utils](utils.md) section and see
or teach to the community how to combine scully with others tools.

- [Scully Configuration](#scully-configuration)
  - [`ScullyConfig` Interface](#scullyconfig-interface)
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
    - [puppeteerLaunchOptions](#puppeteerlaunchoptions)
    - [hostName](#hostname)
    - [hostUrl](#hosturl)

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
}
```

`ScullyConfig` interface provide the parameters to configure how scully works in your project.

## scullyConfig properties explained

### projectRoot

`projectRoot` is reference to the path to the project where scully will intervene.

This property is **_mandatory_**, scully fill automatically post installation,

**_IMPORTANT_** this property will be deprecated in future releases.

### homeFolder

`homeFolder` is reference to your project root folder.
This property is for internal use mostly, it defaults to the location where angular.json is.

### outDir

`outDir` is reference to the path folder which scully will take to put the statics files.
By default the path is:

```
./dist/static
```

### distFolder

`distFolder` option provide to scully the path to the compiled Angular application. By default scully take the path
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

`routes` is a reference to all unhandled routes which scully will transform to handled, using plugins.
If you want to know more about plugins go to [Plugins](plugins.md) section.

### extraRoutes

The `extraRoutes` property allow to the developer add an array of unhandled routes to discover by Scully.
These can be routes that exist in AngularJS, or in React, or in whatever Framework's router.

It can be handle `:string`, `Promise<string>` or `Promise<Array<string>>`

```typescript
extraRoutes: ['/foo/id', new Promise('/bar/barId'), new Promise(['/foo/fooId', '/bar/id'])];
```

### appPort

Scully provide you a server to check how your Angular app works.
`appPort` is the property to configure the port which your Angular app will run.

The port by default is: `1864`

### staticport

Similarly as _appPort_, the property `staticport` allow the developer set up a port to execute a server,
which will serve static files compiled by Scully.

The port by default is: `1668`

### puppeteerLaunchOptions

When in a restricted environment there is a change the default options for puppeteer won't work. In such a case
this option can override the puppeteerLaunchOptions with settings that match this environment.
Word of warning, some settings might interfer with the way Scully is working, creating errornous results.
Follow [this link](https://pptr.dev/#?product=Puppeteer&version=v2.0.0&show=api-puppeteerlaunchoptions) for more information

### hostName

use a different name as `localhost` for the local server. Needed if doe to environmental restrictions localhost isn't usable

### hostUrl

Connect to a other server. If your app has special demands to host it, you might need to use your own server. When that is needed you can provide this setting to let scully know where to look for your running app. Make sure the server is up and running, and hosting the correct application.

[Full Documentation ➡️](scully.md)
