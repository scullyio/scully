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
  const jsonContent = getPackageJson(tree);
  options.project = getProject(tree, options.project) || 'defaultProject';
  jsonContent.scripts.scully = `scully --projectName=${options.project}`;
  jsonContent.scripts['scully:serve'] = `scully serve --projectName=${options.project}`;
  overwritePackageJson(tree, jsonContent);
  context.logger.info('✅️ Update package.json');
};

const createScullyConfig = (options: Schema) => (tree: Tree, context: SchematicContext) => {
  const projectName = getProject(tree, options.project) || 'defaultProject';
  const scullyConfigFile = `scully.${projectName}.config.js`;
  if (!checkProjectExist(tree, getProject(tree, options.project))) {
    throw new SchematicsException(`There is no ${options.project} project in angular.json`);
  }
  if (!tree.exists(scullyConfigFile)) {
    const srcFolder = getSrc(tree, options.project);
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
