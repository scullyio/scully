---
title: routeDiscoveryDone Plugin Type
published: true
lang: en
position: 100
---

# `routeDiscoveryDone` Plugin Type

## Overview

This type of plugin is called automatically after all routes have been collected, and all router plugins have finished.

It receives a shallow copy of the `handledRoute` array, and returns `void`.
