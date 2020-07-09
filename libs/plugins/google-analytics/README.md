# Google Analytics

## Description

This plugin allows the usage of Google Analytics via Global Site Tag.

## Type

Render Plugin

## Usage

In the application's scully.your-app.config.file:

1. Configure the plugin:

The plugin's configuration receives an object like this `{globalSiteTag: string}` where
the `globalSiteTag` is the `gtag` provided by Google Analytics.

2. Make a default post render array and add the plugin to it.

3. Set the default post renders in Scully config.

e.g.

```typescript
// ./scully.your-app.config.ts

import { setPluginConfig, ScullyConfig } from '@scullyio/scully';
import { GoogleAnalytics } from '@scullyio/plugins/google-analytics';

const defaultPostRenderers = [];

setPluginConfig(GoogleAnalytics, { globalSiteTag: 'UA-#########-1' });
defaultPostRenderers.push(GoogleAnalytics);

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
