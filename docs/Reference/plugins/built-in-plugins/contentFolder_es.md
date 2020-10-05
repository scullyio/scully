---
title: Complemento contentFolder
published: true
lang: es
position: 100
---

# Complemento `contentFolder`

<div class="docs-link_table">
  <a class="view-in-repo" href="https://github.com/scullyio/scully/blob/main/libs/scully/src/lib/routerPlugins/contentFolderPlugin.ts"></a>
</div>

## Visión Feneral

El complemento `contentFolder` define una **carpeta** en donde Scully debe buscar el contenido a renderizar , una **ruta con parámetros**  para asociar los archivos estáticos.

Es una combinación del [complemento `router`](/docs/Reference/plugins/types/router) y está integrado en Scully.

## Uso

### Complemento `router`

El complemento ruter `contentFolder` toma la configuración de la forma:

```typescript
const contentFolderconfig = {
  routes: {
    '/blog/:slug': {
      type: 'contentFolder',
      slug: {
        folder: './tests/assets/blog-files',
      },
    },
  },
};
```

La configuración toma y maneja sólo un parámetro, llamado `folder` que es obligatorio. Es una ubicación relativa, dentro del proyecto, a un archivo.

Scully recorre esta carpeta y las subcarpetas en orden para hacer una `HandledRoute` por cada extensión encontrada allí.
`.md`(markdown) y `adoc` (asciiDoc) son conocidos desde el principio. Esa ruta es una propiedad `templateFile` con la ubicación completa del archivo. La ruta refleja la estructura de la carpeta.

Además, analiza la fecha en la portada del archivo y se agrega la propiedad data de handledRoutes.

### Complemento `render`

El complemento de renderizado contentFolder toma el html pre-renderizado y una `HandlerRoute` para leer el archivo indicado en la propiedad `templateFile`.
Éste extrae el identificador de Angular `_ngcontent`. Observa la extensión del archivo en los complementos fileHandler, y usa este complemento apra convertir el contenido a un HTML

Finalmente, agrega el identificador `_ngcontent` en los HTML generado, entonces el estilo del componente trabajo como se esperaba.

Este complemente busca el tag `<scully-content>` e injecta el html como si fueran hermanos anteriores.
