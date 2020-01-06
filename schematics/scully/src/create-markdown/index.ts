import {Rule, Tree, url, applyTemplates, move, chain, SchematicContext} from '@angular-devkit/schematics';
import {strings, normalize} from '@angular-devkit/core';
import {Schema as MyServiceSchema} from './schema';
import {addRouteToModule, addRouteToScullyConfig, applyWithOverwrite, getPrefix} from '../utils/utils';

export default function(options: MyServiceSchema): Rule {
  return (host: Tree, context: SchematicContext) => {
    try {
      const name = options.name;
      const nameDasherized = strings.dasherize(options.name);
      const sourceDir = options.sourceDir
        ? strings.dasherize(options.sourceDir) // use sourceDir when provided
        : strings.dasherize(options.name); // fall back to name when not provided
      const date = new Date();
      const fullDay = `${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()}`;
      const path = `./${sourceDir}/${fullDay}-${nameDasherized}.md`;
      if (!host.exists(path)) {
        host.create(
          path,
          `---
title: This is the ${name}
description: ${name} description
publish: false
---

# Page ${name} example
`
        );
        context.logger.info(`✅ ${path} file created`);
      }

      let scullyJs;
      try {
        scullyJs = host.read('/scully.config.js').toString();
      } catch (e) {
        // for test in schematics
        scullyJs = `exports.config = {
  projectRoot: "./src/app",
  routes: {
  },
};`;
      }
      const newScullyJson = addRouteToScullyConfig(scullyJs, {
        name,
        slug: options.slug,
        type: 'contentFolder',
        sourceDir: options.sourceDir,
        route: options.route,
      });
      host.overwrite(`/scully.config.js`, newScullyJson);
      context.logger.info('✅️ Update scully.config.js');

      const pathName = strings.dasherize(`./src/app/${name}`);
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
          prefix,
        }),
        move(normalize(pathName)),
      ]);

      return chain([templateSource]);
    } catch (e) {}
  };
}
