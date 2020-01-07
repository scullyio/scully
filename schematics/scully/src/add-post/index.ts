import {Rule, SchematicContext, SchematicsException, Tree} from '@angular-devkit/schematics';
import {Schema} from './schema';
import {strings} from '@angular-devkit/core';

export default function(options: Schema): Rule {
  return (host: Tree, context: SchematicContext) => {
    const name = options.name;
    const nameDasherized = options.name ? strings.dasherize(options.name) : 'blog-X';
    const targetDasherized = options.target ? strings.dasherize(options.target) : 'blog';
    const filename = `./${targetDasherized}/${nameDasherized}.md`;
    if (!host.exists(filename)) {
      host.create(
        filename,
        `---
title: ${name}
description: blog description
publish: false
---

# ${name}
`
      );
      context.logger.info(`✅️ Blog ${filename} file created`);
    } else {
      // return name exist
      throw new SchematicsException(`${nameDasherized} exist in your ${targetDasherized} folder`);
    }
  };
}
