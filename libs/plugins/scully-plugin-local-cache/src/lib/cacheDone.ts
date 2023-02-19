/* eslint-disable no-prototype-builtins */
import { log, stopProgress, yellow } from '@scullyio/scully';
import { usageStatistics as stats } from './usageStatistics.js';

export const localCacheDone = async () => {
  /**  */
  // await logToFile('{}]');
  stopProgress();

  log(`
--------------------------------------------------------
  Local cache statistics:
--------------------------------------------------------
  requests: ${yellow(stats.requests.toLocaleString('en-us').padStart(8, ' '))}
  hits:     ${yellow(stats.hit.toLocaleString('en-us').padStart(8, ' '))}
  misses:   ${yellow(stats.mis.toLocaleString('en-us').padStart(8, ' '))}

  Traffic over wire: ${yellow(
    Math.floor(stats.traffic / 1024 / 1024)
      .toLocaleString('en-us')
      .padStart(8, ' ')
  )}Mb

  hit ratio: ${yellow(
    Math.ceil(stats.hit / (stats.requests / 100))
      .toLocaleString('en-us')
      .padStart(8, ' ')
  )}%
  mis ratio: ${yellow(
    Math.floor(stats.mis / (stats.requests / 100))
      .toLocaleString('en-us')
      .padStart(8, ' ')
  )}%
--------------------------------------------------------`);
};
