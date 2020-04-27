# ScullyPluginFlashPrevention

The `scully-plugin-flash-prevention` is a postRenderer that helps you hide any flashes that your
app may be experiencing once you add Scully to your project.

After adding Scully, your app will appear instantly because the pre-rendered HTML and CSS is
immediately available. After appearing instantly, the JavaScript and CSS files will download and
then your Angular app will bootstrap (init). When it bootstraps, the pre-rendered version may
disappear for a moment, and then once the app is ready, the view will re-appear. This
disappearing-then-appearing is very normal for apps that are pre-rendered on a server. This
project is to prevent that.

This project shows the pre-rendered copy of your app until your app is fully render and the
flash is over. It then shows your app and deletes the copy.

### How it works

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

This `app-root-scully` will be the pre-rendered copy of your app. Prior to your app being
rendered fully, `app-root` will be hidden and `app-root-scully` will be displayed. Once your
app has fully bootstrapped, `app-root-scully` will be hidden and then 100ms later removed
from the DOM. The mechanism that shows and hides these two is CSS. There is some CSS added
during the Scully build that looks like the following:

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

## Getting Started

**1 -** Install the package: `npm install -D scully-plugin-flash-prevention`

**2 -** Add the postRenderer to your `scully.config`:

```javascript
// Add this line to your imports
const { getFlashPreventionPlugin } = require('scully-plugin-flash-prevention');

// Add the following to your `scully.config.defaultPostRenderers`
exports.config = {
  ...
  defaultPostRenderers : [getFlashPreventionPlugin({appRootSelector: 'custom-app-root'})],
  ...
}
```

You only need to pass the `{appRootSelector: 'custom-app-root'}` if your app has a selector other
than `app-root`. It is defaulted to `app-root`.

**3 -** Update `app.module` to include `alwaysMonitor` in the `ScullyLibModule.forRoot` call.

```typescript
ScullyLibModule.forRoot({
  useTransferState: true,
  alwaysMonitor: true,  <-- Add this line to your `app.module.ts`
});
```

**4 -** Apply any styles from `app-root` to `app-root-scully` as well. Any styles that are in your
`app.component.(css|scss|less)` need to be applied to the copy of your app that was made. This means
that you need to possibly move any styles that apply to the `app-root` specifically, and put them
in a location where you can also make those styles apply to `app-root-scully` as well. See here:

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

That's all it takes to get set up.

## Options

This plugin has a series of options you can pass it when you call `getFlashPreventionPlugin(<OPTIONS HERE>)`.
Here is a description of those options.

- [ScullyPluginFlashPrevention](#scullypluginflashprevention)
    - [How it works](#how-it-works)
  - [Getting Started](#getting-started)
  - [Options](#options)
    - [appRootSelector](#approotselector)
    - [appLoadedClass](#apploadedclass)
    - [mockAttributesBlacklist](#mockattributesblacklist)
    - [appRootAttributesBlacklist](#approotattributesblacklist)

### appRootSelector

If you `AppComponent` has a selector that isn't `app-root`, you can use this option to pass your app's custom
`app-root` selector. If your `AppComponent` use the selector `scully-app`, you would do pass that as an arg to
the `getFlashPreventionPlugin` function:

```javascript
getFlashPreventionPlugin({appRootSelector: 'scully-app'});
```

### appLoadedClass

Once you app loads, this plugin will add the class `loaded` to the body of your app. If you need to use a different
class (besides the default `loaded`) you can pass that class name in here. If you want to use the class `fploaded`
do the following:

```javascript
getFlashPreventionPlugin({appLoadedClass: 'fploaded'});
```

### mockAttributesBlacklist

This plugin makes a copy of your `app-root` and calls it `app-root-scully`. It leaves all of the original
attributes from `app-root` on the copy. If your `app-root` has an attribute `foo` with the value of `"bar"`
then your mock app root (`app-root-scully`) will also get that attribute.

If you want to make sure that the mock element doesn't get certain attributes, you can use this blacklist
to remove certain attributes from the mock element. Example: if the original `app-root` had `foo="bar"` as an
attribute, and you want to exclude that on the mock copy of it, you would do the following:

```javascript
getFlashPreventionPlugin({mockAttributesBlacklist: ['foo']});
```

This would remove the `foo` attribute from `app-root-scully`. This looks to see if the attr `startsWith` the
blacklisted item you passed. This means if you pass `foo`, and the attribute is `foobar="baz"` it will remove
the `foobar` attribute as it starts with `foo`.

### appRootAttributesBlacklist

This plugin can remove attributes from the pre-rendered version of your `app-root`. If your `app-root` had
the attribute `foo="bar"` you can use this blacklist to remove attributes from the source `app-root`.

```javascript
getFlashPreventionPlugin({appRootAttributesBlacklist: ['foo']});
```

This would remove the `foo` attribute from `app-root`. This looks to see if the attr `startsWith` the
blacklisted item you passed. This means if you pass `foo`, and the attribute is `foobar="baz"` it will remove
the `foobar` attribute as it starts with `foo`.
