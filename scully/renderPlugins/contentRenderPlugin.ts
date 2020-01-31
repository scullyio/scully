import {registerPlugin} from '../pluginManagement/pluginRepository';
import {HandledRoute} from '../routerPlugins/addOptionalRoutesPlugin';
import {logWarn, yellow} from '../utils/log';
import {getScript} from './content-render-utils/getScript';
import {handleFile} from './content-render-utils/handleFile';
import {insertContent} from './content-render-utils/insertContent';
import {readFileAndCheckPrePublishSlug} from './content-render-utils/readFileAndCheckPrePublishSlug';

registerPlugin('render', 'contentFolder', contentRenderPlugin);

const scullyBegin = '<!--scullyContent-begin-->';
const scullyEnd = '<!--scullyContent-end-->';

export async function contentRenderPlugin(html: string, route: HandledRoute) {
  const file = route.templateFile;
  try {
    const extension = file.split('.').pop();
    const {meta, fileContent} = await readFileAndCheckPrePublishSlug(file, route);
    route.data = {...route.data, ...meta};
    const additionalHTML = await handleFile(extension, fileContent);
    return insertContent(scullyBegin, scullyEnd, html, additionalHTML, getScript());
  } catch (e) {
    logWarn(
      `Error, probably missing "${yellow('<scully-content>')}" or "${yellow(
        'httpClientModule'
      )}" for ${yellow(file)}`
    );
  }
}
