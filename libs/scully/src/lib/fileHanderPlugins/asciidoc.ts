// const asciidoctor = require('asciidoctor.js')();
import { registerPlugin } from '../pluginManagement/pluginRepository';
import { logError } from '../utils';

const asciiDocPlugin = async (raw: string) => {
  try {
    const asciidoctor: any = require('asciidoctor.js')();
    return asciidoctor.convert(raw, {});
  } catch (e) {
    logError(
      `When you want to use asciidoc, you need to install the optional asciidocor.js module by:

  npm install -s asciidoctor.js

`,
      e
    );
  }
};

registerPlugin('fileHandler', 'adoc', asciiDocPlugin, ['asciidoc', 'asc']);
