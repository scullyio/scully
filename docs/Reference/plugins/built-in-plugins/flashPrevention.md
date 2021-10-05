---
title: flash prevention Plugin
published: true
lang: en
position: 100
---

# `flash-prevention` Plugin

## Overview

The `scully-plugin-flash-prevention` is a postRenderer that helps you hide any flashes that your app may be experiencing once you add Scully to your project.

After adding Scully, your app will appear instantly because the pre-rendered HTML and CSS is immediately available. After appearing instantly, the JavaScript and CSS files will download and then your Angular app will bootstrap (init). When it bootstraps, the pre-rendered version may disappear for a moment, and then once the app is ready, the view will re-appear. This disappearing-then-appearing is very normal for apps that are pre-rendered on a server. This plugin is to prevent that.

This plugin shows the pre-rendered copy of your app until your app is fully render and the flash is over. It then shows your app and deletes the copy.

## How it works

Before this plugin, you app would pre-render and then save to file, like this:

```html
<app-root _nghost-abc="" ng-version="9.0.1" class="my-class">
  // The entire content of your app here
</app-root>
```

After this plugin, you will see the following in your pre-rendered template:

```html
<app-root class="my-class"></app-root>
<app-root-scully _nghost-abc="" ng-version="9.0.1" class="my-class">
  // The entire content of your app here
</app-root-scully>
```

This app-root-scully will be the pre-rendered copy of your app. Prior to your app being rendered fully, app-root will be hidden and app-root-scully will be displayed.

Once your app has fully bootstrapped, app-root-scully will be hidden and then 100ms later removed from the DOM. The mechanism that shows and hides these two is CSS. There is some CSS added during the Scully build that looks like the following:

```css
body:not(.loaded) app-root {
  display: none;
}
body.loaded app-root-scully {
  display: inherit;
}
```

Once the app has been fully loaded, the `loaded` class is added to the `<body>` tag.

And that's how it all works!!!

# Getting Started

## Install

```
npm install -D @scullyio/scully-plugin-flash-prevention
```

## Usage

Add the postRenderer to your scully.config:

```typescript
// Add this line to your imports
import  { getFlashPreventionPlugin }  from '@scullyio/scully-plugin-flash-prevention';

// Add the following to your `scully.config.postRenderers`
exports.config = {
  ...
  postRenderers : [getFlashPreventionPlugin({appRootSelector: 'custom-app-root'})],
  ...
}
```

You only need to pass the `{appRootSelector: 'custom-app-root'}` if your app has a selector other than `app-root`. It is defaulted to `app-root`.

Update `app.module` to include `alwaysMonitor` in the `ScullyLibModule.forRoot` call.

```typescript
ScullyLibModule.forRoot({
  useTransferState: true,
  alwaysMonitor: true,  <-- Add this line to your `app.module.ts`
});
```

Apply any styles from `app-root` to `app-root-scully` as well. Any styles that are in your `app.component.(css|scss|less)` need to be applied to the copy of your app that was made. This means that you need to possibly move any styles that apply to the `app-root` specifically, and put them in a location where you can also make those styles apply to `app-root-scully` as well. See here:

```css
// BEFORE
app-root {
  ... some styles;
}

// AFTER
app-root,
app-root-scully {
  ... some styles;
}
```
