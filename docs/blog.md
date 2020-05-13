---
title: Create a blog
order: 600
lang: en
---

# Creating a Blog

Scully is the best option for moving a blog to Angular! It provides a schematic that enables Angular applications to use markdown files for blog's content.

This guide covers the following topics:

1. [Adding Blog Support](#adding-blog-support)
2. [Generating New Blog Posts](#generating-new-blog-posts)

_IMPORTANT:_ If you do not have an Angular app with Scully, please check the [getting started](/docs/getting-started) guide first.

## Adding Blog Support

Add blog support by running the following command:

```bash
ng generate @scullyio/init:blog
```

The above command adds the blog modules' routes to the Angular application. In addition, it creates a `./blog` folder for the blog's markdown files. In case you want to use a different folder name, run the following command:

```bash
ng generate @scullyio/init:markdown
```

You will be prompted with the following questions;

```bash
? What name do you want to use for the module? blog
? What slug do you want for the markdown file? title
? Where do you want to store your markdown files? mdblog
? Under which route do you want your files to be requested? blog
```

After adding the blog support, you should see the following message:

```bash
    ✅️ Update scully.{{yourApp}}.config.js
UPDATE scully.{{yourApp}}.config.js (653 bytes)
UPDATE src/app/app-routing.module.ts (726 bytes)
UPDATE src/app/blog/blog-routing.module.ts (429 bytes)
UPDATE src/app/blog/blog.component.css (157 bytes)
UPDATE src/app/blog/blog.component.html (160 bytes)
UPDATE src/app/blog/blog.component.spec.ts (639 bytes)
UPDATE src/app/blog/blog.component.ts (508 bytes)
UPDATE src/app/blog/blog.module.ts (391 bytes)
    ✅️ Blog ./mdblog/2020-03-24-blog.md file created
CREATE mdblog/2020-03-24-blog.md (95 bytes)
```

Alternatively, it is possible to run the `@scullyio/init:markdown` command with flags to avoid the prompts as follows:

```bash
ng generate @scullyio/init:markdown --name="blog" --slug="title" --source-dir="mdblog" --route="blog"
```

The following table shows all available options:

| Option         | Description                                               | Default                  |
| -------------- | --------------------------------------------------------- | ------------------------ |
| `name`         | Defines the name for the created module                   | 'blog'                   |
| `slug`         | Defines the name for the url matcher file. `:slug`        | 'id'                     |
| `routingScope` | Sets a routing scope (`Root` or `Child`)                  | Child                    |
| `sourceDir`    | Defines a source directory name (default: `name`)         | value from `name` option |
| `route`        | Defines a route path before the `:slug` (default: `name`) | value from `name` option |

Scully works well in combination with other tools and [utilities](utils.md).

For instance, if the markdown content includes code blocks, and you want to highlight them; use a utility.

## Generating New Blog Posts

To create a new blog post, run the following command:

```bash
ng generate @scullyio/init:post --name="This is my post"
```

The following table shows all available options:

| option         | description                                            | default   |
| -------------- | ------------------------------------------------------ | --------- |
| `name`         | Define the name for the created post                   | 'blog-X'  |
| `target`       | Define the target directory for the new post file      | 'blog'    |
| `metaDataFile` | Use a meta data yaml template from a file for the post | undefined |
