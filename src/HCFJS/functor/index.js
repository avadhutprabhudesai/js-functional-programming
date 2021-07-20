/* eslint-disable @babel/new-cap */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
/**
 */

import { unary } from 'ramda';

/**
 * Next Char from number string
 *  . Accept a number string
 *  . Parse it into an int
 *  . Add 1 to it
 *  . Get char code of the result
 *  . return it
 *
 *
 * Half of the largest number from the array
 *  . Accept the array of number strings
 *  . Map over them and parse them into an array of ints
 *  . Take out the max of the array
 *  . Half it
 *  . Return
 *
 * Calculate total price when given the base price and discount percentage
 *  . Accept base price and a discount percentage as a string
 *  . Convert base price into a float
 *  . Convert discount percent into a float
 *  . Calculate total discount
 *  . Subtract it from base price
 *  . Return final price
 */
export function functorDemo() {
  console.log('\n\n%c****Functor****', 'font-size: 20px;color: green');

  const Functor = (x) => ({
    map: (f) => Functor(f(x)),
    fold: (f) => f(x),
  });

  const nextCharFromNumberString_ = (str) => {
    const trimmed = String(str).trim();
    const parsed = parseInt(trimmed);
    const nextNum = new Number(parsed) + 1;
    const char = String.fromCharCode(nextNum);
    return char;
  };
  console.log(nextCharFromNumberString_('64'));
  const nextCharFromNumberString = (str) =>
    Functor((x) => x)
      .map((x) => String(str).trim())
      .map((x) => parseInt(x))
      .map((x) => new Number(x) + 1)
      .map((x) => String.fromCharCode(x))
      .fold((x) => x);
  console.log(nextCharFromNumberString('64'));

  const halfOftheLargestNumber_ = (arr) => {
    const intArr = arr.map((str) => parseInt(str.trim()));
    const maxNum = Math.max(...intArr);
    const halfVal = maxNum / 2;
    return halfVal;
  };
  console.log(halfOftheLargestNumber_(['100', '1000', '5000']));
  const halfOftheLargestNumber = (arr) =>
    Functor(arr)
      .map((x) => x.map(unary(parseInt)))
      .map((x) => Math.max(...x))
      .map((x) => x / 2)
      .fold((x) => x);
  console.log(halfOftheLargestNumber(['100', '1000', '5000']));

  const strToFloat = (str) => parseFloat(String(str).trim());

  const calcTotalPrice_ = (price, discount) => {
    const parsedPrice = strToFloat(price);
    const parsedDiscount = strToFloat(discount);
    return parsedPrice - parsedPrice * (parsedDiscount / 100);
  };

  console.log(calcTotalPrice_('100', '10'));

  const calcTotalPrice = (price, discount) =>
    Functor(strToFloat(price)).fold((p) =>
      Functor(discount).fold((d) => p - p * (d / 100))
    );

  console.log(calcTotalPrice('100', '10'));
}
