import { scullyConfig } from '..';
import { TaskWorker } from './TaskWorker';

const taskPools = {} as {
  [taskPath: string]: TaskWorker[];
};
export function getPool(taskPath: string, poolSize: number = scullyConfig.maxRenderThreads) {
  if (!taskPools[taskPath]) {
    taskPools[taskPath] = [] as TaskWorker[];
  }
  const _pool = taskPools[taskPath];
  while (poolSize > _pool.length) {
    _pool.push(new TaskWorker(taskPath));
  }
  //TODO: add code to reduce pool size
  return _pool;
}


export function terminatePool(pool: TaskWorker[]): Promise<void> {
  return Promise.all(
    pool.map((p) => p.terminate())
  ).then(() => undefined);

}
