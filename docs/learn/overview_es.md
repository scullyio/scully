---
lang: es
position: 10
published: true
title: Learn
---

# Introducción

## ¿Qué es Scully?

Scully es el mejor generador de web estática para proyectos Angular y así adoptar una arquitectura [Jamstack](https://jamstack.org/).

A partir de tu aplicación creará un archivo estático `index.html` por cada pages/routes. Todos y cada uno de los `index.html` tendrán el contenido ya listo, y esto hará que tu aplicación se muestre instantáneamente a los usuarios. También, permitirá que tu aplicación mejore el SEO. Por ensima de todo esta funcionalidad, tu SPA mantendrá todas las funcionalidades que tenía anteriormente.
También, nosotros tenemos un sistema de extensiones fácil de utilizar y de extender que permitirán manipular las rutas y el contenido.

Todo sobre Scully en un video:
<a class="docs-icon-button" href="https://thinkster.io/tutorials/scully-webinar-building-the-fastest-angular-apps-possible">
<img src="/assets/img/icons/play-solid.svg" alt="play video"/>
Crear Aplicaciones Angular más Rápidas es Posible
</a>

## ¿Cómo funciona?

Scully analiza la estructura de rutas de tu aplicación Angular y a partir de eso, crea una lista de rutas (que puedes agregar manualmente si es necesario). Entonces, utilizando esta lista, generará un `index.html` por cada ruta. Ver [El proceso Scully](/docs/concepts/process.md) para más detalles

## ¿Cómo lo uso?

Para agregarlo a tu proyecto y ejecutarlo por primera vez:

```bash
ng add @scullyio/init
ng build --prod
npm run scully
```

Para una explicación más detallada vea nuestro getting started.

### Además, Scully proveee:

(nota, estos son sólo _unos pocos_ ejemplos, hay muchos más.)

- [Renderizar archivos .md como .html](/docs/learn/create-a-blog/add-blog-support) y [extrar datos de las rutas generadas](/docs/learn/create-a-blog/use-blog-post-data-in-template) para usar en los templates de Angular.
- Un [sistema de extensiones flexible y extensible](/docs/Reference/plugins/overview) para integrar tu propia funcionalidad en el proceso de Scully.
- Varios [Schematics de Angular](/docs/Reference/schematics/create-scully-files-with-ng-add) para hacer su uso **¡lo más fácil posible!**

Scully funciona sobre Windows, Linux y macOS.
