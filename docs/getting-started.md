# Scully - Getting Started

After created your Angular application go to your command line using Angular-CLI, you need to add Scully to your project: 

```bash
ng add @scullyio/init
```

The command above set up the necessary to start to work with Scully (_we go to get more deep about this in next releases._).

If the installation was success you can read a message similar to this one.

```bash
Installed packages for tooling via yarn.
✔ Added dependency
✔ Import HttpClientModule into root module
UPDATE package.json (1447 bytes)
UPDATE src/app/app.module.ts (472 bytes)
UPDATE src/polyfills.ts (3035 bytes)
UPDATE src/app/app.component.ts (325 bytes)
  ✔ Packages installed successfully.
  ✔ Update package.json
CREATE scully.config.js (65 bytes)
UPDATE package.json (1507 bytes)
```

## @scullyio/init:blog

Scully have built-in schematics to use, `@scullyio/init:blog` allows you to create a full Lazy Loaded feature module to start your basic
static site. 

You just need write in your command line:
 
```bash
ng g @scullyio/init:blog
```

After the execution, you should read:
```
CREATE src/app/blog/blog-routing.module.ts (336 bytes)
CREATE src/app/blog/blog.module.ts (335 bytes)
CREATE src/app/blog/blog.component.css (0 bytes)
CREATE src/app/blog/blog.component.html (19 bytes)
CREATE src/app/blog/blog.component.spec.ts (614 bytes)
CREATE src/app/blog/blog.component.ts (261 bytes)
UPDATE src/app/app-routing.module.ts (336 bytes) 
  ✔ Blog 12-13-2019-blog-X file created
  ✔ Update scully.config.js
CREATE blog/12-13-2019-blog-X.md (101 bytes)
UPDATE scully.config.js (121 bytes)
```

As you can see above `ng g @scullyio/init:blog` creates the following files for you:

- blog-routing.module.ts
- blog.module.ts
- blog.component.css
- blog.component.html
- blog.component.spec.ts
- blog.component.ts

Also, it updated the `app-routing.module.ts` with the new module added. Last but not least we added `scully.config.js` and create a
folder named `/blog` wich inside have a markdown file. 

###### `scully.config.js`

Inside this file, we can find all the routes of your app generated automatically from Scully. 

```js
exports.config = {
  projectRoot: "./src/app",
  routes: {
    '/blog/:slug': {
      type: 'contentFolder'
    },
  }
};
```

##### What if I don't want a module called "blog"?

If for any reason you want to customize the name of your module we have a specific command for that.

## @scullyio/init:markdown --name 

With `@scullyio/init:markdown` you can customize the name of your modules easy, just adding the flag `--name` 

```bash
ng g @scullyio/init:markdown --name=categories
```

The example above allows you to create a new Lazy Loaded Module named "categories".


## ng g @scullyio/init:post --title

PENDING 

```
ng g @scullyio/init:post --title
```

### Time to build! 

At this moment we know how to create our static site using Scully, but now it's time to build and see the magic.

#### Step one, build our angular app

We need to build our Angular app using the command: 

 ```bash
 ng build
 ```
 
 After finished this process the Angular-CLI should create the dist folder with all our fully compiled app.
 
 #### Step two, build using Scully
 
 ```bash
 npm run scully
 ```
 
 As a result of command line above inside the `dist` folder we should found another 2 folder: 
 
```
|-- dist/
|   |-- my-project-name/
|   |-- static/

```

`static` folder contains all our static site ready for deploy to your favorite server.
 

---
Prev: [Pre-requisites ⬅️️](pre-requisites.md) | Next: [Working with Plugins ➡️](working-with-plugins.md)
