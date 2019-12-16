const asciidoctor = require('asciidoctor.js')();
import {registerPlugin} from '../pluginManagement/pluginRepository';

const asciiDocPlugin = async (raw: string) => {
  return asciidoctor.convert(raw);
};

registerPlugin('fileHandler', 'adoc', {
  alternateExtensions: ['asciidoc', 'asc'],
  handler: asciiDocPlugin,
});

