---
lang: en
position: 20
published: true
title: Unhandled Routes
---

# Unhandled routes

## overview

In this section we will go over what is meant by `unhandled routes` in Scully.

## Unhandled route

An unhandled route is a string that represents a path into your application. When you look at the URL of your application it is usually something like this:

```
http://localhost:4200/docs/concepts/unhandled-routes
```

In this case, the unhandled route would be: `/docs/concepts/unhandled-routes`.

# Angular parameterized routes

When you look into your angular route configuration, you might also encounter things like:

```typescript
/** in app-router **/
const routes: Routes = [
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  }
];

/** in user-routing.module **/
const routes: Routes = [
  { path: '', component: UsersComponent },
  {
    path: ':userId',
    component: UserComponent,
    children: [
      { path: '', component: PostsComponent, pathMatch: 'full' },
      { path: 'friend/:friendCode', component: UserComponent },
      { path: 'post/:postId', component: PostComponent }
    ]
  }
];
```

Our friendly traversal will figure out that means we have those unhandled routes:

```
/user
/user/:userId
/user/:userId/friend/:friendCode
/user/:userId/post/:postId
```

and will add all of those to the unhandled route array.

> **Note**: those routes have dynamic data (`:userId`, `:friendCode` and `:postId`) and will be skipped if we do _not_ define a config for them in the [config file routes] property. This means there will be NO STATIC FILES for ROUTES which HAVE DYNAMIC DATA but NO CONFIG

# Extra routes

There will be times that your application is able to handle routes that are not defined in the router, or in such a way that it can't be automatically traversed. For example, because you are using a route matcher, or you are using ng-Upgrade, and part of the routes is still handled by your AngularJS part of the application. Or you are using Scully on an application that is not utilizing Angular.
For this we have provisioned the `extraRoutes` property in the config.

```typescript
export interface ScullyConfig {
  /** ... */
  extraRoutes?: string | string[] | Promise<string[] | string>;
  /** ... */
}
```

As it also takes a promise, it means that you can use an async function to fetch a list of routes from disk, or an external API

```typescript
const config:ScullyConfig = {
  ...
  extraRoutes: httpGetJson('http://web.archive.org/cdx/search/cdx?url=scully.io*&output=json').then(cleanup),
  ...
}
```

This will result in a valid list of paths to render. At least when your cleanup function is making sure the result ends in paths that you have actually provided in your application.

[config file routes]: /docs/Reference/config#routes-routeconfig
