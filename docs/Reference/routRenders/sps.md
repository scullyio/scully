---
title: SPS Scully Platform Server
published: true
lang: en
position: 10
---

# SPS Scully Platform Server (Preview/Beta)

The SPS renderer is utilizing the [Angular platform server](https://angular.io/api/platform-server) to render your pages.

To get started you need to install a few packages into your project.

```bash
npm i @angular/platform-server
npm i @scullyio/platform-server
```

Then next to your `app.module` create an new module, we recommend naming it with an `.sps.` indentifier.

So: `app.sps.module.ts` will contain:
```ts
import { enableProdMode, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { ScullyPlatformServerModule } from '@scullyio/platform-server'
import { BrowserModule } from '@angular/platform-browser';


/**
 * the platform server should be running in production mode.
 */
enableProdMode();


@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppModule,
    ScullyPlatformServerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export default class AppSPSModule {}
```
(PS, for most apps, a copy-paste of the above will work!)

> Note: the Scully SPS renderer is using the default export, so make sure you don't forget to add `default` to your module.

> Note: Make sure to add your `AppComponent` to the bootstrap, otherwise SPS will render a load of empty pages. Also, be sure to import your `AppModule` otherwise it will error out.

What this module does, is wiring up all the needed parts that are needed to run your application in a nodeJs environment. the SPS render will simulate a browser environment, but not all 3rth party libraries are suited for a setup like this. Part of our beta program is finding out the limits. Please let us know when you run into this. 
On our roadmap is an hybrid render approach that will use this first, an then fall-back to Puppeteer dynamically. 

Now in your `scully.<project-name>.config.ts` you should link to the above module, and enable SPS. (also, you might want to remove the import for other renderers, but this is optional)

```ts
/**
 * enables the Scully Platrom Server
 *  (disables puppeteer, and uses Angular Platform-server to render the pages )
 */
enableSPS();

export const config: ScullyConfig = {
  projectName: 'sps-sample',
  outDir: './dist/static/sps-sample',
  defaultPostRenderers,
  /** path to the module you created above */
  spsModulePath: './apps/sps-sample/src/app/app.sps.module.ts',
  /** this seems the optimal for SPS */
  maxRenderThreads: cpus().length * 3,
  routes: {
    /** no change **/
  }
```
> Note: `enableSPS()` will activate the SPS renderer

> Note: the `spsModulePath` is mandatory now, this might change in the future.

Now you can start the render process the same way as you are used too
```bash
   # first build your app, as Scully still needs the static artifacts
npx ng build 
   # run Scully 
npx scully
```

Our renderer will create `./scully/tsconfig.<project-name>.json` if its not there, and use that to compile your application. Your compiled application will end up in the folder `./scully/runtime`. Under the hood it utilizes the ANgular compiler to do this. 

> Note: When there is an error while compiling your application please fix this before trying again. We can't render an application that doesn't compile. 

After that is done, we will start [maxRenderThreads](/docs/Reference/config.md) processes in the background. This number is by default the ammount of CPU-cores in your system. Depending on your app a higher, (or lower) number can have better perfromance. It is really depending on your application. If its CPU-bound a lower number will be better, If its IO-bound, a higher number will be better. Some of our tests show that `3*cpu-cores` is optimal for an average app.
