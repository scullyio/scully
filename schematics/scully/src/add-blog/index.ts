import { Rule, SchematicContext, Tree, chain, externalSchematic } from '@angular-devkit/schematics';
import {RunSchematicTask} from '@angular-devkit/schematics/tasks';

export default function(options: any): Rule {
  return (tree: Tree, context: SchematicContext) => {
    return chain([
      externalSchematic('@schematics/angular', 'module', {
        name: 'blog',
        route: 'blog',
        routing: true,
        module: 'app.module.ts'
      }),
      // tslint:disable-next-line:no-shadowed-variable
      (tree: Tree, context: SchematicContext) => {
        context.addTask(new RunSchematicTask('create-blog', options), []);
      },
    ]);

  };
}
