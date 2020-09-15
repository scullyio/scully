---
title: Frequently Asked Questions
published: true
lang: en
position: 100
---

# Frequently Asked Questions

## Ignoring Routes

<details>
<summary>Ignore routes without config</summary>

> I have a lot of routes I don't want Scully to handle.  
> How can I deal with this?

Scully will use the `default` plugin for any route that is not specified. When you want to have another way to handle defaults, you can replace this plugin with another one.  
For example, if you want to ignore all undefined routes you can do:

```typescript
registerPlugin('router', 'default', findPlugin('ignored'));
```

In case you want to have some more control, you can create a custom plugin:

```typescript
registerPlugin(
  'router',
  'default',
  async (route: string): Promise<HandledRoute[]> => {
    if (route === 'somethingSpecial') {
      return [{ route, type: 'somethingElse' }];
    }
    if (route === 'somethingSpecial/:id') {
      const data = httpGetJson('someEndPoint'); // fetch some json
      const { createPath } = routeSplit(route);
      const routes: HandledRoutes[] = [];
      for (const row of data) {
        routes.push({ route: createPath(row.id), type: 'default' });
      }
      return routes;
    }
    return [];
  },
  undefined,
  { replaceExistingPlugin: true }
);
```

</details>

## Plugins

<details>
<summary>How do I fix plugin build errors related to the `express-serve-static-core` module?</summary>

> Building a plugin results in a fatal error `Cannot find module 'express-serve-static-core'`, originating from `node_modules/@scullyio/scully/lib/utils/serverstuff/staticServer.d.ts`

To correct this, add the `skipLibCheck` and `skipDefaultLibCheck` flags to your `tsconfig.json` => `compilerOptions` like this:

```json
{
  "compileOnSave": false,
  "compilerOptions": {
    "skipLibCheck": true,
    "skipDefaultLibCheck": true
  }
}
```

</details>

## Route Parameters

<details>
<summary>No configuration for route found</summary>

If you run Scully and the following warning is displayed, you need to teach Scully how to use the project's route parameters.

```bash
No configuration for route `/user/:userId` found. Skipping
```

The above error is given because Scully does not know all the possible values for `:userId`. Teach Scully how to get the list of `:userId`s from your app. Scully can turn `/user/:userId` into a list of meaningful pre-renderable routes like so:

```
/user/1
/user/2
/user/3
...
/user/100
```

Even small Angular projects have routes that contain route parameters. To stop Scully from skipping these routes, configure a [route plugin](/docs/learn/plugins/types/router). Route plugins teach Scully how to fetch data and merges it into routes using parameters.

The easiest way to understand route plugin is by understanding the [`jsonPlugin`](/docs/learn/plugins/built-in-plugins/json). It simply fetches data from any API that you specify, and it returns a list of properties that can be used to replace the route parameter. Checkout the [jsonPlugin docs](/docs/learn/plugins/built-in-plugins/json) to see an example of how easy this configuration is.

</details>

<details>
<summary>Language params in routes</summary>

> I have a routing structure which looks like this:  
> `/:lang`  
> `/:lang/page1`  
> `/:lang/page2`  
> etc.  
> `:lang` can have few values (`'it'`, `'en'`, etc.)  
> I prefer to store `:lang` in the config, without a dedicated endpoint.  
> How can I solve this?

As the Scully config file is typescript, you can post-process the routing object.  
A very crude solution would be something like this:

```typescript
import { ScullyConfig } from '@scullyio/scully';

const preLangConfig: ScullyConfig = {
  /** settngs */
  routes: {
    ':lang/route1': { type: 'default' },
    ':lang/route2': { type: 'default' },
    ':lang/route3': { type: 'default' },
    ':lang/route4': { type: 'default' },
  },
};
export const config = {
  ...preLangConfig,
  routes: Object.fromEntries(
    // make sure you use a node-version that supports this, or use a reduce.
    Object.entries(preLangConfig.routes).reduce((all, [route, config]) => {
      if (route.includes(':lang')) {
        ['it', 'en', 'nl', 'sp'].forEach((
          lang // <-- language array
        ) => all.push([route.split(':lang').join(lang), config]));
      } else {
        all.push([route, config]);
      }
      return all;
    }, [])
  ),
};

console.log(config.routes);
```

It takes the `preLangConfig` and iterates over all the routes. When it finds the `:lang` parameter, it creates an entry with every value provided in the language array. That way the final config will have a route for every language available.

</details>
