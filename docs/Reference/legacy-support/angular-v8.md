---
title: Releasing an Angular v8.x.x Library
published: true
lang: en
position: 100
---

# Releasing an Angular v8.x.x Library

- Checkout the `angular-8` branch
- Remove version 9: `rm -fr node_modules`
- Install version 8: `npm i`
- Pull origin main branch: `git pull origin main`
- Fix any merge conflicts
- Make sure that `package.json` file has version 8
- Build the application: `ng build @scullyio/ng-lib-v8`
- Run tests
- Pay attention to `package.json` to make sure you keep the 8 version
- If all tests are ok, rebuild the library:
  - `ng build @scullyio/ng-lib-v8`
- Publish the application:
  - `cd ./dist/scullyio/ng-lib-v8`
- Commit and push changes.
