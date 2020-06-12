---
title: Angular v8.x.x Release
order: 1300
lang: en
---

# Step for Releasing a v8.x.x library

1. Checkout the `angular-8` branch
2. Remove version 9: `rm -fr node_modules`
3. Install version 8: `npm i`
4. Pull origin main branch: `git pull origin main`
5. Fix any merge conflicts
6. Make sure that `package.json` file has version 8
7. Build the application: `ng build @scullyio/ng-lib-v8`
8. Run tests
9. Pay attention to `package.json` to make sure you keep the 8 version
10. If all tests are ok, rebuild the library:
    - `ng build @scullyio/ng-lib-v8`
11. Publish the application:
    - `cd ./dist/scullyio/ng-lib-v8`
    - `npm publish --access=public`
12. Commit and push changes.
