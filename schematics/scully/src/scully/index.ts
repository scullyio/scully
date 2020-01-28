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
  options.project = options.project ? getProject(tree, options.project) : null;
  jsonContent.scripts.scully = options.project ? `scully --projectName=${options.project}` : 'scully';
  jsonContent.scripts['scully:serve'] = options.project
    ? `scully serve --projectName=${options.project}`
    : 'scully serve';
  overwritePackageJson(tree, jsonContent);
  context.logger.info('✅️ Update package.json');
};

const createScullyConfig = (options: Schema) => (tree: Tree, context: SchematicContext) => {
  const projectName = options.project ? getProject(tree, options.project) : null;
  const scullyConfigFile = options.project ? `scully.${projectName}.config.js` : 'scully.config.js';
  if (options.project && !checkProjectExist(tree, getProject(tree, options.project))) {
    throw new SchematicsException(`There is no ${options.project} project in angular.json`);
  }
  if (!tree.exists(scullyConfigFile)) {
    const srcFolder = getSrc(tree, options.project);
    const projectNameRow = options.project
      ? `
  projectName: "${projectName}",`
      : '';
    tree.create(
      scullyConfigFile,
      `exports.config = {
  projectRoot: "./${srcFolder}/app",${projectNameRow}
  outDir: './dist/static',
  routes: {
  }
};`
    );
    context.logger.info(`✅️ Created scully configuration file in ${scullyConfigFile}`);
  }
};
