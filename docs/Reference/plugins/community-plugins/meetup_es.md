---
title: Complemento Meetup
published: true
lang: es
position: 100
---

# Complemento para `Meetup`

<div class="docs-link_table">
  <a class="repository" href="https://github.com/Dutch-Angular-Group/website/tree/main/libs/scully-plugin-meetup"></a>
</div>

`scully-plugin-meetup` es un complemento `router` para [Scully](http://scully.io/) que obtiene información de una API de eventos de Meetup durante el descubrimiento de rutas.
Scully usa los resultado de la API para renderizar los archivos estáticos para cada evento.

## 📦 Instalación

Para instalar el complemento con `npm` ejecuta

```
$ npm install scully-plugin-meetup --save-dev
```

## Uso

Si tu aplicación debería tener configurada una ruta con el path `event/:eventId`. Scully necesita ayuda para entender el parámetros `:eventId`.

El siguiente es un ejemplo de cómo debería usar el complemento `scully-plugin-meetup` para obtener los `eventId`s prerenderizados basandose en la API de Meetup Event.

```typescript
// scully.config.ts
export const config: ScullyConfig = {
  // Add the following to your file
  routes: {
    '/event/:eventId': {
      type: 'meetup',
      eventId: {
        name: 'YOUR_MEETUP_GROUP_NAME',
        property: 'id',
      },
    },
  },
};
```

## Ejemplo de configuración

El ejemplo anterior configura a Scully para usar el complement `meetup` para obtener datos vía HTTP siempre que encuentre una ruta que coincida con `/event/:eventId`.
El complemento de Meetup extrae el nombre de propiedad proporcionado de cada uno de los elementos y generará páginas estáticas basadas en todos los eventos que se encuentran en el resultado.

Es posible configurar el complemente `meetup`, más adelante se puede ver un ejemplo donde se obtendrá como máximo 10 eventos del pasado.

```typescript
// scully.config.ts
export const config: ScullyConfig = {
  // Add the following to your file
  routes: {
    '/event/:eventId': {
      type: 'meetup',
      eventId: {
        name: 'YOUR_MEETUP_GROUP_NAME',
        property: 'id',
        amount: 10,
        status: `past`,
      },
    },
  },
};
```

| Propiedad | Descripción                                           | Valores de ejemplo                                         |
| --------- | ----------------------------------------------------- | ---------------------------------------------------------- |
| Name      | El nombre del grupo de meetup                         | _Dutch-Angular-Group_                                      |
| Amount    | La cantidad de eventos que la api necesita retornar   | _10_ **(max 100)**                                         |
| Status    | El estado de un evento, puede ser _pasado_ o _futuro_ | _past_                                                     |
| Sorting   | Una función para manejar el orden de los eventos      | `(eventA, eventB) => (eventA.date < eventB.date ? 1 : -1)` |
