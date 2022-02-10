---
title: Create
published: true
lang: en
position: 130
---

# Create a custom plugin

A plugin is always a function that returns a promise. An async function is an easy way to build one.
For example, if you want a plugin that does something silly like replacing strings in some piece of HTML you can do it like this:

```typescript
async function replaceThings(html: string, route: handledRoute) {
  const replaceStrings = [[':)', '☺']];
  replaceString.forEach((find, replace) => (html = html.split(find).join(replace)));
  return html;
}
```
