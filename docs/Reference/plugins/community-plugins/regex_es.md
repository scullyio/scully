---
title: Complemento regex
published: true
lang: es
position: 100
---

# Complemento `regex`

<div class="docs-link_table">
  <a class="homepage" href="https://github.com/gammastream/scully-plugins"></a>
  <a class="repository" href="https://github.com/gammastream/scully-plugins/tree/master/projects/scully-plugin-regex"></a>
</div>

## Visión General

Este complemento `postRenderer` para Scully reemplazará las expresiones regulares configuradas en el HTML renderizado por Scully.

_La versión 2.0.0 introduce importantes cambios en la manera en que el complemento es configurado. Permite desacoplarse de la configuración principal de Scully_

## Instalación

Para instalar este complemento con `npm` ejecuta:

```
$ npm install @gammastream/scully-plugin-regex --save-dev
```

## Uso

Agrega el complemento a `defaultPostRenderers` para ejecutarlo sobre todas las páginas renderizadas:

```typescript
import { ScullyConfig, setPluginConfig } from '@scullyio/scully';
import { getRegexPlugin } from '@gammastream/scully-plugin-regex';

const RegexPlugin = getRegexPlugin();
setPluginConfig(RegexPlugin, {
  replacements: [
    {
      from: 'foo',
      to: 'foobar',
    },
    {
      from: new RegExp(
        '([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+.[a-zA-Z0-9._-]+)',
        'gi'
      ),
      to: '<a href="mailto:$1">$1</a>',
    },
  ],
  routes: {
    '/products/:productId': {
      replacements: [
        {
          from: 'foo',
          to: 'foofoo',
        },
      ],
    },
  },
});

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'scully-plugins',
  outDir: './dist/static',
  defaultPostRenderers: [RegexPlugin],
  routes: {
    '/products/:productId': {
      type: 'json',
      productId: {
        url: 'http://localhost:4200/assets/products.json',
        property: 'id',
      },
    },
  },
};
```

Compila y ejecuta Scully normalmente.

```
npm run build
npm run scully
```

## Preguntas y Problemas

Si encuentras algún problema puedes notificarlo acá o contartarme en: [GammaStream](https://gamma.stream/)
