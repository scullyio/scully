---
title: Creación
published: true
lang: es
position: 130
---

# Creación de un complemento personalizado

Un complemento es siempre una función que devuelve una promesa (`Promise`). Una función asincrónica es una manera simple de crear una.
Por ejemplo, si quires un complemento que realice algo simple como reemplazar una parte del HTML por otro puedes hacerlo así:

```typescript
async function replaceThings(html: string, route: handledRoute) {
  const replaceStrings = [[':)', '☺']];
  replaceString.forEach((find, replace) => (html = html.split(find).join(replace)));
  return html;
}
```
