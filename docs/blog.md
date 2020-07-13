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

## New blog post example

Let's look at an example. We want to create a new blog post so we type the following in the terminal `ng generate @scullyio/init:post --name="Angular tutorial"`. This triggers the following output:

```output
ng generate @scullyio/init:post --name="Angular tutorial"
? What's the target folder for this post? blog
    ✅️ Blog ./blog/angular-tutorial.md file created
CREATE blog/angular-tutorial.md (99 bytes)
```

Above you are prompted where you want to place your blog post. You go with default, which is the `blog/` directory. You can then see above how the file `angular-tutorial.md` is created with this message:

```bash
CREATE blog/angular-tutorial.md
```

Let's have a look at the generated `angular-tutorial.md`:

```markdown
---
title: Angular tutorial
description: blog description
published: false
---

# Angular tutorial
```

At the top of the file there is a frontmatter, a set of instructions Scully is using. Those are:

- `title`, this is the title of the blog post
- `description`, this is the description
- `published`, this is a property representing whether the blog post is published or not. It takes a `true` or `false`.

### Generating the blog post route

Next you want to build Scully to generate the route. Type the following in the terminal:

```bash
npm run scully
```

The above will start a process that will generate pages. Have a look at your `angular-tutorial.md` file again, it has changed. Now the file contains the following:

```markdown
---
title: 'Angular tutorial'
description: 'blog description'
published: false
slugs:
  - ___UNPUBLISHED___kao8mvda_pmldPr7aN7owPpStZiuDXFZ1ILfpcv5Z
---# Angular tutorial
```

The property `slugs` have been added to the frontmatter above. `slugs` contains an anonymous URL as long as the property `published` is set to `false`. This is a URL that you can share with others to for example get feedback on your blog post before it goes live.

> NOTE, when you gave the command to build Scully the blog post you just created in Markdown was converted to HTML and placed in the directory `dist/static/blog/<anonymous slug value>/index.html`.

### Serve the website

Now that page and the route has been generated, let's serve up the application and ensure it works. Type the following command to serve the static site built by Scully:

```bash
npm run scully serve
```

The command will give an output looking like so:

```output
Angular distribution server started on "http://localhost:1864/"
Scully static server started on "http://localhost:1668/"
```

Open up a browser window and navigate to the URL `http://localhost:1668/`:

Your blog post can be found on the URL `http://localhost:1668/blog/<anonymous slug>`, which if you check the frontmatter above means the following URL `http://localhost:1668/blog/___UNPUBLISHED___kao8mvda_pmldPr7aN7owPpStZiuDXFZ1ILfpcv5Z`.

You should now see the following output in the browser:

```markdown
ScullyIo content
Angular tutorial
End of content
```

### Going live

At some point you are happy about the blog post you just authored. At this point you want to open up `angular-tutorial.md` and change the `published` property to `true` to publish it. Also clear the `slugs` property so it no longer has the anonymous slug value. The file should now look like this:

```markdown
---
title: 'Angular tutorial'
description: 'blog description'
published: true
---

# Angular tutorial
```

Run the following command:

```bash
npm run scully
```

This time around it will render a different route. By default Scully will create a route with the same name as the markdown file minus the extension. Have a look at `dist/static/blog` and you will see it looks like so:

```bash
--| dist
----| static
------| blog
--------| angular-tutorial
----------| index.html
```

Let's serve this up with the command:

```bash
npm run scully serve
```

Open up your browser and navigate to the URL `http://localhost:1668/blog/angular-tutorial`.

### Overriding the slug

If you are **not** happy with Scully's convention of creating the slug based on the filename, you can change that by introducing the `slug` property in the frontmatter of the markdown file. Change the `angular-tutorial.md` file to the following:

```markdown
---
title: 'Angular tutorial'
description: 'blog description'
published: true
slug: angularjs-still-rocks
---

# Angular tutorial
```

Above the `slug` property has been added and assigned the value `angularjs-still-rocks`. This will instruct Scully to use this as the route instead. Now generate the routes anew with this command:

```bash
npm run scully
```

Note how the `dist/static/blog` folder now has a new entry, namely `angular-js-still-rocks/index.html`.

Serving up the static app with:

```bash
npm run scully serve
```

The blog post can now be found at `http://localhost:1668/blog/angularjs-still-rocks`.
