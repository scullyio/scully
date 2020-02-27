# Scully with Blogs

Scully is your best friend when you want to move your blog to Angular!

We have a schematic that will add the necessary pieces to your project to enable blogging with markdown files in your
Angular app.

1. [Adding Blog Support](#adding-blog-support)
2. [Generating New Blog Posts](#generating-new-blog-posts)

## Adding Blog Support

To add blog support to your app, run the following command:

```bash
ng g @scullyio/init:blog
```

This will add the blog components/modules/routes to your Angular app, as well as a folder for your blog markdown files.
If you don't want the folder to be called 'blog', you can run a longer command to provide your own custom names/folders.

To name your blog folders and components another name, run the following command with your own name:

```bash
ng g @scullyio/init:markdown --name=my-test --slug=my-slug-id
```

or

```bash
ng g @scullyio/init:markdown --name="my text" --slug="my slug id"
```

the following table shows all available options:

| option         | description                                                                    | default                  |
| -------------- | ------------------------------------------------------------------------------ | ------------------------ |
| `name`         | define the name for the created module                                         | 'blog'                   |
| `slug`         | define the name for the `:slug`                                                | 'id'                     |
| `routingScope` | set a routing scope (`Root` or `Child`)                                        | Child                    |
| `sourceDir`    | define a source dir name (when not used, `name` is used instead)               | value from `name` option |
| `route`        | define a route path before the `:slug` (when not used, `name` is used instead) | value from `name` option |

> If your markdown content will include code blocks, you may want the [code to be highlighted](utils.md).

## Generating New Blog Posts

To add a new blog post, run the following command:

```bash
ng g @scullyio/init:post --name="This is my post"
```

the following table shows all available options:

| option         | description                                            | default   |
| -------------- | ------------------------------------------------------ | --------- |
| `name`         | define the name for the created post                   | 'blog-X'  |
| `target`       | define the target directory for the new post file      | 'blog'    |
| `metaDataFile` | use a meta data yaml template from a file for the post | undefined |

[Check how to integrate Scully with other tools.](utils.md)

---

[Full Documentation ➡️](scully.md)
