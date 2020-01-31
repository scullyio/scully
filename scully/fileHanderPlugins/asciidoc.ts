const asciidoctor = require('asciidoctor.js')();
import {registerPlugin} from '../pluginManagement/pluginRepository';
const loggerManager = asciidoctor.LoggerManager;
const memoryLogger = asciidoctor.MemoryLogger.create();
loggerManager.setLogger(memoryLogger);

const asciiDocPlugin = async (raw: string) => {
  return asciidoctor.convert(raw, {});
};

registerPlugin('fileHandler', 'adoc', {
  alternateExtensions: ['asciidoc', 'asc'],
  handler: asciiDocPlugin,
});
