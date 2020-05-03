import {SchematicTestRunner} from '@angular-devkit/schematics/testing';
import {Schema as ApplicationOptions} from '@schematics/angular/application/schema';
import {Schema as WorkspaceOptions} from '@schematics/angular/workspace/schema';

const workspaceOptions: WorkspaceOptions = {
  name: 'workspace',
  newProjectRoot: '',
  version: '^9.0.0-rc.4', // TODO (?) synch with requiredAngularVersionRange inside ../ng-add/version-names.ts
};

const appOptions: ApplicationOptions = {
  name: 'foo',
  // inlineStyle: false,
  // inlineTemplate: false,
  // routing: false,
  // style: Style.Css,
  // skipTests: false,
  // skipPackageJson: false
  projectRoot: '',
  routing: true,
};

export async function setupProject(schematicRunner: SchematicTestRunner, name?: string) {
  if (name) {
    appOptions.name = name;
  }
  let tree = await schematicRunner.runSchematicAsync('workspace', workspaceOptions).toPromise();
  tree = await schematicRunner.runSchematicAsync('application', appOptions, tree).toPromise();

  return tree;
}
