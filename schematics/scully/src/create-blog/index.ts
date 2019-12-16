import {applyTemplates, chain, move, Rule, SchematicContext, Tree, url} from '@angular-devkit/schematics';
import {addRouteToScullyConfig, applyWithOverwrite} from '../utils/utils';
import {normalize, strings} from '@angular-devkit/core';
// @ts-ignore
export default function(options: any): Rule {
  return (host: Tree, context: SchematicContext) => {
    try {
      const name = options.title ? options.title : 'blog-X';
      const date = new Date();
      const fullDay = `${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()}`;
      if (!host.exists(`./blog/${fullDay}-${name}.md`)) {
        host.create(`./blog/${fullDay}-${name}.md`,
          `---
title: This is the blog title
description: blog description
publish: false
---

# Page X example
`);
        context.logger.info(`✅️Blog ${fullDay}-${name} file created`);
      }

      let scullyJson;
      try {
        scullyJson = (host.read('/scully.config.js')).toString();
        const newScullyJson = addRouteToScullyConfig(scullyJson, {name: 'blog', slug: 'slug', type: 'contentFolder'});
        host.overwrite(`/scully.config.js`, newScullyJson);
        context.logger.info('✅️ Update scully.config.js');
      } catch (e) {
        // for test in schematics
        scullyJson = `exports.config = {
  routes: {
    '/demo/:id': {
      type: 'fake',
      numberOfPages: 100
    },
  },
};`;
        const newScullyJson = addRouteToScullyConfig(scullyJson, {name: 'blog', slug: 'slug', type: 'contentFolder'});
        console.log(newScullyJson);
        context.logger.info('✅️ Update scully.config.js');
      }

      const templateSource = applyWithOverwrite(url('../files/blog-module'), [
        applyTemplates({
          classify: strings.classify,
          dasherize: strings.dasherize,
          name: options.name,
          slug: 'slug'
        }),
        move(normalize('./src/app/blog/'))
      ]);

      return chain([
        templateSource
      ]);

/*
      // test schematics
      let path = './src/files/blog-module/';
      if (!host.getDir('./src').subdirs.find(x => x === 'add-blog')) {
        // prod
        path = './node_modules/@scullyio/init/src/files/blog-module/';
      }

      // create blog module and files
      const files = host.getDir(path).subfiles;
      // read file and create
      files.forEach((fileName) => {
        try {
          const src = `${path}${fileName}`;
          const file = (host.read(src)).toString();
          host.overwrite(`./src/app/blog/${fileName}`, file);
        } catch (e) {
          console.log(`The file ${fileName} does not exist. If you are testing schematics, this is ok.`);
        }
      });

*/} catch (e) { }
  };
}
