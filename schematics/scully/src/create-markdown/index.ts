import { Rule, Tree, url, applyTemplates, move, chain, SchematicContext } from '@angular-devkit/schematics';
import { strings, normalize } from '@angular-devkit/core';
import {Schema as MyServiceSchema} from './schema';
import {addRouteToModule, addRouteToScullyConfig, applyWithOverwrite, getPrefix, getSrc} from '../utils/utils';

export default function(options: MyServiceSchema): Rule {
  return (host: Tree, context: SchematicContext) => {
    try {
      options.name = options.name ? options.name : 'blog';
      const name = options.name;
      const nameD = strings.dasherize(options.name);
      const date = new Date();
      const fullDay = `${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()}`;
      const path = `./${nameD}/${fullDay}-${nameD}.md`;
      if (!host.exists(path)) {
        host.create(path, `---
title: This is the ${name}
description: ${name} description
publish: false
---

# Page ${name} example
`);
        context.logger.info(`✅ ${fullDay}-${nameD} file created`);
      }

      let scullyJson;
      try {
        scullyJson = (host.read('/scully.config.js')).toString();
      } catch (e) {
        // for test in schematics
        // tslint:disable-next-line:no-shadowed-variable
        const srcFolder = getSrc(host);
        scullyJson = `exports.config = {
  projectRoot: "${srcFolder}/app",
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
      const srcFolder = getSrc(host);
      options.path = options.path ? options.path : strings.dasherize(`${srcFolder}/app/${name}`);
      let prefix = 'app';
      if (host.exists('./angular.json')) {
        prefix = getPrefix(host.read('./angular.json').toString());
        addRouteToModule(host, options);
      }

      const templateSource = applyWithOverwrite(url('../files/markdown-module'), [
        applyTemplates({
          classify: strings.classify,
          dasherize: strings.dasherize,
          name: options.name,
          slug: options.slug,
          prefix
        }),
        move(normalize(options.path as string))
      ]);

      return chain([
        templateSource
      ]);

    } catch (e) { }
  };
}

