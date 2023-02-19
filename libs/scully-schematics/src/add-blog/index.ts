import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { RunSchematicTask } from '@angular-devkit/schematics/tasks';
import { Schema } from './schema';
import { Schema as MarkdownSchema } from '../create-markdown/schema';

export default function (options: Schema): Rule {
  return (tree: Tree, context: SchematicContext) => {
    const markdownOptions: MarkdownSchema = {
      name: 'blog',
      slug: 'slug',
      sourceDir: 'blog',
      route: 'blog',
      project: options.project
    };

    if (options.routingScope) {
      markdownOptions.routingScope = options.routingScope;
    }
    context.addTask(new RunSchematicTask('create-markdown', markdownOptions), []);
  };
}
