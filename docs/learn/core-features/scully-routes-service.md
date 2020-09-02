---
title: ScullyRoutesService
published: true
lang: en
position: 100
---

# `ScullyRoutesService` <!-- omit in toc -->

<div class="docs-link_table">
  <a class="view-in-repo" href="https://github.com/scullyio/scully/blob/main/libs/ng-lib/src/lib/route-service/scully-routes.service.ts"></a>
</div>

<div class="docs-toc"></div>

- [Overview](#overview)
- [Interface](#interface)
- [Observables & Methods](#observables--methods)

  - [`available$:` _`Observable<ScullyRoute[]>`_](#available-observablescullyroute)
  - [`unPublished$:` _`Observable<ScullyRoute[]>`_](#unpublished-observablescullyroute)
  - [`topLevel$:` _`Observable<ScullyRoute[]>`_](#toplevel-observablescullyroute)
  - [`getCurrent():` _`Observable<ScullyRoute>`_](#getcurrent-observablescullyroute)
  - [`reload():` _`void`_](#reload-void)

  - [`available$:` _`Observable<ScullyRoute[]>`_](#available-observablescullyroute)
  - [`unPublished$:` _`Observable<ScullyRoute[]>`_](#unpublished-observablescullyroute)
  - [`topLevel$:` _`Observable<ScullyRoute[]>`_](#toplevel-observablescullyroute)
  - [`getCurrent():` _`Observable<ScullyRoute>`_](#getcurrent-observablescullyroute)
  - [`reload():` _`void`_](#reload-void)

## Overview

The [`ScullyRoutesService`](https://github.com/scullyio/scully/blob/main/libs/ng-lib/src/lib/route-service/scully-routes.service.ts) provides methods and observables that allow you to know the routes rendered by Scully.

## Interface

The [`ScullyRoutesService`](https://github.com/scullyio/scully/blob/main/libs/ng-lib/src/lib/route-service/scully-routes.service.ts)'s types come from the [`ScullyRoute`](https://github.com/scullyio/scully/blob/main/libs/ng-lib/src/lib/route-service/scully-routes.service.ts) interface:

```typescript
export interface ScullyRoute {
  route: string;
  title?: string;
  slugs?: string[];
  published?: boolean;
  slug?: string;
  [prop: string]: any;
}
```

## Observables & Methods

#### `available$:` _`Observable<ScullyRoute[]>`_

Returns routes containing the property `published` with a value of true.

#### `unPublished$:` _`Observable<ScullyRoute[]>`_

Returns routes containing the property `published` with a value of false.

#### `topLevel$:` _`Observable<ScullyRoute[]>`_

Returns the top-level routes.

#### `getCurrent():` _`Observable<ScullyRoute>`_

A method that returns the current location.

#### `reload():` _`void`_

A method that checks if new routes have been added to the `scully-routes.json` file.
