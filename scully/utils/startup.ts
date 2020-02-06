import {performance, PerformanceObserver, PerformanceObserverCallback} from 'perf_hooks';
import {generateAll} from './defaultAction';
import {log, yellow} from './log';
import {performanceIds} from './performanceIds';
import {watch} from './cli-options';
import {scullyConfig} from './config';

/**
 * Starts the entire process
 * @param config:ScullyConfig
 */
export const startScully = (url?: string) => {
  return new Promise(resolve => {
    performance.mark('startDuration');
    performanceIds.add('Duration');
    let innerResolve;
    const durationProm = new Promise(r => (innerResolve = r));
    const obs = new PerformanceObserver(measurePerformance(innerResolve));
    obs.observe({entryTypes: ['measure'], buffered: true});
    const numberOfRoutesProm = generateAll(url)
      .then(routes => {
        performance.mark('stopDuration');
        /** measure all performance checks */
        try {
          [...performanceIds.values()].forEach(id => performance.measure(id, `start${id}`, `stop${id}`));
        } catch (e) {
          console.error(e);
        }
        return routes.length;
      })
      .catch(() => 0);
    Promise.all([numberOfRoutesProm, durationProm]).then(([numberOfRoutes, durations]) =>
      resolve({numberOfRoutes, durations})
    );
  }).then(({numberOfRoutes, durations}: {numberOfRoutes: number; durations: {[key: string]: number}}) => {
    const duration = durations.Duration;
    // tslint:disable-next-line:variable-name
    const seconds = duration / 1000;
    const singleTime = duration / numberOfRoutes;
    const routesProSecond = Math.ceil((1000 / singleTime) * 100) / 100;
    log(`
Generating took ${yellow(Math.floor(seconds * 100) / 100)} seconds for ${yellow(numberOfRoutes)} pages:
  That is ${yellow(routesProSecond)} pages per second,
  or ${yellow(Math.ceil(singleTime))} milliseconds for each page.
  ${
    durations.Traverse
      ? `
  Finding routes in the angular app took ${logSeconds(durations.Traverse)}`
      : ''
  }
  Pulling in route-data took ${logSeconds(durations.Discovery)}
  Rendering the pages took ${logSeconds(durations.Render)}

${
  watch
    ? `The server is available on "${yellow(`http://${scullyConfig.hostName}:${scullyConfig.staticport}/`)}"`
    : ''
}
`);
  });
};

function measurePerformance(resolve: (value?: unknown) => void): PerformanceObserverCallback {
  return (list, observer) => {
    const durations = list
      .getEntries()
      .reduce((acc, entry) => ({...acc, [entry.name]: Math.floor(entry.duration * 100) / 100}), {});
    // console.log(durations);
    performance.clearMarks();
    observer.disconnect();
    performanceIds.clear();
    resolve(durations);
  };
}

function logSeconds(milliSeconds) {
  if (milliSeconds < 1000) {
    return yellow(Math.floor(milliSeconds)) + ' milliseconds';
  }
  return yellow(Math.floor(milliSeconds / 10) / 100) + ' seconds';
}
