---
title: allDone Plugin Type
published: true
lang: en
position: 100
---

# `allDone` Plugin Type

## Overview

An `allDone` plugin is like a [`routeDiscoveryDone`](/docs/Reference/plugins/types/routeDiscoveryDone) plugin, except it is called _after_ Scully finishes executing all its processes. This plugin would be helpful if you need to do something after Scully is done building your site. Here's the skeleton of an `allDone` plugin:

```ts
const { registerPlugin } = require('@scullyio/scully');

function customPlugin(routes: HandledRoute[]) {
  // Do something to your Scully site
}

const validator = async () => [];
registerPlugin('allDone', 'customPlugin', customPlugin, validator);
```
