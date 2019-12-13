import {
  Rule, Tree,
  apply, url, applyTemplates, move,
  chain, mergeWith, SchematicContext, forEach, Source,
} from '@angular-devkit/schematics';

import { strings, normalize } from '@angular-devkit/core';
import {Schema as MyServiceSchema} from './schema';

export default function(options: MyServiceSchema): Rule {
  return (host: Tree, context: SchematicContext) => {
    try {
      options.name = options.name ? options.name : 'blog';
      const name = options.name;
      const date = new Date();
      const fullDay = `${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()}`;
      const path = `./${name}/${fullDay}-${name}.md`;
      if (!host.exists(path)) {
        host.create(path, `---
title: This is the ${name}
description: ${name} description
publish: false
---

# Page ${name} example
`);
        context.logger.info(`✅ ${fullDay}-${name} file created`);
      }
      context.logger.info(`start json scully`);
      // add into scully config
      try {
        const content: Buffer | null = host.read(`/scully.json`);
        let jsonContent;
        if (content) { jsonContent = JSON.parse(content.toString()); }
        /* tslint:disable:no-string-literal */
        jsonContent.routes[`${name}/:id`] = {
          type: 'contentFolder',
            id: {
            folder: './${name}'
          }
        };
        host.overwrite(`/scully.json`, JSON.stringify(jsonContent, undefined, 2));
        context.logger.info('✅️ Update scully.json');
      } catch (e) {
        context.logger.error('Cant update scully.json');
      }

      options.path = options.path ? options.path : strings.dasherize(`./src/app/${name}`);

      const templateSource = applyWithOverwrite(url('../files/markdown-module'), [
        applyTemplates({
          classify: strings.classify,
          dasherize: strings.dasherize,
          name: options.name
        }),
        move(normalize(options.path as string))
      ]);

      return chain([
        templateSource
      ]);

    } catch (e) { }
  };
}

function applyWithOverwrite(source: Source, rules: Rule[]): Rule {
  return (tree: Tree, context: SchematicContext) => {
    const rule = mergeWith(
      apply(source, [
        ...rules,
        forEach((fileEntry) => {
          if (tree.exists(fileEntry.path)) {
            tree.overwrite(fileEntry.path, fileEntry.content);
            return null;
          }
          return fileEntry;
        }),

      ]),
    );

    return rule(tree, context);
  };
}

