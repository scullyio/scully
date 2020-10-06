---
title: Complemento RSS
published: true
lang: es
position: 100
---

# Complemeneto `mediumZoom`

<div class="docs-link_table">
  <a class="homepage" href="https://github.com/notiz-dev/scully-plugins"></a>
  <a class="repository" href="https://github.com/notiz-dev/scully-plugins/tree/master/plugins/medium-zoom"></a>
</div>

## Visión General

`scully-plugin-medium-zoom` es un complemento `postRenderer` para [Scully](http://scully.io/) que agrega un stilo con aumento medio a las imágenes usando [medium-zoom](https://github.com/francoischalifour/medium-zoom). Este complemento agrega el atributo `data-zoomable` a cada tag `img` de tu ruta.

## Instalación

Para instalar este complemento con `npm` ejecuta:

```
$ npm install @notiz/scully-plugin-medium-zoom --save-dev
```

## Uso

Agrega el complemento al `defaultPostRenderers` en tu `scully.config`:

```js
require('@notiz/scully-plugin-medium-zoom');

exports.config = {
  projectRoot: './src/app',
  defaultPostRenderers: ['mediumZoom'],
  routes: {},
};
```

Si quieres usar el complemento en una ruta específica, escribe:

```js
require('@notiz/scully-plugin-medium-zoom');

exports.config = {
  ...
  routes: {
    '/blog/:slug': {
      type: 'contentFolder',
      slug: {
        folder: './content/blog'
      },
      postRenderers: ['mediumZoom']
    }
  }
  ...
};
```
