import {Rule, SchematicContext, SchematicsException, Tree} from '@angular-devkit/schematics';
import {strings} from '@angular-devkit/core';
import fs = require('fs');
import yaml = require('js-yaml');

import {Schema} from './schema';

export default function(options: Schema): Rule {
  return (host: Tree, context: SchematicContext) => {
    const name = options.name;
    const nameDasherized = options.name ? strings.dasherize(options.name) : 'blog-X';
    const targetDasherized = options.target ? strings.dasherize(options.target) : 'blog';
    const filename = `./${targetDasherized}/${nameDasherized}.md`;

    let metaData = {
      title: '',
      description: 'blog description',
      publish: false,
    };

    if (options.metaDataFile) {
      let metaDataContents = '';
      try {
        metaDataContents = fs.readFileSync(options.metaDataFile, 'utf8');
      } catch (e) {
        throw new SchematicsException(`File ${options.metaDataFile} not found`);
      }

      try {
        // check if yaml is valid
        metaData = yaml.safeLoad(metaDataContents);
        context.logger.info(`✅️ Meta Data File ${options.metaDataFile} successfully parsed`);
      } catch (e) {
        throw new SchematicsException(`${options.metaDataFile} contains no valid yaml`);
      }
    }

    // set title from option and override if alreay in metaDataFile template
    metaData.title = name;

    if (!host.exists(filename)) {
      const content = `---
${yaml.safeDump(metaData)}---

# ${name}
`;
      host.create(filename, content);
      context.logger.info(`✅️ Blog ${filename} file created`);
    } else {
      // return name exist
      throw new SchematicsException(`${nameDasherized} exist in your ${targetDasherized} folder`);
    }
  };
}
