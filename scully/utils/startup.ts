import {generateAll} from './defaultAction';
import {ScullyConfig} from './interfacesandenums';
import {performance, PerformanceObserver} from 'perf_hooks';
import {log, yellow} from './log';

/**
 * Starts the entire process
 * @param config:ScullyConfig
 */
export const startScully = (config?: Partial<ScullyConfig>) => {
  let routeCount = 0;
  return new Promise(resolve => {
    performance.mark('start');
    const obs = new PerformanceObserver((list, observer) => {
      const duration = list.getEntries()[0].duration;
      performance.clearMarks();
      observer.disconnect();
      resolve({routeCount, duration});
    });
    obs.observe({entryTypes: ['measure'], buffered: true});
    generateAll(config).then(routes => {
      routeCount = routes.length;
      performance.mark('stop');
      performance.measure('duration', 'start', 'stop');
    });
  }).then(({routeCount: numberOfRoutes, duration}) => {
    // tslint:disable-next-line:variable-name
    const seconds = duration / 1000;
    const routesProSecond = Math.ceil((numberOfRoutes / seconds) * 100) / 100;
    const singleTime = duration / numberOfRoutes;
    log(`
Generating took ${yellow(Math.floor(seconds * 100) / 100)} seconds for ${yellow(numberOfRoutes)} pages:
  That is ${yellow(routesProSecond)} pages per second,
  or ${yellow(Math.ceil(singleTime))} milliseconds for each page.
`);
  });
};
