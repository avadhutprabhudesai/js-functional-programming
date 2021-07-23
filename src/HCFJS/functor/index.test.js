/* eslint-disable @babel/new-cap */
import { compose, path } from 'ramda';
import {
  add2,
  Constant,
  double,
  Identity,
  Maybe,
  NumberBox,
  shout,
  square,
  StringBox,
} from './functor-booster';
/**
 * Functor laws
 * 1. Identity
 *    map(x => x) === Identity(x)
 * 2. Composition
 *    map(x => f(g(x))) === map(g).map(f)
 */

describe('Testing Functor laws', () => {
  it('A Functor should return itself when mapped with an Identity function', () => {
    expect(Identity(4).map((x) => x).value).toEqual(4);
  });
  it('A functor should obey the law of composition', () => {
    const val = Identity(2);
    const doubleAndAdd2 = compose(double, add2);
    const result = val.map(add2).map(double);

    expect(val.map(doubleAndAdd2).val).toEqual(result.val);
  });
});

describe('Testing Maybe functor', () => {
  const userWithoutAddress = {
    id: 1,
    name: 'John',
    title: 'Engineer',
  };
  const userWithAddress = Object.assign({}, userWithoutAddress, {
    address: {
      city: 'Pune',
      state: 'Maharashtra',
      country: 'India',
    },
  });
  const loggedOutUser = null;
  it('should shout out the city of a user', () => {
    expect(
      Maybe(userWithAddress)
        .map(path(['address', 'city']))
        .map(shout).value
    ).toEqual('PUNE!');
    expect(
      Maybe(userWithoutAddress)
        .map(path(['address', 'city']))
        .map(shout).value
    ).toEqual(null);
    expect(
      Maybe(loggedOutUser)
        .map(path(['address', 'city']))
        .map(shout).value
    ).toEqual(null);
  });
});

describe('Testing Constant functor', () => {
  const constant = Constant(2);
  const doubleAndAdd2 = compose(double, add2);
  const result = constant.map(add2).map(double);

  expect(constant.map(doubleAndAdd2).emit()).toEqual(result.emit());
});

describe('Testing NumberBox functor', () => {
  it('should apply square if value is a valid number', () => {
    expect(NumberBox(2).map(square).emit()).toEqual(4);
    expect(NumberBox(null).map(square).emit()).toEqual(null);
    expect(NumberBox(undefined).map(square).emit()).toEqual(null);
    expect(NumberBox(NaN).map(square).emit()).toEqual(null);
  });
});

describe('Testing StringBox functor', () => {
  it('should apply shout if value is a valid string', () => {
    expect(StringBox('bang').map(shout).emit()).toEqual('BANG!');
    expect(StringBox(null).map(shout).emit()).toEqual(null);
    expect(StringBox(undefined).map(shout).emit()).toEqual(null);
    expect(StringBox(NaN).map(shout).emit()).toEqual(null);
  });
});
