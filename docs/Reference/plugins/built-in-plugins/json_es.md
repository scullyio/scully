---
title: Complemento json
published: true
lang: es
position: 100
---

# Complemento `json`

<div class="docs-link_table">
  <a class="view-in-repo" href="https://github.com/scullyio/scully/blob/main/libs/scully/src/lib/routerPlugins/jsonRoutePlugin.ts"></a>
</div>

## Visión General

El complemeto JSON obtiene datos de los endpoints de una API mientras descubre las rutas. Scully usa esos datos para crear una lista de rutas que contengan parámetros.

## Uso

Imagina que tu aplicación Angular tiene configurada una ruta de la siguiente forma, `users/:userId`. Scully necesita saber qué valores tendrá el parámetro `:userId`.

El siguiente es un emeplo de como deberías utilizar `jsonPlugin` para obtener los `userId`s de tu servidor (`localhost:8200`) y que Scully necesita para pre-renderizar las rutas `user/:userId`.

```typescript
// scully.config.ts
export const config: ScullyConfig = {
  // Add the following to your file
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

El ejemplo de arriba le dice a Scully como usar el complemento `json`para obtener alguna información a través de una petición HTTP cuando una ruta machea con `/user/:userId`. Los valores de userIds contienen dos partes. Primero la url que el complemento JSOn debería llamar para obtener el JSON requerido y segundo la propiedad `id`.

El complemto JSON extrae el nombre de cada uno de los items en `HandledRoute[]`. En otras palabras, los datos retornados por la API de `jsonplaceholder`, cada uno que contenga una propiedad `is`. Además retorna una lista de `userIds` en lugar de la lista de usuarios.

El complemento JSON también acepta las cabeceras HTTP necesarias para obtener los datos.

## Ejemplo

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
