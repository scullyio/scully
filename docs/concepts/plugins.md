---
lang: en
position: 100
published: true
title: Plugins
---

# Scully plugins.

This is a high-level overview about plugins. For details see the [plugin section](/docs/Reference/plugins/overview.md) in the reference.

## About plugins.

To be able to expand and adapt to all current workloads and application we have an extended plugin system in Scully. This makes it possible to adapt to _any_ kind of workload.

There are now 7 different kind of plugins in Scully. All adhere to the same basic interface:

```typescript
interface plugin {
  (...parameters:any) => Promise<unknown>
}
```

This means a plugin is always a function that returns a promise, or an async function. If a plugin throws an error, or returns a canceled promise, Scully will log an error/warning to screen and stops all executing. (unless there is a setting in the configuration that allows it to ignore and continue)
