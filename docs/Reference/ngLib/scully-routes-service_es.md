---
title: ScullyRoutesService
published: true
lang: es
position: 100
---

# `ScullyRoutesService`

<div class="docs-link_table">
  <a class="view-in-repo" href="https://github.com/scullyio/scully/blob/main/libs/ng-lib/src/lib/route-service/scully-routes.service.ts"></a>
</div>

## Visión General

El servicio [`ScullyRoutesService`](https://github.com/scullyio/scully/blob/main/libs/ng-lib/src/lib/route-service/scully-routes.service.ts) provee métodos y observables que permiten saber las rutas renderizadas por Scully.

## Interfaz

Los tipos de [`ScullyRoutesService`](https://github.com/scullyio/scully/blob/main/libs/ng-lib/src/lib/route-service/scully-routes.service.ts) provienen de la interfaz [`ScullyRoute`](https://github.com/scullyio/scully/blob/main/libs/ng-lib/src/lib/route-service/scully-routes.service.ts):

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

## Observables y Métodos

#### `available$:` _`Observable<ScullyRoute[]>`_

Devuelve las rutas que contienen la propiedad `published` con valor true.

#### `unPublished$:` _`Observable<ScullyRoute[]>`_

Devuelve las rutas que contienen la propiedad `published` con valor false.

#### `topLevel$:` _`Observable<ScullyRoute[]>`_

Devuelve las rutas de alto del nivel superior.

#### `getCurrent():` _`Observable<ScullyRoute>`_

Un método que devuelve la ubicación actual.

#### `reload():` _`void`_

Un método que controla si las nuevas rutas han sido agregadas al archivo `scully-routes.json`.
