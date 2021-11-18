import { config as original } from './scully.sample-blog.config';
import { enablePW } from '@scullyio/scully/src/lib/renderPlugins/playwrightUtils'

export const config = Object.assign({}, original);
enablePW();
config.puppeteerLaunchOptions = {
  channel: '',
  browser: 'chromium',
}

