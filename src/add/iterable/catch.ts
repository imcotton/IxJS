import { IterableX } from '../../iterable';
import { _catchStatic as catchStatic } from '../../iterable/catch';

function _catchStatic<T>(...args: Iterable<T>[]) {
  return new IterableX<T>(catchStatic<T>(...args));
}

IterableX.catch = _catchStatic;

declare module '../../iterable' {
  namespace IterableX {
    function _catch<T>(...args: Iterable<T>[]): IterableX<T>;
    export { _catch as catch }
  }
}