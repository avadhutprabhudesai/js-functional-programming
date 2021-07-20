/* eslint-disable no-unused-vars */
import {
  append,
  compose,
  concat,
  curry,
  descend,
  flip,
  head,
  map,
  partialRight,
  prop,
  sort,
  sortBy,
  toUpper,
} from 'ramda';
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
/**
 */

/**
 * For given array of strings,
 *
 * . Sort by words length
 * . Add !at the end of each word
 * . Take the highest length word
 * . Capitalize first letter of it
 */
export function composeDemo() {
  console.log('\n\n%c****Composition****', 'font-size: 20px;color: green');

  const names = ['sindy', 'samuel', 'mike', 'ross', 'monica'];
  const sortByLength = sort(descend(prop('length')));

  // Sort by words length
  console.log(sortByLength(names));

  // Add ! at the end of each word
  const shoutOut = partialRight(concat, '!');
  const shouted = map(partialRight(concat, '!'));
  console.log(shouted(names));

  // Take the highest length word
  const longestWord = compose(head, sortByLength);
  console.log(longestWord(names));

  // Capitalize first letter of it
  const upperFirst = compose(toUpper, head);
  console.log(upperFirst('samuel'));

  /**
   * Create a function which accepts an array of strings and
   *  . Sort by descending order of word length
   *  . Take first letter of each word
   *  . Capitalize it
   *  . Append !
   *
   */

  const loudFirst = compose(
    map(compose(shoutOut, upperFirst, head)),
    sortByLength
  );
  console.log(loudFirst(names));
}
