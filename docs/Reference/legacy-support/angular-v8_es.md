---
title: Lanzamiento de una librería Angular v8.x.x
published: true
lang: es
position: 100
---

# Lanzamiento de una librería Angular v8.x.x

- Descargar el branch `angular-8`
- Remover la versión 9: `rm -fr node_modules`
- Instalar la versión 8: `npm i`
- Actauliza los cambios del branch origin main: `git pull origin main`
- Resuelve cualquier conflicto
- Asegurece que el archivo `package.json` tiene la versión 8
- Compila la aplicación: `ng build @scullyio/ng-lib-v8`
- Ejecuta los test
- Presta atención al archivo `package.json` mantenga la versión 8
- Si todos los test están correctos, compila la librería:
  - `ng build @scullyio/ng-lib-v8`
- Publica la aplicación:
  - `cd ./dist/scullyio/ng-lib-v8`
- Realiza el commit y suba los cambios al repositorio.
