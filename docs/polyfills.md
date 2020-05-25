---
title: Polyfills
order: 800
lang: en
---

# Polyfills

Depending on the browser and environment that the application targets, some polyfills are
required. This page lists the recommended polyfills.

## `Event()` constructor

Scully uses [`Event`](https://developer.mozilla.org/en-US/docs/Web/API/Event/Event)
to be aware of different points in the application's lifecycle.

To make **Internet Explorer 10+** work, install and import the following polyfill:

`npm install events-polyfill`

```ts
// src/polyfills.ts
import 'events-polyfill/src/constructors/Event.js';
```
