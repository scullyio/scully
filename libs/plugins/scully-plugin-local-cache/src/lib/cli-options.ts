import { command } from 'yargs';

const options = command('cache', 'control cache settings', {
  cacheClear: {
    alias: ['cc', 'cache-clear', 'clear-cache', 'cacheClear', 'clearCache'],
    boolean: true,
    default: false,
    description: 'Clear te complete cache ',
  },
  list: {
    boolean: true,
    default: false,
    description: 'list local cache content urls',
  },
  noCache: {
    alias: ['nc', 'no-cache'],
    boolean: true,
    default: false,
    description: 'do not use caching',
  },
}).help().argv;
export const { list, cacheClear, noCache } = options;
