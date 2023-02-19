import { registerPlugin } from '../pluginManagement/pluginRepository.js';
import { getConfig, setConfig } from '../pluginManagement/pluginConfig.js';
import { marked } from 'marked';
import { logWarn } from '../utils/log.js';

// ------------------------------
// Syntax Highlighting

import Prism from 'prismjs';
import loadLanguages from 'prismjs/components/index.js';
loadLanguages(['javascript', 'typescript', 'css', 'scss', 'markdown', 'bash', 'json']);
/** before ESM build this was (wrongly) imported as a module like this:
 import 'prismjs/components/prism-bash';
 import 'prismjs/components/prism-css';
 ...
 make sure to use the correct import syntax for ESM builds */

const renderer = new marked.Renderer();
// wrap code block the way Prism.js expects it
renderer.code = function (this: any, code, lang, escaped) {
  code = this.options.highlight(code, lang);
  if (!lang) {
    return '<pre><code>' + code + '</code></pre>';
  }
  // e.g. "language-js"
  const langClass = 'language-' + lang;
  return '<pre class="' + langClass + '"><code class="' + langClass + '">' + code + '</code></pre>';
};
// ------------------------------

export interface MarkedConfig {
  enableSyntaxHighlighting: boolean;
}

const markdownPlugin = async (raw: string) => {
  const config = getConfig<MarkedConfig>(markdownPlugin);
  if (config.enableSyntaxHighlighting) {
    marked.setOptions({
      renderer,
      highlight: (code, lang) => {
        lang = lang || 'typescript';
        if (!Prism.languages[lang]) {
          logWarn(`Notice:
    ---------------------------------------------------------------------------------------
      Language '${lang}' is not available in the default Prism.js setup.
      if you want support for this you can add it into your ScullyConfig.ts as:

        import  'prismjs/components/prism-${lang}'

      Note that this is a sample the actual syntax might be slightly different
    ---------------------------------------------------------------------------------------
          `);
          return code;
        }
        return Prism.highlight(code, Prism.languages[lang]);
      },
      pedantic: false,
      gfm: true,
      breaks: false,
      sanitize: false,
      smartLists: true,
      smartypants: false,
      xhtml: false
    });
  }

  return marked(raw);
};

setConfig(markdownPlugin, {
  enableSyntaxHighlighting: false
});

registerPlugin('fileHandler', 'md', markdownPlugin, ['markdown']);
