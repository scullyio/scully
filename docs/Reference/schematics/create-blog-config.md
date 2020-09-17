---
title: create blog config
published: true
lang: en
position: 100
---

# create blog config

Scully have schematics for create your own blog in one command:

```bash
ng g @scullyio/init:blog
```

This will create all the files and change what you need for have your own blog running
in your Angular application and Scully's config.

```bash
ng g @scullyio/init:blog
    ✅️ Update scully.t1.config.ts
UPDATE scully.t1.config.ts (511 bytes)
UPDATE src/app/app-routing.module.ts (524 bytes)
CREATE src/app/blog/blog-routing.module.ts (406 bytes)
CREATE src/app/blog/blog.component.html (153 bytes)
CREATE src/app/blog/blog.component.spec.ts (614 bytes)
CREATE src/app/blog/blog.component.ts (489 bytes)
CREATE src/app/blog/blog.component.css (131 bytes)
CREATE src/app/blog/blog.module.ts (380 bytes)
    ✅️ Blog ./blog/2020-09-17-blog.md file created
CREATE blog/2020-09-17-blog.md (97 bytes)
```

Scully add the support for Markdown files and now your config file is like:

```typescript
  routes: {
    '/blog/:slug': {
      type: 'contentFolder',
      slug: {
        folder: "./blog"
      }
    }
```

Where the type `contentFolder` is the plugin for support read the MD files.
And the config for slug is the folder where you will create the files for each route and blog you will have.
If you need change the folder, just modify the `"./blog"` value, remember Scully will read
from the root of your application this route.
