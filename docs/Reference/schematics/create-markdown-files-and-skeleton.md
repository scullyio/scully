---
title: create markdown files and skeleton
published: true
lang: en
position: 100
---

# Create markdown files and skeleton

Scully provides a schematic for adding the plugin needed to read markdown files and create a url for each of them.

```bash
ng g @scullyio/init:markdown
```

This will ask you to complete the config and create/update the files needed to support Markdown skeleton
in your angular app.
Example:

```bash
ng g @scullyio/init:markdown
? What name do you want to use for the module? myMarkdown
? What slug do you want for the markdown file? idFile
? Where do you want to store your markdown files? myMarkdownFolder
? Under which route do you want your files to be requested? md
    ✅️ Update scully.t1.config.ts
CREATE src/app/my-markdown/my-markdown-routing.module.ts (439 bytes)
CREATE src/app/my-markdown/my-markdown.component.html (153 bytes)
CREATE src/app/my-markdown/my-markdown.component.spec.ts (657 bytes)
CREATE src/app/my-markdown/my-markdown.component.ts (516 bytes)
CREATE src/app/my-markdown/my-markdown.component.css (131 bytes)
CREATE src/app/my-markdown/my-markdown.module.ts (424 bytes)
UPDATE scully.t1.config.ts (631 bytes)
UPDATE src/app/app-routing.module.ts (634 bytes)
    ✅️ Blog ./my-markdown-folder/2020-09-17-my-markdown.md file created
CREATE my-markdown-folder/2020-09-17-my-markdown.md (111 bytes)
```

###### What name do you want to use for the module?

This is the name used to create your angular module.

###### What slug do you want for the markdown file?

This is the slug Scully uses in the Angular router.

###### Where do you want to store your markdown files?

Scully needs to store the markdown files in a folder, so the schematics create the folder
and adds the path to the scully config.

###### Under which route do you want your files to be requested?

This is the route Scully adds in the Angular router.
