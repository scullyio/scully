import {
  Rule, SchematicContext, SchematicsException, Tree
  // apply, branchAndMerge, chain, mergeWith, move, Rule, SchematicContext, SchematicsException, Tree, url,
} from '@angular-devkit/schematics';
import {Schema} from './schema';

export default function(options: Schema): Rule {
  return (host: Tree, context: SchematicContext) => {

    const name = options.title ? options.title : 'blog-X';
    if (!host.exists(`./blog/${name}.md`)) {
      host.create(`./blog/${name}.md`,
      `---
title: ${name}
description: blog description
publish: false
---

# ${name}
`);
      context.logger.info(`✅️Blog ${name} file created`);
    } else {
      // return name exist
      throw new SchematicsException(`${name} exist in your blog folder`);
    }
  };
}

