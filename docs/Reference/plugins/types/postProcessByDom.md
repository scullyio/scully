---
title: postProcessByDom Plugin Type
published: true
lang: en
position: 100
---

# `postProcessByDom` Plugin Type

## Overview

A **postProcessByDom plugin** is used to transform the rendered HTML.  
After the Angular application renders, the HTML content is passed to a **postProcessByDom plugin** where it can be further modified.

A **postProcessByDom plugin** could be used to transform a page containing markdown into a page that renders it.

## Interface

A **postProcessByDom plugin** is a function that returns a `Promise<JSDOM>`. The string in the promise must be the transformed
HTML. The interface looks like this:

```typescript
function exampleContentPlugin(dom: JSDOM, route: HandledRoute): Promise<string> {
  // Must return a promise
}
```

## Difference with `postProcessByHtml` plugins

While having exactly the same function as the `postProcessByHtml` the `postProcessByDom` plugins get, and shoudl return a JSDOM object. Those will be run before the `postProcessByHtml` are executed.

## Sample of `postProcessByDom`
