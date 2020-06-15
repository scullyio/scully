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
3. [Serving & Testing](#serving-and-testing)
4. [Tips for Testing](#tips-for-testing)

---

## Installation

_Before adding Scully to your Angular project, you need to make sure that
your project has at least one route setup. If you have questions about adding
routes in your project, see the [Angular routing docs](https://angular.io/start/start-routing)._

Adding Scully to your project is as simple as running one command:

```bash
ng add @scullyio/init
```

**NOTE**: After installation, you will need to restart `ng serve` if you were serving the app during the installation.

Running the `@scullyio/init` schematic makes all the necessary changes to your
project, so you don't need to go through a lengthy setup process.

The command above creates the Scully config file. That file is called `scully.<projectName>.config.ts`, where the `projectName` is the name of your Angular project, and it looks like this:

```typescript
import { ScullyConfig } from '@scullyio/scully';

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: '<projectName>',
  outDir: './dist/static',
  routes: {}
};
```

Even with this basic config, you are now ready to build your angular app using Scully for the first time!

**NOTE**: It is important to know that any routes in your Angular project that contain route parameters
will not be pre-rendered until you modify the above config to account for those parameters.

[HERE](./plugin/jsonPlugin.md)
is an example if how to configure Scully for route parameters.

---

## Building the Scully Application

Running Scully for the first time is exciting. Congrats on making it here!

Before Scully can run you need to build your Angular project. Most projects can be built as simply as:

```bash
ng build
```

Now that your Angular project is built, Scully can do its work. Run Scully by simply running the following command:

```bash
npm run scully
```

You did it! You have turned your Angular app into a wicked fast, pre-rendered static site thanks to Scully.

The Scully-built version of the project is located in the `./dist/static` folder. It contains all the static pages in your project.

**NOTE**: In case of an errors or warnings during the build process, please follow the instructions in the errors/warnings section or [submit an issue](https://github.com/scullyio/scully/issues/new/choose).

**NOTE**: Many people will see the following error when the build with Scully for the first time:

```bash
No configuration for route `/user/:userId` found. Skipping
```

If Scully is skipping your unconfigured routes, please read more about [Route Parameters & Scully](./routeParameters.md).

---

## Serving and Testing

Once your app is built with Scully, you'll want to see the output and test how it runs as a statically generated webpage.

The first way to see your pre-rendered site is by simply opening the `/dist/static` folder where you will find one `index.html` for every route in your app. If you have 1000 routes, you'll have 1000 `index.html` files in your `dist/static` folder. If you look at these `index.html` files, you'll notice that they are jamstack-packed with HTML and CSS. This means that Scully worked, and that your site is now pre-rendered.

In order to see what your site looks like and runs like after the Scully build, Scully has provided a server so that you can test it out. To launch Scully's test server, run the following command:

```bash
npm run scully:serve
```

The server actually launches **2 (two)** servers. The first server is hosting the results of your `ng build`. The second server is hosting the results of your Scully build. This allows you to test both versions of your built app. Very cool!

---

## Tips for Testing

#### Only rebuild Angular if you change Angular

This kind of sounds like a no-brainer, but if this is your first time using Scully, it is easy to trip on this step. If you're in the process of writing Scully plugins OR modifying your blog's markdown files, you DO NOT need to `ng build` your app each time you re-run Scully. Again, you only `ng build` Angular if you changed Angular.

So if you're confused if you need to re-run your Angular build, just ask yourself: Did I change the Angular code, or the Scully code?

#### Scully Serve

Running `npm run scully` pre-builds your project with Scully. Any time you change a plugin or a markdown file, you'll need to re-run this process. Also, if any of the content that your Angular app depends on is changed, you will need to re-run your Scully build.

There is a special switch to make the `serve` command easier to use:

```bash
npm run scully -- --watch
```

Running the Scully build with the `--watch` option will do a live-reload Scully build. It watches for any changes from an Angular build, to any of the Scully plugins, or to any of your markdown files. If any of those changes, it re-executes the Scully build, and then serves the results in realtime.

**NOTE**: This is ideal for developers. But do not have your build machine use the `--watch` option, otherwise your build will never finish.
