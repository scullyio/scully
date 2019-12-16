# Scully - Getting Started

The first thing you need to get started with Scully is a working Angular app using Angular 9.*.

This getting started doc covers the three steps to adding Scully into your project. 

1. [Installation](#installation)
2. [Build](#build)
3. [Test](#test) 


## Installation
To install Scully, do the following: From the root directory of your Angular project (in a terminal window), run the following command: 
```bash
ng add @scullyio/init
```

At this point, Scully has been added to your project. The most important part of the installation is the addition of the
Scully configuration file: `scully.config.js` (_soon this will be `scully.config.ts`_). To learn more about this file, 
read [Scully Configuration](scully-configuration.md) docs. 

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
(if applicable) or [submit an issue](https://github.com/scullyio/scully/issues/new). 

## Test

Now that you're project has been pre-rendered, you can validate the build in one of a few ways. 

1. Serve the contents of your `dist/static` directory
2. Browse the contents of `dist/static` directory and read the HTML

#### Serve the contents

Using something like [http-server](https://www.npmjs.com/package/http-server) you can serve the contents of your 
`dist/static` folder. All routes that work in your non-pre-rendered Angular app should still work. Not all apps are 
capable of running without  

__Extra Credit__: While serving your app, [disable javasript](https://developers.google.com/web/tools/chrome-devtools/javascript/disable) 
and make sure that you app still works. This is the goal for your app, to run with JavaScript disabled. Most of the 
parts of your app should work without JS enabled. 

#### Browse the contents

Browse the contents of your `dist/static` directory and make sure that all of your pages were pre-rendered and saved to 
HTML correctly. 


---
Next: [Full Documentation ➡️](scully.md)
