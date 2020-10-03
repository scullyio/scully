---
title: Utility methods
published: true
lang: en
position: 100
---

# Utility methods

<div class="docs-link_table">
  <a class="view-in-repo" href="https://github.com/scullyio/scully/tree/main/libs/ng-lib/src/lib/utils"></a>
</div>

## Overview

These methods provide useful information about Scully processes.

#### `isScullyRunning():` _`boolean`_

This method returns `true` or `false` if the Scully build is currently running. You can use this for example to disable parts of your application that require user interaction

#### `isScullyGenerated():` _`boolean`_

This method returns `true` if the Scully build has run. This means your application is booted from a Scully generated `index.html`.
