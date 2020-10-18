# Scully Copy To Clipboard Plugin

- Description: Copy to Clipboard Plugin add `copy` button in code snippets generated from markdown file with scully.
- Type: Render Plugin

## Getting Started

### 1. Install the plugin:

```bash
npm install -D @scullyio/scully-plugin-copy-to-clipboard
```

### 2. Use the plugin:

1. This plugin requires the `clipboard.min.js`. Download it from [here](https://clipboardjs.com/) and add it in `assets` folder of your application.

2. In the application's `scully.<your-app>.config.ts`, Import `copyToClipboard` plugin and add it in `defaultPostHandlers`.

```typescript
import { copyToClipboard } from '@scullyio/scully-plugin-copy-to-clipboard';

const defaultPostRenderers = [copyToClipboard];

export const config: ScullyConfig = {
  defaultPostRenderers,
  routes: {
    '/route/:slug': {
      type: 'contentFolder',
      postRenderers: [...defaultPostRenderers],
      slug: {
        folder: './folder',
      },
    },
  },
  // Other Configuration...
};
```

### 3. Configure Copy To Clipboard Plugin

Provide custom plugin configuration in application's `scully.<your-app>.config.ts`.

```typescript
setPluginConfig<CopyToClipboardPluginConfig>(copyToClipboard, {
  copyBtnInitialText: '📄',
  copyBtnOnClickText: '✅',
  customBtnClass: 'customClass',
  clipboardJSPath:
    'https://cdn.jsdelivr.net/npm/clipboard@2.0.6/dist/clipboard.min.js',
});
```

| Property           | Default                    | Description                                                   |
| ------------------ | -------------------------- | ------------------------------------------------------------- |
| customBtnClass     | `''`                       | Add custom css class for `copy` button to apply styles        |
| clipboardJSPath    | `/assets/clipboard.min.js` | Specify clipboard js path, you can also specify CDN link here |
| copyBtnInitialText | `Copy`                     | `copy` button initial text                                    |
| copyBtnOnClickText | `Copied!`                  | `copy` button text once code snippet is copied in clipboard   |
