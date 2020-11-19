---
title: Creación de una configuración de un blog
published: true
lang: es
position: 100
---

# Creación de una configuración de un blog

Scully tiene una serie de schematics para crear un blog usando un sólo comando:

```bash
ng g @scullyio/init:blog
```

El comando va a crear todos los archivos y cambios que necesites tener para correr tu blog en una aplicación Angular con la configuración de Scully.

```bash
ng g @scullyio/init:blog
    ✅️ Update scully.t1.config.ts
UPDATE scully.t1.config.ts (511 bytes)
UPDATE src/app/app-routing.module.ts (524 bytes)
CREATE src/app/blog/blog-routing.module.ts (406 bytes)
CREATE src/app/blog/blog.component.html (153 bytes)
CREATE src/app/blog/blog.component.spec.ts (614 bytes)
CREATE src/app/blog/blog.component.ts (489 bytes)
CREATE src/app/blog/blog.component.css (131 bytes)
CREATE src/app/blog/blog.module.ts (380 bytes)
    ✅️ Blog ./blog/2020-09-17-blog.md file created
CREATE blog/2020-09-17-blog.md (97 bytes)
```

Scully agregará el soporte a archivos Markdown y actualizará tu archivo de configuración como se muestra:

```typescript
  routes: {
    '/blog/:slug': {
      type: 'contentFolder',
      slug: {
        folder: "./blog"
      }
    }
```

Donde el tipo `contentFolder` es un complemento para soportar la lectura de archivos MD.
La configuración `slug` es una carpeta donde se crearán los archivos para cada ruta y tu blog se encontrará en esa carpeta.
Si necesitas cambiar la carpeta, sólo modifica el valor `"./blog"`, recuerda que Sculle leerá esa ruta desde tu aplicación base.
