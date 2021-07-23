/* eslint-disable @babel/new-cap */

import { path, toLower } from 'ramda';

/* eslint-disable no-unused-vars */
const Left = (x) => ({
  map: (f) => Left(x),
  chain: (f) => Left(x),
  fold: (f, g) => f(x),
});
const Right = (x) => ({
  map: (f) => Right(f(x)),
  chain: (f) => f(x),
  fold: (f, g) => g(x),
});

export const fromNullable = (x) => (x ? Right(x) : Left('Error'));

export function eitherMonadDemo() {
  console.log('\n\n%c****Either Monad****', 'font-size: 20px;color: green');
}

export const language = {
  pune: 'Marathi',
  banglore: 'Kannada',
};

export const findLanguageOfCity = (city) => language[city];

export const getCityOf = (user) =>
  fromNullable(path(['address', 'city'], user));

export const getLanguageOf = (user) =>
  getCityOf(user)
    .map(toLower)
    .map(findLanguageOfCity)
    .fold(
      () => 'No language found',
      (x) => x
    );
