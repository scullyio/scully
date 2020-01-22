import {Rule, SchematicContext, Tree, SchematicsException, chain} from '@angular-devkit/schematics';
import {getSrc, getPackageJson, overwritePackageJson, getProject} from '../utils/utils';
import {Schema} from '../ng-add/schema';

export default (options: any): Rule => {
  return chain([verifyAngularWorkspace(), modifyPackageJson(), createScullyConfig(options)]);
};

const verifyAngularWorkspace = () => (tree: Tree, context: SchematicContext) => {
  const workspaceConfigBuffer = tree.read('angular.json');
  if (!workspaceConfigBuffer) {
    throw new SchematicsException('Not an angular CLI workspace');
  }
};

const modifyPackageJson = () => (tree: Tree, context: SchematicContext) => {
  const jsonContent = getPackageJson(tree);
  jsonContent.scripts.scully = 'scully --projectName=blah';
  jsonContent.scripts['scully:serve'] = 'scully serve';
  overwritePackageJson(tree, jsonContent);
  context.logger.info('✅️ Update package.json');
};

const createScullyConfig = (options: Schema) => (tree: Tree, context: SchematicContext) => {
  let scullyConfigFile = './scully.config.js';
  if (options.project !== 'defaultProject') {
    scullyConfigFile = `scully.${getProject(tree, options.project)}.config.js`;
  }

  if (!tree.exists(scullyConfigFile)) {
    const srcFolder = getSrc(tree, options.project);
    const projectName = getProject(tree, options.project);
    tree.create(
      scullyConfigFile,
      `exports.config = {
  projectRoot: "./${srcFolder}/app",
  projectName: "${projectName}",
  outDir: './dist/static',
  routes: {
  }
};`
    );
    context.logger.info(`✅️ Created scully configuration file in ${scullyConfigFile}`);
  }
};
