# LogRocket

- Description: This plugin allows the usage of LogRocket.
- Type: Render Plugin

## Getting Started

### 1. Install the plugin:

```bash
npm install -D @scullyio/scully-plugin-logrocket
```

### 2. Use the plugin:

In the application's scully.your-app.config.file:

1. Configure the plugin:

The plugin's configuration receives an object like this `{app: string, id: string}` where
the `app` and `id` are provided in the Script Tag `window.LogRocket.init('app/id')` provided by LogRocket.

2. Make a default post render array and add the plugin to it.

3. Set the default post renders in Scully config.

e.g.

```typescript
// ./scully.your-app.config.ts

import { setPluginConfig, ScullyConfig } from '@scullyio/scully';
import { LogRocket } from '@scullyio/plugins/logrocket';

const defaultPostRenderers = [];

setPluginConfig(LogRocket, { app: 'your-app', id: 'your-id' });
defaultPostRenderers.push(LogRocket);

export const config: ScullyConfig = {
  defaultPostRenderers,
  routes: {
    '/': {
      type: 'contentFolder',
      postRenderers: [...defaultPostRenderers]
    }
  }
};
```
