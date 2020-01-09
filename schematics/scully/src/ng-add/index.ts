import {chain, Rule, SchematicContext, SchematicsException, Tree} from '@angular-devkit/schematics';
import {addPackageToPackageJson} from './package-config';
import {Schema} from './schema';
import {scullyVersion, scullyComponentVersion} from './version-names';
import {NodePackageInstallTask, RunSchematicTask} from '@angular-devkit/schematics/tasks';
import {getSourceFile, getSrc} from '../utils/utils';
import {addImportToModule, insertImport} from '@schematics/angular/utility/ast-utils';
import {InsertChange} from '@schematics/angular/utility/change';
import * as ts from '@schematics/angular/third_party/github.com/Microsoft/TypeScript/lib/typescript';

export default (options: Schema): Rule => {
  return chain([
    addDependencies(options),
    importHttpClientModule(options),
    addHttpClientModule(options),
    addPolyfill(options),
    injectIdleService(options),
    runScullySchmeatic(options),
  ]);
};

const addDependencies = (options: Schema) => (tree: Tree, context: SchematicContext) => {
  addPackageToPackageJson(tree, '@scullyio/scully', `${scullyVersion}`);
  addPackageToPackageJson(tree, '@scullyio/ng-lib', `${scullyComponentVersion}`);
  context.logger.info('✅️ Added dependency');
};

const importHttpClientModule = (options: Schema) => (tree: Tree, context: SchematicContext) => {
  try {
    const mainFilePath = `./${getSrc(tree)}/app/app.module.ts`;
    const recorder = tree.beginUpdate(mainFilePath);

    const mainFileSource = getSourceFile(tree, mainFilePath);
    const importChange = insertImport(mainFileSource, mainFilePath, 'HttpClientModule', '@angular/common/http') as InsertChange;
    if (importChange.toAdd) {
      recorder.insertLeft(importChange.pos, importChange.toAdd);
    }
    tree.commitUpdate(recorder);
    return tree;

  } catch (e) {
    console.log('error into import httpclient', e);
  }
};

const addHttpClientModule = (options: Schema) => (tree: Tree, context: SchematicContext) => {
  const mainFilePath = `./${getSrc(tree)}/app/app.module.ts`;
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

const addPolyfill = (options: Schema) => (tree: Tree, context: SchematicContext) => {
  let polyfills = tree.read(`${getSrc(tree)}/polyfills.ts`).toString();
  if (polyfills.includes('SCULLY IMPORTS')) {
    context.logger.info('⚠️  Skipping polyfills.ts');
  } else {
    polyfills =
      polyfills +
      `\n/***************************************************************************************************
\n* SCULLY IMPORTS
\n*/
\n// tslint:disable-next-line: align \nimport 'zone.js/dist/task-tracking';`;
    tree.overwrite(`${getSrc(tree)}/polyfills.ts`, polyfills);
  }
};

const injectIdleService = (options: Schema) => (tree: Tree, context: SchematicContext) => {
  try {
    const appComponentPath = `${getSrc(tree)}/app/app.component.ts`;
    const appComponent = tree.read(appComponentPath).toString();
    if (appComponent.includes('IdleMonitorService')) {
      context.logger.info(`⚠️️  Skipping ${appComponentPath}`);
    } else {
      const idleImport = `import {IdleMonitorService} from '@scullyio/ng-lib';`;
      // add
      const idImport = `${idleImport} \n ${appComponent}`;
      const idle = 'private idle: IdleMonitorService';
      let output = '';
      // check if exist
      if (idImport.search(/constructor/) === -1) {
        // add if no exist the constructor
        const add = ` \n constructor (${idle}) { } \n`;
        const position =
          idImport.search(/export class AppComponent {/g) + 'export class AppComponent {'.length;
        output = [idImport.slice(0, position), add, idImport.slice(position)].join('');
      } else {
        const coma = haveMoreInjects(idImport);
        const add = `${idle}${coma}`;
        if (idImport.search(/constructor \(/) === -1) {
          const position = idImport.search(/constructor\(/g) + 'constructor('.length;
          output = [idImport.slice(0, position), add, idImport.slice(position)].join('');
        } else {
          const position = idImport.search(/constructor \(/g) + 'constructor ('.length;
          output = [idImport.slice(0, position), add, idImport.slice(position)].join('');
        }
      }
      tree.overwrite(appComponentPath, output);
    }

    function haveMoreInjects(fullComponent: string) {
      const match = '(([^()]*(private|public)[^()]*))';
      if (fullComponent.search(match) !== -1) {
        return ',';
      }
      return '';
    }
  } catch (e) {
    console.log('error in idle service');
  }
};

const runScullySchmeatic = (options: Schema) => (tree: Tree, context: SchematicContext) => {
  const nextRules: Rule[] = [];
  if (options.blog === true) {
    // @ts-ignore
    nextRules.push(context.addTask(new RunSchematicTask('blog', options), []));
  }
  // tslint:disable-next-line:no-shadowed-variable
  nextRules.push((tree: Tree, context: SchematicContext) => {
    const installTaskId = context.addTask(new NodePackageInstallTask());
    context.addTask(new RunSchematicTask('scully', options), [installTaskId]);
  });

  chain(nextRules);
};
