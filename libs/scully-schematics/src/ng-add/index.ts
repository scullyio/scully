import { chain, Rule, SchematicContext, SchematicsException, Tree } from '@angular-devkit/schematics';
import { NodePackageInstallTask, RunSchematicTask } from '@angular-devkit/schematics/tasks';
import { createSourceFile, ScriptTarget } from '@schematics/angular/third_party/github.com/Microsoft/TypeScript/lib/typescript';
import { addImportToModule, insertImport } from '@schematics/angular/utility/ast-utils';
import { InsertChange } from '@schematics/angular/utility/change';

import { getSourceFile, getSrc } from '../utils/utils';
import { addPackageToPackageJson, getPackageVersionFromPackageJson } from './package-config';
import { Schema } from './schema';
import { scullyComponentVersion, scullyVersion } from './version-names';

export default (options: Schema): Rule => {
  return chain([
    checkAngularVersion(),
    importScullyModule(options.project),
    addScullyModule(options.project),
    addPolyfill(options.project),
    runBlogSchematic(options),
    runScullySchematic(options),
    addDependencies(),
  ]);
};
let angularJSON = 'angular.json';
const checkAngularVersion = () => (tree: Tree, context: SchematicContext) => {
  const ngCoreVersionTag = getPackageVersionFromPackageJson(tree, '@angular/core');
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
const addDependencies = () => (tree: Tree, context: SchematicContext) => {
  addPackageToPackageJson(tree, '@scullyio/scully', `${scullyVersion}`);
  const ngCoreVersionTag = getPackageVersionFromPackageJson(tree, '@angular/core');
  if (+ngCoreVersionTag.search(/(\^8|~8)/g) === 0) {
    context.logger.info('Install ng-lib for Angular v8');
    addPackageToPackageJson(tree, '@scullyio/ng-lib-v8', `${scullyComponentVersion}`);
  } else {
    context.logger.info('Install ng-lib for Angular v9 - v10');
    addPackageToPackageJson(tree, '@scullyio/ng-lib', `${scullyComponentVersion}`);
  }
  context.logger.info('✅️ Added dependency');
};
const importScullyModule = (project: string) => (tree: Tree, context: SchematicContext) => {
  try {
    let mainFilePath;
    try {
      mainFilePath = `./${getSrc(tree, project)}/app/app.module.ts`;
    } catch (e) {
      angularJSON = 'workspace.json';
      mainFilePath = `./${getSrc(tree, project, angularJSON)}/app/app.module.ts`;
    }
    const recorder = tree.beginUpdate(mainFilePath);
    const mainFileSource = getSourceFile(tree, mainFilePath);
    const importChange = insertImport(mainFileSource, mainFilePath, 'ScullyLibModule', getDependencyFileName(tree)) as InsertChange;
    if (importChange.toAdd) {
      recorder.insertLeft(importChange.pos, importChange.toAdd);
    }
    tree.commitUpdate(recorder);
    return tree;
  } catch (e) {
    context.logger.error('error into import SculyLib', e);
  }
};
const addScullyModule = (project: string) => (tree: Tree, context: SchematicContext) => {
  const mainFilePath = `./${getSrc(tree, project, angularJSON)}/app/app.module.ts`;
  const text = tree.read(mainFilePath);
  if (text === null) {
    throw new SchematicsException(`File ${mainFilePath} does not exist.`);
  }
  const sourceText = text.toString();
  const source = createSourceFile(mainFilePath, sourceText, ScriptTarget.Latest, true);
  const changes = addImportToModule(source, mainFilePath, 'ScullyLibModule', '@scullyio/ng-lib');
  const recorder = tree.beginUpdate(mainFilePath);
  for (const change of changes) {
    if (change instanceof InsertChange) {
      recorder.insertLeft(change.pos, change.toAdd);
    }
  }
  tree.commitUpdate(recorder);
  return tree;
};
const addPolyfill = (project: string) => (tree: Tree, context: SchematicContext) => {
  let polyfills = tree.read(`${getSrc(tree, project, angularJSON)}/polyfills.ts`).toString();
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
    tree.overwrite(`${getSrc(tree, project, angularJSON)}/polyfills.ts`, polyfills);
  }
};

const runBlogSchematic = (options: Schema) => (tree: Tree, context: SchematicContext) => {
  const nextRules: Rule[] = [];
  if (options.blog === true) {
    nextRules.push((host: Tree, ctx: SchematicContext) => {
      ctx.addTask(new RunSchematicTask('blog', options), []);
    });
  }
  return chain(nextRules);
};
const runScullySchematic = (options: Schema) => (tree: Tree, context: SchematicContext) => {
  const nextRules: Rule[] = [];
  nextRules.push((host: Tree, ctx: SchematicContext) => {
    const installTaskId = ctx.addTask(new NodePackageInstallTask());
    ctx.addTask(new RunSchematicTask('run', options), [installTaskId]);
  });
  return chain(nextRules);
};

const getDependencyFileName = (tree: Tree) => {
  const defaultDependencyFileName = '@scullyio/ng-lib';
  const ngCoreVersionTag = getPackageVersionFromPackageJson(tree, '@angular/core');
  if (+ngCoreVersionTag.search(/(\^8|~8)/g) === 0) {
    return `${defaultDependencyFileName}-v8`;
  } else {
    return defaultDependencyFileName;
  }
};
