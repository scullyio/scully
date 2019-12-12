import {readFileSync} from 'fs';
import {FilePlugin, plugins, registerPlugin} from '../pluginManagement/pluginRepository';
import {logError, yellow, logWarn} from '../utils/log';
import {HandledRoute} from '../routerPlugins/addOptionalRoutesPlugin';
// import * as fm from 'front-matter';
// import fm, {test} from 'front-matter'
// import * as fm from 'front-matter';
const fm = require('front-matter');

registerPlugin('render', 'contentFolder', contentRenderPlugin);

const scullyBegin = '<!--scullyContent-begin-->';
const scullyEnd = '<!--scullyContent-end-->';

async function contentRenderPlugin(html: string, route: HandledRoute) {
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

function insertContent(
  startTag: string,
  endTag: string,
  html: string,
  insertText: string,
  ...extras
) {
  try {
    const [openingText, rest] = html.split(startTag);
    const [takeout, endText] = rest.split(endTag);
    return [openingText, startTag, insertText, endTag, ...extras, endText].join('');
  } catch (e) {}
  logWarn(html);
  return 'Colson could not find the <scully-content> tag in this page.';
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

function getScript() {
  return `<script>try {window['scullyContent'] = document.body.innerHTML.split('<!--scullyContent-begin-->')[1].split('<!--scullyContent-end-->')[0];} catch(e) {console.error('scully could not pare content',e);}</script>
`;
}
