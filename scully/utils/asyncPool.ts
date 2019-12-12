/**
 * takes an array, and runs **MaxParralellTasks** in parralell until all tasks are node
 * @param MaxParralellTasks
 * @param array
 * @param taskFn
 */
export async function asyncPool<T>(
  MaxParralellTasks: number,
  array: T[],
  taskFn: (x: T) => Promise<T>
): Promise<T[]> {
  const ret = [];
  const executing = [];
  for (const item of array) {
    const p = taskFn(item);
    ret.push(p);
    const e = p.then(() => executing.splice(executing.indexOf(e), 1));
    executing.push(e);
    if (executing.length >= MaxParralellTasks) {
      await Promise.race(executing);
    }
  }
  return Promise.all(ret);
}
