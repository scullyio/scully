import {Rule, SchematicContext, Tree} from '@angular-devkit/schematics';
import {RunSchematicTask} from '@angular-devkit/schematics/tasks';
import {Schema} from './schema';
import {Schema as MarkownSchema} from '../create-markdown/schema';

export default function(options: Schema): Rule {
  return (tree: Tree, context: SchematicContext) => {
    const makrdownOptions: MarkownSchema = {
      name: 'blog',
      slug: 'slug',
      sourceDir: 'blog',
      route: 'blog',
      project: options.project,
    };

    if (options.routingScope) {
      makrdownOptions.routingScope = options.routingScope;
    }
    context.addTask(new RunSchematicTask('create-markdown', makrdownOptions), []);
  };
}
