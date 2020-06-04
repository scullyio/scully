---
title: Prerrequisitos
order: 100
lang: es
---

# Prerrequisitos

Necesita una aplicación existente de Angular o puede crear una nueva para usar Scully.

**NOTA:** Scully soporta las versiones: **v8.x.x** y **v9.x.x** de Angular.

## Crear Una Nueva Applicación de Angular

Instale Angular CLI de manera global con el siguiente comando:

```bash
npm install -g @angular/cli
```

Ahora, haga una nueva aplicación.

```bash
ng new my-scully-app
```

#### IMPORTANTE:

_Scully depende del módulo de rutas de la aplicación para poder las páginas del citio web_

Agregue el módulo de rutas con el siguiente comando:

```bash
ng generate module app-routing --flat --module=app
```

Puede encontrar más información acerca de Angular CLI aquí [👉 angular.io/cli](https://angular.io/cli)

#### IMPORTANTE:

_Scully utiliza Chromium. Por lo tanto, su sistema operativo, así comosus derechos de administrador deben permitir su instalación y ejecución._

### Versión de Node:

- Scully soporta Node.js 10 o mayor.
