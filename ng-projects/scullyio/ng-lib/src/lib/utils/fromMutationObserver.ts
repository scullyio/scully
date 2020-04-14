import {Observable} from 'rxjs';
/**
 * Returns an observable that fires a mutation when the domMutationObserves does that.
 * if flattens the mutations to make handling easier, so you only get 1 mutationRecord at a time.
 * @param elm the elm to observe with a mutationObserver
 * @param config the config for the mutation-observer
 */
export function fromMutationObserver(
  elm: HTMLElement,
  config: MutationObserverInit
): Observable<MutationRecord> {
  return new Observable(obs => {
    const observer = new MutationObserver(mutations => mutations.forEach(mutation => obs.next(mutation)));
    observer.observe(elm, config);
    return () => observer.disconnect();
  });
}
