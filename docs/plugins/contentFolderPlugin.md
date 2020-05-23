---
title: Plugins - contentFolder
order: 710
lang: en
---

# contentFolder plugin

The contentFolder plugin set exist out of a route plugin, and a render plugin.
The route plugin takes a config in the form of:

## contentFolder route plugin

Takes a config with like this:

```typescript
const contentFolderconfig = {
  routes: {
    '/blog/:slug': {
      type: 'contentFolder',
      slug: {
        folder: './tests/assets/blog-files',
      },
    },
  },
};
```

It only handles 1 parameter, and the parameter is mandatory. Inside the config for the parameter is 1 property called folder.
This takes a file location relative to the project root. It will traverse into this folder, and its subfolders and will make a `HandledRoute`
for each of known file-extension in there. out of the box `.md`(markdown) and '`adoc` (asciiDoc) are known.
That route will have the `templateFile` property set to the full path to the file, and the route will reflect the folder structure.
Also it will parse out the date in the front-matter part, and adds that to the `data` property of the handledRoute.

## contentFolder render plugin.

this takes the prerendered HTML and a `HandlerRoute`, and will read in the file in the `templateFile` property.
It extracts the Angular `_ngcontent` id. For the file it looks up the extension in the fileHandler plugins, and use the plugin to convert the raw content to HTML.
Then it it adds the `_ngcontent` id to this HTML, so that the styling you did in the component works as expected.

It will then find the `<scully-content>` and injects the HTML as it's previous sibling(s).
