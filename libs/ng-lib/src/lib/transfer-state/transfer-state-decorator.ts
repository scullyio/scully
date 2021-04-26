import { injectGlobalTransferStateService, TransferStateService } from './transfer-state.service';
import { Observable } from 'rxjs';

// tslint:disable:no-bitwise
// From https://stackoverflow.com/a/52171480
function cyrb53(str, seed = 0) {
  let h1 = 0xdeadbeef ^ seed;
  let h2 = 0x41c6ce57 ^ seed;

  for (let i = 0, ch; i < str.length; i++) {
    ch = str.charCodeAt(i);
    h1 = Math.imul(h1 ^ ch, 2654435761);
    h2 = Math.imul(h2 ^ ch, 1597334677);
  }

  h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
  h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);

  return 4294967296 * (2097151 & h2) + (h1 >>> 0);
}
// tslint:enable:no-bitwise

export function ScullyTransferState(name?: string) {
  return <K extends string, T extends Record<K, Observable<any>>>(target: T, propertyKey: K) => {
    const defaultAttributes = {
      configurable: true,
      enumerable: true,
    };

    Object.defineProperty(target, propertyKey, {
      ...defaultAttributes,
      set: (value) => {
        if (!(value instanceof Observable)) {
          throw new TypeError('TransferState decorator cannot decorate property that is not of type Observable');
        }

        const transferStateService: TransferStateService = injectGlobalTransferStateService();
        const wrappedValue = transferStateService.useScullyTransferState(name ?? getStateKey(target, propertyKey), value);

        Object.defineProperty(target, propertyKey, {
          ...defaultAttributes,
          writable: true,
          value: wrappedValue,
        });
      },
    });
  };
}

function getStateKey(target: object, propertyKey: string): string {
  return `${cyrb53(target.constructor.toString()).toString(36)}_${propertyKey}`;
}
