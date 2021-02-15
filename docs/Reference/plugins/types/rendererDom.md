---
title: rendererDom Plugin Type
published: true
lang: en
position: 100
---

# `rendererDom` Plugin Type

## Overview

A **render plugin** is used to transform the rendered HTML.  
After the Angular application renders, the HTML content is passed to a **render plugin** where it can be further modified.

A **render plugin** could be used to transform a page containing markdown into a page that renders it.

## Interface

A **`rendererDom` plugin** is a function that returns a `Promise<JSDOM>`. The string in the promise must be the transformed
HTML. The interface looks like this:

```typescript
function exampleContentPlugin(
  dom: JSDOM,
  route: HandledRoute
): Promise<string> {
  // Must return a promise
}
```

## Difference with `rendererHtml` plugins

While having exactly the same function as the `rendererHtml` the `rendererDom` plugins get, and shoudl return a JSDOM object. Those will be run before the `rendererHtml` are executed.

## Sample of `rendererDom`
