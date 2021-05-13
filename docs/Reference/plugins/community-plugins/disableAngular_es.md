---
title: Complemento disableAngular
published: true
lang: es
position: 100
---

# Complemento `disableAngular`

<div class="docs-link_table">
  <a class="repository" href="https://github.com/samvloeberghs/kwerri-oss/tree/master/projects/scully-plugin-disable-angular"></a>
</div>

## Visión General

Este complemento `postRenderer` para Scully remueve los archivos estáticos que inician la aplicación Angular.
Opcionalmente puede remover el estado la transferencia dinámica desde el HTML.

Si utilizas Angular únicamente para compilar una web estática / informal con un extra de funcionalidad podría excesivo seguir utilizando Angular en la interfaz.

Desabilitar Angular en el frontend aumentará la velocidad de carga mucho más!

## Instalación

Para instalar la librería utiliza `npm`:

```
$ npm install scully-plugin-disable-angular --save-dev
```

o con `yarn`

```
$ yarn add scully-plugin-disable-angular
```

## Uso

Importala y agrega el complemento al `defaultPostRenderers` para ejecutarlo sobre todas las páginas renderizadas, o puedes usar postRenderers en la configuración de una ruta para ejecutarla sobre una ruta expecífica:

**Importante:** la implementación actual de Scully proporciona una opción `postRenderers` al nivel de rutas, esto ignorará la configuración de `defaultPostRenderers` en la configuración general.

Para más información visita: [https://github.com/scullyio/scully/issues/595](https://github.com/scullyio/scully/issues/595)

```typescript
const { RouteTypes } = require('@scullyio/scully');
const { DisableAngular } = require('scully-plugin-disable-angular');

const postRenderers = [DisableAngular];

exports.config = {
  projectRoot: './src/app',
  defaultPostRenderers: postRenderers, // for all routes
  routes: {
    '/blog/:slug': {
      type: RouteTypes.contentFolder,
      slug: {
        folder: './blog',
      },
      postRenderers: postRenderers, // per route config
    },
  },
};
```

Ahora puedes compilar tu aplicación con la opción `--stats-json` como el complemento necessita para identificar qué archivos estáticos tiene que compilar la aplicación
Luego, sólo ejecute el comando de Scully.

```
npm run build -- --prod --stats-json
npx scully
```

## Limpiando datos dinámicos

cuando desabilita Angular en las páginas pre-renderizadas no hay motivo para mantener el estado dinámico serializado en el HTML. Para esta opción existe la configuración del complemento `removeState` que quitará estos estados del HTML.

```typescript
const { RouteTypes, setPluginConfig } = require('@scullyio/scully');
const { DisableAngular } = require('scully-plugin-disable-angular');

const postRenderers = [DisableAngular];

setPluginConfig(DisableAngular, 'render', {
  removeState: true,
});

exports.config = {
  projectRoot: './src/app',
  defaultPostRenderers: postRenderers, // for all routes
  routes: {
    '/blog/:slug': {
      type: RouteTypes.contentFolder,
      slug: {
        folder: './blog',
      },
      postRenderers: postRenderers, // per route config
    },
  },
};
```
