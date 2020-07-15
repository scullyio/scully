# plugins-google-analytics

This library was generated with [Nx](https://nx.dev).

## Running unit tests

# Run `ng test plugins-google-analytics` to execute the unit tests via [Jest](https://jestjs.io).

# Google Analytics

## Description

This plugin allows the usage of Google Analytics via Global Site Tag.

## Type

Render Plugin

## Usage

In the application's scully.<your-app>.config.ts:

1. Configure the plugin:

The plugin's configuration receives an object like this `{globalSiteTag: string}` where
the `globalSiteTag` is the `gtag` provided by Google Analytics.

2. Make a default post render array and add the plugin to it.

3. Set the default post renders in Scully config.

e.g.
`./scully.<your-app>.config.ts`

```typescript
import { setPluginConfig, ScullyConfig, prod } from '@scullyio/scully';
import { GoogleAnalytics } from '@scullyio/plugins/google-analytics';

const defaultPostRenderers = [];

if (prod) {
  setPluginConfig(GoogleAnalytics, { globalSiteTag: 'UA-#########-1' });
  defaultPostRenderers.push(GoogleAnalytics);
}
export const config: ScullyConfig = {
  defaultPostRenderers,
  routes: {
    '/': {
      type: 'contentFolder',
      postRenderers: [...defaultPostRenderers],
    },
  },
};
```
