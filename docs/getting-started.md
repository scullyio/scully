# Scully - Getting Started

The first thing you need to get started with Scully is a working Angular app using **Angular 9.x.x**

This getting started doc covers the three steps to adding Scully into your project. 

1. [Installation](#installation)
2. [Build](#build)
3. [Test](#test) 


## Installation
To install Scully, do the following: From the root directory of your Angular project (in a terminal window), run the following command: 
```bash
ng add @scullyio/init
```

The command above set up the necessary to start to work with Scully (_we go to get more deep about this in next releases._).

If the installation was success you can read a message similar to this one.

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

#### IMPORTANT
*Scully needs the router be present in your application, do not forget add it.*

## @scullyio/init:blog

## Build

So you have your Angular app AND you have installed Scully. So let's run a scully build to turn your site into a
pre-rendered Angular app. Because scully runs based on a build of your app, the first step is to build your Angular 
project. Then you can run the scully build. 

```bash
ng build
npm run scully
```

That's it. You're done! In your project directory, you now have a `/dist/static` folder that contains the built version 
of your app. 

__NOTE:__ If you had any errors or warning during the build phase, please follow the instructions in the errors/warnings
(if applicable) or [submit an issue](https://github.com/scullyio/scully/issues/new/choose). 

## Test

Now that you're project has been pre-rendered, you can validate the build in one of a few ways. 

1. Serve the contents of your `dist/static` directory
2. Browse the contents of `dist/static` directory and read the HTML

#### Serve the contents

Using something like [http-server](https://www.npmjs.com/package/http-server) you can serve the contents of your 
`dist/static` folder. All routes that work in your non-pre-rendered Angular app should still work. Not all apps are 
capable of running without  

__Extra Credit__: While serving your app, [disable JavaScript](https://developers.google.com/web/tools/chrome-devtools/javascript/disable) 
and make sure that you app still works. This is the goal for your app, to run with JavaScript disabled. Most of the 
parts of your app should work without JS enabled. 

#### Browse the contents

Browse the contents of your `dist/static` directory and make sure that all of your pages were pre-rendered and saved to 
HTML correctly. 


---
[Full Documentation ➡️](scully.md)
