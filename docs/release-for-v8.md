---
title: Angular v8.x.x Release
order: 1300
---

# Step for Releasing a v8.x.x library

1. checkout the `angular-8` branch
2. `rm -fr node_modules` remove version 9
3. `npm i` install v 8
4. `git pull origin master`
5. fix Merge conflicts
6. Pay attention to `package.json` to make sure you keep the 8 version
7. `ng build @scullyio/ng-lib-v8`
8. build app.
9. test
10. Pay attention to `package.json` to make sure you keep the 8 version
11. if all is ok, rebuild the lib:
12. `ng build @scullyio/ng-lib-v8`
13. `cd ./dist/scullyio/ng-lib-v8`
14. `npm publish --access=public`
15. commit and push changes.
