import {existsSync, readFileSync} from 'fs';
import {join} from 'path';
import {Observable} from 'rxjs';
import {throttleTime, filter} from 'rxjs/operators';
import {log, red} from '../utils/log';
import {watch} from 'chokidar';
import {scullyConfig} from './config';
import {jsonc} from 'jsonc';
import {startScullyWatchMode} from '../scully';


// tslint:disable-next-line:no-shadowed-variable
export async function checkStaticFolder() {

  // read scully.json for check plugin contentFolder
  const scullyJsonRAW = readFileSync(join(scullyConfig.homeFolder, 'scully.json')).toString();
  const scullyJson = jsonc.parse(scullyJsonRAW);
  const folder = [];
  // @ts-ignore
  for (const property in scullyJson.routes) {
    // @ts-ignore
    if (scullyJson.routes[property].type === 'contentFolder') {
      // @ts-ignore
      const fileName = scullyJson.routes[property].slug.folder.replace('./', '');
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

function reWatch(folder) {
  const filename = join(folder);
  watchFolder(filename)
    .pipe(
      // TODO test on mac, figure out what's coming in.
      // only act upon changes of the actual folder i'm intrested in.
      filter(r => r.fileName.startsWith(folder)),
      throttleTime(3000)
    )
    .subscribe({
      next: (v) => {
        if (v.eventType !== 'addDir') {
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
    if (!existsSync(src)) {
      return false;
    }
    return true;
  } catch (e) {
    return false;
  }
}
