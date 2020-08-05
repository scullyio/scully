import * as sentry from '@sentry/node';
import { readDotProperty } from './scullydot';

let initDone = false;
function init() {
  if (!initDone) {
    sentry.init({ dsn: 'https://b688cf4773574b069f6031e108c6511c@o426873.ingest.sentry.io/5370296' });
    initDone = true;
  }
}

export const captureMessage = (msg: string): string => {
  if (readDotProperty('allowErrorCollect')) {
    init();
    return sentry.captureMessage(msg);
  }
  return '';
};

export const captureException = (e: Error): string => {
  if (readDotProperty('allowErrorCollect')) {
    init();
    return sentry.captureException(e);
  }
};

export const flush = (): Promise<boolean> => {
  if (readDotProperty('allowErrorCollect')) {
    init();
    return sentry.flush();
  }
};
