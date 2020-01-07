import {Rule, SchematicContext, Tree, SchematicsException} from '@angular-devkit/schematics';
import {Schema} from './schema';
// for now we dont have any option for use
// @ts-ignore
export function scully(options: Schema): Rule {
  return (tree: Tree, context: SchematicContext) => {
    // project workspace data
    const workspaceConfigBuffer = tree.read('angular.json');
    if (!workspaceConfigBuffer) {
      throw new SchematicsException('Not an angular CLI workspace');
    }
    // modify package json for support npm commands
    const content: Buffer | null = tree.read(`/package.json`);
    let jsonContent;
    if (content) {
      jsonContent = JSON.parse(content.toString());
    }
    /* tslint:disable:no-string-literal */
    jsonContent.scripts['scully'] = 'scully';
    /* tslint:enable:no-string-literal */
    jsonContent.scripts['scully:serve'] = 'scully serve';
    tree.overwrite(`/package.json`, JSON.stringify(jsonContent, undefined, 2));
    context.logger.info('✅️ Update package.json');

    // add config file
    if (!tree.exists('./scully.config.js')) {
      tree.create(
        './scully.config.js',
        `exports.config = {
  projectRoot: "./src/app",
  routes: {
  }
};`
      );
    }

    // end return
  };
}
