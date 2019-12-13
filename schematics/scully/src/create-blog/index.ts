import {Rule, SchematicContext, Tree} from '@angular-devkit/schematics';
import {addRouteToScullyConfig} from '../utils/utils';
import {strings} from '@angular-devkit/core';
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
/*
      // add into scully config
      try {
        const content: Buffer | null = host.read(`/scully.json`);
        let jsonContent;
        if (content) { jsonContent = JSON.parse(content.toString()); }
        /* tslint:disable:no-string-literal
        jsonContent.routes['/blog/:slug'] = {
          type: 'contentFolder',
            slug: {
              folder: './blog'
          }
        };
        host.overwrite(`/scully.json`, JSON.stringify(jsonContent, undefined, 2));
        context.logger.info('✅️ Update scully.json');
      } catch (e) {
        context.logger.error('Cant update scully.json');
      }
*/
      let scullyJson;
      try {
        scullyJson = (host.read('/scully.config.js')).toString();
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
      }
      const newScullyJson = addRouteToScullyConfig(scullyJson, {name: 'blog', slug: 'slug', type: 'contentFolder'});
      host.overwrite(`/scully.config.js`, newScullyJson);
      context.logger.info('✅️ Update scully.config.js');

      options.path = options.path ? options.path : strings.dasherize(`./src/app/${name}`);

      // test schematics
      let path = './src/files/blog-module/';
      if (!host.getDir('./src').subdirs.find(x => x === 'add-component')) {
        // prod
        path = './node_modules/@herodevs/init/src/files/blog-module/';
      }

      // create blog module and files
      const files = host.getDir(path).subfiles;
      // read file and create
      files.forEach((fileName) => {
        const src = `${path}${fileName}`;
        const file = (host.read(src)).toString();
        host.overwrite(`./src/app/blog/${fileName}`, file);
      });
    } catch (e) { }
  };
}

