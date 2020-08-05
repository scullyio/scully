import sentry from '@sentry/node';
import { readDotProperty } from './scullydot';

export const captureMessage = (msg: string): string => {
  if (readDotProperty('allowErrorCollect')) {
    return sentry.captureMessage(msg);
  }
  return '';
};

export const captureException = (e: Error): string => {
  if (readDotProperty('allowErrorCollect')) {
    return sentry.captureException(e);
  }
};

export const flush = (): Promise<boolean> => {
  if (readDotProperty('allowErrorCollect')) {
    return sentry.flush();
  }
};
