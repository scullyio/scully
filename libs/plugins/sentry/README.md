# Sentry

## Description

This plugin allows the usage of Sentry.

## Type

Render Plugin

## Usage

In the application's scully.your-app.config.file:

1. Configure the plugin:

The plugin's configuration receives an object like this `{key: string, org: string, project: string}` where
the `key`, `org`, and `project` are provided in the Script Tag `window.Sentry.init({ dsn: 'https://<key>@<org>.ingest.sentry.io/<project>' })` provided by Sentry.

2. Make a default post render array and add the plugin to it.

3. Set the default post renders in Scully config.

e.g.

```typescript
// ./scully.your-app.config.ts

import { setPluginConfig, ScullyConfig } from '@scullyio/scully';
import { Sentry } from '@scullyio/plugins/Sentry';

const defaultPostRenderers = [];

setPluginConfig(Sentry, { key: 'your-key', org: 'your-org', project: 'your-project' });
defaultPostRenderers.push(Sentry);

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
