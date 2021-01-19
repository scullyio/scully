# scully-plugin-local-cache

> ## note
>
> This plugin is in BETA, please let us know any issues you have with it

This is the home of Scully local cache plugin for Scully.
It provides local caching for Scully.

The cache works with a approximately 5 minute granularity. This means that when a resource is in the cache it will live for the time it has assigned to it, but with a 5 minute margin.
When you have resources where this 5 minutes cache time is to long, set the resource to a TTL of `0` making it un-cachable.

To use this plugin you must first install it using npm:

```bash
 npm i @scullyIO/scully-plugin-local-cache
```

After that add it to your config file:

```typescript
import { localCacheReady } from '@scullyIO/scully-plugin-local-cache';
import { ScullyConfig } from '@scullyio/scully';

/** note that the config must be a promise */
export const config: Promise<ScullyConfig> = (async () => {

// setPluginConfig(theVault, { customerId: 2, projectId: 2 });

/** Mandatory! *//
await localCacheReady({
   includeReferer: false,
 });

 const conf: ScullyConfig = {
   projectRoot: './apps/demo/src',
   projectName: 'demo',
   outDir: './dist/static',
   handle404: 'index',
   maxRenderThreads: 24,
   routes: {
     '/user/:id': {
       type: 'json',
       id: {
         url: 'http://localhost:8200/users',
         resultsHandler: (raw) => raw.slice(0, 20),
         property: 'id',
       },
     },
   },
 };
 return conf;
})();
```

## config must be a promise.

Because the local-cache needs to initialize its cache before it can be used, and this is an asynchronous process, this plugin demands the Scully config the return a promise. You can use an async function as showen in the above config, or use a normal promise chain when that is your preference.

## Runtime Parameters

### nocache

If you want to do a local run of your app, without the Vault being used, you can add the command line option `--noCache` to your scully command.

```bash
npx scully --project MyProject --noCache
```

When you want to run a separate scully server, it _must_ exclude the cache. start it like this:

```bash
npx scully --project MyProject serve --noCache
```

This is needed, because the _local_ cache can only be used by once Scully instance.

### clearCache

the `--clearCache` option removes the local cache.

## The Vault Config

The local-cache has a config object that can be set using `setPluginConfig(theVault, customConfig);` or using the `await theVaultReady(customConfig);` option.
Settings provided to the `theVaultReady()` function will overwrite the `setPluginConfig`

```typescript
export interface LocalCacheConfig {
  /** use the Referer as a key differentiation, defaults to false */
  includeReferer?: boolean;
  /** your environment */
  environment?: 'dev' | 'prod' | 'staging' | 'test';
  /** the default Time To Live. 12 hours if unset */
  defaultTTL?: number;
  /** TTL exceptions */
  ttlExceptions?: {
    /** the full URL, is used as: `testUrl.startsWith(urlStart)`  */
    [urlStart: string]: number;
  };
}
```
