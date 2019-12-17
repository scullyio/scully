import {existsSync, readFileSync} from 'fs';
import {join} from 'path';
import {Observable} from 'rxjs';
import {throttleTime, filter, tap} from 'rxjs/operators';
import {log, red} from '../utils/log';
import {watch} from 'chokidar';
import {scullyConfig} from './config';
import {jsonc} from 'jsonc';
import {startScullyWatchMode} from '../scully';


// tslint:disable-next-line:no-shadowed-variable
export async function checkStaticFolder() {

  // tslint:disable-next-line:variable-name
  let _config;

  // TODO: this try and catch is only for wait to one change from @Sander
  try {
    const config = require(join(scullyConfig.homeFolder, 'scully.config.js'));
    _config = config;
    console.log(config);
  } catch (e) {
    _config = {
      /** projectRoot is mandatory! */
      projectRoot: './projects/sampleBlog/src/app',
      routes: {
        '/blog/:slug': {
          type: 'contentFolder',
          slug: {
            folder: './blog'
          }
        },
      }
    };
  }

  const folder = [];
  // tslint:disable-next-line:forin
  for (const property in _config.routes) {
    if (_config.routes[property].type === 'contentFolder') {
      // @ts-ignore
      const fileName = _config.routes[property].slug.folder.replace('./', '');
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
    if (!existsSync(src)) {
      return false;
    }
    return true;
  } catch (e) {
    return false;
  }
}
