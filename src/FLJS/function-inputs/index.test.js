/**
  - unary
      1. Accepts function fn as a parameter
      2. Returns another function onlyOneArg, which closes over fn and has only 1 parameter.
      3. onlyOneArg calls fn with that parameter as an argument and returns the result.
      4. onlyOneArg benefits from the fact that, in JS, it is valid to have mismatch in quantities of parameters and arguments. i.e. a function with 1 parameter can be invoked with 3 arguments.
  - binary
      Same as unary but accepts 2 params instead of 1.
  - spreadArgs
      1. Accepts a function fn as a parameter.
      2. Returns another function spreadAllArgs which closes over fn and has only 1 parameter.
      3. spreadAllArgs calls fn by spreading its argument into it and returns the result.
  - gatherArgs
      1. Accpets a function fn as a parameter.
      2. returns a function gatherAllArgs which closes over fn and accepts variable numnber of parameters.
      3. gatherAllArgs calls fn by passing an array of all variable params it receives, and returns the result.
  - flip
  - reverse
 */

import { binary, gatherArgs, reverseArgs, spreadArgs, unary } from '.';

function sum(x, y) {
  return x + y;
}

function lengthOfArguments() {
  return arguments.length;
}

function sumAll(args) {
  return args.reduce(function (acc, current) {
    return acc + current;
  });
}

function division(x, y) {
  return x / y;
}

describe('Testing unary wrapper', () => {
  it('should convert an array of floats into an array of ints', () => {
    var floatToInt = unary(parseInt);
    var floats = [1.1, 2.2, 3.3, 4.4];
    var ints = floats.map(floatToInt);
    expect(ints).toEqual([1, 2, 3, 4]);
  });
});

describe('Testing binary wrapper', () => {
  it('should return the sum of first 2 arguments', () => {
    var sumOfFirstTwo = binary(sum);
    expect(sumOfFirstTwo(2, 2, 3, 4, 5, 6)).toEqual(4);
  });
});

describe('Testing spreadArgs wrapper', () => {
  it('should return the length of an array', () => {
    var lengthOfAnArray = spreadArgs(lengthOfArguments);
    expect(lengthOfAnArray([1, 2, 3, 4])).toEqual(4);
  });
});

describe('Testing gatherArgs wrapper', () => {
  it('should return the sum of all argument passed into it', () => {
    var sumOfArray = gatherArgs(sumAll);
    expect(sumOfArray(1, 2, 3, 4)).toEqual(10);
  });
});

describe('Testing reverse wrapper', () => {
  it('should return the division of y/x as 2', () => {
    var divideReverse = reverseArgs(division);
    expect(divideReverse(2, 4)).toEqual(2);
  });
});
