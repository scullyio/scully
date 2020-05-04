---
title: Crear un blog
order: 600
lang: es
---

# Crear un blog

Scully es la mejor opción para mover tu blog a Angular!

Tiene un schematic que permite que las aplicaciones de Angular utilicen archivos de markdown para el contenido del blog.

1. [Agregar soporte de Blog](#agregar-soporte-de-blog)
2. [Generar una nueva publicacion de blog](#generar-una-nueva-publicacion-de-blog)

_IMPORTANTE:_ Solo necesita una aplicación Angular con Scully, si no la tiene, puedes verificarlos en [Comenzando](/docs/getting-started_es).

## Agregar soporte de Blog

Para agregar soporte de blog a su aplicación, ejecute el siguiente comando:

```bash
ng generate @scullyio/init:blog
```

Este comando agrega el módulo y las funciones de blog a su aplicación. Además, crea una carpeta `./blog` para los archivos de markdown del blog.

Para crear una carpeta con un nombre diferente, ejecute el siguiente comando:

```bash
ng generate @scullyio/init:markdown
```

Y va a aparecer una serie de preguntas, para que completes:

```bash
? What name do you want to use for the module? blog
? What slug do you want for the markdown file? title
? Where do you want to store your markdown files? mdblog
? Under which route do you want your files to be requested? blog
```

o puedes hacerlo manualmente

```bash
ng generate @scullyio/init:markdown --name="blog" --slug="title" --source-dir="mdblog" --route="blog"
```

Y el resultado es:

```bash
    ✅️ Update scully.{{yourApp}}.config.js
UPDATE scully.{{yourApp}}.config.js (653 bytes)
UPDATE src/app/app-routing.module.ts (726 bytes)
UPDATE src/app/blog/blog-routing.module.ts (429 bytes)
UPDATE src/app/blog/blog.component.css (157 bytes)
UPDATE src/app/blog/blog.component.html (160 bytes)
UPDATE src/app/blog/blog.component.spec.ts (639 bytes)
UPDATE src/app/blog/blog.component.ts (508 bytes)
UPDATE src/app/blog/blog.module.ts (391 bytes)
    ✅️ Blog ./mdblog/2020-03-24-blog.md file created
CREATE mdblog/2020-03-24-blog.md (95 bytes)
```

**NOTA:** Slug es el nombre del url matcher para buscar el archivo.

La siguiente tabla muestra todas las opciones disponibles:

| Opcion         | Descripcion                                              | Defecto                  |
| -------------- | -------------------------------------------------------- | ------------------------ |
| `name`         | Define el nombre del modulo                              | 'blog'                   |
| `slug`         | Define el nombre del slug `:slug`                        | 'id'                     |
| `routingScope` | Setea el routing scope (`Root` o `Child`)                | Child                    |
| `sourceDir`    | Define el nombre de source directory (defecto: `name`)   | value from `name` option |
| `route`        | Define el path route antes del `:slug` (defecto: `name`) | value from `name` option |

Scully funciona bien en combinación con otras herramientas y [utilidades](utils_es.md).

Por ejemplo, si el contenido de markdown incluye bloques de código, y desea resaltarlo, puedes usar una utilidad.

## Generar una nueva publicacion de blog

Para crear una nueva publicación de blog, ejecute el siguiente comando:

```bash
ng generate @scullyio/init:post --name="This is my post"
```

La siguiente tabla muestra todas las opciones disponibles:

| Opcion         | Descripcion                                                               | Defecto   |
| -------------- | ------------------------------------------------------------------------- | --------- |
| `name`         | Define el nombre para el post creado                                      | 'blog-X'  |
| `target`       | Defina el directorio de destino para el nuevo archivo de publicación      | 'blog'    |
| `metaDataFile` | Utilice una plantilla de metadatos yaml de un archivo para la publicación | undefined |
