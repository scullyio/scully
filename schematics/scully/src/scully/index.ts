import {Rule, SchematicContext, Tree, SchematicsException, chain} from '@angular-devkit/schematics';
import {
  appendHtmlElementToHead,
  getProjectIndexFiles,
  getProjectFromWorkspace,
} from '@angular/cdk/schematics';
import {getSrc, getPackageJson, overwritePackageJson, getProject, checkProjectExist} from '../utils/utils';
import {getWorkspace} from '@schematics/angular/utility/config';
import {Schema} from '../ng-add/schema';

export default (options: any): Rule => {
  return chain([
    verifyAngularWorkspace(),
    modifyPackageJson(options),
    createScullyConfig(options),
    updateIndexFile(options),
  ]);
};

const verifyAngularWorkspace = () => (tree: Tree, context: SchematicContext) => {
  const workspaceConfigBuffer = tree.read('angular.json');
  if (!workspaceConfigBuffer) {
    throw new SchematicsException('Not an angular CLI workspace');
  }
};

const modifyPackageJson = (options: Schema) => (tree: Tree, context: SchematicContext) => {
  const jsonContent = getPackageJson(tree);
  const projectName = options.project === 'defaultProject' ? '' : getProject(tree, options.project);
  jsonContent.scripts.scully = projectName === '' ? 'scully' : `scully --projectName=${projectName}`;
  jsonContent.scripts['scully:serve'] =
    projectName === '' ? 'scully serve' : `scully serve --projectName=${projectName}`;
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

const updateIndexFile = (options: Schema) => (tree: Tree, context: SchematicContext) => {
  const workspace = getWorkspace(tree);
  const projectName = options.project === 'defaultProject' ? '' : getProject(tree, options.project);
  const project = getProjectFromWorkspace(workspace, projectName);
  const projectIndexFiles = getProjectIndexFiles(project);

  if (!projectIndexFiles.length) {
    throw new SchematicsException('No project index HTML file could be found.');
  }
  const metaTag = '<meta name="generator" content="Scully" />';
  projectIndexFiles.forEach(indexFilePath => {
    appendHtmlElementToHead(tree, indexFilePath, metaTag);
    context.logger.info(`✅️ Pride added to ${indexFilePath}`);
  });
};
