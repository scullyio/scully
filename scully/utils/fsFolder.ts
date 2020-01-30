import {existsSync} from 'fs';
import {join} from 'path';
import {Observable} from 'rxjs';
import {filter, throttleTime} from 'rxjs/operators';
import {log, red} from './log';
import {watch} from 'chokidar';
import {scullyConfig} from './config';
import {startScullyWatchMode} from '../watchMode';
import * as fs from 'fs';

// tslint:disable-next-line:no-shadowed-variable
export async function checkStaticFolder() {
  try {
    const config = scullyConfig.routes; // require(join(scullyConfig.homeFolder, 'scully.config.js'));
    const folder = [];
    let i: number;
    // tslint:disable-next-line:no-conditional-assignment no-unused-expression
    while (((i = 0), i < 20, i++)) {
      console.log('--------------------------------------------------');
    }
    // tslint:disable-next-line:forin
    for (const property in config) {
      if (config[property].type === 'contentFolder') {
        // tslint:disable-next-line:forin
        for (const slug in config[property]) {
          if (config[property][slug].folder !== undefined) {
            // @ts-ignore
            const fileName = config[property].slug.folder.replace('./', '');
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
      next: v => {
        if (v.eventType !== 'addDir') {
          console.log('--------------------------------------------------');
          console.log(`New ${v.eventType} in ${v.fileName}, re run scully.`);
          console.log('--------------------------------------------------');
          startScullyWatchMode();
        }
      },
    });
}

function watchFolder(folder): Observable<{eventType: string; fileName: string}> {
  return new Observable(obs => {
    let watcher;
    try {
      watcher = fs.watch(folder, (event, fname) => {
        console.log('--------------------------------------------------');
        console.log(`New ${event} in ${fname}, re run scully.`);
        console.log('--------------------------------------------------');
        obs.next({eventType: event, fileName: fname});
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
