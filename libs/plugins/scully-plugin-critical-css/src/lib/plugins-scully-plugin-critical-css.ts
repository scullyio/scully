import { HandledRoute, logWarn, registerPlugin, scullyConfig, createFolderFor } from '@scullyio/scully';
import * as critical from 'critical';
import { join } from 'path';

export const criticalCSS = 'criticalCss';

registerPlugin('render', criticalCSS, async (incomingHtml: string, route: HandledRoute) => {
  try {
    const base = join(scullyConfig.outDir, route.route);
    const file = join(base, '/pagestyle.css');
    const assetPaths = [scullyConfig.outDir, join(scullyConfig.outDir, '/assets')];
    createFolderFor(file);
    const { html } = await critical.generate({
      html: incomingHtml,
      base,
      css: join(scullyConfig.outDir, '/styles.css'),
      assetPaths,
      // target: {
      //   css: file,
      // },
      // rebase: true,
      // extract: true,
      inlineImages: true,
      height: 1400,
      width: 1800,
      inline: {
        preload: true,
      },
    });
    return html;
    // console.log(css);
  } catch (e) {
    logWarn(`route: "${route.route}" could not inline CSS`, e);
  }
  return incomingHtml;
});
