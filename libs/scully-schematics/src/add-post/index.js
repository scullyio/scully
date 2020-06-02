'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
const schematics_1 = require('@angular-devkit/schematics');
const core_1 = require('@angular-devkit/core');
const utils_1 = require('../utils/utils');
function default_1(options) {
  return (host, context) => {
    const name = options.name;
    const nameDasherized = options.name ? core_1.strings.dasherize(options.name) : 'blog-X';
    const targetDasherized = options.target ? core_1.strings.dasherize(options.target) : 'blog';
    const filename = `./${targetDasherized}/${utils_1.removeWrongCharacters(nameDasherized)}.md`;
    let metaData = {
      title: '',
      description: 'blog description',
      published: false,
    };
    if (options.metaDataFile) {
      const metaDataAsJson = utils_1.yamlToJson(options.metaDataFile);
      if (metaDataAsJson) {
        metaData = metaDataAsJson;
        context.logger.info(`✅️ Meta Data File ${options.metaDataFile} successfully parsed`);
      }
    }
    // set title from option and override if alreay in metaDataFile template
    metaData.title = name;
    if (!host.exists(filename)) {
      const content = `---
${utils_1.jsonToJaml(metaData)}---

# ${name}
`;
      host.create(filename, content);
      context.logger.info(`✅️ Blog ${filename} file created`);
    } else {
      // return name exist
      throw new schematics_1.SchematicsException(
        `${nameDasherized} exist in your ${targetDasherized} folder`
      );
    }
  };
}
exports.default = default_1;
//# sourceMappingURL=index.js.map
