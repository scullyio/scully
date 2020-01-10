import {Rule, SchematicContext, Tree, SchematicsException, chain} from '@angular-devkit/schematics';
import {getSrc, getPackageJson, overwritePackageJson} from '../utils/utils';

const SCULLY_CONFIG_FILE = './scully.config.js';

export default (options: any): Rule => {
  return chain([verifyAngularWorkspace(), modifyPackageJson(), createScullyConfig()]);
};

const verifyAngularWorkspace = () => (tree: Tree, context: SchematicContext) => {
  const workspaceConfigBuffer = tree.read('angular.json');
  if (!workspaceConfigBuffer) {
    throw new SchematicsException('Not an angular CLI workspace');
  }
};

const modifyPackageJson = () => (tree: Tree, context: SchematicContext) => {
  const jsonContent = getPackageJson(tree);
  jsonContent.scripts.scully = 'scully';
  jsonContent.scripts['scully:serve'] = 'scully serve';
  overwritePackageJson(tree, jsonContent);
  context.logger.info('✅️ Update package.json');
};

const createScullyConfig = () => (tree: Tree, context: SchematicContext) => {
  if (!tree.exists(SCULLY_CONFIG_FILE)) {
    const srcFolder = getSrc(tree);
    tree.create(
      SCULLY_CONFIG_FILE,
      `exports.config = {
  projectRoot: "${srcFolder}/app",
  outFolder: './dist/static',
  routes: {
  }
};`
    );
    context.logger.info(`✅️ Created scully configuration file in ${SCULLY_CONFIG_FILE}`);
  }
};
