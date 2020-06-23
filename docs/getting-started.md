---
title: Getting Started
order: 200
lang: en
---

# Getting Started with Scully

Welcome to Scully!

Before getting started, please read the [Prerequisites](pre-requisites.md).

**_All about Scully in one video_** : [Building the Fastest Angular Apps Possible](https://thinkster.io/tutorials/scully-webinar-building-the-fastest-angular-apps-possible)

This getting started guide covers the following topics:

1. [Installation](#installation)
2. [Building](#building-the-scully-application)
3. [Serving](#serving)
4. [Tips for Testing](#tips-for-testing)

---

## Installation

_Before adding Scully to your Angular project; make sure that
your project has at least one route set up. If you have questions about adding
routes, see the [Angular routing docs](https://angular.io/start/start-routing)._

Adding Scully to your project is as simple as running one command:

```bash
ng add @scullyio/init
```

**NOTE**: After installation, if you were serving the app during the installation; you need to restart `ng serve`.

Running the `@scullyio/init` schematic makes all the necessary changes the Angular
project, so you do not need to go through a lengthy setup process.

The command above creates a Scully config file named `scully.<projectName>.config.ts`, where the `projectName` is the name of your Angular project. This file looks like this:

```typescript
import { ScullyConfig } from '@scullyio/scully';

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: '<projectName>',
  outDir: './dist/static',
  routes: {},
};
```

Even with this basic config, you are now ready to build your Angular app using Scully for the first time!

**NOTE**: It is important to know that any routes in the Angular project that contain route parameters
will not be pre-rendered until you modify the above config to account for those parameters.

[HERE](./plugin/jsonPlugin.md)
is an example of how to configure route parameters with Scully.

---

## Building the Scully Application

Running Scully for the first time is exciting. Congrats on making it here!

Before Scully can run you need to build your Angular project. Most projects' built is:

```bash
ng build
```

Now that the Angular project is built, Scully can do its work. Run Scully with the following command:

```bash
npm run scully
```

You did it! You have turned your Angular app into a wicked fast pre-rendered static site thanks to Scully.

The Scully-built version of the project is located in the `./dist/static` folder. It contains all the static pages in the project.

**NOTE**: In case of any errors or warnings during the build process, please follow the instructions in the errors/warnings section or [submit an issue](https://github.com/scullyio/scully/issues/new/choose).

**NOTE**: The following is a common error when building with Scully for the first time:

```bash
No configuration for route `/user/:userId` found. Skipping
```

This message indicates that Scully has skept any unconfigured routes. Read more about [Route Parameters & Scully](./routeParameters.md).

---

## Serving

Once the app is built with Scully, see the output and test how it runs as a statically generated webpage.

To see the pre-rendered site, open the `/dist/static` folder where you can find one `index.html` for every route in your app. Hence, if the application has 1000 routes, there should be 1000 `index.html` files in the `dist/static` folder.
These `index.html` files are jamstack-packed with HTML and CSS. This means that Scully built successfully, and that your site is now pre-rendered.

Scully provides a server, so that you can test out your jamstack site after the Scully build. To launch Scully's test server, run the following command:

```bash
npm run scully:serve
```

This command actually launches **2 (two)** servers. The first one is hosting the results of `ng build`, and the second server hosts the results of the Scully build. This allows you to test both versions of your built app. Very cool!

---

## Tips for Testing

#### Only rebuild Angular if you change Angular

Although this may seem evident; if this is your first time using Scully, it is easy rebuild Angular even if it is not needed. When writing Scully plugins OR modifying your blog's markdown files, you DO NOT need to `ng build` the app each time you re-run Scully. Again, `ng build` Angular if the Angular app changes.

Whenever you are confused about re-running the Angular build, just ask yourself: Did I change the Angular code, or the Scully code?

#### Scully Serve

Running `npm run scully` pre-builds your project with Scully. Any time a plugin or a markdown file change, re-run this process. In addition, if any of the content that the Angular app depends on changes, you need to re-run the Scully build.

To make the `serve` process easier run the following command:

```bash
npm run scully -- --watch
```

Running Scully build with the `--watch` option live-reloads the Scully build. In other words, It watches for any changes from the Angular build or from any of the markdown files. If any of those change, the Scully build re-executes, and it serves the new results in realtime.

**NOTE**: This is ideal for a faster development, but DO NOT use the `--watch` option during production or any devops proccess or the build will never finish.
