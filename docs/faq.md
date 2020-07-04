---
title: Frequently Asked Questions
order: 9000
lang: en
---

# Frequently Asked Questions

<details>

<summary> language in route? 
</summary>

> In my project i have a routing like this:<br>
> /:lang<br>
> /:lang/page1<br>
> /:lang/page2<br>
> etc...<br>
>
> It's very simple. :lang can have few values (it, en...) and If possible I prefer to store it in the config, without have
> an endpoint dedicated.<br> How can I solve this?

As the Scully config file is typescript, you can post-process the routing object. a very crude solution would be something like this:

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

<details>
<summary>Ignore routes without config?</summary>
> In my app I have a lot of routes I don't want scully to handle.  How can I deal with that.

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

<style>

details[open] summary ~ * {
  animation: sweep .5s ease-in-out;
}

@keyframes sweep {
  0% {opacity: 0; margin-left: -10px, height:0}
  100% {opacity: 1; margin-left: 0px, height:inherit}
}
</style>
