import {registerPlugin} from '../pluginManagement/pluginRepository';
import {hl} from '../utils/cli-options';
const marked = require('marked');

const markdownPlugin = async (raw: string) => {
  if (hl) {
    marked.setOptions({
      renderer: new marked.Renderer(),
      highlight: (code, language) => {
        const hljs = require('highlight.js');
        const validLanguage = hljs.getLanguage(language) ? language : 'plaintext';
        return hljs.highlight(validLanguage, code).value;
      },
      pedantic: false,
      gfm: true,
      breaks: false,
      sanitize: false,
      smartLists: true,
      smartypants: false,
      xhtml: false,
    });
  }

  return marked(raw);
};

registerPlugin('fileHandler', 'md', markdownPlugin, ['markdown']);
