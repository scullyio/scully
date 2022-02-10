---
title: Complemento sitemap
published: true
lang: es
position: 100
---

# Complemento `sitemap`

<div class="docs-link_table">
  <a class="homepage" href="https://github.com/gammastream/scully-plugins"></a>
  <a class="repository" href="https://github.com/gammastream/scully-plugins/tree/master/projects/scully-plugin-sitemap"></a>
</div>

## Visión General

Este complemento `routeDiscoveryDone` para Scully generará uno o más sitemap (mapa del sitio) para las rutas generadas.

_la versión 1.0.0 introduce importante cambios ya que ha sido re-escrito para aprovechar las ventajas del nuevo complemento `routeDiscoveryDone` reemplazando la manera anterior que usa el complemento `render`. La nueva manera tiene la ventaja de generar los sitemap una vez en cada ejecución - y no después de cada renderizado de página._

## Instalación

Para instalar este librería con `npm`, ejecuta:

```
$ npm install @gammastream/scully-plugin-sitemap --save-dev
```

## Uso

Dentro de la configuración de Scully (typescript), importa y configura el complemente de la siguiente manera:

```typescript
import { ScullyConfig, setPluginConfig } from '@scullyio/scully';
import { getSitemapPlugin } from '@gammastream/scully-plugin-sitemap';

const SitemapPlugin = getSitemapPlugin();
setPluginConfig(SitemapPlugin, {
  urlPrefix: 'https://gamma.stream',
  sitemapFilename: 'sitemap.xml',
  changeFreq: 'monthly',
  priority: ['1.0', '0.9', '0.8', '0.7', '0.6', '0.5', '0.4', '0.3', '0.2', '0.1', '0.0'],
  ignoredRoutes: ['/404'],
  routes: {
    '/products/:productId': {
      changeFreq: 'daily',
      priority: '0.9',
      sitemapFilename: 'sitemap-products.xml'
    }
  }
});

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'scully-plugins',
  outDir: './dist/static',
  routes: {
    '/products/:productId': {
      type: 'json',
      productId: {
        url: 'http://localhost:4200/assets/products.json',
        property: 'id'
      }
    }
  }
};
```

Compila y ejecuta Scully normalmente.

```
npm run build
npx scully
```

## Configurando prioridades

La prioridad de una ruta puede ser configurada asignandole un nivel de prioridad basado en el número de segmentos que tien una ruta.

```typescript
[
  '1.0', // `/` - [ '' ] (1 segment)
  '0.9', // `/services` - [ '', 'services' ] (2 segments)
  '0.8' // `/services/hosting` - [ '', 'services', 'hosting' ]
  // etc...
];
```

## Notas

- Actualmente, una prioridad por defecto (0.5) para todas las rutas. En un futuro se actualizará esta asignación, basandose en el número de segmentos de una ruta. (Complemtada en la versión v0.0.4)

## Preguntas y Problemas

Si tienes algún problema y inconveniente puedes escribirlo acá o contáctame en: [GammaStream](https://gamma.stream/)
