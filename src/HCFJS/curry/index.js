import * as _ from 'ramda';
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
/**
  - Try Ramda's curry
  - How can we use bind to create currying?
 */

export function curryDemo() {
  console.log('\n\n%c****Currying****', 'font-size: 20px;color: green');
  /**
   * Custom Curry with just 2 args
   */
  const curry = (fn) => (x) => (y) => fn(x, y);

  /**
   * Negation HOF
   */
  const not =
    (fn) =>
    (...args) =>
      !fn(...args);

  /**
   * Practical applications of currying
   * 1. Filter an array of ints for odd and even
   * 2. Create square, cube of an array
   * 3. Parse int from decimal, octal and hex
   * 4. Replace all vowels from the string
   */

  // 1. filter an array of ints into even and odd
  const modulo = curry((y, x) => x % y);
  const filter = curry((fn, xs) => xs.filter(fn));

  const isOdd = modulo(2);
  const isEven = not(isOdd);
  const getOdds = filter(isOdd);
  const getEvens = filter(isEven);

  console.log('odds from [1,2,3,4]', getOdds([1, 2, 3, 4, 5]));
  console.log('evens from [1,2,3,4]', getEvens([1, 2, 3, 4, 5]));

  // 2. Create square, cube of an array
  const mapper = curry((fn, xs) => xs.map(fn));

  const power = curry((pow, num) => Math.pow(num, pow));
  const getSquares = mapper(power(2));
  const getCubes = mapper(power(3));

  console.log('square of [1,2,3,4]', getSquares([1, 2, 3, 4]));
  console.log('cube of [1,2,3,4]', getCubes([1, 2, 3, 4]));

  // 3. Parse int from decimal, octal and hex
  const intParser = curry((radix, x) => parseInt(x, radix));

  const decInt = intParser(10);
  const octInt = intParser(8);
  const binInt = intParser(2);

  console.log('decInt("10") ->', decInt('10'));
  console.log('octInt("11") ->', octInt('11'));
  console.log('binInt("1111") ->', binInt('1111'));

  // * 4. Replace all vowels from the string

  const replace = _.curry((regex, replacement, str) =>
    str.replace(regex, replacement)
  );

  const replaceVowels = replace(/[AEIOU]/gi, '!');

  console.log('replaceVowels("I am Avadhut")', replaceVowels('I am Avadhut'));
}
