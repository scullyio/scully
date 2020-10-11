---
title: API de Scully 
lang: es
position: 150
---

# Documentación de la API de Scully

Cuando utilizas Scully, y quieres crear un complemento, or hacer algo más particular en tu configuración, Scully provee una API que te ayudará con las tareas comunes.

### Variables disponibles

- scullyConfig. La configuración actual de Scuhlly
- prod. Booleano pasado desde la línea de comando que puede usarse en entornos de producción

### Interfaces

- [HandledRoute](/docs/concepts/handled-routes),
- [ScullyConfig](/docs/Reference/config),
- ContentMetaData
- [ContentTextRoute](/docs/concepts/handled-routes#contenttextroute),

### Funciones

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
