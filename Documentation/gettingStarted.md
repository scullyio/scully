# Gettings started with coulson

In an existing Angular app, first install coulson by using the CLI:

```bash
ng add @herodevs/coulson-generate --blog
```


When that is done, the following things will have happened.

1. We installed all the dependencies most of those are only developer dependencies.
2. We added a `coulson.json` sample configuration.


The `--blog` is optional and will add the below in one step.

1. add a folder `./blog` to the project root.
2. add a lazy loaded blog module to your app.
3. put in a sample route to this module
4. added a blog component, that shows how to sue the `<coulson-content>` component
5. put in a sample mardown first blog entry in the folder

You can do this later on by using:

```bash
ng generate @herodevs/coulson-generate:blog
```

To add a page to the blog you can use:

```bash
ng g @herodevs/coulson-generate:post --title=MyBeautifulWebApp
```

This will create a new MD file in the `./blog` folder. if you provided the optional `--title` option, it will use the name given, otherwise it will create a file named `blogxxx.md` where xxx is a number. it warns when the file already exists.

A blog file will start with an header. We are using the standard [front-matter](https://github.com/jxson/front-matter) to extract this header.
The meta-data available in there will be available to you by injecting the `CoulsonRoutesService`


Now you are ready run the coulson you can do this by:

```bash
npm run coulson:generate
```
When are done with this, inside your dist folder is a static folder, with all pages generated.

To be able to test you app you can run 
```bash
TBD
```
