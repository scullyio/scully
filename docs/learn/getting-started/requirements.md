---
title: Requirements
published: true
lang: en
navlist_position: 100
navlist_parentIndex: true
navlist_parentPosition: 200
---

# Requirements <!-- omit in toc -->

<div class="docs-toc"></div>

- [Overview](#overview)
- [Software Requirements](#software-requirements)
- [Creating a New Angular Application](#creating-a-new-angular-application)
- [Add Router Modules](#add-router-modules)

## Overview

You need an existing Angular application, or you can create a new one in order to use Scully.

## Software Requirements

- Angular versions: **v8.x.x** and **v9.x.x**
- Node.js: **10** or higher.
- Chromium: **IMPORTANT:** _Scully uses Chromium. Therefore, your Operating System, as well as its administrator rights must allow its installation and execution._

## Creating a New Angular Application

Install the Angular CLI globally with the following command:

```bash
npm install -g @angular/cli
```

Then, create a new application.

```bash
ng new my-scully-app
```

## Add Router Modules

Your Angular project needs at least one route set up. If you have questions about adding routes, see the [Angular routing docs](https://angular.io/start/start-routing).<br>
**IMPORTANT:** _Scully depends on the app's router module in order to generate the website's pages_

Add a router module with the following command:

```bash
ng generate module app-routing --flat --module=app
```

Find more info about the Angular CLI here [👉 angular.io/cli](https://angular.io/cli)

<div class="docs-prev_next">
  <a class="prev" href="/docs/learn/introduction">Introduction</a>
  <a class="next" href="/docs/learn/getting-started/installation">Installing Scully</a>
</div>
