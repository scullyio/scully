---
title: Consejos
published: true
lang: es
position: 100
---

# Consejos

### ng build

`ng build` es _sólo_ necesario cuando modificas tu aplicación Angular.
El archivo de configuración de Scully, las extensiones, y eventualmente los archivos markdown no son parte de tu aplicación Angular.
Aunque esto pueda parecer evidente, si esta es tu primera vez utilizando Scully entonces es fácil recompilar Angular aunque no sea necesario. Cuando se escriben extensiones de Scully o se modifican los archivos markdown, no necesitas ejecutar `ng build` cada vez que ejecutas Scully. De nuevo, utiliza `ng build` sólo cuando la aplicación Angular tiene cambios.

Cuando no sabes si volver a ejecutar `ng build`, preguntate:

> Realicé cambios en el código Angular o en partes de Scully?

### Scully en modo observador

Ejecutar `npx scully` precompila tu proyecto con Scully. Cada vez que una extensión o archivo markdown es modificado, debes volver a ejecutarlo. Además is algún contenido de la aplicación Angular está incluido en esos cambios, también es necesario ejecutar la compilación de Scully.

Para hacer el proceso mas fácil, ejecuta el siguiente comando:

```bash
npx scully -- --watch
```

Ejecutando la compilación de Scully con la opción `--watch` vuelve a compilar Scully automáticamente. En otras palabras, observa cualqueir cambio en la compilación de Angular o de cualquiera de los archivos markdown. Si alguno de ellos cambia, el proceso de compilado de Scully es re ejecutado y el servidor tendrá actualizado el proyecto en tiempo real.

**NOTA**: Esto es ideal para un desarrollo más rápido, pero **NO** user la opción `--watch` en un entorno de producción o proceso de devops o una compilación que no termine.

### Archivos estáticos incorrectos

A veces parece que Scully no muestra la página correctamente. En estos casos comienza con [scully server](/docs/learn/getting-started/serving) y visita una ruta de tu aplicación. Normalmente esto significa abrir en el navegador una URL como la siguiente:

```
http://localhost:1864/a/path/in/my/app
```

luego chequea el contenido de esa página. Si la url está deshabilitada, entonces el problema se encuentra en la aplicación Angular y necesitas solucionarlo allí.
Cuando la página parece correcta, pero el archivo estático refleja sólo algunos resultados, es muy probable que el problema se encuentre porque zoneJS no puede detectar el estado idle de tu aplicación (un estado idle, en este caso, significa que la aplicación está lista, todo es tá renderizado en la pantalla y estamos esperando que el usuario haga algo). Vea [agregando mecanismos personalizados](/docs/Reference/config) para manejar esta situación.
