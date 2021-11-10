// const asciidoctor = require('asciidoctor.js')();
import { registerPlugin } from '../pluginManagement/pluginRepository';
import { logError } from '../utils';
import Processor from 'asciidoctor';

const asciiDoctor = Processor();

const asciiDocPlugin = async (raw: string) => {
  try {
    const html = asciiDoctor.convert(raw, { safe: 'unsafe' });
    return html as unknown as string;
  } catch (e) {
    logError(
      `When you want to use asciidoc, you need to install the optional asciidocor module by:

  npm install -s asciidoctor

`,
      e
    );
  }
};

registerPlugin('fileHandler', 'adoc', asciiDocPlugin, ['asciidoc', 'asc']);


// {
//   runtime: {
//     platform: 'node',
//     engine: 'v8',
//     framework: 'webworker'
//   }
// }
