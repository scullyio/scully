import { Rule, SchematicContext, SchematicsException, Tree } from '@angular-devkit/schematics';
import {Schema} from './schema';
import { strings } from '@angular-devkit/core';

export default function(options: Schema): Rule {
  return (host: Tree, context: SchematicContext) => {

    const name = options.name ? options.name : 'blog-X';
    const namD = options.name ? strings.dasherize(options.name) : 'blog-X';
    if (!host.exists(`./blog/${namD}.md`)) {
      host.create(`./blog/${namD}.md`,
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

