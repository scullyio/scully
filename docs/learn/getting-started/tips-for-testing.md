---
title: Tips
published: true
lang: en
position: 100
---

# Tips

### ng build

`ng build` is _only_ needed when you modified something in your angular app.
The scully config file, plugins, and eventual markdown files are not part of your Angular app.
Although this may seem evident, if this is your first time using Scully it is easy to rebuild Angular even if it is not needed. When writing Scully plugins OR modifying your blog's markdown files, you DO NOT need to `ng build` the app each time you re-run Scully. Again, `ng build` Angular only if the Angular app changes.

Whenever you are confused about re-running the `ng build`, just ask yourself:

> Did I change the Angular code, or the Scully parts?

### Scully watch mode

Running `npm run scully` pre-builds your project with Scully. Any time a plugin or a markdown file changes, re-run this process. In addition, if any of the content that the Angular app depends on changes, you need to re-run the Scully build.

To make the `serve` process easier run the following command:

```bash
npm run scully -- --watch
```

Running Scully build with the `--watch` option live-reloads the Scully build. In other words, It watches for any changes from the Angular build or from any of the markdown files. If any of those change, the Scully build re-executes, and it serves the new results in realtime.

**NOTE**: This is ideal for a faster development, but **DO NOT** use the `--watch` option during production or any devops process or the build will never finish.

### Static file is wrong

Sometimes it might seem that Scully doesn't render correctly. In this cases start the [scully server](/docs/learn/getting-started/serving) and visit the route in your application. Usually this means openening the browser with an url like:

```
http://localhost:1864/a/path/in/my/app
```

and check the conent of that page. If that is off, the problem is in your Angular app, and you need to fix it there.
When this page looks correct, but the static file does reflect only a partial result, there is probably an issue where zoneJS can't be used to detect your apps idle state. (idle state in this case means, your app is ready, everything is rendered to screen, and we are waiting for the user to do something). See [adding custom mechanisms](/docs/Reference/config.md) how to handle this situation.
