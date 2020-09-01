---
title: Installation
published: true
lang: en
navlist_position: 200
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

<div class="docs-prev_next">
  <a class="prev" href="/docs/learn/getting-started/requirements">Requirements</a>
  <a class="next" href="/docs/learn/getting-started/building">Building a Scully app</a>
</div>
