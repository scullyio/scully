# Polyfills

Depending on the browsers and environments your app targets, polyfills may be
required. This page lists some recommended polyfills.

## `Event()` constructor

We use [`Event`](https://developer.mozilla.org/en-US/docs/Web/API/Event/Event)
inside Scully to be aware of different points in the lifecycle of the application.

To make this work in **Internet Explorer 10+**, include the following polyfill.

`npm install events-polyfill`

```ts
// src/polyfills.ts

import 'events-polyfill/src/constructors/Event.js';
```
