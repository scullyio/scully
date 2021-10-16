/* eslint-disable @typescript-eslint/no-use-before-define */
import { performance, PerformanceObserver, PerformanceObserverCallback } from 'perf_hooks';
import { findPlugin } from '../pluginManagement';
import { reloadAll } from '../watchMode';
import { captureException } from './captureMessage';
import { ssl, watch, stats } from './cli-options';
import { scullyConfig } from './config';
import { generateAll } from './handlers/defaultAction';
import { green, log, printProgress, startProgress, stopProgress, yellow } from './log';
import { performanceIds } from './performanceIds';
import { askUser, readDotProperty, writeDotProperty } from './scullydot';
import { join } from 'path';
import { writeFile, writeFileSync } from 'fs';

/**
 * Starts the entire process
 * @param config:ScullyConfig
 */
export const startScully = async (url?: string) => {
  /** any question to ask to user, do it here. After this place, the parallel task prohibit proper entry */
  if (readDotProperty('allowErrorCollect') === undefined) {
    const answer = await askUser('Would you allow Scully to collect anonymous errors to improve our services? (Y/n)');
    if (answer !== undefined) {
      writeDotProperty('allowErrorCollect', answer.trim().toLowerCase().startsWith('y') || answer.trim() === '');
    }
  }
  startProgress();
  printProgress(false, 'warming up');
  return new Promise((resolve) => {
    performance.mark('startDuration');
    performanceIds.add('Duration');
    let innerResolve;
    const durationProm = new Promise((r) => (innerResolve = r));
    const obs = new PerformanceObserver(measurePerformance(innerResolve));
    obs.observe({ entryTypes: ['measure'], buffered: true });
    const numberOfRoutesProm = findPlugin(generateAll)(url)
      .then((routes) => {
        printProgress(false, 'calculate timings');
        performance.mark('stopDuration');
        /** measure all performance checks */
        try {
          const i = performanceIds.size;
          for (const id of performanceIds) {
            performance.measure(id, `start${id}`, `stop${id}`);
          }
        } catch (e) {
          console.error(e);
          captureException(e);
        }
        return routes.length;
      })
      .catch(() => 0);
    Promise.all([numberOfRoutesProm, durationProm])
      .then(([numberOfRoutes, durations]) => resolve({ numberOfRoutes, durations }));
    /** stop progress spinner. */
    numberOfRoutesProm.then(() => stopProgress());

  })
    .then(displayAndWriteStats)
    .catch((e) => {
      // stopProgress();
      // console.error(e);
      captureException(e);
      process.exit(15);
    });
};

function displayAndWriteStats({ numberOfRoutes, durations }: { numberOfRoutes: number; durations: { [key: string]: number; }; }) {
  const duration = durations.Duration;
  // tslint:disable-next-line:variable-name
  const seconds = duration / 1000;
  const singleTime = duration / numberOfRoutes;
  const routesProSecond = Math.ceil((1000 / singleTime) * 100) / 100;
  // console.table(durations)
  stopProgress();
  reloadAll();
  log(`
Generating took ${yellow(Math.floor(seconds * 100) / 100)} seconds for ${yellow(numberOfRoutes)} pages:
  That is ${yellow(routesProSecond)} pages per second,
  or ${yellow(Math.ceil(singleTime))} milliseconds for each page.
  ${durations.Traverse
      ? `
  Finding routes in the angular app took ${logSeconds(durations.Traverse)}`
      : ''}
  Pulling in route-data took ${logSeconds(durations.Discovery)}
  Rendering the pages took ${logSeconds(durations.Render)}

${watch
      ? `The server is available on "${yellow(`http${ssl ? 's' : ''}://${scullyConfig.hostName}:${scullyConfig.staticPort}/`)}"
${yellow('------------------------------------------------------------')}
Press ${green('r')} for re-run Scully, or ${green('q')} for close the servers.
${yellow('------------------------------------------------------------')}`
      : ''}
`);
  if (stats) {
    const scullyStatsFilePath = join(scullyConfig.homeFolder, 'scullyStats.json');
    const pluginTimings = totalPluginTimes(durations);
    const scullyStats = {
      numberOfRoutes,
      generatingTime: Math.floor(seconds * 100) / 100,
      routesPerSecond: routesProSecond,
      findingRoutesAngular: durations.Traverse ? durations.Traverse / 1000 : '',
      routeDiscovery: durations.Discovery / 1000,
      renderingPages: durations.Render / 1000,
      pluginTimings,
    };
    Object.entries(pluginTimings).forEach(([name, duration]) => log(`${name.padEnd(40, ' ')} - ${(Math.floor(duration * 100) / 100).toString().padStart(10, ' ')}`)
    );
    writeFileSync(scullyStatsFilePath, JSON.stringify(scullyStats, undefined, 4));
  }
};


function measurePerformance(resolve: (value?: unknown) => void): PerformanceObserverCallback {
  return (list, observer) => {
    // get timings and round to 1/100 of a milliseconds.
    const durations = Object.fromEntries(list.getEntries().map((entry) => [entry.name, Math.floor(entry.duration * 100) / 100]));

    performance.clearMarks();
    observer.disconnect();
    performanceIds.clear();
    resolve(durations);
  };
}

function totalPluginTimes(durations: { [x: string]: number }) {
  return Object.entries(durations)
    .sort((a, b) => (a[0] < b[0] ? -1 : 1))
    .reduce((t, [name, dur]) => {
      if (name.startsWith('plugin-')) {
        const prop = name.slice(7).split('-')[0];
        if (!t[prop]) {
          t[prop] = +dur;
        } else {
          t[prop] += dur;
        }
      } else {
        t[name] = (t[name] || 0) + dur;
      }
      return t;
    }, {} as { [x: string]: number });
}

function logSeconds(milliSeconds) {
  if (milliSeconds < 1000) {
    return yellow(Math.floor(milliSeconds)) + ' milliseconds';
  }
  return yellow(Math.floor(milliSeconds / 10) / 100) + ' seconds';
}
