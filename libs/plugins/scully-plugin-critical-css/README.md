# scully-plugin-critical-css

> BETA notice: this plugin is still in beta

With this Scully render plugin, we will inline the critical above the fold CSS into the HTML, and then "lazy-load" the CSS that is needed for the rest of the page. It will be ready before your SPA will boot. This will remmove CSS from being blocking.

This plugins uses the [critical](https://github.com/addyosmani/critical#critical) tool that is maintained by google, and is listed as the official endorsed option on [web.dev](https://web.dev/extract-critical-css/)

To use the plugin, first install it using NPM:

```bash
npm i @scullyio/scully-plugin-critical-css
```

Then add it to your `scully.<projectname>.config.ts` like this:

```typescript
import { criticalCSS } from '@scullyio/scully-plugin-critical-css';

/** the seoHrefOptimise is optional **/
const defaultPostRenderers = ['seoHrefOptimise', criticalCSS];

export const config: ScullyConfig = {
  /** more config here */
  defaultPostRenderers,
  /** more config here */
  routes: {
    /** more config here */
  }
```

The above config will use the plugin on _all_ routes. If you want to use in on a single route, add it to the config of that particular route like this:

```typescript
export const config: ScullyConfig = {
  /** more config here */
  routes: {
    someRoute: {
      type: 'contentFolder', // Or any other type
      postRenderers: = [criticalCSS],
    },
     /** more route configs here */
  }
}
```

> There are **_no_** configurable options right now. We will enable configuration in one of the next releases of this plugin, and expose the options that are available to the `critical tool`
