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

## settings

You can configure this plugin by using the `setPluginConfig` helper like this:

```typescript
setPluginConfig(criticalCSS, {
  inlineImages: false,
});
```

The plugin had the following settings:

```typescript
export interface CriticalCSSSettings {
  /** inline images into the pages when smaller then 10240 bytes */
  inlineImages?: boolean;
  /** Width of the target viewport */
  width?: number;
  /** Height of the target viewport */
  height?: number;
  /** An array of objects containing height and width. Takes precedence over width and height if set */
  dimensions?: {
    width: number;
    height: number;
  }[];
}
```

For details see the [critical tool page](https://github.com/addyosmani/critical)
