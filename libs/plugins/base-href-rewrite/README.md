# scully-base-href-rewrite

## install

You need to install this plugin with NPM:

```bash
npm i @scullyio/scully-plugin-base-href-rewrite
```

# useage

This is the Scully base-Href rewriting render plugin. You can add this to the postRenderer, or to the defaultPostRenderer to change the base HREF to whaevet you need.
You can set the the base-HREF using the `setPluginUption('baseHref', {href:'newHref/'})`

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
