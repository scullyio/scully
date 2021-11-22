# scully-plugin-playwright

This is the playwright render plugin for Scully.

The interface for a renderPlugin is:

```ts
  (route:HandledRoute) => Promise<string>
```

This plugin will be called for every route that is in the `handledRoute[]` When it throws its retried for 3 times. If it fails after that, the route is skipped.
