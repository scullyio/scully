import { registerPlugin } from '../pluginManagement/pluginRepository';
import { getConfig, setConfig } from '../pluginManagement/pluginConfig';
import marked from 'marked';

// ------------------------------
// Syntax Highlighting

const Prism = require('prismjs');
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-markdown';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-tsx';

export interface MarkedConfig {
  enableSyntaxHighlighting: boolean;
  enableCopyToClipboard: boolean;
}

const renderer = new marked.Renderer();
let pluginConfig: MarkedConfig;
const copyToClipboardButton = () => (pluginConfig.enableCopyToClipboard ? `<button class="copyToClipboard">Copy</button>` : '');

// wrap code block the way Prism.js expects it
renderer.code = function (code, lang, escaped) {
  code = this.options.highlight(code, lang);
  let formattedCode: string;
  if (!lang) {
    formattedCode = '<pre>' + copyToClipboardButton() + '<code>' + code + '</code></pre>';
  } else {
    // e.g. "language-js"
    const langClass = 'language-' + lang;
    formattedCode =
      '<pre class="' + langClass + '">' + copyToClipboardButton() + '<code class="' + langClass + '">' + code + '</code></pre>';
  }
  return `<div class="scully-code-snippet" style="position:relative">${formattedCode}</div>`;
};
// ------------------------------

const copyToClipboardScript = `
    <script sk src="https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.6/clipboard.min.js"></script>
    <script sk>
      // Add Copy to Clipboard button
      (function registerCopyToClipboard() {
        var clip = new ClipboardJS('pre .copyToClipboard', {
          target: function (trigger) {
            return trigger.nextElementSibling;
          }
        });

        clip.on('success', function (event) {
          event.trigger.textContent = 'Copied!';
          event.clearSelection();
          setTimeout(function () {
            event.trigger.textContent = 'Copy';
          }, 2000);
        });
      })();
    </script>
    <style>
      .copyToClipboard {
        position: absolute;
        right: 0;
        top: 0;
        padding: 5px;
        color: rgb(27, 172, 78);
        border-radius: 4px;
        margin: 5px;
        border: 1px solid rgb(27, 172, 78);
      }

      .copyToClipboard:hover {
        background-color: rgb(27, 172, 78);
        color: white;
        border: 1px solid rgb(27, 172, 78);
      }
    </style>
`;

const markdownPlugin = async (raw: string) => {
  const config = getConfig<MarkedConfig>(markdownPlugin);
  pluginConfig = config;
  if (config.enableSyntaxHighlighting) {
    marked.setOptions({
      renderer,
      highlight: (code, lang) => {
        lang = lang || 'typescript';
        if (!Prism.languages[lang]) {
          console.error(`Language '${lang}' is not available in Prism.js, ignoring syntax highlighting for this code block.`);
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
      xhtml: false,
    });
  }

  let html = marked(raw);

  if (config.enableCopyToClipboard) {
    html += copyToClipboardScript;
  }

  return html;
};

setConfig(markdownPlugin, {
  enableSyntaxHighlighting: false,
  enableCopyToClipboard: false,
});

registerPlugin('fileHandler', 'md', markdownPlugin, ['markdown']);
