/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
export function compileTimeArity(x) {
  return arguments.length;
}

export function compileTimeArityWithRestParameter(x, y, ...args) {
  return arguments.length;
}

export function compileTimeArityWithDefaultParameter(x, y = 2) {
  return arguments.length;
}

/**
 * y = 2 when
 * 1. y is not passed
 * 2. y is passed explicitly as undefined
 *
 */
export function defaultParams(y = 2) {
  return y;
}

export function variableParams(...args) {
  return args.length;
}

export function arrayDestructuring([, val]) {
  return val;
}

export function objectDestructuring({ y } = {}) {
  return y;
}
