import {Rule, Tree} from '@angular-devkit/schematics';
import chalk from 'chalk';

/** Entry point for the migration schematics with target of Angular v9 */
export function updateToV0(): Rule {
    return (tree: Tree) => {
        console.log(tree);
        return onMigrationComplete('V0', true);
    };
}
/** Function that will be called when the migration completed. */
function onMigrationComplete(targetVersion: string, hasFailures: boolean) {
  console.log();
  console.log(chalk.green(`  ✓  Updated Scully to ${targetVersion}`));
  console.log();

  if (hasFailures) {
    console.log(chalk.yellow(
      '  ⚠  Some issues were detected but could not be fixed automatically. Please check the ' +
      'output above and fix these issues manually.'));
  }
}
