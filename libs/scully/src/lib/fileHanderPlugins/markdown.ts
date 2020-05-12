import {registerPlugin} from '../pluginManagement/pluginRepository';
import {getConfig, setConfig} from '../pluginManagement/pluginConfig';
const marked = require('marked');

export interface MarkedConfig {
  enableSyntaxHighlighting: boolean;
}

const markdownPlugin = async (raw: string) => {
  const config = getConfig<MarkedConfig>(markdownPlugin);
  if (config.enableSyntaxHighlighting) {
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

setConfig(markdownPlugin, {
  enableSyntaxHighlighting: false,
});

registerPlugin('fileHandler', 'md', markdownPlugin, ['markdown']);
