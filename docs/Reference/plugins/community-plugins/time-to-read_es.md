---
title: Complemento time-to-read
published: true
lang: es
position: 100
---

# 📖 Complemento `⌚ scully-plugin-time-to-read

<div class="docs-link_table">
  <a class="repository" href="https://github.com/Jefiozie/nx-jefiozie/tree/master/libs/time-to-read"></a>
</div>

`scully-plugin-time-to-read` es un complemento `routeProcess` para [Scully](http://scully.io/) que procesa una ruta específica y agregará la propiedad `readingTime` a `RouteData`. Esta propiedad refleja el tiempo que las personas necesitan para leer el contenido.

El complemento es diseñado (y testeado) para trabajar con el bloc de schematics y el complemento `contenFolder`.

## 📦 Instalación

Para instalar el complemente con `npm` ejecuta

```
$ npm install scully-plugin-time-to-read --save-dev
```

## Uso

Agregar la siguiente configuración en la configuración de scully:

```typescript
// scully.config.ts
setPluginConfig(timeToRead, {
  path: '<THE PATH TO YOUR ROUTES>'
} as timeToReadOptions);
```

Ahora se puede usar `RouteData`y obtener la propiedad `readingTime` en tu componente.
Para obtener las rutas se puede el `ScullyRoutesService` y pasarle la ruta con datos de tu componente.

En el siguiente ejemplo se puede ver cómo se usa la propiedad `readingTime` en el componente.

```html
<mat-card-subtitle>
  Date: {{ route?.data?.date | date: 'dd-MM-yyyy' }} - {{ route?.data?.readingTime | number:'1.0-0'}} min read
</mat-card-subtitle>
```
