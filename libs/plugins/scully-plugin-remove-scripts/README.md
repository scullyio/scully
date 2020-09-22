# plugins-scully-plugin-remove-scripts

This plugin will remove all the scripts tags from the incoming HTML. If you don't want to remove _all_ you can use some of the options.

```typescript
export interface RemoveScriptsConfig {
  /** function that receives the script element and returns false when the script needs to be removed */
  predicate?: (elm: HTMLScriptElement) => boolean;
  /** defaults to true, keeps the transferState so the data.json can be generated */
  keepTransferstate?: boolean;
  /** defaults to `['scullyKeep', 'sk']`. array with attributes, scripts that have one of those will be kept */
  keepAttributes?: string[];
  /** defaults to `[]`. Array with strings, if the fragment occurs in the SRC of the script. the script is kept*/
  keepSrc?: string[];
}
```

You can use this plugin in scully by adding something like this to your `scully.<projectname>.config.ts`

```typescript
import { removeScripts, RemoveScriptsConfig } from '@scullyio/plugins/scully-plugin-remove-scripts';

const defaultPostRenderers = [removeScripts, 'seoHrefOptimise'];
setPluginConfig<RemoveScriptsConfig>(removeScripts, {
  keepTransferstate: false,
  /** overwrite default by empty string! */
  keepAttributes: []
});

export const config: ScullyConfig = {
  ...
  defaultPostRenderers: = [removeScripts],
  routes: {
    ...
  }
}
```

The above config will use the plugin on _all_ routes. If you want to use in on a single route, add it to the config of that particular route like this:

```typescript
export const config: ScullyConfig = {
  ...
  routes: {
    someRoute: {
      type: 'contentFolder', // Or any other type
      postRenderers: = [removeScripts],
    }
    ...
  }
}
```
