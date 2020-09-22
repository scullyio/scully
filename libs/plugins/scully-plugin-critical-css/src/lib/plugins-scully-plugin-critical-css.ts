import { HandledRoute, logWarn, registerPlugin, yellow, getMyConfig, scullyConfig } from '@scullyio/scully';

import * as critical from 'critical';
import { IncomingMessage } from 'http';
import { join } from 'path';

export const criticalCSS = 'criticalCss';

registerPlugin('render', criticalCSS, async (incomingHtml: string, route: HandledRoute) => {
  try {
    // eslint-disable-next-line no-var
    var { html, css, uncritical } = await critical.generate({
      html: incomingHtml,
      base: scullyConfig.outDir,
      css: join(scullyConfig.outDir, '/styles.css'),
      assetPaths: [scullyConfig.distFolder],
      rebase: true,
    });
    console.log(css);
  } catch (e) {
    console.log(e);
    return incomingHtml;
  }

  return html;
});
