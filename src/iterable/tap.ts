'use strict';

import { IterableX } from '../iterable';
import { PartialObserver } from '../observer';

class TapIterable<TSource> extends IterableX<TSource> {
  private _source: Iterable<TSource>;
  private _observer: PartialObserver<TSource>;

  constructor(source: Iterable<TSource>, observer: PartialObserver<TSource>) {
    super();
    this._source = source;
    this._observer = observer;
  }

  *[Symbol.iterator]() {
    const it = this._source[Symbol.iterator]();
    while (1) {
      let next;
      try {
        next = it.next();
      } catch (e) {
        if (this._observer.error) { this._observer.error(e); }
        throw e;
      }

      if (next.done) {
        if (this._observer.complete) { this._observer.complete(); }
        break;
      }

      if (this._observer.next) { this._observer.next(next.value); }
      yield next.value;
    }
  }
}

export function tap<TSource>(source: Iterable<TSource>, observer: PartialObserver<TSource>): IterableX<TSource> {
  return new TapIterable<TSource>(source, observer);
}