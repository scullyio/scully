---
title: Plugins - JSON Plugin
order: 730
lang: es
---

# JSON Plugin

El plugin JSON obtiene datos del endpoint de una API durante el descubrimiento de rutas.

El siguiente ejemplo usa [jsonplaceholder](http://localhost:8200/) para obtener la lista de
IDs de usuario para la aplicación y usa el  [Scully JSON Plugin](../scully/routerPlugins/jsonRoutePlugin.ts).

```typescript
// scully.config.ts
export const config: ScullyConfig = {
  // Agruegue lo siguiente a su archivo
  routes: {
    '/user/:userId': {
      type: 'json',
      userId: {
        url: 'http://localhost:8200/users',
        property: 'id'
      }
    }
  }
};
```

El ejemplo anterior le indica a  Scully que use el `json plugin` para traer los datos JSON via HTTP cada vez que encuentre una ruta con esta forma `/user/:userId`.
Los valores de `userId` contienen dos pedazos de información. Primero, la url a la que el plugin JSON debe ir para poder obtener los datos JSON requeridos.
Segundo, la propiedad `id`.

El plugin JSON plugin toma el nombre de la propiedad de cada handledRoute en el arreglo `HandledRoute[]`. En otras palabras,
el arreglo de datos que regresa la API`jsonplaceholder`, cada uno contiene una propiedad `id`. Por lo tanto, regresa la lista de `userIds`.

Este plugin tambien acepta cualquier encabezado (header) necesario para hacer una petición a una API.

##### Ejemplo:

```typescript
// scully.config.ts
export const config: ScullyConfig = {
  routes: {
    '/todos/:todoId': {
      type: 'json',
      todoId: {
        url: 'https://my-api.com/todos',
        property: 'id',
        headers: {
          'API-KEY': '0123456789'
        }
      }
    }
  }
};
```
