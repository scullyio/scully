---
title: Complementos
published: true
lang: es
position: 120
---

# Complementos

## Visión General

El sistema de complementos te permite definir tus propios complementos bien con un control bien detallado sobre el proceso de pre-renderizado de Scully.
Hay siete tipos principales de complemento, puedes crear complementos de cualquiera de ellos.

Cuando quieras [compilar tu propio complemento](/docs/Reference/plugins/custom-plugins/overview)

## Tipos

#### [Router](/docs/Reference/plugins/types/router)

Los complementos `router` enseñan a Scully como obtener los datos requeridos para pre-renderizar las páginas con parámetros.

#### [render](/docs/Reference/plugins/types/render)

Los complementos `render` permiten transformar el HTML renderizado.
Una vez que la aplicación Angular renderiza, el contenido HTML es enviado a un complemento `render` dónde puede seguir modificandose.

### [Route process](/docs/Reference/plugins/types/route-process)

'routeProcess' plugins are plugins that can modify the handled route array, before rendering the routes starts

#### [Content or File handler plugins](/docs/Reference/plugins/types/fileHandler)

Los complementos `fileHandler` son usado por el complemento [`contentFolder`](/docs/Reference/plugins/built-in-plugins/contentFolder) durante el proceso de renderizado. El complemento [`contentFolder`](/docs/Reference/plugins/built-in-plugins/contentFolder) procesa las carpetas para markdown y otros tipos de archivos que las carpetas puedan contener. El procesado de renderizado procesa cualquier complemento `fileHandler` existente para esos tipos de archivos.

#### [Route discovery done](/docs/Reference/plugins/types/routeDiscoveryDone)

Los complementos `routeDiscoveryDone` son ejecutados después de que todas las rutas hayan sido recolectadas y todos los complementos router hayan finalizado.

### [All done](/docs/Reference/plugins/types/allDone)

Los complementos `allDone` son como los complementos `routeDiscoveryDone`, excepto que son llamados _después_ de que Scully finalice todos los procesos.

### [System](/docs/Reference/plugins/types/system)
