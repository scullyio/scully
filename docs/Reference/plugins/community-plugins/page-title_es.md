---
title: Complemento Titulo de Página
published: true
lang: es
position: 100
---

# Complemento `page-title`

<div class="docs-link_table">
  <a class="homepage" href="https://github.com/pjlamb12/scully-plugin-page-title"></a>
  <a class="repository" href="https://github.com/pjlamb12/scully-plugin-page-title"></a>
</div>

## Visión General

El propósito del complemento PageTiel para Scully es reemplacer el título de las páginas con datos provenientes de las rutas. Para los artículis de los blogs, podrían ser el mismo titulo del artículo. Esto ayudará con el CEO sobre los artículos y páginas de tu aplicación.

## Caracerísticas

- ✅ Reemplaza el título de una página con datos de la ruta
- ✅ Mejora el CEO del sitio

## Tabla de Contenidos

- [Instalación](#Instalación)
- [Uso](#Uso)
- [FAQ](#faq)

## Instalación

### NPM

`npm install scully-plugin-page-title --save-dev`

### Yarn

`yarn add scully-plugin-page-title --dev`

## Uso

Los complementos Render obtienen información sobre la ruta, y el complemente busca el titulo en las siguientes ubicaciones, en order:

- `route.title`
- `route.data.title`
- `route.pageTitle`
- `route.data.pageTitle`
- `route.page_title`
- `route.data.page_title`

> Si el titulo se encuentra en la portada de un archivo markdown, el atributo se obtiene en `route.data`.

Para usar este complemento, solo necesita agregar el paquere en el archivo `config.ts` de Scully. Por ejemplo: `scully.your-project-name.config.ts`.
Una vez cargado el complemento, agregarlo dentro del arreglo de `defaultPostRenderers` del sitio:

```ts
// scully.your-project-name.config.ts
require('scully-plugin-page-title');

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'your-project-name',
  outDir: './dist/static',
  routes: {},
  defaultPostRenderers: ['changeTitlePlugin']
};
```

Si se pretende agregarlo sólo para algunas rutas, de la siguiente forma:

```ts
// scully.your-project-name.config.ts
require('scully-plugin-page-title');

export const config: ScullyConfig = {
  ...
  routes: {
    '/blog/:slug': {
      type: 'contentFolder',
      slug: {
        folder: './blog'
      },
      postRenderers: ['changeTitlePlugin']
    }
  }
  ...
};
```

Eso es todo para que el complemento esté incluido y corra sobre las páginas de tu aplicación.
