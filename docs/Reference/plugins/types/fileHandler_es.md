---
title: Tipo de complemento fileHandler
published: true
lang: es
position: 100
---

# Tipo de complemento  `fileHandler`

## Visión General

Un **complemento `fileHandler`** es usuario por el complemento `contentFolder` durante el proceso `render`.
El complemento `contentFolder` procesará las carpetas para archivos markdown o otro tipo de archivos que puedan contener. El complemento `render` procesará cualquier complemento `fileHandler` para cualquier tipo de extensión.

## Uso

Scully contiene dos complementos `fileHandler` incluidos. El [complemento markdown](/docs/Reference/plugins/built-in-plugins/md) y el [complemento asciidoc](/docs/Reference/plugins/built-in-plugins/adoc).
Estos complementos manejan y procesan el contenido de esos tipos de archivos y pueden leerlos directamente desde el sistema de archivos.

Si quieres soporte para archivos  `.docx` o `.csv`, o cualquier otro tipo, debe agregarse un complemento para manejar esos archivos.
El complemento `contentFolder` se encarga leer esos archivos des el sistema de archivo. Sin embargo, si el archivo tiene que ser transformado después de leerse; un complemento `fileHandler` es necesario.

## Interfaz

Un **complemento `fileHandler`** es una función que devuelveun `Promise<string>`. La interfaz de la función luce así:

```typescript
function exampleFileHandlerPlugin(rawContent: string): Promise<string> {
  // Must return a promise
}
```

## Creando un complemento `fileHandler`

El siguienteejemplo de un **complemento `fileHandler`** maneja archivos `.csv` con bloques de código dentro. Puedes escribir un complemento mucho más elaborado que cree una tabla o una grilla a partir de los datos.

```typescript
function csvFilePlugin(raw) {
  return Promise.resolve(`<pre><code>${code}</code></pre>`);
}
// DO NOT FORGET TO REGISTER THE PLUGIN
registerPlugin('fileHandler', 'csv', { handler: csvFilePlugin });
module.exports.csvFilePlugin = csvFilePlugin;
```

## Ejemplos

Estos son unos enlaces a los **complementos render** includios en Scully:

- [complemento asciidoc](/docs/Reference/plugins/built-in-plugins/adoc)
- [complemento markdown](/docs/Reference/plugins/built-in-plugins/md)
