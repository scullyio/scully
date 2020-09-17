---
title: Register a New Plugin
published: true
lang: en
position: 10
---

# Register a new plugin

<div class="docs-link_table">
  <a class="view-in-repo" href="https://github.com/scullyio/scully/blob/main/libs/scully-schematics/src/add-plugin/index.ts"></a>
</div>

## Overview

The [`registerPlugin`](https://github.com/scullyio/scully/blob/main/libs/scully-schematics/src/add-plugin/index.ts) function adds a new plugin to Scully. This function has 5 parameters:

<div class="docs-toc no-spacing"></div>

- [Register a new plugin](#register-a-new-plugin)
  - [Overview](#overview)
    - [`type:` _`string`_](#type-string)
    - [`name:` _`string`_](#name-string)
    - [`plugin:` _`any`_](#plugin-any)
    - [`validator?:` _`function`_ `(optional)`](#validator-function-optional)
    - [`options?:` _`<..>`_ `(optional)`](#options--optional)

#### `type:` _`string`_

- Indicates the plugin's type.
- The existing types are: `router`, `render`, `fileHandler`, `allDone`, or `routeDiscoveryDone`.

#### `name:` _`string`_

- The plugin's name.
- This must be unique for the type of plugin.
- To replace an existing plugin, set the `replaceExistingPlugin` option.

#### `plugin:` _`any`_

- The plugin's function.
- Contains the plugin's logic.
- Plugin types are described in their own type descriptions

#### `validator?:` _`function`_ `(optional)`

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

#### `options?:` _`<..>`_ `(optional)`

The `options` object can be used to set the plugin options.  
At the moment, the only available option is `replaceExistingPlugin`.
