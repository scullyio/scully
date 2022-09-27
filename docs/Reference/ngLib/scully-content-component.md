---
title: ScullyContentComponent
published: true
lang: en
position: 100
---

# `ScullyContentComponent`

<div class="docs-link_table">
  <a class="view-in-repo" href="https://github.com/scullyio/scully/blob/main/libs/ng-lib/src/lib/scully-content/scully-content.component.ts"></a>
</div>

## Overview

The [`scully-content`](https://github.com/scullyio/scully/blob/main/libs/ng-lib/src/lib/scully-content/scully-content.component.ts) component render the processed markdown result (static HTML).

## Usage

```html
<!-- This is where Scully will inject the static HTML -->
<scully-content></scully-content>
```

**NOTE:** The [`scully-content`](https://github.com/scullyio/scully/blob/main/libs/ng-lib/src/lib/scully-content/scully-content.component.ts) component does not work inside an `*ngIf` directive.


## Configuration

`localLinksOnly: boolean | string` - enable scoping of router link upgrade behavior to blog content instead of the whole document. Default is `false`

```html
<!-- Enable router link upgrade scoping to the blog content instead of whole page -->
<scully-content localLinksOnly></scully-content>
<!-- or -->
<scully-content [localLinksOnly]="true"></scully-content>
```
