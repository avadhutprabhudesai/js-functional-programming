/* eslint-disable @babel/no-unused-expressions */
/* eslint-disable @babel/new-cap */

import { compose, concat, partialRight, toUpper } from 'ramda';

/**
 * Create Identity functor
 * Create Constant functor
 * Prove laws
 * Create Maybe functor
 * Solve practical problems with Maybe functor
 * Create a NumberFunctor similar to Maybe
 */
export const Identity = (x) => ({
  map: (f) => Identity(f(x)),
  value: x,
});

export const Maybe = (x) => ({
  map: (f) => (x ? Maybe(f(x)) : Maybe(null)),
  value: x,
});

export const TypeBox = (predicate, defaultValue) => {
  const Type = (x) => ({
    map: (f) => (predicate(x) ? Type(f(x)) : Type(defaultValue)),
    emit: () => x,
  });
  return Type;
};

export const NumberBox = TypeBox(
  (x) => typeof x === 'number' && !Number.isNaN(x),
  null
);
export const StringBox = TypeBox((x) => typeof x === 'string', null);

export const Constant = (x) => ({
  map: () => Constant(x),
  emit: () => x,
});

export function functorBoosterDemo() {
  console.log('\n\n%c****Functor Booster****', 'font-size: 20px;color: green');
  console.log(Identity(4).map((x) => x));
  console.log(Identity(4));

  const two = Constant(2);
  console.log(two.map(double).map(add2).emit());
  console.log(two.map(compose(double, add2)).emit());
}

export const double = (x) => x * 2;
export const add2 = (x) => x + 2;
export const square = (x) => x * x;
export const shout = compose(partialRight(concat, '!'), toUpper);
