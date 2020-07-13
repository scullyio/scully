---
title: Plugins - contentFolder
order: 710
lang: es
---

# contentFolder Plugin

El plugin contentFolder permite salirse de un route plugin y/o de un render plugin.

## contentFolder Route plugin

El route plugin toma una configuración de la siguiente forma:

```typescript
const contentFolderconfig = {
  routes: {
    '/blog/:slug': {
      type: 'contentFolder',
      slug: {
        folder: './tests/assets/blog-files'
      }
    }
  }
};
```

La configuración recibe solamente un parámetro, llamado `folder` que és obligatorio. Es la ubicación relativa de un archivo con respecto a la raiz del proyecto.

Scully recorre el folder y sus subfolders para crear un `HandledRoute` para cada file-extension conocida en el folder.
`.md`(markdown) y '`adoc` (asciiDoc) son soportados de manera automática. Esa ruta tiene una propiedad temporal llamada `templateFile` con el "path" completo del archivo. La ruta refleja la estructura del folder.
Además, hace el parse de la fecha en la parte front-matter y se agrega a la propiedad `data` de `handledRoutes`.

## contentFolder Render Plugin.

Este plugin toma el contenido estático en HTML y una `HandlerRoute` para leer los archivos indicados por la propiedad `templateFile`.
Extrae el id `_ngcontent` de Angular. Busca la extensión del archivo en los plugins `fileHandler` y el mismo para convertir el contenido en HTML.
Finalmente, agrega el id `_ngcontent` al HTML generado para que el estilo de los componentes de manera correcta.

Este plugin busca el `<scully-content>` e inyecta el HTML a la altura de sus tags hermano(s).
