import { Rule, SchematicContext, SchematicsException, Tree } from '@angular-devkit/schematics';
import { strings } from '@angular-devkit/core';

import { Schema } from './schema';
import { yamlToJson, jsonToJaml, removeWrongCharacters } from '../utils/utils';

export default function (options: Schema): Rule {
  return (host: Tree, context: SchematicContext) => {
    const name = options.name;
    const extension = options.extension || 'md';
    const nameDasherized = options.name ? strings.dasherize(options.name) : 'blog-X';
    const targetDasherized = options.target ? strings.dasherize(options.target) : 'blog';

    if (!/^[\w]+$/.test(extension)) {
      throw new SchematicsException(`${extension} is not a valid file extension`);
    }

    const filename = `./${targetDasherized}/${removeWrongCharacters(nameDasherized)}.${extension}`;

    let metaData: any = {
      title: '',
      description: 'blog description',
      published: false,
    };

    if (options.metaDataFile) {
      const metaDataAsJson = yamlToJson(host, options.metaDataFile);
      if (metaDataAsJson) {
        metaData = metaDataAsJson;
        context.logger.info(`✅️ Meta Data File ${options.metaDataFile} successfully parsed`);
      }
    }

    // set title from option and override if alreay in metaDataFile template
    metaData.title = name;

    if (!host.exists(filename)) {
      const content = `---
${jsonToJaml(metaData)}---

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
