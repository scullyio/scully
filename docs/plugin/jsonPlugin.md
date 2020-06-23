---
title: Plugins - JSON Plugin
order: 730
lang: en
---

# JSON Plugin

The JSON Plugin fetches data from API endpoints during route discovery. Scully uses this data
to create a list of routes that contain route parameters.

Imagine your app has an Angular route configured with the path `users/:userId`. Scully needs help understanding
the route parameter `:userId`.

The following is an example of how you could use the `jsonPlugin` to get `userId`s from your server (`localhost:8200`) that Scully needs to pre-render the `user/:userId` routes.

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

The above example tells Scully to use the `json plugin` for fetching some JSON data via HTTP whenever it finds a route matching `/user/:userId`.
The `userId`'s value contains two pieces of data. First, the url that the JSON plugin should go to in order to get the required JSON.
Second, the `id` property.

The JSON plugin plucks the provided property name from each of the items in the `HandledRoute[]` array. In other words,
the data array returned by the `jsonplaceholder` API, each containing an `id` property. Therefore, returning a list of `userIds` instead of a list
of users.

The JSON plugin also accepts any header needed when making an API request.

##### Example:

```typescript
// scully.config.ts
export const config: ScullyConfig = {
  routes: {
    '/todos/:todoId': {
      type: 'json',
      todoId: {
        url: 'https://my-api.com/todos',
        property: 'id',
        headers: {
          'API-KEY': '0123456789',
        },
      },
    },
  },
};
```
