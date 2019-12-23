import {existsSync} from 'fs';
import {join} from 'path';
import {Observable} from 'rxjs';
import {filter, throttleTime} from 'rxjs/operators';
import {log, red} from './log';
import {watch} from 'chokidar';
import {scullyConfig} from './config';
import {startScullyWatchMode} from '../scully';


// tslint:disable-next-line:no-shadowed-variable
export async function checkStaticFolder() {

  try {
    const config = scullyConfig.routes; // require(join(scullyConfig.homeFolder, 'scully.config.js'));
    const folder = [];
    // tslint:disable-next-line:forin
    for (const property in config) {
      if (config[property].type === 'contentFolder') {
        // @ts-ignore
        const fileName = config[property].slug.folder.replace('./', '');
        console.log(fileName);
        if (!folder.find(f => f === fileName)) {
          folder.push(fileName);
          if (existFolder(fileName)) {
            reWatch(fileName);
          } else {
            log(`${red(`${fileName} folder not found`)}.`);
          }
        }
      }
    }
  } catch (e) {
   console.log('error into read the config', e);
  }
}

function reWatch(folder) {
  const filename = join(folder);
  watchFolder(filename)
    .pipe(
      // TODO test on mac, figure out what's coming in.
      // only act upon changes of the actual folder I'm interested in.
      filter(r => r.fileName.startsWith(folder)),
      throttleTime(3000)
    )
    .subscribe({
      next: (v) => {
        if (v.eventType !== 'addDir') {
          console.log('--------------------------------------------------');
          console.log(`New ${v.eventType} in ${v.fileName}, re run scully.`);
          console.log('--------------------------------------------------');
          startScullyWatchMode();
        }
      }
    });
}

function watchFolder(folder): Observable<{eventType: string; fileName: string}> {
  return new Observable(obs => {
    let watcher;
    try {
      watcher = watch(folder).on('all', (eventType, fileName) => {
        obs.next({eventType, fileName});
      });
    } catch (e) {
      obs.error(e);
    }
    return () => watcher.close();
  });
}

export function existFolder(src) {
  try {
    return existsSync(src);
  } catch (e) {
    return false;
  }
}
