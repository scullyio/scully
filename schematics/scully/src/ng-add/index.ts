import {
  chain, Rule, SchematicContext, Tree,
} from '@angular-devkit/schematics';
import {addPackageToPackageJson} from './package-config';
import {Schema} from './schema';
import {scullyVersion, scullyComponentVersion} from './version-names';
import {addModuleImportToRootModule, getProjectFromWorkspace, getWorkspace} from 'schematics-utilities';
import {NodePackageInstallTask, RunSchematicTask} from '@angular-devkit/schematics/tasks';

export default function(options: Schema): Rule {
  return (host: Tree, context: SchematicContext) => {
    addPackageToPackageJson(host, '@scullyio/scully', `${scullyVersion}`);
    addPackageToPackageJson(host, '@scullyio/ng-lib', `${scullyComponentVersion}`);
    context.logger.info('✅️ Added dependency');
// @ts-ignore
    try {
      // @ts-ignore
      const workspace = getWorkspace(host);
      // @ts-ignore
      const project = getProjectFromWorkspace(workspace, options.project);
      // import the httpClient we need for the plugins
      addModuleImportToRootModule(host, 'HttpClientModule', '@angular/common/http', project);
      context.logger.info('✅️ Import HttpClientModule into root module');
    } catch (e) { }

    // add new polyfills
    // @ts-ignore
    let polyfills = host.read('./src/polyfills.ts').toString();
    if (polyfills.includes('SCULLY IMPORTS')) {
      context.logger.info('⚠️️  Skipping polyfills.ts');
    } else {
      polyfills = `${polyfills}\n/***************************************************************************************************
  \n* SCULLY IMPORTS
  \n*/
  \n// tslint:disable-next-line: align \nimport 'zone.js/dist/task-tracking';`;
      host.overwrite('./src/polyfills.ts', polyfills);
    }

    try {
      // inject idleService
      const appComponent = host.read('./src/app/app.component.ts').toString();
      if (appComponent.includes('IdleMonitorService')) {
        context.logger.info('⚠️️  Skipping ./src/app/app.component.ts');
      } else {
        const idleImport = "import {IdleMonitorService, TransferStateService} from '@scullyio/ng-lib';";
        // add
        const idImport = `${idleImport} \n ${appComponent}`;
        const idle = 'private idle: IdleMonitorService, private transferState: TransferStateService';
        let output = '';
        // check if exist
        if (idImport.search(/constructor/).toString() === '-1') {
          // add if no exist the constructor
          const add = ` \n constructor (${idle}) { } \n`;
          const position =
            idImport.search(/export class AppComponent {/g) + 'export class AppComponent {'.length;
          output = [idImport.slice(0, position), add, idImport.slice(position)].join('');
        } else {
          const coma = haveMoreInjects(idImport);
          const add = `${idle}${coma}`;
          if (idImport.search(/constructor \(/).toString() === '-1') {
            const position = idImport.search(/constructor\(/g) + 'constructor('.length;
            output = [idImport.slice(0, position), add, idImport.slice(position)].join('');
          } else {
            const position = idImport.search(/constructor \(/g) + 'constructor ('.length;
            output = [idImport.slice(0, position), add, idImport.slice(position)].join('');
          }
        }
        host.overwrite('./src/app/app.component.ts', output);
      }

      function haveMoreInjects(fullComponent: string) {
        const match = '\(([^()]*(private|public)[^()]*)\)';
        // @ts-ignore
        if (fullComponent.search(match).toString !== '-1') {
          return ',';
        }
        return '';
      }

    } catch (e) {
      console.log('error in idle service');
    }

    const nextRules: Rule[] = [];
    // tslint:disable-next-line:triple-equals
    if (options.blog === true) {
      // @ts-ignore
      nextRules.push(context.addTask(new RunSchematicTask('blog', options), []));
    }
    // tslint:disable-next-line:no-shadowed-variable
    nextRules.push((tree: Tree, context: SchematicContext) => {
      const installTaskId = context.addTask(new NodePackageInstallTask());
      context.addTask(new RunSchematicTask('scully', options), [installTaskId]);
    });

    return chain(nextRules);

  };
}
