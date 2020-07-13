---
title: Core
order: 500
lang: en
---

# Scully Core

This section covers Scully's core features, and they are listed below:

- [Idle Monitor Service](#idle-monitor-service)
- [Router Service](#router-service)
- [Scully Content Component](#scully-content-component)
- [Transfer State Service](#transfer-state-service)
- [Utility Methods](#utility-methods)

## Idle Monitor Service

The `IdleMonitorService` hooks into Zonejs. When Angular goes idle (**more precisely, when all outgoing HTTP requests finish**)
Scully triggers Puppeteer in order to know when it is ready to render. This service is in the `ScullyLibModule`.

If your content is loaded out of sight of zones, Scully scrapes the page before its ready.

To disable Scully ready mechanism and add your custom mechanism

- Put following config object in the forRoot config

```typescript
ScullyLibModule.forRoot({
  useTransferState: true,
  alwaysMonitor: false,
  manualIdle: true
});
```

This will cause Scully to fall-back to using a 25 seconds timeout, on every page rendered.

- Then in your component, trigger the fireManualMyAppReadyEvent().

```typescript
export class ManualIdleComponent implements OnInit {
  text = 'this text is displayed by automated detection';

  constructor(private ims: IdleMonitorService) {}

  ngOnInit(): void {
    setTimeout(() => (this.text = '__ManualIdle__'), 3 * 1000);
    setTimeout(() => this.ims.fireManualMyAppReadyEvent(), 3.25 * 1000);
  }
}
```

- To enable this for single route, provide "manualIdle:true" inside the config.ts file in the route configuration.

```typescript
// scully.config.ts
export const config: ScullyConfig = {
  routes: {
    '/user/:userId': {
      type: 'json',
      // Add the following to your route
      exposeToPage:{
        manualIdle: true
      }
      userId: {
        url: 'http://localhost:8200/users',
        property: 'id'
      }
    }
  }
};
```

## Router Service

The `ScullyRoutesService` provides methods and observables that allow you to know the routes rendered by Scully.

The observables and methods are listed below:

- available\$
- unPublished\$
- topLevel\$
- getCurrent()
- reload()

#### available\$: _Observable<ScullyRoute[]>_

`available$` - Returns routes containing the property `published` with a value of true.

#### unPublished\$: _Observable<ScullyRoute[]>_

`unPublished$` - Returns routes containing the property `published` with a value of false.

#### topLevel\$: _Observable<ScullyRoute[]>_

`topLevel$` - Returns the top-level routes.

#### getCurrent(): _Observable&lt;ScullyRoute&gt;_

`getCurrent()` - A method that returns the current location.

#### reload(): _void_

`reload` - A method that checks if new routes have been added to the `scully-routes.json` file.

The `ScullyRoutesService`'s types come from the `ScullyRoute` interface, which is shown below:

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

## Scully Content Component

The `scully-content` component inserts the render process' result into the HTML document.

**NOTE:** The `scully-content` component does not work inside an `*ngIf` directive.

## Transfer State Service

The `TransferStateService` allows to transfer an Angular application's state into the static site rendered by Scully.
More over, it allows you to load the state on subsequent route changes after the initial page has been loaded.

A route change fetches the next route's state from the page on the serve, and it is returned to the client. Hence, having a state consumed as part of the build despite any CMS content in production

To get or set the application's state; use the two methods below:

#### getState

`getState` - This method returns an observable that fires once and then completes. It does executes after the page's navigation has finished.

```typescript
getState<T>(name: string): Observable<T>
```

#### setState

`setState` - This method sets values to the property key.

```typescript
setState<T>(name: string, val: T): void;
```

## utility-methods

These methods provide useful information about Scully processes.

##### isScullyRunning(): _boolean_

`isScullyRunning` - This method returns `true` or `false` if the Scully build is currently running.

##### isScullyGenerated(): _boolean_

`isScullyGenerated` - This method returns `true` if the Scully build has run.
