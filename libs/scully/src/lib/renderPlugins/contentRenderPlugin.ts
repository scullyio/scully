import { registerPlugin } from '../pluginManagement/pluginRepository';
import { HandledRoute } from '../routerPlugins/handledRoute.interface';
import { logWarn, yellow } from '../utils/log';
import { convertAndInjectContent } from './content-render-utils/convertAndInjectContent';
import { readFileAndCheckPrePublishSlug } from './content-render-utils/readFileAndCheckPrePublishSlug';

registerPlugin('render', 'contentFolder', contentRenderPlugin);

export async function contentRenderPlugin(html: string, route: HandledRoute): Promise<string> {
  const file = route.templateFile;
  try {
    const extension = file.split('.').pop();
    const { fileContent } = await readFileAndCheckPrePublishSlug(file);
    return convertAndInjectContent(html, fileContent, extension, route);
  } catch (e) {
    logWarn(`Error, while rendering content for "${yellow(route.route)}" from file: "${yellow(file)}"`);
    console.error(e);
  }
  return html;
}
