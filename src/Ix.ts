'use strict';

export { IterableX as Iterable } from './iterable';
export { AsyncIterableX as AsyncIterable } from './asynciterable';

// iterable statics
/* tslint:disable:no-use-before-declare */
import './add/iterable/case';
import './add/iterable/catch';
import './add/iterable/concat';
import './add/iterable/create';
import './add/iterable/defer';
import './add/iterable/empty';
import './add/iterable/for';
import './add/iterable/from';
import './add/iterable/generate';
import './add.iterable/if';
import './add/iterable/of';
import './add/iterable/onerrorresumenext';
import './add/iterable/repeatvalue';

// iterable operators
import './add/iterable-operators/average';
import './add/iterable-operators/buffer';
import './add/iterable-operators/catch';
import './add/iterable-operators/catchwith';
import './add/iterable-operators/concat';
import './add/iterable-operators/count';
import './add/iterable-operators/defaultifempty';
import './add/iterable-operators/distinct';
import './add/iterable-operators/distinctuntilchanged';
import './add/iterable-operators/elementat';
import './add/iterable-operators/every';
import './add/iterable-operators/except';
import './add/iterable-operators/expand';
import './add/iterable-operators/filter';
import './add/iterable-operators/find';
import './add/iterable-operators/findindex';
import './add/iterable-operators/first';
import './add/iterable-operators/flatmap';
import './add/iterable-operators/flatten';
import './add/iterable-operators/ignoreelements';
import './add/iterable-operators/includes';
import './add/iterable-operators/isempty';
import './add/iterable-operators/map';

// async iterable statics
import './add/asynciterable/from';
import './add/asynciterable/of';

// async iterable operators