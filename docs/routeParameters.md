---
title: Route Parameters & Scully
order: 190
lang: en
slug: routeParameters
---

# Route Parameters & Scully

If you run Scully and the following warning is displayed, you need to teach Scully how to use the project's route parameters.

```bash
No configuration for route `/user/:userId` found. Skipping
```

The above error is given because Scully does not know all the possible values for `:userId`. Teach Scully how to get the list of `:userId`s from your app. Scully can turn `/user/:userId` into a list of meaningful pre-renderable routes like so:

```bash
/user/1
/user/2
/user/3
...
/user/100
```

Even small Angular projects have routes that contain route parameters. To stop Scully from skipping these routes, configure a route plugin. Route plugins teach Scully how to fetch data and merges it into routes using parameters.

The easiest way to understand route plugin is by understanding the `jsonPlugin`. It simply fetches data from any API that you specify, and it returns a list of properties that can be used to replace the route parameter. Checkout the [jsonPlugin docs](./plugin/jsonPlugin.md) to see an example of how easy this configuration is.
