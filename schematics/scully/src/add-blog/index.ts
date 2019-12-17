import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import {RunSchematicTask} from '@angular-devkit/schematics/tasks';

export default function(options: any): Rule {
  return (tree: Tree, context: SchematicContext) => {
      options.name = 'blog';
      options.slug = 'slug';
      context.addTask(new RunSchematicTask('create-markdown', options), []);
  };
}
