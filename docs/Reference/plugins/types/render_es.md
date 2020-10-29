---
title: Complementos del tipo render
published: true
lang: es
position: 100
---

# Complementos del tipo `render`

## Visión General

Un **complemento render** es utilizado para transformar el HTML renderizado.
Una vez que la aplicación Angular haya renderizado, el contenido HTML es pasado a un **complemento render** dónde puede ser modificado aún más.

Un **complemento render** puede ser usado para transformar el contenido markdown que tenga página y así renderizarlo.

## Interfaz

un **complemento `render`** es una función que devuelve un `Promise<String>`. El string dentro de la promesa debe ser HTML transformado. 
La interfaz de la función luce así:

```typescript
function exampleContentPlugin(
  HTML: string,
  route: HandledRoute
): Promise<string> {
  // Must return a promise
}
```

## Creando un Complemento `render`

El siguiente ejemplo de un **complemento `render`**  agrega un titulo en el header de la página si es que no lo encuentra.

```typescript
const { registerPlugin } = require('@scullyio/scully');

function defaultTitlePlugin(html, route) {
  // If no title in the document
  if (html.indexOf('<title') < 0) {
    const splitter = '</head>';
    const [begin, end] = html.split(splitter);
    const defaultTitle = `<title>The Truth Is Out There!</title>`;
    return Promise.resolve(`${begin}${defaultTitle}${splitter}${end}`);
  }
  return Promise.resolve(html);
}

// DON NOT FORGET REGISTER THE PLUGIN
const validator = async (conf) => [];
registerPlugin('render', 'defaultTitle', defaultTitlePlugin, validator);

module.exports.defaultTitlePlugin = defaultTitlePlugin;
```

En el ejemplo anterior, el contenido HTML de la aplicación Angular es transformado para incluir un título porque se encontró a alguien.

El siguiente ejemplo reemplaza cualqueir coincidencia de `:)`por un emoji sonriente.

```typescript
const { registerPlugin } = require('@scullyio/scully');

function smileEmojiPlugin(html, route) {
  return Promise.resolve(html.replace(/\:\)/g, '😊'));
}
// DON NOT FORGET REGISTER THE PLUGIN
const validator = async (conf) => [];
registerPlugin('render', 'smiles', smileEmojiPlugin, validator);

module.exports.smileEmojiPlugin = smileEmojiPlugin;
```
