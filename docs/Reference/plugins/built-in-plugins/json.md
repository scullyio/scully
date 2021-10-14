---
title: json Plugin
published: true
lang: en
position: 100
---

# `json` Plugin

<div class="docs-link_table">
  <a class="view-in-repo" href="https://github.com/scullyio/scully/blob/main/libs/scully/src/lib/routerPlugins/jsonRoutePlugin.ts"></a>
</div>

## Overview

The JSON Plugin fetches data from API endpoints during route discovery. Scully uses this data
to create a list of routes that contain route parameters.

## Usage

Imagine your app has an Angular route configured with the path `users/:userId`. Scully needs
help understanding the route parameter `:userId`.

The following is an example of how you could use the `jsonPlugin` to get `userId`s from your
server (`localhost:8200`) that Scully needs to pre-render the `user/:userId` routes.

```typescript
// scully.config.ts
export const config: ScullyConfig = {
  // Add the following to your file
  routes: {
    '/user/:userId': {
      type: 'json',
      userId: {
        url: 'http://localhost:8200/users',
        property: 'id',
      },
    },
  },
};
```

The above example tells Scully to use the `json` plugin whenever it finds a route
matching `/user/:userId`. The userId's value contains two pieces of data. First,
the `url` that the JSON plugin should go to get an array of userIds or users. And
second, the property of `id`. When used together, the `url` returns a list of
users, and then the `id` property is plucked from each user object.

The JSON plugin plucks the provided property name from each of the items in the
`HandledRoute[]` array. In other words, the data array returned by the API, each
contain an `id` property. Therefore, returning a list of `userIds` instead
of a list of users.

## JSON Plugin Options

The following describes each of the options available for user with the json plugin.

The following five options are configurable for this plugin:

- `postRenderers`
- `url`
- `property`
- `headers`
- `resultsHandler`

The following is an example and explanation of each options.

```typescript
// scully.config.ts
export const config: ScullyConfig = {
  routes: {
    '/users/:userId': {
      type: 'json',
      /**
       * postRenderers: postRenderers[]
       *
       * This options allows you to configure postRenderers for this route returned
       * by this `/users/:userId` plugin.
       */
      postRenderers: [],
      userId: {
        /**
         * url: string
         *
         * An API that returns a response containing the data (preferribly an array)
         * needed for all `userId`s in the system.
         */
        url: 'https://my-api.com/users',
        /**
         * property: string
         *
         * If the `url` returns an array of objects, use the `property` to provide the
         * name of the property that can be used to pluck the `userId` from each item.
         * If the APi returns a list of items using the `id` property for the `userId`,
         * the following config would pluck the `id` property off of each user object.
         */
        property: 'id',
        /**
         * headers: {[key:string]:any}
         *
         * If the `url` API requires specific headers, you can provide those here. The
         * header name is the key, and the header value is the value.
         */
        headers: {
          /**
           * expectedContentType: string
           *
           * By default plugin expects `application/json` Content-Type in response headers.
           * If the API returns different type of content use the `expectedContentType` to specify
           * different type. Error will be thrown if content types do not match.
           */
          expectedContentType: 'application/vnd.api+json',
          'API-KEY': '0123456789',
        },
        /**
         * resultsHandler: (response: any) => any[]
         *
         * If the `url` returns an object, use the `resultsHandler` to map that object
         * into an array of objects/ids.
         *
         * In the following example, the server returned an object where the users were
         * nested inside of the `response.data` property. So the resultsHandler returns
         * `response.data.users`.
         */
        resultsHandler: (response) => response.data.users,
      },
    },
  },
};
```
