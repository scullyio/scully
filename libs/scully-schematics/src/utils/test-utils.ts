import { SchematicTestRunner } from '@angular-devkit/schematics/testing';
import {
  Schema as ApplicationOptions,
  Style
} from '@schematics/angular/application/schema';
import { Schema as WorkspaceOptions } from '@schematics/angular/workspace/schema';

const workspaceOptions: WorkspaceOptions = Object.freeze({
  name: 'workspace',
  newProjectRoot: '',
  version: '^9.0.0-rc.4' // TODO (?) synch with requiredAngularVersionRange value from ../ng-add/version-names.ts
});

const defaultAppOptions: ApplicationOptions = Object.freeze({
  name: 'foo',
  // inlineStyle: false,
  // inlineTemplate: false,
  // routing: false,
  // style: Style.Css,
  // skipTests: false,
  // skipPackageJson: false
  projectRoot: '',
  routing: true
});

function getStyle(key: string) {
  return Object.values(Style).find(s => {
    return s === key;
  });
}

export async function setupProject(
  schematicRunner: SchematicTestRunner,
  options?: string | { [key: string]: any }
) {
  if (typeof options === 'string') {
    options = { name: options };
  }
  options = options || {};
  if (options.styleFileFormat) {
    options.style = getStyle(options.styleFileFormat);
  }
  delete options.styleFileFormat;
  const appOptions: ApplicationOptions = { ...defaultAppOptions, ...options };
  let tree = await schematicRunner
    .runSchematicAsync('workspace', { ...workspaceOptions })
    .toPromise();
  tree = await schematicRunner
    .runSchematicAsync('application', appOptions, tree)
    .toPromise();

  return tree;
}
