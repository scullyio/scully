import {watch} from 'chokidar';
import {copy, remove} from 'fs-extra';
import {join} from 'path';
import {Observable} from 'rxjs';
import {debounceTime, filter, tap} from 'rxjs/operators';
import {restartStaticServer, startScullyWatchMode} from '../watchMode';
import {baseFilter} from './cli-options';
import {scullyConfig} from './config';
import {createFolderFor} from './createFolderFor';
import {green, log, logWarn} from './log';

export async function checkChangeAngular(
  folder = join(scullyConfig.homeFolder, scullyConfig.distFolder) ||
    join(scullyConfig.homeFolder, './dist/browser'),
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
      filter(r => r.fileName.includes(filename)),
      filter(r => !r.fileName.includes('scully-routes.json')),
      /** give the CLI some time to finnish */
      debounceTime(1000),
      // tap(console.log),
      tap(() => moveDistAngular(folder, scullyConfig.outDir, {reset}, watch))
      // take(2)
    )
    .subscribe({
      complete: async () => {
        // await moveDistAngular(folder, scullyConfig.outDir);
      },
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

// tslint:disable-next-line:no-shadowed-variable
export async function moveDistAngular(src, dest, {reset = true, removeStaticDist = false}, watch = false) {
  try {
    // delete files
    if (removeStaticDist) {
      logWarn(`Cleaned up ${dest} folder.`);
      await remove(dest);
    }
    // make sure the static folder exists
    createFolderFor(dest);
    await copy(src, dest);
    log(`${green(` ☺  `)} new Angular build imported`);
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
