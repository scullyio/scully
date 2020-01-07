import {chain, Rule, SchematicContext, Tree} from '@angular-devkit/schematics';
import {addPackageToPackageJson} from './package-config';
import {Schema} from './schema';
import {scullyVersion, scullyComponentVersion} from './version-names';
import {addModuleImportToRootModule, getProjectFromWorkspace, getWorkspace} from 'schematics-utilities';
import {NodePackageInstallTask, RunSchematicTask} from '@angular-devkit/schematics/tasks';

export default (options: Schema): Rule => {
  return chain([
    addDependencies(options),
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

const addHttpClientModule = (options: Schema) => (tree: Tree, context: SchematicContext) => {
  try {
    const workspace = getWorkspace(tree);
    const project = getProjectFromWorkspace(workspace);
    // import the httpClient we need for the plugins
    addModuleImportToRootModule(tree, 'HttpClientModule', '@angular/common/http', project);
    context.logger.info('✅️ Import HttpClientModule into root module');
  } catch (e) {}
};

const addPolyfill = (options: Schema) => (tree: Tree, context: SchematicContext) => {
  let polyfills = tree.read('./src/polyfills.ts').toString();
  if (polyfills.includes('SCULLY IMPORTS')) {
    context.logger.info('⚠️  Skipping polyfills.ts');
  } else {
    polyfills =
      polyfills +
      `\n/***************************************************************************************************
\n* SCULLY IMPORTS
\n*/
\n// tslint:disable-next-line: align \nimport 'zone.js/dist/task-tracking';`;
    tree.overwrite('./src/polyfills.ts', polyfills);
  }
};

const injectIdleService = (options: Schema) => (tree: Tree, context: SchematicContext) => {
  try {
    const appComponentPath = './src/app/app.component.ts';
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
