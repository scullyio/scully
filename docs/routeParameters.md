---
title: Route parameters & Scully
order: 190
lang: en
slug: routeParameters
---

# Route Parameters & Scully

If you've ran Scully and saw the following warning, then you need to teach Scully how to use your project's route parameters.

```bash
No configuration for route `/user/:userId` found. Skipping
```

The above error is given because Scully doesn't know all the possible values for `:userId`. If you teach Scully how to get the list of `:userId`s from your app, Scully can turn `/user/:userId` into a list of meaningful, pre-renderable routes, like so:

```bash
/user/1
/user/2
/user/3
...
/user/100
```

Even small Angular projects will have routes that contain route parameters. To stop Scully from skipping these routes, you'll need to configure a route plugin. Route plugins are how the developers can teach Scully to fetch data, and merge that data into routes that use route parmaters.

The easiest to understand route plugin is the `jsonPlugin`. It simply fetches data from any API that you specify, and then returns a list of properties that can be used to replace your route parameter. Checkout the [jsonPlugin docs](./plugin/jsonPlugin.md) to for an example of how easy this can be.
