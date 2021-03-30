import { Job } from './job';
import { TaskWorker } from './TaskWorker';


export async function handleJobs(jobs: Job[], pool: TaskWorker[]) {
  // const pool = getPool(scriptFile, poolSize);
  let tasks = [];

  /** start max amount of initial jobs */
  const x = Math.min(pool.length, jobs.length);
  for (let i = 0; i < x; i += 1) {
    jobs[i].startWithWorker(pool[i]);
    tasks.push(jobs[i].done.then(() => jobs[i]));
  }

  let limit = tasks.length;
  while (jobs.some((j) => j.pending)) {
    const jobDone = await Promise.race(tasks);
    const nextJob = jobs.find((row) => row.pending && !row.started);
    if (nextJob) {
      nextJob.startWithWorker(jobDone.worker!);
      jobDone.worker = undefined;
    }
    tasks = jobs.filter((row) => row.pending && row.started).map((task) => task.done.then(() => task));
  }

  await Promise.all(tasks);
  return Promise.all(jobs.map((j) => j.done));
}
