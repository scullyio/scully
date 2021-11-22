---
title: beforeAll Plugin Type
published: true
lang: en
position: 104
---

# `beforeAll` Plugin Type

## Overview

An `beforeAll` plugin is run right after the config is loaded, but before any further processing is started. It can be used to run tasks that might be needed by other plugins, or copy files in from other locations. Or any other task you need to do _before_ every Scully run.


The interface is:
```
 () => Promise<void|undefined|boolean>
```


```ts
const { registerPlugin } = require('@scullyio/scully');

function customCopyPlugin() {
    // Do something to your Scully site
  /** copy some extra files into my dist folder */
}

const validator = async () => [];
registerPlugin('beforeAll', 'copy in my custom files', customCopyPlugin);
```
