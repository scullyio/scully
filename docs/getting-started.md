# Scully - Getting Started

## Prerequisites 
The first thing you need to get started with Scully is a working Angular app using **Angular 9.x.x** and **Node 12.x.x**  

You can create a new Angular 9 app using the following command:

```bash
npm install -g @angular/cli@next && ng new my-scully-app
```

Find more info here ([👉 angular.io/cli](https://angular.io/cli)

__NOTE:__  Scully will use Chromium. Make sure your Operating System (and its restrictions by your administrator) allow installing and executing Chromium. 

This getting started doc covers the three steps to adding Scully into your project.

1. [Installation](#installation)
2. [Build](#build)
3. [Test](#test)


## Installation
To install Scully, execute the following command from the root directory of your Angular project (in a terminal window):
```bash
ng add @scullyio/init
```

The command above installs dependencies and configures the files needed to start building with Scully (_we will further elaborate on this in upcoming releases_).

If the installation was successful a message similar to this one will be displayed:

```bash
Installed packages for tooling via yarn.
✔ Added dependency
✔ Import HttpClientModule into root module
UPDATE package.json (1447 bytes)
UPDATE src/app/app.module.ts (472 bytes)
UPDATE src/polyfills.ts (3035 bytes)
UPDATE src/app/app.component.ts (325 bytes)
  ✔ Packages installed successfully.
  ✔ Update package.json
CREATE scully.config.js (65 bytes)
UPDATE package.json (1507 bytes)
```

#### IMPORTANT: *Scully requires the router to be present in your application, don't forget to add it.*

## ng g @scullyio/init:blog
This command will generate a blog module. [more info here](https://github.com/scullyio/scully/blob/master/docs/blog.md)

## Build

By now you should have your Angular project with Scully successfully installed, so let us run a Scully build and turn your site into a
pre-rendered Angular app.

Since Scully runs based on a build of your app, the first step is to build your Angular project (with added routes), subsequently running the Scully build.

```bash
ng build
npm run scully
```

That's it, you're done! In your project directory, you should now have a `/dist/static` folder containing the built version
of your app.

__NOTE:__ If you had any errors or warnings during the build phase, please follow the instructions in the errors/warnings
(if applicable) or [submit an issue](https://github.com/scullyio/scully/issues/new/choose).

__NOTE:__ If you don't add any route, scully will pre-render 0 pages.

## Test

Now that your project has been pre-rendered, you can validate the build by either:

#### Serving the contents

By utilizing something like [http-server](https://www.npmjs.com/package/http-server) you can serve the contents of your
`dist/static` folder. All of the routes in your non-pre-rendered Angular app should still work. Not all apps are
capable of running without

[//]: # (Missing text for the line above)

__Extra Credit__: While serving your app, [disable JavaScript](https://developers.google.com/web/tools/chrome-devtools/javascript/disable)
and make sure that it still works. This is the goal for your app, to run with JavaScript disabled. Most parts of your app should still work without JS enabled.

#### Browsing the contents

Browse the contents of your `dist/static` directory and make sure that all of your pages were pre-rendered and saved to
HTML correctly.

---
[Full Documentation ➡️](scully.md)
