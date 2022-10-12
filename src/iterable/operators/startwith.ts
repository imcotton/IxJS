import { IterableX } from '../iterablex';
import { MonoTypeOperatorFunction } from '../../interfaces';

export class StartWithIterable<TSource> extends IterableX<TSource> {
  private _source: Iterable<TSource>;
  private _args: TSource[];

  constructor(source: Iterable<TSource>, args: TSource[]) {
    super();
    this._source = source;
    this._args = args;
  }

  *[Symbol.iterator]() {
    yield* this._args;
    yield* this._source;
  }
}

/**
 * Prepend a value to an iterable sequence.
 *
 * @template TSource The type of the elements in the source sequence.
 * @param {...TSource[]} args Elements to prepend to the specified sequence.
 * @returns {MonoTypeOperatorFunction<TSource>} The source sequence prepended with the specified values.
 */
export function startWith<TSource>(...args: TSource[]): MonoTypeOperatorFunction<TSource> {
  return function startWithOperatorFunction(source: Iterable<TSource>): IterableX<TSource> {
    return new StartWithIterable<TSource>(source, args);
  };
}
