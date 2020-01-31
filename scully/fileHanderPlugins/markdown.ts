import {registerPlugin} from '../pluginManagement/pluginRepository';

const marked = require('marked');

const markdownPlugin = async (raw: string) => {
  return marked(raw);
};

registerPlugin('fileHandler', 'md', markdownPlugin, ['markdown']);
