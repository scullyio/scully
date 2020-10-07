---
title: Complemento toc Tabla de Contenidos
published: true
lang: es
position: 100
---

# Complemento `toc`

<div class="docs-link_table">
  <a class="repository" href="https://github.com/d-koppenhagen/scully-plugin-toc"></a>
</div>

## Visión General

Este complemento para Scully provee un `postRenderer` ara generar una **Tabla de Contenidos (TOC - por sus siglas en inglés)** para el contenido renderizado de una ruta.

## Instalación

Para instalar esta librería con `npm`, ejecuta:

```
npm i scully-plugin-toc --save-dev
```

## Uso

Para usar este complemento debes importarlo dentro de tu archivos de configuración de Scully (`scully.<project-name>.config.ts`) y definirlo como un `postRenderer` en una definición de ruta. Puede configurar el complemento utilizando las opciones `toc`:

```typescript
import { ScullyConfig, setPluginConfig } from '@scullyio/scully';
import { getTocPlugin, TocConfig } = from './scully-plugins/toc';

const tocOptions: TocConfig = {
  blogAreaSelector: '.blog-content',
  insertSelector: '#toc',
  level: ['h2', 'h3'],
};
const TocPlugin = getTocPlugin();
setPluginConfig(TocPlugin, tocOptions);

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'your-project-name',
  outDir: './dist/static',
  routes: {
    '/blog/:slug': {
      type: 'contentFolder',
      postRenderers: ['toc'],
      slug: {
        folder: './blog',
      },
    },
  },
};
```

La Tabla de Contenido es generada analizando los encabezados (`<h1>`, `<h2>`, etc.) generados por _Scully_. La configuración del ejemplo anterior buscará un elemento HTML con el identificador `toc` e insertará la Tabla de Contenidos generadas para los encabezados `<h2>` y `<h3>`.

```html
# my blog post

<div id="toc">
  <h2>Table of contents</h2>
</div>

## heading 1 ### subheading 1 ## heading 2 ### subheading 2
```

## Opciones

Puedes configuar `scully-plugin-toc` agregando las opciones `toc` a la configuración de las rutas. La siguiente tabla explicará las opciones en detalle.

- `blogAreaSelector`: Define el área donde el complemento `scully-plugin-toc` buscará los encabezados. Si lo usas por ejemplo `<div class="blog"><scully-content></scully-content></div>`, deberías definir `blogAreaSelector: ".blog"` para generar la Tabla de Contenidos sólo desde el contenido del blog y no desde toda la página entera. Si el parámetro no está definido, el complemento buscará en toda la página.
- `insertSelector`: Selector que define el punto donde `scully-plugin-toc` insertará la Tabla De Contenidos generada. Por defecto, el complemento usará el selector `#toc`. Si el selector no se encuentra, permitirá evitar la generación de la Tabla de Contenidos. De hecho para insertar una Tabla de Contenidos en un artículo de tu blog, deberías al menos agregar `<div id="toc"></div>` en el artículo que será el lugar dónde se insertará la Tabla de Contenidos.
- `level`: Esta opción define los niveles de encabezados a incluir en la Tabla de Contenidos. Por defecto usa el valor `level: ['h2', 'h3']`. Sólo encabezados HTML están soportados (`h1`, `h2`, `h3`, `h4`, `h5` and `h6`).
