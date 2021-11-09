# # rm -fr node_modules/@scullyio/ng-lib/
# rm -fr dist/libs/ng-lib
# npx nx build ng-lib --prod
# # npx ngcc -l info
# # npx nx build sps-sample --prod
# rm -fr .scully/__cache
npx nx build scully
node ./dist/libs/scully/src/scully.js --project sps-sample --RSD --scanRoutes
