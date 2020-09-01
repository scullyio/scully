---
title: Minimal setup required
published: true
lang: en
navlist_position: 100
navlist_parentIndex: true
navlist_parentPosition: 200
---

# Minimal setup required

You need an existing or new Angular application that has the router installed.

## Minimal versions needed.

- Angular versions: **v9.x.x** or **v10.x.x**
- Node.js: **12** or higher.

**IMPORTANT:** _Scully uses Chromium. Therefore, your Operating System, as well as its administrator rights must allow its installation and execution._

## Add Router Modules

Your Angular project needs at least one route set up.

**IMPORTANT:** _Scully depends on the app's router module in order to generate the website's pages_

When your app doesn't include the router you can add it with the following command:

```bash
ng generate module app-routing --flat --module=app
```

When you want to add a lazy loaded route, you can use the following command:

```bash
ng generate module home --route home --module app
```

When your app meets the requirements, you can then install scully in the next step.

<div class="docs-prev_next">
  <a class="prev" href="/docs/learn/introduction">Introduction</a>
  <a class="next" href="/docs/learn/getting-started/installation">Installing Scully</a>
</div>
