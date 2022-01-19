import { ScullyConfig } from 'libs/scully/src/index.js';
import { cpus } from 'os';
import { config as original } from './scully/scully.sample-blog.config.js';

export const config: Promise<Partial<ScullyConfig>> = (async () => {
  const config = Object.assign({}, await original);

  config.routes['/demo/:id'].numberOfPages = 5000;
  config.routes['/user/:userId'].userId.resultsHandler = undefined;
  /** crank it up a notch, more threads seems more likely to fail. */
  config.maxRenderThreads = cpus().length * 4;
  return config;
})();
