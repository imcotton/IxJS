import { IterableX } from '../../iterable';
import { defaultIfEmpty } from '../../iterable/defaultifempty';

function defaultIfEmptyProto<T>(
    this: IterableX<T>,
    defaultValue: T): IterableX<T> {
  return new IterableX(defaultIfEmpty<T>(this, defaultValue));
}

IterableX.prototype.defaultIfEmpty = defaultIfEmptyProto;

declare module '../../iterable' {
  interface IterableX<T> {
    defaultIfEmpty: typeof defaultIfEmptyProto;
  }
}