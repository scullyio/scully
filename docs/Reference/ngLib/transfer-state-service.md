---
title: TransferStateService
published: true
lang: en
position: 100
---

# `TransferStateService`

<div class="docs-link_table">
  <a class="view-in-repo" href="https://github.com/scullyio/scully/blob/main/libs/ng-lib/src/lib/transfer-state/transfer-state.service.ts"></a>
</div>

## Overview

The [`TransferStateService`](https://github.com/scullyio/scully/blob/main/libs/ng-lib/src/lib/transfer-state/transfer-state.service.ts) allows the transfer of an Angular application's state into the static site rendered by Scully.

This allows Scully to use cached data instead of using the original data source (which is most likely
an external API).

More over, it allows you to load the state on subsequent route changes after the initial page has been loaded.

A route change fetches the next route's state from the page on the serve, and it is returned to the client. Hence, having a state consumed as part of the build despite any CMS content in production

## Usage

#### `useScullyTransferState()`

Use this method to have your existing observable data sources automatically
included in Scully's TransferState. During development, your observables will behave as usual.

When the static site is served, Scully will use the cached state instead of accessing the original
observable data source.

```typescript
useScullyTransferState<T>(name: string, originalState: Observable<T>): Observable<T>
```

#### `getState()`

This method returns an observable that fires once and then completes. It does executes after the page's navigation has finished.

```typescript
getState<T>(name: string): Observable<T>
```

#### `setState()`

This method sets values to the property key.

```typescript
setState<T>(name: string, val: T): void;
```

## Caveats

### Usage in Resolvers

You can use the TransferState inside [`Resolvers`](https://angular.io/api/router/Resolve) to load
the required data for a route before initializing the corresponding component. The router requires
the observable to complete in order to continue with the navigation. This means that you might need
to manually complete the observable, for example:

```typescript
@Injectable({ providedIn: 'root' })
export class ScullyResolver implements Resolve<any> {
  
  constructor(
    private service: DataService,
    private transferState: TransferStateService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot ) {
    const key = 'unique-data-key'
    return this.transferState.useScullyTransferState(
      key,
      this.service.getData(key)
    ).pipe(
      take(1) // this will complete the observable
    );
  }
}
```
