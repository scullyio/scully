import {Rule, SchematicContext, Tree, SchematicsException, chain} from '@angular-devkit/schematics';
import {getSrc, getPackageJson, overwritePackageJson, getProject, checkProjectExist} from '../utils/utils';
import {Schema} from '../ng-add/schema';

export default (options: any): Rule => {
  return chain([verifyAngularWorkspace(), modifyPackageJson(options), createScullyConfig(options)]);
};

const verifyAngularWorkspace = () => (tree: Tree, context: SchematicContext) => {
  const workspaceConfigBuffer = tree.read('angular.json');
  if (!workspaceConfigBuffer) {
    throw new SchematicsException('Not an angular CLI workspace');
  }
};

const modifyPackageJson = (options: Schema) => (tree: Tree, context: SchematicContext) => {
  const defaultProjectName = getProject(tree, 'defaultProject');
  const projectName = getProject(tree, options.project);
  const params = projectName === defaultProjectName ? '' : ` --projectName=${projectName}`;
  const jsonContent = getPackageJson(tree);
  jsonContent.scripts.scully = 'scully' + params;
  jsonContent.scripts['scully:serve'] = 'scully serve' + params;
  overwritePackageJson(tree, jsonContent);
  context.logger.info('✅️ Update package.json');
};

const createScullyConfig = (options: Schema) => (tree: Tree, context: SchematicContext) => {
  const scullyConfigFile = `scully.${getProject(tree, options.project)}.config.js`;
  if (!checkProjectExist(tree, getProject(tree, options.project))) {
    throw new SchematicsException(`There is no ${options.project} project in angular.json`);
  }
  if (!tree.exists(scullyConfigFile)) {
    const srcFolder = getSrc(tree, options.project);
    const projectName = getProject(tree, options.project);
    tree.create(
      scullyConfigFile,
      `exports.config = {
  projectRoot: "./${srcFolder}",
  projectName: "${projectName}",
  outDir: './dist/static',
  routes: {
  }
};`
    );
    context.logger.info(`✅️ Created scully configuration file in ${scullyConfigFile}`);
  }
};
