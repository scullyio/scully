---
lang: es
position: 20
published: true
title: Rutas no controladas
---

# Rutas no controladas

## Visión general

En esta sección repasaremos que significan `rutas no controladas` en Scully.

## Ruta no controlada

Una ruta no controlada es string que representa una ruta dentro de tu aplicación. Cuando observas la URL de tu aplicación normalmente luce así:

```
http://localhost:4200/docs/concepts/unhandled-routes
```

En este caso la ruta no controlad es: `/docs/concepts/unhandled-routes`.

# Rutas de Angular

Cuando observas la configuración de las rutas en tu aplicación Angular, podrías encontrar cosas como ésta:

```typescript
/** in app-router **/
const routes: Routes = [
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },
];

/** in user-routing.module **/
const routes: Routes = [
  { path: '', component: UsersComponent },
  {
    path: ':userId',
    component: UserComponent,
    children: [
      { path: '', component: PostsComponent, pathMatch: 'full' },
      { path: 'friend/:friendCode', component: UserComponent },
      { path: 'post/:postId', component: PostComponent },
    ],
  },
];
```

Scully se dará cuenta que tenemos estas rutas no controladas:

```
/user
/user/:id
/user/:id/friend/:friendCode
/user/:id/post/:postId
```

y las agregará todas aquellas rutas no controladas en una arreglo.

> **Nota**: Esas rutas poseea datos dinámicos (`:id`, `:friendCode` y `:postId`) y serál salteados si nosotros _no_ definimos una configuraciones para ellos en el archivo [archivo de configuracion de rutas]. Esto significa que NO HABRÁ ARCHIVOS ESTÁTICOS para RUTAS que con DATOS DINÁMICOS y SIN CONFIGURACIÓN.

# Rutas extras

Muchas veces que tu aplicación permite manejar rutas que no están definidas en el router, o en 
There will be times that your application is able to handle routes that are not defined in the router, o casos en que no pueden ser identificadas automáticamente. Por ejemplo, cuando se utiliza un matcher de rutas o está usando ng-Upgrade, y parte de las rutas siguen controlandose por partes de la aplicación implementadas en AngularJS. O estás utilizando Scully sobre una aplicación que no utiliza Angular.
Para estas situaciones, agregamos la propiedad `extraRoutes` en el archivo de configuración.

```typescript
export interface ScullyConfig {
  /** ... */
  extraRoutes?: string | string[] | Promise<string[] | string>;
  /** ... */
}
```

Como también puede tomar el valor de una promesa, pueden utilizar una función asincrónica para obtener las rutas desde el disco o incluso, desde una API externa.

```typescript
const config:ScullyConfig = {
  ...
  extraRoutes: httpGetJson('http://web.archive.org/cdx/search/cdx?url=scully.io*&output=json').then(cleanup),
  ...
}
```

El resultado será una lista de rutas válidas a renderizar. Al menos cuando su función de limpieza finalice y confirme que el resultado sean las rutas que realmente proporcionó en su aplicación.

[archivo de configuracion de rutas]: /docs/Reference/config#routes-routeconfig
