import {chain, Rule, SchematicContext, SchematicsException, Tree} from '@angular-devkit/schematics';
import {addPackageToPackageJson, getPackageVersionFromPackageJson} from './package-config';
import {Schema} from './schema';
import {scullyVersion, scullyComponentVersion} from './version-names';
import {NodePackageInstallTask, RunSchematicTask} from '@angular-devkit/schematics/tasks';
import {getSourceFile, getSrc} from '../utils/utils';
import {addImportToModule, insertImport} from '@schematics/angular/utility/ast-utils';
import {InsertChange} from '@schematics/angular/utility/change';
import * as ts from '@schematics/angular/third_party/github.com/Microsoft/TypeScript/lib/typescript';

export default (options: Schema): Rule => {
  return chain([
    addDependencies(),
    // importHttpClientModule(options.project),
    // addHttpClientModule(options.project),
    importScullyModule(options.project),
    addScullyModule(options.project),
    addPolyfill(options.project),
    // injectIdleService(options.project),
    runBlogSchematic(options),
    runScullySchematic(options),
  ]);
};
const addDependencies = () => (tree: Tree, context: SchematicContext) => {
  addPackageToPackageJson(tree, '@scullyio/scully', `${scullyVersion}`);
  const ngCoreVersionTag = getPackageVersionFromPackageJson(tree, '@angular/core');
  if (+ngCoreVersionTag.search(/(\^8|~8)/g) === 0) {
    context.logger.info('Install ng-lib for Angular v8');
    addPackageToPackageJson(tree, '@scullyio/ng-lib-v8', `${scullyComponentVersion}`);
  } else {
    context.logger.info('Install ng-lib for Angular v9');
    addPackageToPackageJson(tree, '@scullyio/ng-lib', `${scullyComponentVersion}`);
  }
  context.logger.info('✅️ Added dependency');
};
/*
const importHttpClientModule = (project: string) => (tree: Tree, context: SchematicContext) => {
  try {
    const mainFilePath = `./${getSrc(tree, project)}/app/app.module.ts`;
    const recorder = tree.beginUpdate(mainFilePath);

    const mainFileSource = getSourceFile(tree, mainFilePath);
    const importChange = insertImport(
      mainFileSource,
      mainFilePath,
      'HttpClientModule',
      '@angular/common/http'
    ) as InsertChange;
    if (importChange.toAdd) {
      recorder.insertLeft(importChange.pos, importChange.toAdd);
    }
    tree.commitUpdate(recorder);
    return tree;
  } catch (e) {
    context.logger.error('error into import httpclient', e);
  }
};

const addHttpClientModule = (project: string) => (tree: Tree, context: SchematicContext) => {
  const mainFilePath = `./${getSrc(tree, project)}/app/app.module.ts`;
  const text = tree.read(mainFilePath);
  if (text === null) {
    throw new SchematicsException(`File ${mainFilePath} does not exist.`);
  }
  const sourceText = text.toString();
  const source = ts.createSourceFile(mainFilePath, sourceText, ts.ScriptTarget.Latest, true);
  const changes = addImportToModule(source, mainFilePath, 'HttpClientModule', '@angular/common/http');
  const recorder = tree.beginUpdate(mainFilePath);
  for (const change of changes) {
    if (change instanceof InsertChange) {
      recorder.insertLeft(change.pos, change.toAdd);
    }
  }
  tree.commitUpdate(recorder);
  return tree;
};
*/
const importScullyModule = (project: string) => (tree: Tree, context: SchematicContext) => {
  try {
    const mainFilePath = `./${getSrc(tree, project)}/app/app.module.ts`;
    const recorder = tree.beginUpdate(mainFilePath);

    const mainFileSource = getSourceFile(tree, mainFilePath);
    const importChange = insertImport(
      mainFileSource,
      mainFilePath,
      'ScullyLibModule',
      '@scullyio/ng-lib'
    ) as InsertChange;
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
  const mainFilePath = `./${getSrc(tree, project)}/app/app.module.ts`;
  const text = tree.read(mainFilePath);
  if (text === null) {
    throw new SchematicsException(`File ${mainFilePath} does not exist.`);
  }
  const sourceText = text.toString();
  const source = ts.createSourceFile(mainFilePath, sourceText, ts.ScriptTarget.Latest, true);
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
  let polyfills = tree.read(`${getSrc(tree, project)}/polyfills.ts`).toString();
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
    tree.overwrite(`${getSrc(tree, project)}/polyfills.ts`, polyfills);
  }
};

// const injectIdleService = (project: string) => (tree: Tree, context: SchematicContext) => {
//   try {
//     const appComponentPath = `${getSrc(tree, project)}/app/app.component.ts`;
//     const appComponent = tree.read(appComponentPath).toString();
//     if (appComponent.includes('IdleMonitorService')) {
//       context.logger.info(`⚠️️  Skipping ${appComponentPath}`);
//     } else {
//       const ngCoreVersionTag = getPackageVersionFromPackageJson(tree, '@angular/core');
//       let v8 = '';
//       if (+ngCoreVersionTag.search(/(\^8|~8)/g) === 0) {
//         v8 = '-v8';
//       }
//       const idleImport = `import {IdleMonitorService} from '@scullyio/ng-lib${v8}';`;
//       // add
//       const idImport = `${idleImport}\n${appComponent}`;
//       const idle = 'private idle: IdleMonitorService';
//       let output = '';
//       // check if exist
//       if (idImport.search(/constructor/) === -1) {
//         // add if no exist the constructor
//         const add = ` \n constructor (${idle}) { } \n`;
//         const position =
//           idImport.search(/export class AppComponent {/g) + 'export class AppComponent {'.length;
//         output = [idImport.slice(0, position), add, idImport.slice(position)].join('');
//       } else {
//         const coma = haveMoreInjects(idImport);
//         const add = `${idle}${coma}`;
//         if (idImport.search(/constructor \(/) === -1) {
//           const position = idImport.search(/constructor\(/g) + 'constructor('.length;
//           output = [idImport.slice(0, position), add, idImport.slice(position)].join('');
//         } else {
//           const position = idImport.search(/constructor \(/g) + 'constructor ('.length;
//           output = [idImport.slice(0, position), add, idImport.slice(position)].join('');
//         }
//       }
//       tree.overwrite(appComponentPath, output);
//     }

//     function haveMoreInjects(fullComponent: string) {
//       const match = '(([^()]*(private|public)[^()]*))';
//       if (fullComponent.search(match) !== -1) {
//         return ',';
//       }
//       return '';
//     }
//   } catch (e) {
//     context.logger.error('error in idle service');
//   }
// };

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
