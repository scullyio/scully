import {
  Rule,
  SchematicContext,
  Tree,
  SchematicsException,
  chain,
} from '@angular-devkit/schematics';
import {
  getSrc,
  getPackageJson,
  overwritePackageJson,
  getProject,
  checkProjectExist,
} from '../utils/utils';
import { Schema } from '../ng-add/schema';

let isAngularProject = true;

export default (options: any): Rule => {
  return chain([
    verifyAngularWorkspace(),
    modifyPackageJson(options),
    createScullyConfig(options),
  ]);
};

const verifyAngularWorkspace = () => (
  tree: Tree,
  context: SchematicContext
) => {
  const workspaceConfigBuffer = tree.read('angular.json');
  if (!workspaceConfigBuffer) {
    isAngularProject = false;
  }
  const workspaceConfigBufferNX = tree.read('workspace.json');
  if (!workspaceConfigBuffer && !workspaceConfigBufferNX) {
    throw new SchematicsException('Not an angular CLI workspace');
  }
};

const modifyPackageJson = (options: Schema) => (
  tree: Tree,
  context: SchematicContext
) => {
  let defaultProjectName, projectName;
  if (isAngularProject) {
    defaultProjectName = getProject(tree, 'defaultProject');
    projectName = getProject(tree, options.project);
  } else {
    projectName = options.project;
  }

  const params =
    projectName === defaultProjectName ? '' : ` --projectName=${projectName}`;
  const jsonContent = getPackageJson(tree);
  jsonContent.scripts.scully = 'scully' + params;
  jsonContent.scripts['scully:serve'] = 'scully serve' + params;
  overwritePackageJson(tree, jsonContent);
  context.logger.info('✅️ Update package.json');
};

const createScullyConfig = (options: Schema) => (
  tree: Tree,
  context: SchematicContext
) => {
  const scullyConfigFile = `scully.${getProject(
    tree,
    options.project
  )}.config.ts`;
  if (!checkProjectExist(tree, getProject(tree, options.project))) {
    throw new SchematicsException(
      `There is no ${options.project} project in angular.json`
    );
  }
  if (!tree.exists(scullyConfigFile)) {
    const srcFolder = getSrc(tree, options.project);
    const projectName = getProject(tree, options.project);
    tree.create(
      scullyConfigFile,
      `import { ScullyConfig } from '@scullyio/scully';
export const config: ScullyConfig = {
  projectRoot: "./${srcFolder}",
  projectName: "${projectName}",
  outDir: './dist/static',
  routes: {
  }
};`
    );
    context.logger.info(
      `✅️ Created scully configuration file in ${scullyConfigFile}`
    );
  }
};
