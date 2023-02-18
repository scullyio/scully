import { watch } from 'chokidar';
import { join } from 'path';
import { debounceTime, filter, Observable, tap } from 'rxjs';
import { baseFilter } from './cli-options.js';
import { scullyConfig } from './config.js';
import { createFolderFor } from './createFolderFor.js';
import { existFolder } from './fsFolder.js';
import { logOk } from './log.js';
import { restartStaticServer, startScullyWatchMode } from './startup/watchMode.js';

import fsExtra from 'fs-extra';
const { copy, remove } = fsExtra;

export async function checkChangeAngular(
  folder = join(scullyConfig.homeFolder, scullyConfig.distFolder) || join(scullyConfig.homeFolder, './dist/browser'),
  reset = true,
  // tslint:disable-next-line:no-shadowed-variable
  watch = false
) {
  reWatch(folder, reset, watch);
}

// tslint:disable-next-line:no-shadowed-variable
function reWatch(folder, reset = true, watch = false) {
  const filename = join(folder);
  // watching 1 folder level above.
  watchFolder(join(folder, '../'))
    .pipe(
      // TODO test on mac, figure out what's coming in.
      // only act upon changes of the actual folder I'm interested in.
      filter((r) => r.fileName.includes(filename)),
      filter((r) => !r.fileName.includes('scully-routes.json')),
      /** give the CLI some time to finnish */
      debounceTime(1000),
      // tap(console.log),
      tap(() => moveDistAngular(folder, scullyConfig.outDir, { reset }, watch))
      // take(2)
    )
    .subscribe({
      complete: async () => {
        // await moveDistAngular(folder, scullyConfig.outDir);
      },
    });
}

function watchFolder(folder): Observable<{ eventType: string; fileName: string }> {
  return new Observable((obs) => {
    let watcher;
    try {
      watcher = watch(folder).on('all', (eventType, fileName) => {
        obs.next({ eventType, fileName });
      });
    } catch (e) {
      obs.error(e);
    }
    return () => watcher.close();
  });
}

// tslint:disable-next-line:no-shadowed-variable
export async function moveDistAngular(src, dest, { reset = true, removeStaticDist = false }, watch = false) {
  try {
    // delete files
    if (removeStaticDist) {
      logOk(`${dest} folder successfully cleaned`);
      await remove(dest);
    }
    // make sure the static folder exists
    createFolderFor(dest);
    await copy(src, dest);
    logOk(`new Angular build files imported`);

    const source404 = join(src, 'index.html');
    const page404 = join(dest, '404.html');
    if (!existFolder(page404)) {
      /** only add a 404 if there isn't one */
      await copy(source404, page404);
      logOk(`copied index.html to 404.html`);
    }
    if (reset) {
      restartStaticServer();
    } else if (watch) {
      startScullyWatchMode(baseFilter);
    }
  } catch (e) {
    /**
     * Ignore errors.
     * Those are probably cause by too fast iterations
     * TODO: make sure this is solid
     */
  }
}
