# Scully Copy To Clipboard Plugin

Copy to Clipboard Plugin add `copy` button in code snippets generated from markdown file with scully.

## Plugin Type

Render Plugin

## Usage

1. This plugin requires the `clipboard.min.js`. Download it from [here](https://clipboardjs.com/) and add it in `assets` folder of your application.

2. In the application's `scully.<your-app>.config.ts`, Import `CopyToClipboard` plugin and add it in `defaultPostHandlers`.

```typescript
import { CopyToClipboard } from '@scullyio/scully-plugin-copy-to-clipboard';

const defaultPostRenderers = [CopyToClipboard];

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

## Copy To Clipboard Plugin Configuration

Provide custom plugin configuration in application's `scully.<your-app>.config.ts`.

```typescript
setPluginConfig<CopyToClipboardPluginConfig>(CopyToClipboard, {
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
