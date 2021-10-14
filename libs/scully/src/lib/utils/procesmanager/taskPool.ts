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
  return _pool;
}


