cd /home/sander/Documents/werk/scully
npx nx build scully-schematics
npx nx build ng-lib
cd /home/sander/Documents/werk/scully/dist/libs/scully-schematics
npm pack
cd /home/sander/Documents/werk/scully/dist/libs/ng-lib
npm pack
cd /home/sander/Documents/werk/scully
find $PWD/.  -name "*.tgz"


# npx create-nx-workspace nxScullyAdd --preset empty --style css --nx-cloud false
# cd nx-scully-add
# npm i @nrwl/angular
# npx nx generate @nrwl/angular:application --name=testApp --e2eTestRunner=none --inlineStyle --inlineTemplate --routing --style css
# npx nx generate @schematics/angular:module --name=about --project=test-app --module=app --route=about
# npx nx generate @schematics/angular:module --name=home --project=test-app --module=app --route=home
# git add . && git commit -m "before Scully is added"
# npm i @scullyio/init
# npx nx g @scullyio/init:ng-add --project=test-app
