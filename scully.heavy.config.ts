import { config as original } from './scully.sample-blog.config';

export const config = Object.assign({}, original);

config.routes['/demo/:id'].numberOfPages = 50000;
config.routes['/user/:userId'].userId.resultsHandler = undefined;
/** crank it up a notch, more threads seems more likely to fail. */
config.maxRenderThreads = 32;
