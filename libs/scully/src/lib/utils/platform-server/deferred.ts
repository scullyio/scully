/**
 * Helper to create a deferred object.
 * @returns A promise, which is initially in the pending state.
 */
export class Deferred<T> {
  resolve!: (result?: any) => void;
  reject!: (error?: any) => void;
  promise = new Promise<T>((rs, rj) => {
    this.resolve = rs;
    this.reject = rj;
  });
}
