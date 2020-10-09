---
title: Tipos de complementos
published: true
lang: es
position: 10
---

# Tipos de complementos

## Visión General

Scully usa un sistema de complementos que permite a los usuarios definir nuevas maneras de pre-renderizar una aplicación con Scully.
Hay cinco tipos principales de complementos que permiten injectar código en varias etapas dentro del ciclo de vida del proceso de Scully:

<div class="docs-toc no-spacing"></div>

- [Plugin types](#plugin-types)
  - [Overview](#overview)
    - [`router`](#router)
    - [`render`](#render)
    - [`fileHandler`](#filehandler)
    - [`routeDiscoveryDone`](#routediscoverydone)
    - [`allDone`](#alldone)

#### [`router`](/docs/Reference/plugins/types/router)

Los complementos `router` enseñan a Scully cómo obtener los datos necesarios para pre-renderizar páginas con parámetros en sus rutas.

#### [`render`](/docs/Reference/plugins/types/render)

Los complementos `render` permiten transformar el HTML renderizado.
una vez que la aplicación Angular renderiza, el contenido HTML es enviado a un complemento `render` dónde puede seguir modificandose.

#### [`fileHandler`](/docs/Reference/plugins/types/fileHandler)

Los complementos `fileHandler` son usado por el complemento [`contentFolder`](/docs/Reference/plugins/built-in-plugins/contentFolder) durante el proceso de renderizado. El complemento [`contentFolder`](/docs/Reference/plugins/built-in-plugins/contentFolder) procesa las carpetas para markdown y otros tipos de archivos que las carpetas puedan contener. El procesao de renderizado procesa cualquier complemento `fileHandler` existente para esos tipos de archivos.

#### [`routeDiscoveryDone`](/docs/Reference/plugins/types/routeDiscoveryDone)

Los complementos `routeDiscoveryDone` son ejecutados después de que todas las rutas hayan sido recolectadas y todos los complementos router hayan finalizado.

#### [`allDone`](/docs/Reference/plugins/types/allDone)

Los complementos `allDone` son como los complementos `routeDiscoveryDone`, excepto que son llamados _después_ de que Scully finalice todos los procesos.
