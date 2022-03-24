---
title: critical css Plugin
published: true
lang: es
position: 100
---

# `critical-css` Plugin

## Información general

Scully usa este plugin para incorporar el CSS crítico above the fold en el HTML, y luego con **lazy-load** incorpora el CSS que se necesita para el resto de la página. Esto eliminará el bloqueo de CSS. Estará listo antes de que arranque su SPA.

## Instalación

```
npm install -D @scullyio/scully-plugin-critical-css
```

## Uso

Añádalo a `scully.<projectname>.config.ts` de esta forma:

```typescript
import { criticalCSS } from '@scullyio/scully-plugin-critical-css';

/** seoHrefOptimise es opcional **/
const defaultPostRenderers = ['seoHrefOptimise', criticalCSS];

export const config: ScullyConfig = {
  /** más configuración aquí */
  defaultPostRenderers,
  /** más configuración aquí */
  routes: {
    /** más configuración aquí */
  }
};
```

La configuración anterior utilizará el plugin en todas las rutas. Si lo desea usar en una sola ruta, agréguelo a la configuración de esa ruta en particular de esta manera:

```typescript
export const config: ScullyConfig = {
  /** más configuración aquí */
  routes: {
    someRoute: {
      type: 'contentFolder', // O cualquier otro tipo
      postRenderers: = [criticalCSS],
    },
     /** más configuración de rutas aquí */
  }
}
```

## Ajustes

Puede configurar este plugin utilizando el ayudante setPluginConfig de esta manera:

```typescript
setPluginConfig(criticalCSS, {
  inlineImages: false
});
```

El plugin permite los siguientes ajustes:

```typescript
export interface CriticalCSSSettings {
  /** imágenes inline en las páginas cuando son más pequeñas de 10240 bytes */
  inlineImages?: boolean;
  /** Ancho del viewport objetivo */
  width?: number;
  /** Alto del viewport objetivo */
  height?: number;
  /** Un array de objetos que contiene el alto y el ancho. Tiene prioridad sobre el ancho y el alto establecido */
  dimensions?: {
    width: number;
    height: number;
  }[];
  /** Un array con paths totalmente capacitados a los assets, si no se proporciona ninguno, el root, y el root/assets se usarán para buscar assets estáticos */
  assets?: string[];
  /** Ignora algunas reglas de css */
  ignore?: {
    atrule?: string[];
    rule?: string[];
    decl?: (node, value) => boolean;
  };
}
```

Para más detalles consulte [critical tool page](https://github.com/addyosmani/critical)
