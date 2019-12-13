import {
  Rule, Tree, SchematicContext, externalSchematic, chain,
} from '@angular-devkit/schematics';
import {RunSchematicTask} from '@angular-devkit/schematics/tasks';
import { Schema as MyServiceSchema } from './schema';
// @ts-ignore
export default function(options: MyServiceSchema): Rule {
  return (host: Tree, context: SchematicContext) => {
    return chain([
      externalSchematic('@schematics/angular', 'module', {
        name: options.name,
        route: options.name,
        routing: true,
        module: 'app.module.ts'
      }),
      // tslint:disable-next-line:no-shadowed-variable
      (host: Tree, context: SchematicContext) => {
        context.addTask(new RunSchematicTask('create-markdown', options), []);
      }]);
  };
}

