# Scully Core

## Idle Monitor

Scully implements the `IdleMonitorService` to hook into Zonejs. When angular goes idle (**more precise, when all outgoing HTTP-requests are settled**)
Scully trigger Puppeteer, and knows when it's ready to render.

Without this process, we have to resort to a (25 seconds) timeout. this is both slower and unprecise, some pages need even more time.

`IdleMonitorService` is available in `ScullyLibModule`.

## Router Service

`ScullyRoutesService` is an service to provide to the user access to certains methods and observables to know
the routes rendered by Scully.

- available\$
- unPublished\$
- topLevel\$
- getCurrent()
- reload()

The `ScullyRoutesService` use the `ScullyRoute` interface to set types.

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

#### available\$: _Observable<ScullyRoute[]>_

`available$` returns routes with the property `published` with value true.

#### unPublished\$: _Observable<ScullyRoute[]>_

`unPublished$` returns routes with the property `published` with value false.

#### topLevel\$: _Observable<ScullyRoute[]>_

`topLevel$` returns top level routes.

#### getCurrent(): _Observable<ScullyRoute>_

`getCurrent()` method returns the current location

#### reload(): _void_

`reload` method checks if new routes was added in the `scully-routes.json`.

## Scully Content

Scully use the `scully-content` to insert the result of the render process into the HTML document.

The `scully-content` component won't work inside a `*ngIf` directive.

## Transfer State

The `TransferStateService` allows transfer the state of the Angular application to the static site rendered by Scully.

To set or get the state of the application you can use 2 methods:

- getState
- setState

#### getState

`getState` will return an observable that fires once and completes. It does so right after the navigation for the page has finished.

```typescript
getState<T>(name: string): Observable<T>
```

#### setState

`setState` will set values to the property key.

```typescript
setState<T>(name: string, val: T): void
```

## Utils

#### Is Scully

- isScullyRunning()
- isScullyGenerated()

##### isScullyRunning(): _boolean_

`isScullyRunning` returns `true` or `false` if Scully build is happening.

##### isScullyGenerated(): _boolean_

`isScullyGenerated` returns `true` if Scully build has run.

[Full Documentation ➡️](scully.md)
