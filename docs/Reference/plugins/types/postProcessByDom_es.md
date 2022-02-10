---
title: Complemento de typo postProcessByDom
published: true
lang: es
position: 100
---

# Complemento de tipo `postProcessByDom`

## Visión general

Un **complemento render** es usado para transformar el HTML renderizado.
Luego de que la aplicación Angular renderiza, el contenido HTML es pasado a un **complmento render** dónde puede ser modificado.

Un **complemento render** puede ser utilizado para transformar una página que contenga datos en formato markdown para renderizarlo

## Interfaz

Un **complemento `postProcessByDom`** es una función que devuelve un `Promise<JSDOM>`. El string dentro del Promise será el HTML transformado.
La interfaz de dicha función es:

```typescript
function exampleContentPlugin(dom: JSDOM, route: HandledRoute): Promise<string> {
  // Must return a promise
}
```

## Diferencias con el complemento `postProcessByHtml`

Si bien tienen exactamente la misma función que `postProcessByHtml`, los complementos`postProcessByDom` obtienen y deben devolver un objeto JSDOM. Éstos serán ejecutados antes de las funciones `postProcessByHtml`.
