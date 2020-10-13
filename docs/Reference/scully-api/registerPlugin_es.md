---
title: registerPlugin
published: true
lang: es
position: 100
---

# registerPlugin

La función [`registerPlugin`](https://github.com/scullyio/scully/blob/main/libs/scully-schematics/src/add-plugin/index.ts) agrega un nuevo complemento a Scully. Ésta función tiene 5 parámetros:

```typescript
registerPlugin(
  type: PluginTypes,
  name: string | symbol,
  plugin: PluginFunction,
  validator?: validator,
  options?: { replaceExistingPlugin = false }
)
```

#### type: PluginTypes

- Indica el tipo de complemento.
- los tipos existentes son: `router`, `render`, `fileHandler`, `allDone`, or `routeDiscoveryDone`.

#### name: string | symbol

- El nombre del complemento.
- Debe ser único para ese tipo de complemento.
- Para reemplazar un complemento existente, utiliza la opción `replaceExistingPlugin`.

#### plugin: promise | async function

- La función asincrónica del complemento.
- Contiene la lógica del complemento.
- Los tipos de complementos estan descritos en sus propias descripciones.

#### validator?: function(opcional)

- Una función validadora.
- Debe devolver un arreglo de errores.
- Si no existen errores, debe devolver el valor `false`.
- Si devuelve un `string<array>`, esos strings son tomados como errores, y el proceso es abortado.

**Ayuda:** Agrega un color a los errores de validación usando los colores que exporta Scully.

**Ejemplo de Validador:**

```typescript
import { yellow } from '@scullyio/scully';

// Omitted code ...

const validator = async (options) => {
  const errors = [];

  if (options.numberOfPages && typeof options.numberOfPages !== 'number') {
    errors.push(
      `my-custom-plugin numberOfPages should be a number, not a ${yellow(
        typeof options.numberOfPages
      )}`
    );
  }

  return errors;
};
```

#### options?: {replaceExistingPlugin:boolean}(optional)

Un objeto `options` puede ser utilizado para establecer opciones.
Hasta el momento, la única opción disponibles es `replaceExistingPlugin`.
