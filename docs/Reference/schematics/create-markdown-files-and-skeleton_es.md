---
title: Crear archivos markdown y skeleton
published: true
lang: es
position: 100
---

# Crear archivos markdown y skeleton

Scully provee schematics para agregar el complemento para leer archivos markdown y crear una url para cada uno.

```bash
ng g @scullyio/init:markdown
```

El comando anterior pedirá que completes la configuración y creará/actualizará los archivos necesarios para soportar los Markdown skeleton en tu aplicación Angular.

Ejemplo:

```bash
ng g @scullyio/init:markdown
? What name do you want to use for the module? myMarkdown
? What slug do you want for the markdown file? idFile
? Where do you want to store your markdown files? myMarkdownFolder
? Under which route do you want your files to be requested? md
    ✅️ Update scully.t1.config.ts
CREATE src/app/my-markdown/my-markdown-routing.module.ts (439 bytes)
CREATE src/app/my-markdown/my-markdown.component.html (153 bytes)
CREATE src/app/my-markdown/my-markdown.component.spec.ts (657 bytes)
CREATE src/app/my-markdown/my-markdown.component.ts (516 bytes)
CREATE src/app/my-markdown/my-markdown.component.css (131 bytes)
CREATE src/app/my-markdown/my-markdown.module.ts (424 bytes)
UPDATE scully.t1.config.ts (631 bytes)
UPDATE src/app/app-routing.module.ts (634 bytes)
    ✅️ Blog ./my-markdown-folder/2020-09-17-my-markdown.md file created
CREATE my-markdown-folder/2020-09-17-my-markdown.md (111 bytes)
```

###### What name do you want to use for the module?

Este será el nombre utilizado al crear el móduglo de angular.

###### What slug do you want for the markdown file?

Este será el `slug` que usará Scully para el ruteo en Angular.

###### Where do you want to store your markdown files?

Scully necesita almacenar los archivos markdown en un carpeta, entonces el schematic crea la carpeta y agraga las rutas a éstos en la configuración de Scully.

###### Under which route do you want your files to be requested?

Esta es la ruta de Scully que se agrega al ruteo de Angular.
