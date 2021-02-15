import { JSDOM } from 'jsdom';
import { registerPlugin } from '../pluginManagement/pluginRepository';
import { HandledRoute } from '../routerPlugins/handledRoute.interface';
import { logWarn, yellow } from '../utils/log';
import { convertAndInjectContent } from './content-render-utils/convertAndInjectContent';
import { readFileAndCheckPrePublishSlug } from './content-render-utils/readFileAndCheckPrePublishSlug';

registerPlugin('rendererDom', 'contentFolder', contentRenderPlugin);

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
