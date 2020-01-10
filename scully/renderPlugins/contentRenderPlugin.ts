import {readFileSync} from 'fs';
import {FilePlugin, plugins, registerPlugin} from '../pluginManagement/pluginRepository';
import {logError, yellow, logWarn} from '../utils/log';
import {HandledRoute} from '../routerPlugins/addOptionalRoutesPlugin';
const fm = require('front-matter');

registerPlugin('render', 'contentFolder', contentRenderPlugin);

const scullyBegin = '<!--scullyContent-begin-->';
const scullyEnd = '<!--scullyContent-end-->';

export async function contentRenderPlugin(html: string, route: HandledRoute) {
  const file = route.templateFile;
  try {
    const extension = file.split('.').pop();
    const {attributes: meta, body: fileContent} = fm(readFileSync(file, 'utf-8'));
    route.data = {...route.data, ...meta};
    const additionalHTML = await handleFile(extension, fileContent);
    return insertContent(scullyBegin, scullyEnd, html, additionalHTML, getScript());
  } catch (e) {
    logError(`Error during content generation for ${yellow(file)}`, e);
  }
}

function insertContent(startTag: string, endTag: string, html: string, insertText: string, ...extras) {
  try {
    const [openingText, rest] = html.split(startTag);
    const [takeout, endText] = rest.split(endTag);
    return [openingText, startTag, insertText, endTag, ...extras, endText].join('');
  } catch (e) {}
  logWarn(`missing "${yellow('<scully-conent>')}" or "${yellow('httpClientModule')}"`);
  return `<h1>Scully could not find the &lt.scully-content&gt. tag in this page.</h1>
  <p>This error can happen when you forgot to put the  mandatory "scully-content" in the component that is rendering this page?</p>
  <p>It may also occur if the 'httpClientModule' is not load in your app.module</p>
  `;
}

async function handleFile(extension: string, fileContent: string) {
  extension = extension.trim().toLowerCase();
  let plugin = plugins.fileHandler[extension];
  if (!plugin) {
    /** find by alternate extensions */
    const t = Object.entries(plugins.fileHandler).find(
      ([name, pl]: [string, FilePlugin]) =>
        pl.alternateExtensions && pl.alternateExtensions.includes(extension)
    );
    if (t.length) {
      plugin = t[1];
    } else {
      throw new logError(`unknown filetype ${extension}`);
    }
  }
  return plugin.handler(fileContent) as Promise<string>;
}

/**
 * @returns a string representing the script that parses the page and loads the scullyContent variable.
 *  The string is kept on one line as the focus is to keep it as small as possible.
 */
function getScript(): string {
  // tslint:disable-next-line:no-unused-expression
  return `<script>try {window['scullyContent'] = document.body.innerHTML.split('<!--scullyContent-begin-->')[1].split('<!--scullyContent-end-->')[0];} catch(e) {console.error('scully could not parse content',e);}</script>`;
}
