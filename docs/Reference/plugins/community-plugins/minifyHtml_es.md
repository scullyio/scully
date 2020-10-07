---
title: Complemento minifyHtml
published: true
lang: es
position: 100
---

# Complemento `minifyHtml`

<div class="docs-link_table">
  <a class="repository" href="https://github.com/samvloeberghs/kwerri-oss/tree/master/projects/scully-plugin-minify-html"></a>
</div>

## Visión General

Este complemento `postRenderer` para Scully prerenderizará los HTML de tus rutas minificados. Es decir, remueve el código innecesario reduciendo el tamaño de tus archivos.
¡Aumentará considerablemente el tiempo de carga!

## Instalación

Para instalar esta librería con `npm` ejecuta:

```
$ npm install scully-plugin-minify-html --save-dev
```

o con `yarn`

```
$ yarn add scully-plugin-minify-html
```

Este paquete depende del paquete [`html-minifier`](https://www.npmjs.com/package/html-minifier). Que será instalado automáticamente cuando se instale este complemento.

## Uso9

Importa y agrega el complemento a `defaultPostRenderers` para que ejecute sobre todas las páginas renderizadas o utiliza `postRenderers` en cada ruta. 

**Importante:**  la actual configuración de Scully dice que si utilizas la opción `postRenderers` sobre una ruta, ignorará la configuración global en `defaultPostRenderers`.

Para más información, visita: https://github.com/scullyio/scully/issues/595

```javascript
const { RouteTypes } = require('@scullyio/scully');
const { MinifyHtml } = require('scully-plugin-minify-html');

const postRenderers = [MinifyHtml];

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

Compila la aplicación y luego sólo debes ejecutar el comando de Scully.

```shell script
npm run build --prod
npm run scully
```

### Configurando `html-minifier`

El complemento `MinifyHtml` usa [html-minifier](https://www.npmjs.com/package/html-minifier) por debajo, por eso podemos configurar las opciones de minificado que se están usando.
Las opciones disponibles las podemos encontrar en la interfaz [`Options`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/html-minifier/index.d.ts)

**La configuración actual por defecto es:**

```typescript
import { Options } from 'html-minifier';

const defaultMinifyOptions: Options = {
  caseSensitive: true,
  removeComments: true,
  collapseWhitespace: true,
  collapseBooleanAttributes: true,
  removeRedundantAttributes: true,
  useShortDoctype: true,
  removeEmptyAttributes: true,
  minifyCSS: true,
  minifyJS: true,
  removeScriptTypeAttributes: true,
  removeStyleLinkTypeAttributes: true,
  // don't remove attribute quotes, not all social media platforms can parse this over-optimization
  removeAttributeQuotes: false,
  // don't remove optional tags, like the head, not all social media platforms can parse this over-optimization
  removeOptionalTags: false,
  // scully specific HTML comments
  // this will always be added in the final minifyOptions config
  ignoreCustomComments: [/scullyContent-(begin|end)/],
  // scully specific data injection
  // this will always be added in the final minifyOptions config
  ignoreCustomFragments: [/\/\*\* ___SCULLY_STATE_(START|END)___ \*\//],
};
```
Para configurar las opciones se puede hacer con la función `setPluginConfig`.
Puedes especificar un subconjunto de opciones que sobre-escribirán la configuración por defecto.

```javascript
const { RouteTypes, setPluginConfig } = require('@scullyio/scully');
const { MinifyHtml, MinifyHtmlOptions } = require('scully-plugin-minify-html');

const postRenderers = [MinifyHtml];

const minifyHtmlOptions: MinifyHtmlOptions = {
  minifyOptions: {
    removeComments: false,
  },
};
setPluginConfig(MinifyHtml, 'render', minifyHtmlOptions);
// or
// setPluginConfig(MinifyHtml, minifyHtmlOptions);

exports.config = {
  projectRoot: './src/app',
  defaultPostRenderers: postRenderers,
  routes: {
    '/blog/:slug': {
      type: RouteTypes.contentFolder,
      slug: {
        folder: './blog',
      },
      postRenderers: postRenderers,
    },
  },
};
```
