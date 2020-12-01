---
title: Critical CSS Plugin
published: true
lang: en
position: 100
---

# `critical-css` Plugin

## Overview

Scully uses this plugin to inline the critical above the fold CSS into the HTML, and then **lazy-load** the CSS that is needed for the rest of the page. This will remove CSS from being blocking. It will be ready before your SPA will boot.

## Install

```
npm install -D @scullyio/scully-plugin-critical-css
```
