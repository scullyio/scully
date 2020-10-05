---
title: Polyfills
published: true
lang: es
position: 100
---

# Polyfills

Dependiendo del navegador y entorno objetivo para tu aplicación, algunos polyfills son requeridos.
Esta es una lista de páginas de polyfills recomendadas.

### constructores `Event()`

Scully usa[`Event`](https://developer.mozilla.org/en-US/docs/Web/API/Event/Event) en diferentes puntos del ciclo de vida de la aplicación.

### Internet Explorer 10+

Para hacer que Scully funcione en **Internet Explorer 10+**, instala e importa el siguiente polyfill:

`npm install events-polyfill`

```typescript
// src/polyfills.ts
import 'events-polyfill/src/constructors/Event.js';
```
