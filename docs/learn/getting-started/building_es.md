---
title: Creando
published: true
lang: es
position: 30
---

# Creando una aplicación Scully

Ejecura Scully por primera vez es exitante. Felicitaciones por hacerlo aquí

Antes de que Scully pueda ejecutarse debes crear una proyecto Angular. La mayoría de los proyectos se compilan con el comando:

```bash
ng build --prod
```

Ahora que el proyecto Angular está creado, Scully puede hacer su trabajo. Ejecuta Scully con el comando:

```bash
npx scully
```

¡Lo hiciste! Haz convertido tu aplicación Angular en un rápido sitio estático pre-renderizado gracias a Scully.

La version compilada de Scully está ubicada en la carpeta `./dist/static`. Ésta contiene todas páginas estáticas del proyecto.

## Solucionando Problemas

**NOTA**: En caso de cualqueir error o advertencia durante el proceso de compilado, seguir las instrucciones en las secciones de error/advertencia o [registra un error](https://github.com/scullyio/scully/issues/new/choose).

**NOTA**: Un error que puede ocurrir cuando Scully está compilando por primera vez, es el siguiente:

```bash
No configuration for route `/user/:userId` found. Skipping
```

Este mensaje indica que Scully ha salteado cualquier configuración de rutas. Para leer más sobre esto [Rutas, Parámnetros y Scully](/docs/faq#route-parameters).
