import {Rule, SchematicContext, Tree, SchematicsException, chain} from '@angular-devkit/schematics';
import {getSrc, getPackageJson, overwritePackageJson} from '../utils/utils';
import {Schema} from '../ng-add/schema';

const SCULLY_CONFIG_FILE = './scully.config.js';

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
  if (!tree.exists(SCULLY_CONFIG_FILE)) {
    const srcFolder = getSrc(tree, options.project);
    tree.create(
      SCULLY_CONFIG_FILE,
      `exports.config = {
  projectRoot: "./${srcFolder}/app",
  projectName: "${options.project}",
  outDir: './dist/static',
  routes: {
  }
};`
    );
    context.logger.info(`✅️ Created scully configuration file in ${SCULLY_CONFIG_FILE}`);
  }
};
