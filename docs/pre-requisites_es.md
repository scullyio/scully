---
title: Requisitos previos
order: 100
---

# Requisitos previos

Para comenzar a usar Scully, se necesita una aplicación Angular existente con **v8.x.x** o **v9.x.x** o puede crear una nueva aplicación Angular 9 ejecutando el siguiente comando:

```bash
npx -p @angular/cli ng new my-scully-app
```

Si el comando anterior falla, instale el Angular CLI globalmente con el siguiente comando:

```bash
npm install -g @angular/cli
```

Luego, crea una nueva aplicación.

```bash
ng new my-scully-app
```

#### IMPORTANTE:

_Scully depende del módulo de rutas de la aplicación para generar las páginas del sitio web_

Agregue un módulo de rutas con el siguiente comando:

```bash
ng generate module app-routing --flat --module=app
```

Encuentre más información sobre el Angular CLI aquí [👉 angular.io/cli](https://angular.io/cli)

#### IMPORTANTE:

_Scully utiliza Chromium. Por lo tanto, su sistema operativo, así como sus derechos de administrador, deben permitir su instalación y ejecución._

### Versión de Node:

- Node.js 10 o mayor.
