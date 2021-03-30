/** helpers for inside the actual worker */

export interface Tasks {
  [x: string]: (...msg: any[]) => any | Promise<any>;
}
