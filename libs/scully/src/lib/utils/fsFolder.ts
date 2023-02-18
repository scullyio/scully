import { existsSync, watch } from 'fs';
import { join } from 'path';
import { Observable, throttleTime } from 'rxjs';
import { scullyConfig } from './config.js';
import { log, red } from './log.js';
import { startScullyWatchMode } from './startup/watchMode.js';

// tslint:disable-next-line:no-shadowed-variable
export async function checkStaticFolder() {
  try {
    const config = scullyConfig.routes; // require(join(scullyConfig.homeFolder, 'scully.config.js'));
    const folder = [];
    // tslint:disable-next-line:forin
    for (const property in config) {
      if (config[property].type === 'contentFolder') {
        // tslint:disable-next-line:forin
        for (const slug in config[property]) {
          if (config[property][slug].folder !== undefined) {
            // @ts-ignore
            const fileName = config[property][slug].folder.replace('./', '');
            if (!folder.find((f) => f === fileName)) {
              folder.push(fileName);
              if (existFolder(fileName)) {
                reWatch(fileName, property);
              } else {
                log(`${red(`${fileName} folder not found`)}.`);
              }
            }
          }
        }
      }
    }
  } catch (e) {
    console.log('error into read the config', e);
  }
}

function reWatch(folder, url) {
  const filename = join(folder);
  watchFolder(filename)
    .pipe(throttleTime(10000))
    .subscribe({
      next: (v) => {
        console.log('--------------------------------------------------');
        console.log(`New ${v.eventType} in ${v.fileName}, re run scully.`);
        console.log('--------------------------------------------------');
        startScullyWatchMode(url);
      },
    });
}

function watchFolder(folder): Observable<{ eventType: string; fileName: string }> {
  console.log('--------------------------------------------------');
  console.log(`Watching ${folder} for change.`);
  console.log('--------------------------------------------------');
  return new Observable((obs) => {
    let watcher;
    try {
      watcher = watch(folder, (event, fname) => {
        obs.next({ eventType: event, fileName: fname });
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
