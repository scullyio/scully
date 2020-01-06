import {Rule, SchematicContext, SchematicsException, Tree} from '@angular-devkit/schematics';
import {Schema} from './schema';
import {strings} from '@angular-devkit/core';

export default function(options: Schema): Rule {
  return (host: Tree, context: SchematicContext) => {
    const name = options.name;
    const nameDasherized = options.name ? strings.dasherize(options.name) : 'blog-X';
    const targetDasherized = options.target ? strings.dasherize(options.target) : 'blog';
    if (!host.exists(`./${targetDasherized}/${nameDasherized}.md`)) {
      host.create(
        `./blog/${nameDasherized}.md`,
        `---
title: ${name}
description: blog description
publish: false
---

# ${name}
`
      );
      context.logger.info(`✅️ Blog ${name} file created`);
    } else {
      // return name exist
      throw new SchematicsException(`${name} exist in your blog folder`);
    }
  };
}
