---
lang: es
position: 10
published: true
title: El Proceso Scully
---

# El Proceso Scully

## Visión General

Scully está diseñado para tomar una aplicación, analizarla, y luego escribir todos los archivos estáticos necesarios para representar el conocimiento (estados/páginas/rutas)  de tu aplicación.

## El proceso

1. Traverse, lee los archivo fuente de la aplicación para encontrar todas las rutas.
2. Combinar en [extraRoutes](/docs/Reference/config#extraroutes-string--string--promisestring--string), dónde especificamos las rutas que conocemos pero no se puede obtener automáticamente
3. Ahora tenemos una lista de [rutas no controladas]
4. Se enriquese/expande las [rutas no controladas] encontradas con router-plugins.
5. Se procesa/cambia el listado resultante de [handled routes] con routeProcess plugins.
6. Se esribe la salida en los archivos `scully.routes.json`.
7. Se dispara routeDiscoveryDone con el resultado desde el punto 5.
8. Se disparan los complementos de renderizado por cada ruta (el render lo especificaremos mas adelante)
9. se disparan los complementos allDone

Tenga en cuenta que no todas las tareas se realizan todas las veces. Scully automáticamente reusara las rutas encontradas en el punto 1. El usuario podría usar diferentes filtros que limitarán el trabajo hecho en el punto 6. Además, cuando cuando se utilizan filtros, el punto 5 puede ser salteado, porque no queremos reescribir datos parciales en los archivos JSON.

## El renderizado.

Por cada [ruta no controlada] se harán los siguiente pasos:

1. (opcional) Ejecutar la función preRender (puede ser provista in la configuración para esta ruta), terminar el procesamiento cuando `false` es devuelto. Esta función podría agregar datos a las [rutas controladas], incluso cambiar los complementos utilizados. Hay que tener en cuenta una ruta seguirá estando presente en el archivo `scully.routes.json`.
2. Determinar si hay un complemento especial para [renderPlugin](/docs/Reference/plugins/types/render.md).
3. Usar el complemente de render desde el punto 2 y retornar el HTML que brinda [ruta controlada].
4. Tomar el HTML resultante, e invocar todos los complementos de renderizado para esa ruta en el orden dado. Cada complemento recibirá un string con el HTML y el handledRoute  para retornar un string con un HTML.

5. Usar el complemento `WriteToStorage` para almacenar el resultado en el FS. El complemento  `WriteToStorage` traducirá la ruta.ruta en una ubicación para un archivo. Si el contenido tiene un `transferState` dentro, éste será extraído, y guardado a lo largo del archivo `index.html` como `data.json` en la ubicación desinada para esa ruta.

## El complemento render

Por defecto Scully usará el comlemento puppeteerRender. Este complemento puede ser reemplazado configurando la propiedad `renderPlugin` en [ruta controlada]. El complemento es responsable de la creación del HTML a partir de una ruta. Éste obtendrá un [ruta controlada] como parámetro, y es responsable de retornar las páginas HTML _completas_ como un string.

## Meta

Esta sección describe correctamente como Scully trabaja siguiendo la lista. Esta es una descripción de alto nivel y no alcanza muchos detalles.
Cuando comienza, Scully compilará y cargará el archivo de configuración y todos los archivos TS en los complementos (normalmente en `./scully`). Entonces Scully controlará que el servidor esté activo. Si no lo está, ejecutará un servidor en segundo plano que ejecutará la distribución de archivos en procesos separados. También ejecutará puppeteer en un proceso diferente.
Luego comenzarán todas las tareas enumeradas en tareas de una aplicación simple. Cuando una tarea de renderizado es alcanzada, ésta tomará la lista de rutas y se ejecutará en cada una siguiendo los puntos del renderizado. Después de realizar estos puntos, usará el complemento writeTostorage para almacenar el el resultado final. Se usarán todos los núcleos del procesador (al menos que sea especificado en la configuración) para paralelizar esta tarea.

[rutas controladas]: /docs/concepts/unhandled-routes
[rutas no controladas]: /docs/concepts/handled-routes
