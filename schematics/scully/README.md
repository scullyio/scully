# Getting Started With Schematics

This repository is Scully Schematics for angular!


### Testing

To test locally (dev in `safemode`), install `@angular-devkit/schematics-cli` globally and use the `schematics` command line tool. That tool acts the same as the `generate` command of the Angular CLI, but also has a debug mode.

```
npm run copy:generate
cd schematics/scully
npm run schematics
```

### Testing in a project devMode

```
npm run copy:generate
cd schematics/scylly
npm run build
npm pack
cp -r scullyio-init-0.0.*.tgz {{project_folder}}
cd {{project_folder}}
npm i --save scullyio-init-0.0.*.tgz
ng g .\node_modules\@scullyio\init\src\collection.json:ng-add
ng serve --prod
npm run scully:generate
```

#### Testing in a project with npm 
For this test, first you need publish the schematics (see below), after this create an angular project.
You can copy one of the seed project for test more fast.
```
ng add @scullyio/init
npm run scully:generate
```

### Unit Testing

`npm run test` will run the unit tests, using Jasmine as a runner and test framework.

### Publishing

To publish, simply do:

```bash
npm run copy:generate
cd schematics/scully
npm publish:{path | minor | major}
```
