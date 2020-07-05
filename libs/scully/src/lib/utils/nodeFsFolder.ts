/*
 * NodeFsFolder
 * read directorys and files
 * reactive 100%
 * */
import { existsSync, watch } from 'fs';
import { join } from 'path';
import { Observable } from 'rxjs';
import { throttleTime } from 'rxjs/operators';
import { log, red } from './log';

// tslint:disable-next-line:no-shadowed-variable
function readPath(folder: string) {
  // tslint:disable-next-line:variable-name
  const _path: string = join(__dirname, folder);
  if (existFolder(_path)) {
    return true;
  } else {
    log(`${red(`${folder} folder not found, directory ${_path}`)}.`);
    return false;
  }
}

function existFolder(src) {
  try {
    return existsSync(src);
  } catch (e) {
    return false;
  }
}

function watchFolder(
  folder
): Observable<{ eventType: string; fileName: string }> {
  return new Observable((obs) => {
    let watcher;
    try {
      watcher = watch(folder, (event, fname) => {
        console.log('--------------------------------------------------');
        console.log(`New ${event} in ${fname}, re run scully.`);
        console.log('--------------------------------------------------');
        obs.next({ eventType: event, fileName: fname });
      });
    } catch (e) {
      obs.error(e);
    }
    return () => watcher.close();
  });
}

export function startWatch(folder: string) {
  console.log('start process', folder);
  if (readPath(folder)) {
    const fxwatch = this.watchFolder(folder);
    fxwatch.pipe(throttleTime(3000)).subscribe((x) => {
      console.log(x);
    });
  }
}
