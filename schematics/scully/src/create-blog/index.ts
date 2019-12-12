import {Rule, SchematicContext, Tree} from '@angular-devkit/schematics';
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

