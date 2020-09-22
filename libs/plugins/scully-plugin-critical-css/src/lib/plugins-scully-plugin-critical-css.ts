import { HandledRoute, logWarn, registerPlugin, yellow, getMyConfig } from '@scullyio/scully';

import critical from 'critical';
import { IncomingMessage } from 'http';

export const criticalCSS = 'criticalCss';

registerPlugin('render', criticalCSS, async (incomingHtml: string, route: HandledRoute) => {
  const { html, css, uncritical } = critical.generate({ html: incomingHtml });

  return html;
});
