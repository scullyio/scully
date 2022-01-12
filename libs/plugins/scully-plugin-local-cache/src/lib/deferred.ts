export class Deferred<T> {
  resolve: (T?) => void;
  reject: (error?: any) => void;
  promise = new Promise<T>((rs, rj) => {
    this.resolve = rs;
    this.reject = rj;
  });
}
