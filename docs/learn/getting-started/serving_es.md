---
title: Ejecutando el servidor de Scully
published: true
lang: es
position: 40
---

# Ejecutando el servidor de Scully

## Visión General

Luego de [compilar](/docs/learn/getting-started/building), vea la salida y los test sobre cómo ejecutar el proyecto como una página web generada estáticamente.

Para ver el pre-renderizado, abre la carpeta `/dist/static` donde podrás encontrar un archivo `index.html` por cada ruta de tu aplicación. Entonces, si la aplicación tiene 1000 rutas, existirán 1000 archivos `index.html` en la carpeta `dist/static`.

Esos archivos `index.html` son empaquetados junto con el HTML y el CSS. Esto significa que Scully compiló satisfactoriamente, y que el sitio está pre-renderizado.

Scully provee un servidor, con el que puedes testear tu sitio jamstack luego de que Scully compile. Para ejecutar el servidor de test de Scully, ejecuta el siguiente comando:

```bash
npm run scully:serve
```

Esto comando dispara **2 (dos)** servidores. El primero con el resultado de  `ng build`, y el segundo servidor el resultado de compilar Scully. Esto permite que puedas testear las dos versiones compiladas de la aplicación. ¡Excelente!
