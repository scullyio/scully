# rm -fr node_modules/@scullyio/ng-lib/
# rm -fr dist/libs/ng-lib
# npx nx build ng-lib --prod
# npx ngcc -l info
rm -fr ./scully/runtime
npx ngc -p ./scully/tsconfig.universal.sample.json
node  ./scully/runtime/scully/universal/scully-universal.js --project universal-sample --RSD
