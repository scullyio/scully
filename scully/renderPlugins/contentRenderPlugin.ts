import {registerPlugin} from '../pluginManagement/pluginRepository';
import {HandledRoute} from '../routerPlugins/addOptionalRoutesPlugin';
import {logWarn, yellow} from '../utils/log';
import {getScript} from './content-render-utils/getScript';
import {handleFile} from './content-render-utils/handleFile';
import {insertContent} from './content-render-utils/insertContent';
import {readFileAndCheckPrePublishSlug} from './content-render-utils/readFileAndCheckPrePublishSlug';
import {JSDOM} from 'jsdom';

registerPlugin('render', 'contentFolder', contentRenderPlugin);

const scullyBegin = '<!--scullyContent-begin-->';
const scullyEnd = '<!--scullyContent-end-->';

export async function contentRenderPlugin(html: string, route: HandledRoute) {
  const file = route.templateFile;
  try {
    const extension = file.split('.').pop();
    const {fileContent} = await readFileAndCheckPrePublishSlug(file);
    // TODO: create additional "routes" for every slug
    const attr = getIdAttrName(
      html
        .split('<scully-content')[1]
        .split('>')[0]
        .trim()
    );
    const additionalHTML = await handleFile(extension, fileContent);
    const htmlWithNgAttr = addNgIdAttribute(additionalHTML, attr);
    return insertContent(scullyBegin, scullyEnd, html, htmlWithNgAttr, getScript(attr));
  } catch (e) {
    logWarn(
      `Error, probably missing "${yellow('<scully-content>')}" or "${yellow(
        'httpClientModule'
      )}" for ${yellow(file)}`
    );
  }
}

function addNgIdAttribute(html: string, id: string): string {
  try {
    const dom = new JSDOM(html, {runScripts: 'outside-only'});
    const {window} = dom;
    const {document} = window;
    const walk = document.createTreeWalker(document.body as any);
    let cur = (walk.currentNode as any) as HTMLElement;
    while (cur) {
      if (cur.nodeType === 1) {
        cur.setAttribute(id, '');
      }
      cur = (walk.nextNode() as any) as HTMLElement;
    }
    return document.body.innerHTML;
  } catch (e) {
    console.error(e);
  }

  return '';
}

function getIdAttrName(attrs: string): string {
  return attrs
    .split(' ')
    .find((at: string) => at.trim().startsWith('_ngcontent'))
    .split('=')[0];
}
