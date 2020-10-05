---
title: Complemento md
published: true
lang: es
position: 100
---

# Complemento `md`

## Visión General

Permite renderizar archivos markdown como html. También utiliza una versión de prims.js para resaltar fragmentos de código.

## Usao

En el archivo `scully.your-app.config.file`:

1.  Habilitar la opción para resaltar de la siguiente forma:

```typescript
setPluginConfig('md', { enableSyntaxHighlighting: true });
```

2.  Importar soporte para cualquier lenguaje extra:

```typescript
import 'prismjs/components/prism-java.js';
```

3. Agregar el tema deseado en el archivo styles.css de tu aplicación:

```css
/* include CSS for prism toolbar */
@import '~prismjs/plugins/toolbar/prism-toolbar.css';
/* check node_modules/prismjs/themes/ for the available themes */
@import '~prismjs/themes/prism-tomorrow';
```

Ejemplo:

```typescript
// scully.your-app.config.ts

import { setPluginConfig, ScullyConfig } from '@scullyio/scully';
import 'prismjs/components/prism-java.js'; // example language support

export const config: ScullyConfig = {
  routes: {
    '/blog/:slug': {
      type: 'contentFolder',
      slug: {
        folder: './blog',
      },
    },
  },
};
```

Visite [prismjs](https://prismjs.com/) para más información.
