// const asciidoctor = require('asciidoctor.js')();
import { registerPlugin } from '../pluginManagement/pluginRepository';
import { logError } from '../utils';

const asciiDocPlugin = async (raw: string) => {
  try {
    const asciidoctor: any = import('asciidoctor.js');
    const loggerManager = asciidoctor.LoggerManager;
    const memoryLogger = asciidoctor.MemoryLogger.create();
    loggerManager.setLogger(memoryLogger);
    return asciidoctor.convert(raw, {});
  } catch {
    logError(`When you want to use asciidoc, you need to install the optional asciidocor.js module by:

  npm install -s asciidoctor.js

`);
  }
};

registerPlugin('fileHandler', 'adoc', asciiDocPlugin, ['asciidoc', 'asc']);
