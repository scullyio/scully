---
title: Minimal setup required
published: true
lang: en
position: 90
---

# Minimal setup required

You need an existing or new Angular application that has the router installed.

## Minimal versions needed.

- For Angular versions 9, 10, and, 11, use Scully V1.1.1 (this version will only receive security updates)
- for Angular V12 and above use Scully from V2.0.0 on.
- Node.js: **14** or higher.

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

When your app meets the requirements, you can then [install scully in the next step](/docs/learn/getting-started/installation).
