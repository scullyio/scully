---
title: fileHandler Plugin Type
published: true
lang: en
navlist_position: 3
navlist_textFormat_none: true
---

# `fileHandler` Plugin Type <!-- omit in toc -->

<div class="docs-toc"></div>

- [Overview](#overview)
- [Usage](#usage)
- [Interface](#interface)
- [Making A `fileHandler` Plugin](#making-a-filehandler-plugin)
- [Examples](#examples)

## Overview

A **`fileHandler` plugin** is used by the `contentFolder` plugin during the `render` process. The `contentFolder`
plugin processes the folders for markdown files or other file type the folders may contain. The `render` processes any existing `fileHandler` plugin for any file extension type.

## Usage

Scully comes with two built-in `fileHandler` plugins. The [markdown plugin](/docs/learn/plugins/built-in-plugins/md) and
the [asciidoc plugin](/docs/learn/plugins/built-in-plugins/adoc). These plugins handle and process the
content of those file types as they are read from the file system.

If you want to support `.docx` files, or `.csv` files, or any other file type; a file handler for those file types need to be added.
The `contentFolder` plugin takes care of reading those files from the filesystem. However, if the files need to be transformed after the `contentFolder` plugin reads them;
A `fileHandler` plugin is required.

## Interface

A **`fileHandler` plugin** is a function that returns a `Promise<string>`. The interface looks like follows:

```typescript
function exampleFileHandlerPlugin(rawContent: string): Promise<string> {
  // Must return a promise
}
```

## Making A `fileHandler` Plugin

The following **`fileHandler` plugin** example handles `.cvs` files by wrapping them into a code block. You could write a much more elaborate plugin that creates a table or a grid for the data.

```typescript
function csvFilePlugin(raw) {
  return Promise.resolve(`<pre><code>${code}</code></pre>`);
}
// DO NOT FORGET TO REGISTER THE PLUGIN
registerPlugin('fileHandler', 'csv', { handler: csvFilePlugin });
module.exports.csvFilePlugin = csvFilePlugin;
```

## Examples

Here are some links to built-in **render plugins** in Scully:

- [asciidoc plugin](/docs/learn/plugins/built-in-plugins/adoc)
- [markdown plugin](/docs/learn/plugins/built-in-plugins/md)
