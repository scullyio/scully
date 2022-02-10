---
lang: en
position: 25
published: true
title: Manual Installation
---

## Manual Installation

First, install the following packages `@scullyio/scully` and `@scullyio/ng-lib`

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
  imports: [
    // ... other modules imports
    ScullyLibModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

**NB:** You can pass configurations to the `ScullyLibModule` using the `forRoot`
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

Finally, create a `scully.[PROJECT_NAME].config.ts`, replacing
`[PROJECT_NAME]`, with the name of your Angular project. Then add the
content of the Scully config file like shown below:

```ts
import { ScullyConfig } from '@scullyio/scully';

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'demo',
  distFolder: './dist/[PROJECT_NAME]', // output directory of your Angular build artifacts
  outDir: './dist/static', // directory for scully build artifacts
  defaultPostRenderers: [],
  routes: {}
};
```

### Plugins Directory

Next, create a plugins directory, at the root of the workspace - `./scully`.
First, create a `tsconfig.json` for scully plugins and add the following content.

```json
{
  "compileOnSave": false,
  "compilerOptions": {
    "esModuleInterop": true,
    "importHelpers": false,
    "lib": ["ES2019", "dom"],
    "module": "commonjs",
    "moduleResolution": "node",
    "sourceMap": true,
    "target": "es2018",
    "types": ["node"],
    "skipLibCheck": true,
    "skipDefaultLibCheck": true,
    "typeRoots": ["../node_modules/@types"],
    "allowSyntheticDefaultImports": true
  },
  "exclude": ["./**/*spec.ts"]
}
```

Then, create a `plugins` directory inside the `scully` directory, and add a file
named `plugins.ts`, with the following content:

```typescript
import { registerPlugin, getPluginConfig } from '@scullyio/scully';

export const myPlugin = 'myPlugin';

const myFunctionPlugin = async (html: string): Promise<string> => {
  return html;
};

const validator = async () => [];

registerPlugin('render', myPlugin, myFunctionPlugin, validator);
```
