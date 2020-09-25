---
title: registerPlugin
published: true
lang: en
---

# registerPlugin

The [`registerPlugin`](https://github.com/scullyio/scully/blob/main/libs/scully-schematics/src/add-plugin/index.ts) function adds a new plugin to Scully. This function has 5 parameters:

```typescript
registerPlugin(
  type: PluginTypes,
  name: string | symbol,
  plugin: PluginFunction,
  validator?: validator,
  options?: { replaceExistingPlugin = false }
)
```

#### type: PluginTypes

- Indicates the plugin's type.
- The existing types are: `router`, `render`, `fileHandler`, `allDone`, or `routeDiscoveryDone`.

#### name: string | symbol

- The plugin's name.
- This must be unique for the type of plugin.
- To replace an existing plugin, set the `replaceExistingPlugin` option.

#### plugin: promise or async function

- The plugin's async function.
- Contains the plugin's logic.
- Plugin types are described in their own type descriptions

#### validator?: function(optional)

- A validation function.
- It should return an array of errors.
- If there are no errors, it should return a `false` value.
- If it returns a `string<array>`, those strings are displayed as errors, and the process is aborted.

**Tip:** Add color to the validator errors by using the colors exported from Scully.  
**Validator Example:**

```typescript
import { yellow } from '@scullyio/scully';

// Omitted code ...

const validator = async (options) => {
  const errors = [];

  if (options.numberOfPages && typeof options.numberOfPages !== 'number') {
    errors.push(
      `my-custom-plugin numberOfPages should be a number, not a ${yellow(
        typeof options.numberOfPages
      )}`
    );
  }

  return errors;
};
```

#### options?: {replaceExistingPlugin:boolean}(optional)

The `options` object can be used to set the plugin options.  
At the moment, the only available option is `replaceExistingPlugin`.
