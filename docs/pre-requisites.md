---
title: Prerequisites
order: 100
lang: en
---

# Prerequisites

You need an existing Angular application, or you can create a new one in order to use Scully.

**NOTE:** Scully supports Angular versions: **v8.x.x** and **v9.x.x**

## Creating a New Angular Application

Install the Angular CLI globally with the following command:

```bash
npm install -g @angular/cli
```

Then, create a new application.

```bash
ng new my-scully-app
```

#### IMPORTANT:

_Scully depends on the application's router module in order to generate the website's pages_

Add a router module with the following command:

```bash
ng generate module app-routing --flat --module=app
```

Find more info about the Angular CLI here [👉 angular.io/cli](https://angular.io/cli)

#### IMPORTANT:

_Scully uses Chromium. Therefore, your Operating System, as well as its administrator rights must allow its installation and execution._

### Node version:

- Scully supports Node.js 10 or higher.
