'use strict';

import { IterableX } from '../iterable';

class ExpandIterable<TSource> extends IterableX<TSource> {
  private _source: Iterable<TSource>;
  private _fn: (value: TSource) => Iterable<TSource>;

  constructor(source: Iterable<TSource>, fn: (value: TSource) => Iterable<TSource>) {
    super();
    this._source = source;
    this._fn = fn;
  }

  *[Symbol.iterator]() {
    let q = [this._source];
    while (q.length > 0) {
      let src = q.shift();
      for (let item of src!) {
        q.push(this._fn(item));
        yield item;
      }
    }
  }
}

export function expand<TSource>(
    source: Iterable<TSource>,
    fn: (value: TSource) => Iterable<TSource>): IterableX<TSource> {
  return new ExpandIterable<TSource>(source, fn);
}