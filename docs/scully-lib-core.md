---
title: Core
order: 500
---

# Scully Core

Scully has several core features, and they will be covered in his section.

## Idle Monitor Service

The `IdleMonitorService` hooks into Zonejs. When Angular goes idle (**more precisely, when all outgoing HTTP requests are settled**)
Scully triggers Puppeteer in order to know when it is ready to render.

Without this process it would have to resort to a (25 seconds), which is both slower and inaccurate. Some pages could need even more time.

`IdleMonitorService` is in the `ScullyLibModule`.

## Router Service

The `ScullyRoutesService` provides access to certain methods and observables in order to know
the routes rendered by Scully.

The observables and methods are listed blow:

- available\$
- unPublished\$
- topLevel\$
- getCurrent()
- reload()

The `ScullyRoutesService` uses the `ScullyRoute` interface to set types.

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

`available$` - Returns routes with the property `published` with a value of true.

#### unPublished\$: _Observable<ScullyRoute[]>_

`unPublished$` - Returns routes with the property `published` with a value of false.

#### topLevel\$: _Observable<ScullyRoute[]>_

`topLevel$` - Returns the top level routes.

#### getCurrent(): _Observable<ScullyRoute>_

`getCurrent()` - A method that returns the current location.

#### reload(): _void_

`reload` - A method that checks if new routes were added to the `scully-routes.json` file.

## Scully Content Component

The `scully-content` component inserts the render process' result into the HTML document.

**NOTE:** The `scully-content` component does not work inside an `*ngIf` directive.

## Transfer State Service

The `TransferStateService` allows to transfer an Angular application's state into the static site rendered by Scully.

To get or set the application's state; use the two methods below:

#### getState

`getState` - This method returns an observable that fires once and then completes, and it does so right after the page's navigation has finished.

```typescript
getState<T>(name: string): Observable<T>
```

#### setState

`setState` - This method sets values to the property key.

```typescript
setState<T>(name: string, val: T): void;
```

## Utility Methods:

These methods provide useful information about Scully processes.

##### isScullyRunning(): _boolean_

`isScullyRunning` - This method returns `true` or `false` if the Scully build is currently running.

##### isScullyGenerated(): _boolean_

`isScullyGenerated` - This method returns `true` if the Scully build has run.
