---
title: Agregar soporte para Blogs
published: true
lang: es
position: 100
---

# Agregar soporte para Blogs

## Visión general

¡Scully es la mejor opción para migrar un blog a Angular!
Provee schematics que permiten que las aplicaciones Angular utilicen archivos markdown para guardar el contenido de los blogs.

**IMPORTANTE:** Si no tienes una aplicación Angular con Scully, por favor revisa primero la [Guía Cómo empezar](/docs/learn/getting-started/requirements)

## Uso

Agregar soporte para blog ejecutando el siguiente comando:

```bash
ng generate @scullyio/init:blog
```

El comando anterior agrega las rutas de los módulos del blog en la aplicación Angular.
También agrega una carpeta `./blog` para los archivos markdown del blog.

En caso de querer un nombre de carpeta diferente, ejecutar el siguiente comando:

```bash
ng generate @scullyio/init:markdown
```

Este comando presentará las siguientes preguntas:

```bash
? What name do you want to use for the module? blog
? What slug do you want for the markdown file? title
? Where do you want to store your markdown files? mdblog
? Under which route do you want your files to be requested? blog
```

Después de agregar el soporte para blog, se visualiza ver el siguiente mensaje:

```output
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

Alternativamente, es posible ejecutar el comando `@scullyio/init:markdown` directamente con los parámetros como se muestra a continuación:

```bash
ng generate @scullyio/init:markdown --name="blog" --slug="title" --source-dir="mdblog" --route="blog"
```

## Opciones disponibles

| Option         | Description                                                        | Default                   |
| -------------- | ------------------------------------------------------------------ | ------------------------- |
| `name`         | Define el nombre del módulo creado                                 | 'blog'                    |
| `slug`         | Define el nombre del parámetro `:slug` para identificar un archivo | 'id'                      |
| `routingScope` | Establece el alcance de ruteo (`Root` or `Child`)                  | `Child`                   |
| `sourceDir`    | Define el nombre de la carpeta fuente (default: `name`)            | valor de la opción `name` |
| `route`        | Define una ruta base para usar antes del `:slug` (default: `name`) | valor de la opción `name` |

## Crear un punto de entrada (Página de inicio)

Crear un _Módulo Home_ con las rutas configuradas y un _Componente Home_ con el siguiente comando:

```bash
ng generate module home --route=home --module=app-routing
```

**Scully depende de una _ruta de entrada_.**

## Configurar un Módulo de entrada como raíz del proyecto

Abrir el archivo `app-routing.module.ts` y agregar una ruta vacía para el módulo raíz como se muestra a continuación:

```typescript
const routes: Routes = [
  // ...
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
];
```

## Extendiendo funcionalidad

Scully funciona muy bien con otras herramientas y [utilidades](/docs/Reference/utilities/overview.md).

Por ejemplo, si el contenido markdown incluye bloques de código y quieres resaltarlo, entonces utilizarás una utilidad.
