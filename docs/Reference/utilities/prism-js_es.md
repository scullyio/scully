---
title: Sintaxis Highlighting usando PrismJS
published: true
lang: es
position: 100
---

# Sintaxis Highlighting usando PrismJS

## Visión General

[Prism](https://prismjs.com/) es un lightweight, extensible que puede ser usado para trabajar con bloques de código en formato markdown en tus artículos del blog.

Es posible definir un lenguaje para el código usado dentro del código de Scully:

<pre><code>
```typescript
const foo = 'bar';
```
</code></pre>

## Cómo Scully maneja los bloques de código

Scully interpreta el markdown usando [_marked_](https://www.npmjs.com/package/marked), y el resultado final luce así:

```html
<code class="language-ts">
  <span class="token keyword">const</span> foo
  <span class="token operator">=</span>
  <span class="token string">'bar'</span>
  <span class="token punctuation">;</span>
</code>
```

_marked_ usa clases CSS predefinidas `language-` para identificar el bloque de código con el lenguaje apropiado.

## Uso

Para resaltar el bloque de código usa [_prismjs_](https://prismjs.com) y crea un servicio como este:

```bash
npm i --save prismjs
ng g s highlight
```

El servicion incluirá todos los lenguajes necesarios. El código luce así:

```typescript
import { Injectable, Inject } from '@angular/core';

import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import 'clipboard';
import 'prismjs';
import 'prismjs/plugins/toolbar/prism-toolbar';
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-typescript';
// ... probably more, check out node_modules/prismjs/components

declare var Prism: any;

@Injectable({ providedIn: 'root' })
export class HighlightService {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  highlightAll() {
    if (isPlatformBrowser(this.platformId)) {
      Prism.highlightAll();
    }
  }
}
```

Ahora necesitas injectar el servidcion en el `BlogComponent` que fué generado por Scully:

```typescript
import {/* ... */, AfterViewChecked} from '@angular/core';
import {HighlightService} from '../highlight.service';
/* ... */
export class BlogComponent implements OnInit, AfterViewChecked {
  constructor(
    /* ... */
    private highlightService: HighlightService
  ) {}
  /* ... */
  ngAfterViewChecked() {
    this.highlightService.highlightAll();
  }
}
```

Finalmente, incluye el tema de Prism así:

```css
/* include CSS for prism toolbar */
@import '~prismjs/plugins/toolbar/prism-toolbar.css';
/* check node_modules/prismjs/themes/ for the available themes */
@import '~prismjs/themes/prism-tomorrow';
```

Visita [prismjs](https://prismjs.com/) para más información.
