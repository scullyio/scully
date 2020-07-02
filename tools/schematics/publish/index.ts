import {
  apply,
  chain,
  mergeWith,
  move,
  Rule,
  SchematicContext,
  Tree,
  url,
  externalSchematic,
} from '@angular-devkit/schematics';

export default function (schema: any): Rule {
  return (tree: Tree, context: SchematicContext) => {
    // @ts-ignore
    return chain([modifyPackage(schema), publishPackages(schema)])(
      tree,
      context
    );
  };
}

function modifyPackage(schema) {}

function publishPackages(schema) {}
