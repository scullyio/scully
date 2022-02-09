---
title: AMP CSS
published: true
lang: es
position: 100
---

# Complementos AMP CSS

<div class="docs-link_table">
  <a class="homepage" href="https://github.com/pjlamb12/scully-plugin-amp-css"></a>
  <a class="repository" href="https://github.com/pjlamb12/scully-plugin-amp-css"></a>
</div>

## Visión general

El propósito del complemento AMP CSS para Scully es tomar todas las etiquetas `style` de las páginas renderizadas para combinarlas en una sola etiqueta `style` en el `head`. Este es un requerimiento que propone Google para las páginas AMP. En [este link](https://www.loom.com/share/35330a858cd741ba92e8be0c0496ffbb) se habla sobre algunas partes sobre este requerimiento. Scully hace esto relativamente fácil porque después del renderizado de cada página, un complemento puede ser ejecutado para hacer algo a dicha página; en este caso combinar todos los styles dentro de un sólo tag `style`.

## Características

- ✅ Combina el contenido de todos los `style` dentro de un sólo tag `style`
- ✅ Coloca todos los estilos enun documento dentro del tag `head`.
- ✅ Elimina todos los tags `style` extras

## Instalación

### NPM

`npm install scully-plugin-amp-css --save-dev`

### Yarn

`yarn add scully-plugin-amp-css --dev`

## Uso

Para usar el complemento, sólo necesitas agregar el paquete dentro del archivo `config.ts` del proyecto Scully, por ejemplo `scully.your-project-name.config.ts`. Luego de agregar el complemento, debe agregarse en el arreglo `defaultPostRenderers` en las rutas dónde debería ejecutarse. En la mayoría de los cosas (no en todos), esto debería ocurrir en todas las rutas pero puedes agregarlo sólo en equellas rutas dónde se desea.

```ts
// scully.your-project-name.config.ts
require('scully-plugin-amp-css');

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'your-project-name',
  outDir: './dist/static',
  routes: {},
  defaultPostRenderers: ['combineStylesAmpPlugin']
};
```

Eso es todo lo que se necesita para que el complemento se incluya y se ejecute en las páginas de su aplicación.

**_Asegúrese de ejecutar incluir este complemento antes que otros complementos CSS, como el [complemento CSS critico](https://www.npmjs.com/package/@scullyio/scully-plugin-critical-css)._**
