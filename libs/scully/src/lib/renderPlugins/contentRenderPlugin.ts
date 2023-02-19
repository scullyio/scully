import { JSDOM } from 'jsdom';
import { registerPlugin } from '../pluginManagement/pluginRepository.js';
import { HandledRoute } from '../routerPlugins/handledRoute.interface.js';
import { logWarn, yellow } from '../utils/log.js';
import { convertAndInjectContent } from './content-render-utils/convertAndInjectContent.js';
import { readFileAndCheckPrePublishSlug } from './content-render-utils/readFileAndCheckPrePublishSlug.js';

registerPlugin('postProcessByDom', 'contentFolder', contentRenderPlugin);

export async function contentRenderPlugin(dom: JSDOM, route: HandledRoute): Promise<JSDOM> {
  const file = route.templateFile;
  try {
    const extension = file.split('.').pop();
    const { fileContent } = await readFileAndCheckPrePublishSlug(file);
    return convertAndInjectContent(dom, fileContent, extension, route);
  } catch (e) {
    logWarn(`Error, while rendering content for "${yellow(route.route)}" from file: "${yellow(file)}"`);
    console.error(e);
  }
  return dom;
}
