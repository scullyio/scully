---
title: Complemento Canónico
published: true
lang: es
position: 100
---

# Complemento `canonical`

<div class="docs-link_table">
  <a class="homepage" href="https://github.com/pjlamb12/scully-plugin-canonical"></a>
  <a class="repository" href="https://github.com/pjlamb12/scully-plugin-canonical"></a>
</div>

## Visión general

El propósito del complemento canónico de de Scully es tomar un atributo link canónico de la ruta y reemplazar el valor de ese enlace canónico en el encabezado de la página, o agregar la etiqueta link, si no existe. Esto es necesario para propósitos de SEO, si un artículo se publicó primero en otro sitio, por ejemplo.

## Caraterísticas

- ✅ Reemplaza el link canónico con una url con la url provista para el tag link
- ✅ Agrega un tag link canónico si no existe ninguno para la página

## Tabla de contenidos

- [Instalación](#Instalación)
- [Uso](#uso)
- [FAQ](#faq)

## Instalación

### NPM

`npm install scully-plugin-canonical --save-dev`

### Yarn

`yarn add scully-plugin-canonical --dev`

## Uso

Los complementos Render obtiene información de la ruta, y busca el título en la siguientes ubicaciones, en orden:

- `route.canonical`
- `route.data.canonical`
- `route.canonicalUrl`
- `route.data.canonicalUrl`
- `route.canonical_url`
- `route.data.canonical_url`

> Si la url canónica está en el encabezado de un archivo markdown, el atributo aparece en `route.data`.

para usar este complemento, es necesario agregar el paquete en el archivo `config.ts` de Scully del proyecto. Por ejemplo, `scully.your-project-name.config.ts`.
Luego agregarlo en el arreglo de `defaultPostRenderers` del sitio:

```ts
// scully.your-project-name.config.ts
require('scully-plugin-canonical');

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'your-project-name',
  outDir: './dist/static',
  routes: {},
  defaultPostRenderers: ['setCanonicalLinkPlugin'],
};
```

Si sólo quieres agregarlo en algunas rutas:

```ts
// scully.your-project-name.config.ts
require('scully-plugin-canonical');

export const config: ScullyConfig = {
  ...
  routes: {
    '/blog/:slug': {
      type: 'contentFolder',
      slug: {
        folder: './blog'
      },
      postRenderers: ['setCanonicalLinkPlugin']
    }
  }
  ...
};
```

Eso es todo lo que se necesita para que el complemento se incluya y se ejecute en la aplicación Scully.
