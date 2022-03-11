import { normalize } from '@angular-devkit/core';
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
    addGitIgnoreEntries(options),
    runBlogSchematic(options),
    runScullySchematic(options),
    addDependencies(options),
  ]);
};
let angularJSON = 'angular.json';
const checkAngularVersion = () => (tree: Tree, context: SchematicContext) => {
  const ngCoreVersionTag = getPackageVersionFromPackageJson(tree, '@angular/core');
  const majorVersion = Number(
    ngCoreVersionTag
      .split('.')[0]
      .split('')
      .reduce((v, t) => (isNaN(Number(t)) ? v : v + t), '')
  );
  if (majorVersion < 12) {
    context.logger.error('You are using an old version of Angular. Please update to Angular v12 or higher first.');
    process.exit(0);
  }
};
const addDependencies = (options: Schema) => (tree: Tree, context: SchematicContext) => {
  let _scullyComponentVersion = scullyComponentVersion;
  let _scullyCLI = scullyVersion;
  if (options.local || false) {
    _scullyComponentVersion = 'file:local_modules/@scullyio/ng-lib';
    _scullyCLI = 'file:local_modules/@scullyio/scully';
  }
  addPackageToPackageJson(tree, '@scullyio/scully', `${_scullyCLI}`);
  context.logger.info('Installing ng-lib');
  addPackageToPackageJson(tree, '@scullyio/ng-lib', `${_scullyComponentVersion}`);
  switch (options.renderer) {
    case 'puppeteer':
      context.logger.info('Installing puppeteer plugin');
      addPackageToPackageJson(tree, '@scullyio/scully-plugin-puppeteer', `${_scullyComponentVersion}`);
      break;
    case 'playwright':
      context.logger.info('Installing playwright plugin');
      // just using a hardcoded version as we are in beta
      addPackageToPackageJson(tree, '@scullyio/scully-plugin-playwright', `${_scullyComponentVersion}`);
      break;
    case 'sps':
      context.logger.info('Installing Scully Platform Server plugin');
      // just using a hardcoded version as we are in beta
      addPackageToPackageJson(tree, '@angular/platform-server', '^12');
      addPackageToPackageJson(tree, '@scullyio/platform-server', `${_scullyComponentVersion}`);
      break;
    default:
      break;
  }
};
const importScullyModule = (project: string) => (tree: Tree, context: SchematicContext) => {
  if (!project) {
    throw new SchematicsException('Please provide a project name');
  }
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
    context.logger.error(e);
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
    context.logger.info('polyfills.ts is already upto date');
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

const addGitIgnoreEntries = (options: Schema) => (tree: Tree, context: SchematicContext) => {
  const gitIgnorePath = normalize('.gitignore');
  if (tree.exists(gitIgnorePath)) {
    const buffer = tree.read(gitIgnorePath);
    const origContents = buffer.toString('utf-8');
    const updatedContents = [
      'scully.log',
      'scullyStats.json',
      '.scully',
      '/scully/**/*.js',
      '/scully/**/*.js.map',
      '/scully/**/*.d.ts',
    ].reduce((contents, entry) => {
      if (contents.indexOf(entry) === -1) {
        contents = `${contents}\n${entry}`;
      }
      return contents;
    }, origContents);
    tree.overwrite(gitIgnorePath, updatedContents);
  }
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
