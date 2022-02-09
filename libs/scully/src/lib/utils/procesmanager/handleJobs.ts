import { Job } from './job.js';
import { TaskWorker } from './TaskWorker.js';

export async function handleJobs(jobs: Job[], pool: TaskWorker[]) {
  // const pool = getPool(scriptFile, poolSize);
  let tasks = [] as Promise<Job>[];

  /** start max amount of initial jobs */
  const x = Math.min(pool.length, jobs.length);
  for (let i = 0; i < x; i += 1) {
    const job = jobs[i];
    job.startWithWorker(pool[i]);
    tasks.push(job.done.then(() => job));
  }

  /** keep processing until there are no pending jobs anymore */
  while (jobs.some(j => j.pending)) {
    const jobDone = await Promise.race(tasks);
    const nextJob = jobs.find(row => row.pending && !row.started);
    if (nextJob && jobDone.worker !== undefined) {
      nextJob.startWithWorker(jobDone.worker);
      jobDone.worker = undefined;
    }
    tasks = jobs.filter(row => row.pending && row.started).map(task => task.done.then(() => task));
  }

  /** wait for all active tasks to finish  */
  await Promise.all(tasks);
  return Promise.all(jobs.map(j => j.done));
}
