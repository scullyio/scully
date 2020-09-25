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

More over, it allows you to load the state on subsequent route changes after the initial page has been loaded.

A route change fetches the next route's state from the page on the serve, and it is returned to the client. Hence, having a state consumed as part of the build despite any CMS content in production

## Usage

To get or set the application's state, use `getState` and `setState` below:

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
