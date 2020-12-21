---
title: time-to-read Plugin
published: true
lang: en
position: 100
---

# `⌚ scully-plugin-time-to-read 📖 Plugin

<div class="docs-link_table">
  <a class="repository" href="https://github.com/Jefiozie/nx-jefiozie/tree/master/libs/time-to-read"></a>
</div>


The `scully-plugin-time-to-read` is a `routeProcess` plugin for [Scully](http://scully.io/) that processes a specific route and will add the 'readingTime' property to the `RouteData. This property reflects the time that people need to read the content.

This plugin is designed (and test) to work with the blog schematic and the contentFolder plugin. 

## 📦 Installation

To install this plugin with `npm` run

```
$ npm install scully-plugin-time-to-read --save-dev
```

## Usage

Add the folowing configuration to your scully config: 

```typescript
// scully.config.ts
setPluginConfig(timeToRead, {
  path: '<THE PATH TO YOUR ROUTES>'
} as timeToReadOptions);

```
You can now use the `RouteData` and get the `readingTime` property in your component.
To get the routes you can use the `ScullyRoutesService` and pass the route with data to your component.

Below a example of how you can use the `readingTime` property in your component.

```html
      <mat-card-subtitle>
        Date: {{ route?.data?.date | date: 'dd-MM-yyyy' }} - {{ route?.data?.readingTime | number:'1.0-0'}} min read
      </mat-card-subtitle>
```