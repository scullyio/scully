---
title: Complemento http404
published: true
lang: es
position: 100
---

# Complemento  `http404`

<div class="docs-link_table">
  <a class="homepage" href="https://github.com/gammastream/scully-plugins"></a>
  <a class="repository" href="https://github.com/gammastream/scully-plugins/tree/master/projects/scully-plugin-http404"></a>
</div>

## Visión General

Este complemento `postRenderer` para Scully creará una página `/404.html` para la ruta configurada `/404`. Esto es útil para generar páginas 4040 personalizadas dentro de tu aplicación Angular y que mantiene compatibilidad con los [requerimientos de hosting de firebase](https://firebase.google.com/docs/hosting/full-config#404) para páginas 404.

_La versión 1.0.0 introduce importantes cambios en la manera en que el complemento es registrado y configurado. Por favor actualiza tu configuración_

## Instalación

Para instalar esta librería con `npm` ejecuta:

```
$ npm install @gammastream/scully-plugin-http404 --save-dev
```

## Uso

Crea una ruta 404 dentro de tu router principal:

```typescript
RouterModule.forRoot([
  {
    path: 'a',
    component: PageComponent,
  },
  {
    path: 'b',
    component: PageComponent,
  },
  {
    path: 'c',
    component: PageComponent,
  },
  {
    path: '',
    component: PageComponent,
  },
  {
    path: '404',
    component: Http404Component,
  },
  {
    path: '**',
    component: Http404Component,
  },
]);
```

Agregar el complemento a `defaultPostRenderers` para ejecutarlo sobre la ruta `/404`:

```typescript
import { ScullyConfig, setPluginConfig } from '@scullyio/scully';
import { getHttp404Plugin } from '@gammastream/scully-plugin-http404';

const Http404Plugin = getHttp404Plugin();

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'scully-plugins',
  outDir: './dist/static',
  defaultPostRenderers: [Http404Plugin],
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

Compila la aplicación y ejecuta Scully normalmente.

```
npm run build
npm run scully
```

## Preguntas y Problemas

Si tienes algún problema puede describirlo acá o contactarme a: [GammaStream](https://gamma.stream/)
