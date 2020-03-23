---
title: Adding Blog Support
order: 600
---

# Blogs in Scully

Scully is the best option for moving a blog to Angular!

It has a schematic that enables Angular applications to use markdown files for blog's content.

1. [Adding Blog Support](#adding-blog-support)
2. [Generating New Blog Posts](#generating-new-blog-posts)

## Adding Blog Support

To add blog support to your app, run the following command:

```bash
ng generate @scullyio/init:blog
```

This command adds the blog modules's roues to the Angular application. In addition, it creates a `./blog` folder for the blog's markdown files.

To create a folder with a different name, run the following command:

```bash
ng generate @scullyio/init:markdown --name=my-markdown --slug=my-slug-id
```

or

```bash
ng generate @scullyio/init:markdown --name="my markdown" --slug="my slug id"
```

**NOTE:** Slug is .

The following table shows all available options:

| Option         | Description                                               | Default                  |
| -------------- | --------------------------------------------------------- | ------------------------ |
| `name`         | Defines the name for the created module                   | 'blog'                   |
| `slug`         | Define the name for the `:slug`                           | 'id'                     |
| `routingScope` | Sets a routing scope (`Root` or `Child`)                  | Child                    |
| `sourceDir`    | Defines a source directory name (default: `name`)         | value from `name` option |
| `route`        | Defines a route path before the `:slug` (default: `name`) | value from `name` option |

Scully works well in combination with other tools and [utilities](utils.md).

For instance, if the markdown content includes code blocks, and you want to highlight it us the use a utility.

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
