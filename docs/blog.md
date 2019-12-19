# Scully w/ Blogs

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


## Generating New Blog Posts

To add a new blog post, run the following command. 

```
ng g @scullyio/init:post --name="This is my post"
```

---



[Full Documentation ➡️](scully.md)
