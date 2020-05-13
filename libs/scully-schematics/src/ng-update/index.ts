import { Rule, Tree, SchematicContext } from '@angular-devkit/schematics';

/** Entry point for the migration schematics with target of Angular v9 */
export function updateToV0(): Rule {
  return (tree: Tree, context: SchematicContext) => {
    context.logger.info(JSON.stringify(tree, null, '  '));
    return onMigrationComplete('V0', true, context);
  };
}
/** Function that will be called when the migration completed. */
function onMigrationComplete(
  targetVersion: string,
  hasFailures: boolean,
  context: SchematicContext
) {
  context.logger.info(`✅ Updated Scully to ${targetVersion}`);

  if (hasFailures) {
    context.logger.warn(
      'Some issues were detected but could not be fixed automatically. Please check the output above and fix these issues manually.'
    );
  }
}
