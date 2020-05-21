---
title: Angular v8.x.x Release
order: 1300
lang: en
---

# Steps for Releasing a v8.x.x library

1. Checkout the `angular-8` branch
2. Remove version 9: `rm -fr node_modules`
3. Install version 8: `npm i`
4. `git pull origin master`
5. Fix any merge conflicts
6. Make sure that `package.json` file has version 8
7. `ng build @scullyio/ng-lib-v8`
8. Build the application
9. Run tests
10. If all tests are ok, rebuild the library:
11. `ng build @scullyio/ng-lib-v8`
12. `cd ./dist/scullyio/ng-lib-v8`
13. `npm publish --access=public`
14. Commit and push changes
