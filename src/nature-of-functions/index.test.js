/* eslint-disable no-sparse-arrays */
import {
  arrayDestructuring,
  compileTimeArity,
  compileTimeArityWithDefaultParameter,
  compileTimeArityWithRestParameter,
  defaultParams,
  objectDestructuring,
  variableParams,
} from '.';

/**
 - Check the 'length' property of a function. Try different situations where this gives inaccurate results.
 - Check how default params work? List cases when a parameter is assigned a default value.
 - Check how to pass and accept variable params.
 - Check the differences between function.length and arguments.length
 - Check ...args as arguments
 - Check ...array as parameters
 - Check Array destructuring in function parameters
 - Check Object destructuring in function parameters
 */

describe('Testing compile time Arity', () => {
  // Test function compile time arity
  it('should return 1 when function signature has only 1 formal parameter and with 1 argument', () => {
    expect(compileTimeArity.length).toEqual(1);
  });
  it('should return 1 when function signature has only 1 parameter and with more than 1 argument', () => {
    expect(compileTimeArity.length).toEqual(1);
  });
  it('should return 2 when function signature has 2 formal parameter and a rest parameter with any number of arguments', () => {
    expect(compileTimeArityWithRestParameter.length).toEqual(2);
  });
  it('should return 1 when function signature has 2 formal parameter before default parameter and with 2 function arguments', () => {
    expect(compileTimeArityWithDefaultParameter.length).toEqual(1);
  });
});
describe('Testing runtime Arity', () => {
  // Test function run time arity
  it('should return 1 when function signature has only 1 formal parameter and with 1 argument', () => {
    expect(compileTimeArity(1)).toEqual(1);
  });
  it('should return 1 when function signature has only 1 parameter and with more than 1 argument', () => {
    expect(compileTimeArity(1, 2)).toEqual(2);
  });
  it('should return 2 when function signature has 2 formal parameter and a rest parameter with any number of arguments', () => {
    expect(compileTimeArityWithRestParameter(1, 2, 3, 4)).toEqual(4);
  });
  it('should return 1 when function signature has 2 formal parameter before default parameter and with 2 function arguments', () => {
    expect(compileTimeArityWithDefaultParameter(1, 2)).toEqual(2);
  });
});

describe('Testing default params', () => {
  it('should return 1 when function is called with 1', () => {
    expect(defaultParams(1)).toEqual(1);
  });
  it('should return 2 when function is called with no input', () => {
    expect(defaultParams()).toEqual(2);
  });
  it('should return 2 when function is called with undefined', () => {
    expect(defaultParams()).toEqual(2);
  });
  it('should return null when function is called with null', () => {
    expect(defaultParams(null)).toBeNull();
  });
});

describe('Testing variable params', () => {
  it('should return 3 as the length of an args array when the function is called with 3 arguments ', () => {
    expect(variableParams(1, 2, 3)).toEqual(3);
  });
  it('should return 3 as the length of an args array when the function is called with a spreaded array of 3 elements ', () => {
    expect(variableParams(...[1, 2, 3])).toEqual(3);
  });
});

describe('Testing Array destructuring in function parameters', () => {
  it('should return the number at index 1', () => {
    expect(arrayDestructuring([1, 2, 3])).toEqual(2);
  });
  it('should return the number at index 1', () => {
    expect(arrayDestructuring([1, , 3])).toBeUndefined();
  });
});

describe('Testing Object destructuring in function parameters', () => {
  it('should return the value of property y from the input object', () => {
    expect(objectDestructuring({ x: 2, y: 3 })).toEqual(3);
  });
  it('should return the value of property y from the input object', () => {
    expect(objectDestructuring({ x: 2 })).toBeUndefined();
  });
});
