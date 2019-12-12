import {generateAll} from './defaultAction';
import {ScullyConfig} from './interfacesandenums';
import {performance, PerformanceObserver} from 'perf_hooks';
import {yellow, log} from './log';
import {HandledRoute} from '../routerPlugins/addOptionalRoutesPlugin';
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
      console.log(`Generating took ${yellow(`${Math.floor(duration / 1000)}`)} seconds`);
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
  }).then(({routeCount, duration}) => {
    // tslint:disable-next-line:variable-name
    const _duration = duration / 1000;
    const routesProSecond = Math.ceil((_duration / routeCount) * 100) / 100;
    const singleTime = duration / routeCount;
    log(`
Generating took ${yellow(`${Math.floor(_duration / 1000)}`)} seconds for ${yellow(routeCount)} pages:
  That is ${yellow(routesProSecond)} pages per second,
  or ${yellow(Math.ceil(singleTime))} milliseconds for each page.
`);
  });
};
