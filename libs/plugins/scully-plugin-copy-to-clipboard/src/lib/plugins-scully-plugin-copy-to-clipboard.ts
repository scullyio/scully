import { registerPlugin, getPluginConfig, logWarn, yellow, HandledRoute } from '@scullyio/scully';
import { JSDOM } from 'jsdom';

export const CopyToClipboard = 'CopyToClipboard';

export interface CopyToClipboardPluginConfig {
  /** add custom css class for copy button to apply styles */
  customBtnClass?: string;
  /** specify clipboard js path, default `/assets/clipboard.min.js` */
  clipboardJSPath?: string;
  /** copy button initial text, default `Copy` */
  copyBtnInitialText?: string;
  /** copy button text once code snippet is copied in clipboard , default `Copied!` */
  copyBtnOnClickText?: string;
}

const defaultConfig: CopyToClipboardPluginConfig = {
  customBtnClass: '',
  clipboardJSPath: '/assets/clipboard.min.js',
  copyBtnInitialText: 'Copy',
  copyBtnOnClickText: 'Copied!',
};

const copyToClipboardPlugin = async (html: string, options: HandledRoute): Promise<string> => {
  const pluginConfig = { ...defaultConfig, ...getPluginConfig<CopyToClipboardPluginConfig>(CopyToClipboard) };

  try {
    const dom = new JSDOM(html);
    const { window } = dom;

    const SCULLY_CODE_SNIPPET_SELECTOR = 'div.scully-code-snippet pre';
    const scullyCodeSnippets = window.document.querySelectorAll(SCULLY_CODE_SNIPPET_SELECTOR);

    /** Return unchanged HTML if document doesn't contain any code snippet */
    if (!scullyCodeSnippets.length) {
      return html;
    }

    /** Prepend copy to clipboard button on each code snippet pre */
    scullyCodeSnippets.forEach((snippet) => {
      /** Copy to Clipboard Button Element */
      const copyBtnEl = window.document.createElement('button');
      copyBtnEl.className = 'copyToClipboard ' + pluginConfig.customBtnClass;
      copyBtnEl.textContent = pluginConfig.copyBtnInitialText;

      snippet.prepend(copyBtnEl);
    });

    /** append clipboard script to the body  */
    const clipboardScriptEl = window.document.createElement('script');
    clipboardScriptEl.defer = true;
    clipboardScriptEl.async = true;
    clipboardScriptEl.setAttribute('sk', '');
    clipboardScriptEl.innerHTML = `
    const s = document.createElement('script');
    s.src = '${pluginConfig.clipboardJSPath}';
    s.addEventListener('load', () => registerCopyToClipboard());
    s.addEventListener('error', () => console.warn('could not load "${pluginConfig.clipboardJSPath}", make sure you have it copied into your assets folder' ));
    document.body.appendChild(s)

    function registerCopyToClipboard() {
      const clip = new ClipboardJS('pre .copyToClipboard', {
        target: function (trigger) {
          return trigger.nextElementSibling;
        },
      });

      clip.on('success', function (event) {
        event.trigger.textContent = '${pluginConfig.copyBtnOnClickText}';
        event.clearSelection();
        setTimeout(function () {
          event.trigger.textContent = '${pluginConfig.copyBtnInitialText}';
        }, 2000);
      });
    }
  `;
    /** append copy to clipboard button styles */
    const styleEl = window.document.createElement('style');
    styleEl.innerHTML = `
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
  `;

    window.document.body.appendChild(clipboardScriptEl);
    window.document.body.appendChild(styleEl);
    return dom.serialize();
  } catch (e) {
    logWarn(`error in ${CopyToClipboard} Plugin, didn't parse for route "${yellow(options.route)}"`);
  }

  return html;
};

const validator = async () => [];

registerPlugin('render', CopyToClipboard, copyToClipboardPlugin, validator);
