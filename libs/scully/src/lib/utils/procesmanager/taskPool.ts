import { Job } from '.';
import { green, log, scullyConfig, printProgress } from '..';
import { TaskWorker } from './TaskWorker';
import { handleJobs } from "./handleJobs"

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

export async function runJobInPool(poolOrTaskPath: TaskWorker[] | string, job: Job) {
  const pool = typeof poolOrTaskPath === 'string' ? taskPools[poolOrTaskPath] : poolOrTaskPath;
  if (!pool) {
    throw new Error(`No pool found for ${poolOrTaskPath}`);
  }
  const { taskName, taskValue, trigger } = job;
  const jobs = pool.map(() => new Job(taskName, taskValue, trigger));
  return handleJobs(jobs, pool);
}
export async function terminateAllPools(): Promise<void> {
  printProgress(undefined, 'stopping workers');
  const pools = Object.values(taskPools).map(terminatePool);
  await Promise.all(pools);
  // log(`  ${green('✔')} Workers gracefully stopped`);
}

export function terminatePool(pool: TaskWorker[]): Promise<void> {
  printProgress(undefined, 'stopping workers');
  return Promise.all(
    pool.map((p) => p.terminate())
  ).then(() => undefined);

}
