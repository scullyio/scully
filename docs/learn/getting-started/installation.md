---
lang: en
position: 20
published: true
title: Installation
---

# Installation

Adding Scully to your project is as simple as running one command:

```bash
ng add @scullyio/init
```

If you are using a `NX` vanilla workspace (non Angular workspace)

```bash
npm install @scullyio/init
nx g @scullyio/init:install -- --project=<projectName>
```

**NOTE**: After installation, if you were serving the app during the installation, you need to restart `ng serve`.

The `ng add @scullyio/init` will run our `init` schematic which makes all the necessary changes the Angular project, so you don't need to go through a lengthy setup process.

The above command creates a Scully config file named `scully.<projectName>.config.ts`, where the `projectName` is the name of your Angular project.  
This file looks like this:

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

**NOTE**: It is important to know that any routes in the Angular project that contain route parameters will not be pre-rendered until you modify the above config to account for those parameters.

The [JSON Plugin](/docs/Reference/plugins/built-in-plugins/json) is an example of how to configure route parameters with Scully.

---

### WSL Pre-Requisites

WSL is a Linux subsystem within Windows, therefore, it does not come with the entire pack installed, because of that Puppeteer needs chrome to be installed within the subsystem.

```bash
wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
sudo apt install ./google-chrome-stable_current_amd64.deb
```

---

### WSL Scully config

Once chrome is installed within the subsystem, we are going to configure puppeteer to support it with the following flags within the scully configuration within the project.
`scully.{{your-project}}.config.ts`

```typescript
export const config: ScullyConfig = {
  ...
    puppeteerLaunchOptions: {
      args: [
        "--disable-gpu",
        "--renderer",
        "--no-sandbox",
        "--no-service-autorun",
        "--no-experiments",
        "--no-default-browser-check",
        "--disable-dev-shm-usage",
        "--disable-setuid-sandbox",
        "--no-first-run",
        "--no-zygote",
        "--single-process",
        "--disable-extensions"
      ]
    }
  ...
}
```

### Manual Installation

First, install both `@scullyio/scully` and `@scullyio/ng-lib` npm packages

Using NPM

```sh
npm i @scullyio/scully @scullyio/ng-lib
```

Using Yarn

```sh
yarn add @scullyio/scully @scullyio/ng-lib
```

And then import `ScullyLibModule` into your `app.module.ts`, as shown below:

```typescript
import { ScullyLibModule } from '@scullyio/ng-lib';
// ...other imports

@NgModule({
  declarations: [AppComponent],
  imports: [...ScullyLibModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

**NB:** You can pass configurations to the `ScullLibModule` using the `forRoot`
method, which accepts the following interface. This is not necessary, as the
defaults work just fine.

```ts
export interface ScullyLibConfig {
  useTransferState?: boolean;
  alwaysMonitor?: boolean;
  manualIdle?: boolean;
  baseURIForScullyContent?: string;
}
```

And finally, create a `config.[PROJECT_NAME].config.ts`, replacing
`[PROJECT_NAME]`, with the name of your project. And then add the content of the
Scully config file like shown below:

```ts
import {ScullyConfig} from '@scullyio/scully';

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'demo',
  distFolder: './dist/demo', // output directory of your Angular build artifacts
  outDir: './dist/static', // directory for scully build artifacts
  defaultPostRenderers: [],
  routes: {},
  },
};
```
