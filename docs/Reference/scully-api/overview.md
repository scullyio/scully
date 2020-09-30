---
title: Scully api
lang: en
position: 150
---

# The Scully API docs

When you use Scully, and you want to create an plugin, or do something more tailored in your config, we provide an API that will help you with common tasks.

### available variables

- scullyConfig. The actual config
- prod. Boolean passed in from command-line can be used to to set production time only settings

### interfaces

- [HandledRoute](/docs/concepts/handled-routes),
- [ScullyConfig](/docs/Reference/config),
- ContentMetaData
- [ContentTextRoute](/docs/concepts/handled-routes#contenttextroute),

### Functions

- httpGetJson,
- [registerPlugin](/docs/Reference/scully-api/registerPlugin)
- replaceFirstRouteParamWithVal,
- [routeSplit](/docs/Reference/scully-api/utils),
- getHandledRoutes,
- setPluginConfig,
- getPluginConfig,
- findPlugin,
- createFolderFor,
- getMyConfig,
- setMyConfig,
