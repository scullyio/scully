---
title: Complemento fouc
published: true
lang: es
position: 100
---

# Complemento `fouc`

<div class="docs-link_table">
  <a class="homepage" href="https://github.com/notiz-dev/scully-plugins"></a>
  <a class="repository" href="https://github.com/notiz-dev/scully-plugins/tree/master/plugins/fouc"></a>
</div>

## Visión General

`scully-plugin-fouc` es un complemento `postRenderer` para Scully para prevenit <b>f</b>lash <b>o</b>f <b>u</b>nstyled <b>c</b>ontent.

## Instalación

Para instalar este complemento con `npm` ejecuta:

```bash
$ npm install @notiz/scully-plugin-fouc --save-dev
```

## Uso

Agregar el complemento en los defaultPostRenderers en el archivo scully.config:

```json
require("@notiz/scully-plugin-fouc");

exports.config = {
  projectRoot: "./src/app",
  defaultPostRenderers: ["fouc"],
  routes: {}
};
```

Si deseas usar el complemento para una ruta específica, utiliza:

```typescript
require('@notiz/scully-plugin-fouc');

exports.config = {
  ...
  routes: {
    '/blog/:slug': {
      type: 'contentFolder',
      slug: {
        folder: './content/blog'
      },
      postRenderers: ['fouc']
    }
  }
  ...
};
```
