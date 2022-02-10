---
title: Complemento RSS
published: true
lang: es
position: 100
---

# Complemento `rss`

<div class="docs-link_table">
  <a class="homepage" href="https://github.com/notiz-dev/scully-plugins"></a>
  <a class="repository" href="https://github.com/notiz-dev/scully-plugins/tree/master/plugins/rss"></a>
</div>

## Visión General

`scully-plugin-rss` es un complemento `postRenderer` para [Scully](http://scully.io/) que permite agregar contenido a travéz de un feed rss usando [feed](https://github.com/jpmonette/feed) y [showdown](https://github.com/showdownjs/showdown).

El feed rss está disponible en:

- your-domain.de/feed.json
- your-domain.de/feed.atom
- your-domain.de/feed.xml

## Instalación

Para instalar este complemento con `npm` ejecuta:

```
$ npm install @notiz/scully-plugin-rss --save-dev
```

## Uso

Agrega el complemento a `defaultPostRenderers` en tu `scully.config`:

```js
require('@notiz/scully-plugin-rss');

exports.config = {
  projectRoot: './src/app',
  defaultPostRenderers: ['rss'],
  routes: {}
};
```

Si quieres usar el complemento en una ruta específica puedes hacer:

```js
require('@notiz/scully-plugin-rss');

exports.config = {
  ...
  routes: {
    '/blog/:slug': {
      type: 'contentFolder',
      slug: {
        folder: './content/blog'
      },
      postRenderers: ['rss']
    }
  }
  ...
};
```

Crea un archivo `rss.config.json` en la razín de tu proyecto con las siguiente propiedades:

```json
{
  "title": "Your Title",
  "description": "Page description",
  "id": "https://your-domain.com",
  "link": "https://your-domain.com",
  "language": "en",
  "image": "https://your-domain.com/featured.png",
  "favicon": "https://you-domain.com/favicon.png",
  "copyright": "2020 your-domain.com",
  "generator": "Page description",
  "feedLinks": {
    "json": "https://your-domain.com/feed.json",
    "atom": "https://your-domain.com/feed.atom"
  },
  "outDir": "./dist/static",
  "categories": ["Categories", "of", "your", "choice"]
}
```

Cada atributo de tu feed rss están asignados por los siguientes atributos de rutas de scully

| Atributo de RSS Feed | Atributo de ruta de Scully   |
| -------------------- | ---------------------------- |
| `title`              | `title`                      |
| `id`                 | `slug`                       |
| `link`               | Config Link + `slug`         |
| `description`        | `description`                |
| `content`            | `articleHTML`                |
| `author`             | `authors`                    |
| `contributor`        | `authors`                    |
| `date`               | `updatedAt` \| `publishedAt` |

Tu contenido debe tener el siguiente encabezado en el contenido de Scully:

```
---
title: Martial Arts Training
description: Best Martial Arts Training
publishedAt: 2020-03-25T10:12:00.000Z
updatedAt: 2020-03-25T10:12:00.000Z
published: true
tags:
  - training
  - rss
authors:
  - Bruce Lee
---
```
