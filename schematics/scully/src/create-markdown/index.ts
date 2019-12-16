import { Rule, Tree, url, applyTemplates, move, chain, SchematicContext } from '@angular-devkit/schematics';
import { strings, normalize } from '@angular-devkit/core';
import {Schema as MyServiceSchema} from './schema';
import {addRouteToScullyConfig, applyWithOverwrite} from '../utils/utils';

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

      let scullyJson;
      try {
        scullyJson = (host.read('/scully.config.js')).toString();
      } catch (e) {
        // for test in schematics
        scullyJson = `exports.config = {
  projectRoot: "./src/app",
  routes: {
    '/demo/:id': {
      type: 'fake',
      numberOfPages: 100
    },
  },
};`;
      }
      options.slug = options.slug ? options.slug : 'id';
      const newScullyJson = addRouteToScullyConfig(scullyJson, {name, slug: options.slug, type: 'contentFolder'});
      host.overwrite(`/scully.config.js`, newScullyJson);
      context.logger.info('✅️ Update scully.config.js');

      options.path = options.path ? options.path : strings.dasherize(`./src/app/${name}`);

      const templateSource = applyWithOverwrite(url('../files/markdown-module'), [
        applyTemplates({
          classify: strings.classify,
          dasherize: strings.dasherize,
          name: options.name,
          slug: options.slug
        }),
        move(normalize(options.path as string))
      ]);

      return chain([
        templateSource
      ]);

    } catch (e) { }
  };
}

