// import * as sentry from '@sentry/node';
import { createRequire } from 'module';
import { readDotProperty } from './scullydot.js';
const require = createRequire(import.meta.url);

let sentry: any;

let initDone = false;
async function init() {
  if (!initDone) {
    initDone = true;
    sentry = require('@sentry/node');
    sentry.init({ dsn: 'https://b688cf4773574b069f6031e108c6511c@o426873.ingest.sentry.io/5370296' });
  }
}

export const captureMessage = async (msg: string): Promise<string> => {
  if (readDotProperty('allowErrorCollect')) {
    init();
    return sentry.captureMessage(msg);
  }
  return '';
};

export const captureException = async (e: Error): Promise<string> => {
  if (readDotProperty('allowErrorCollect')) {
    init();
    return sentry.captureException(e);
  }
};

export const flush = async (): Promise<boolean> => {
  if (readDotProperty('allowErrorCollect')) {
    init();
    return sentry.flush();
  }
};
