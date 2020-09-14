---
title: Installation
published: true
lang: en
position: 20
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

Running the `@scullyio/init` schematic makes all the necessary changes the Angular project, so you don't need to go through a lengthy setup process.

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

The [JSON Plugin](docs/learn/plugins/built-in-plugins/json) is an example of how to configure route parameters with Scully.

---

### WSL Pre-Requisites

WLS is a Linux subsystem within Windows, therefore, it does not come with the entire pack installed, because of that Puppeteer needs chrome to be installed within the subsystem.

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
