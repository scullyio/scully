# # rm -fr node_modules/@scullyio/ng-lib/
# rm -fr dist/libs/ng-lib
# npx nx build ng-lib --prod
# # npx ngcc -l info
# # npx nx build universal-sample --prod
# rm -fr .scully/__cache
# rm ./scully.universal-sample.config.js
npx nx build scully
# npx nx build universal-sample --prod
rm -fr ./scully/runtime
npx ngc -p ./scully/tsconfig.universal.sample.json
node --trace-warnings --unhandled-rejections=strict ./scully/runtime/scully/universal/scully-universal.js --project universal-sample --RSD --scanRoutes
