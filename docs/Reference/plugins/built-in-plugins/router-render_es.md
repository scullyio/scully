---
title: Complemento router-render
published: true
lang: es
position: 100
---

# Complemento `router-render`

## Visión General

Por defecto, Scully usar puppeteer para renderizar las páginas del enrutador.
Con este tipo de complemento, puedes personalizar el renderizado de una URL.

Para user `router-render` necesitas agregar en la configuración de tu aplicación, las rutas y enviar la información.

`scully.{{your_app}}.config.ts`

```typescript
  proxyConfig: 'proxy.conf.cjs',
  // maxRenderThreads: 4,
  routes: {
    // here i need a routePlugin with renderPlugin
    '/url/some_url': {
      type: 'pluginHandler',
      options: {
        folder: '/example/folder',
      },
    },
```

También debes registrar el complemento, el sistema de complementos utiliza registerPlugin para eso (para más información visita la documentación sobre [registrar un nuevo complemento](/docs/Reference/plugins/custom-plugins/register-a-new-plugin))

`scully.{{your_app}}.config.ts`

```typescript
registerPlugin('router', 'pluginHandler', (url, options) => {
  // read the folder and all the files routes.
  return [{ route: '/example/folder/file-1', renderPlugin: 'PageOptimizer' }];
});
```

En este caso, Scully tratará renderizar esa URL con el complemento `PageOptimizer`, si existe algún problema enla ejecución del complemento, Scully reintentará con puppeteer.
