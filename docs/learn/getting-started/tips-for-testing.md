---
title: Tips for Testing
published: true
lang: en
position: 100
---

# Tips for Testing

### Only rebuild Angular if you change Angular

Although this may seem evident, if this is your first time using Scully it is easy to rebuild Angular even if it is not needed. When writing Scully plugins OR modifying your blog's markdown files, you DO NOT need to `ng build` the app each time you re-run Scully. Again, `ng build` Angular only if the Angular app changes.

Whenever you are confused about re-running the Angular build, just ask yourself:

> Did I change the Angular code, or the Scully code?

### Scully Serve

Running `npm run scully` pre-builds your project with Scully. Any time a plugin or a markdown file changes, re-run this process. In addition, if any of the content that the Angular app depends on changes, you need to re-run the Scully build.

To make the `serve` process easier run the following command:

```bash
npm run scully -- --watch
```

Running Scully build with the `--watch` option live-reloads the Scully build. In other words, It watches for any changes from the Angular build or from any of the markdown files. If any of those change, the Scully build re-executes, and it serves the new results in realtime.

**NOTE**: This is ideal for a faster development, but **DO NOT** use the `--watch` option during production or any devops process or the build will never finish.
