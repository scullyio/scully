'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
const schematics_1 = require('@angular-devkit/schematics');
const tasks_1 = require('@angular-devkit/schematics/tasks');
const ts = require('@schematics/angular/third_party/github.com/Microsoft/TypeScript/lib/typescript');
const ast_utils_1 = require('@schematics/angular/utility/ast-utils');
const change_1 = require('@schematics/angular/utility/change');
const utils_1 = require('../utils/utils');
const package_config_1 = require('./package-config');
const version_names_1 = require('./version-names');
exports.default = options => {
  return schematics_1.chain([
    checkAngularVersion(),
    importScullyModule(options.project),
    addScullyModule(options.project),
    addPolyfill(options.project),
    runBlogSchematic(options),
    runScullySchematic(options),
    addDependencies(),
  ]);
};
const checkAngularVersion = () => (tree, context) => {
  const ngCoreVersionTag = package_config_1.getPackageVersionFromPackageJson(tree, '@angular/core');
  if (+ngCoreVersionTag.search(/(\^7|~7|\^6|~6|\^5|~5|\^4|~4)/g) === 0) {
    console.log('==============================================================');
    console.log('==============================================================');
    context.logger.error('Scully only work for version 8 or higher');
    context.logger.info('Please visit https://scully.io/ for more information');
    console.log('==============================================================');
    console.log('==============================================================');
    process.exit(0);
  }
};
const addDependencies = () => (tree, context) => {
  package_config_1.addPackageToPackageJson(tree, '@scullyio/scully', `${version_names_1.scullyVersion}`);
  const ngCoreVersionTag = package_config_1.getPackageVersionFromPackageJson(tree, '@angular/core');
  if (+ngCoreVersionTag.search(/(\^8|~8)/g) === 0) {
    context.logger.info('Install ng-lib for Angular v8');
    package_config_1.addPackageToPackageJson(
      tree,
      '@scullyio/ng-lib-v8',
      `${version_names_1.scullyComponentVersion}`
    );
  } else {
    context.logger.info('Install ng-lib for Angular v9');
    package_config_1.addPackageToPackageJson(
      tree,
      '@scullyio/ng-lib',
      `${version_names_1.scullyComponentVersion}`
    );
  }
  context.logger.info('✅️ Added dependency');
};
const importScullyModule = project => (tree, context) => {
  try {
    const mainFilePath = `./${utils_1.getSrc(tree, project)}/app/app.module.ts`;
    const recorder = tree.beginUpdate(mainFilePath);
    const mainFileSource = utils_1.getSourceFile(tree, mainFilePath);
    const importChange = ast_utils_1.insertImport(
      mainFileSource,
      mainFilePath,
      'ScullyLibModule',
      getDependencyFileName(tree)
    );
    if (importChange.toAdd) {
      recorder.insertLeft(importChange.pos, importChange.toAdd);
    }
    tree.commitUpdate(recorder);
    return tree;
  } catch (e) {
    context.logger.error('error into import SculyLib', e);
  }
};
const addScullyModule = project => (tree, context) => {
  const mainFilePath = `./${utils_1.getSrc(tree, project)}/app/app.module.ts`;
  const text = tree.read(mainFilePath);
  if (text === null) {
    throw new schematics_1.SchematicsException(`File ${mainFilePath} does not exist.`);
  }
  const sourceText = text.toString();
  const source = ts.createSourceFile(mainFilePath, sourceText, ts.ScriptTarget.Latest, true);
  const changes = ast_utils_1.addImportToModule(source, mainFilePath, 'ScullyLibModule', '@scullyio/ng-lib');
  const recorder = tree.beginUpdate(mainFilePath);
  for (const change of changes) {
    if (change instanceof change_1.InsertChange) {
      recorder.insertLeft(change.pos, change.toAdd);
    }
  }
  tree.commitUpdate(recorder);
  return tree;
};
const addPolyfill = project => (tree, context) => {
  let polyfills = tree.read(`${utils_1.getSrc(tree, project)}/polyfills.ts`).toString();
  if (polyfills.includes('SCULLY IMPORTS')) {
    context.logger.info('⚠️  Skipping polyfills.ts');
  } else {
    polyfills =
      polyfills +
      `\n/***************************************************************************************************
* SCULLY IMPORTS
*/
// tslint:disable-next-line: align
import 'zone.js/dist/task-tracking';`;
    tree.overwrite(`${utils_1.getSrc(tree, project)}/polyfills.ts`, polyfills);
  }
};
const runBlogSchematic = options => (tree, context) => {
  const nextRules = [];
  if (options.blog === true) {
    nextRules.push((host, ctx) => {
      ctx.addTask(new tasks_1.RunSchematicTask('blog', options), []);
    });
  }
  return schematics_1.chain(nextRules);
};
const runScullySchematic = options => (tree, context) => {
  const nextRules = [];
  nextRules.push((host, ctx) => {
    const installTaskId = ctx.addTask(new tasks_1.NodePackageInstallTask());
    ctx.addTask(new tasks_1.RunSchematicTask('run', options), [installTaskId]);
  });
  return schematics_1.chain(nextRules);
};
const getDependencyFileName = tree => {
  const defaultDependencyFileName = '@scullyio/ng-lib';
  const ngCoreVersionTag = package_config_1.getPackageVersionFromPackageJson(tree, '@angular/core');
  if (+ngCoreVersionTag.search(/(\^8|~8)/g) === 0) {
    return `${defaultDependencyFileName}-v8`;
  } else {
    return defaultDependencyFileName;
  }
};
//# sourceMappingURL=index.js.map
