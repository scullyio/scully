---
title: Complemento lazyImages
published: true
lang: es
position: 100
---

# Complemento `lazyImages`

<div class="docs-link_table">
  <a class="homepage" href="https://github.com/notiz-dev/scully-plugins"></a>
  <a class="repository" href="https://github.com/notiz-dev/scully-plugins/tree/master/plugins/lazy-images"></a>
</div>

## Visión General

`scully-plugin-lazy-images` es un complemento `postRenderer` para Scully que cambia tus imágenes a modo de carga lazy usando [lazyload](https://github.com/tuupola/lazyload). Reemplazará el atributo `scr` por `data-src` y le agrega la clase `lazyload` al tag `img`.

Un [enfoque nativo](https://web.dev/native-lazy-loading/) del navegador sería usar `loading="lazy"` para cada etiqueta `img`.

A browser [native approach](https://web.dev/native-lazy-loading/) would be to use `loading="lazy"` for each `img` tag. Cuando se tenga mejor [soporte de los navegadores](https://caniuse.com/#feat=loading-lazy-attr) se cambiará de enfoque.

## Instalación

Para instalar este complemente con `npm` ejecuta:

```
$ npm install @notiz/scully-plugin-lazy-images --save-dev
```

## Uso

Agrega el complemento a defaultPostRenderers en tu archivo scully.config:

```typescript
require('@notiz/scully-plugin-lazy-images');

exports.config = {
  projectRoot: './src/app',
  defaultPostRenderers: ['lazyImages'],
  routes: {}
};
```

Si quieres usar el complemento en una ruta específica, utiliza:

```typescript
require('@notiz/scully-plugin-lazy-images');

exports.config = {
  ...
  routes: {
    '/blog/:slug': {
      type: 'contentFolder',
      slug: {
        folder: './content/blog'
      },
      postRenderers: ['lazyImages']
    }
  }
  ...
};
```
