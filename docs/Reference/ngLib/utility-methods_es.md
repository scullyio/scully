---
title: Métodos Útiles
published: true
lang: es
position: 100
---

# Métodos Útiles

<div class="docs-link_table">
  <a class="view-in-repo" href="https://github.com/scullyio/scully/tree/main/libs/ng-lib/src/lib/utils"></a>
</div>

## Visión General

Estos métodos son muy últiles para obtener información sobre los procesos de Scully

#### `isScullyRunning():` _`boolean`_

Este método devuelve `true` o `false` si Scully está actualmente compilando. Puede usarlo por ejemplo para desabilitar partes de tu aplicación que requieran interación con el usuario.

#### `isScullyGenerated():` _`boolean`_

Este método devuelve `true` si la compilaciíon de Scully ya se ejecutó. Esto significa que tu aplicación se inicia desde el archivo `index.html` generado por Scully.
