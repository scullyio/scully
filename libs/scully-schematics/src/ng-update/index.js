'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
/** Entry point for the migration schematics with target of Angular v9 */
function updateToV0() {
  return (tree, context) => {
    context.logger.info(JSON.stringify(tree, null, '  '));
    return onMigrationComplete('V0', true, context);
  };
}
exports.updateToV0 = updateToV0;
/** Function that will be called when the migration completed. */
function onMigrationComplete(targetVersion, hasFailures, context) {
  context.logger.info(`✅ Updated Scully to ${targetVersion}`);
  if (hasFailures) {
    context.logger.warn(
      'Some issues were detected but could not be fixed automatically. Please check the output above and fix these issues manually.'
    );
  }
}
//# sourceMappingURL=index.js.map
