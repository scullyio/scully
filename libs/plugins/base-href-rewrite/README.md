# scully-base-href-rewrite

## Getting Started

### 1. Install the plugin:

```bash
npm install -D @scullyio/scully-plugin-base-href-rewrite
```

### 2. Use the plugin:

This is the Scully base-Href rewriting render plugin. You can add this to the postRenderer, or to the defaultPostRenderer to change the base HREF to what you need.
You can set the the base-HREF using the `setPluginUption('baseHref', {href:'newHref/'})`

#### for all routes

If you want to rewrite the base-href for all pages you can use the `setPluginConfig` option and add the plugin to the `defaultPostRenderers` array like this:

```typescript
import { baseHrefRewrite } from '@scullyio/scully-plugin-base-href-rewrite';

const defaultPostRenderers = ['seoHrefOptimise', baseHrefRewrite];
setPluginConfig(baseHrefRewrite, { href: 'xxx' });
export const config: ScullyConfig = {
  /** ... config here */
  defaultPostRenderers,
  routes: {
    /** all your routes are here **/
  }
};
```

#### for specific routes

If you want to change a single route, you can put it in your scully config like this:

```typescript
import { baseHrefRewrite } from '@scullyio/scully-plugin-base-href-rewrite';

export const config: ScullyConfig = {
  /** ... config here */
  routes: {
    '/basehref/rewritten': {
      type: 'default',
      postRenderers: [baseHrefRewrite],
      baseHref: '/basehref/rewritten/'
    }
  }
};
```
