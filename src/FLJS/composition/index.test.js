/**
 * compose
 * partialRightCompose
 *
 */

import {
  compose,
  partialRight,
  skipLongWords,
  skipShortWords,
  unique,
  words,
} from '.';

var text = 'This is a sample sample string';
describe('Testing simple compose', () => {
  it('should return unique words in a given string', () => {
    var uniqueWords = compose(unique, words);
    var wordsArray = uniqueWords(text);
    expect(wordsArray.length).toEqual(5);
    expect(wordsArray).toStrictEqual(['this', 'is', 'a', 'sample', 'string']);
  });
});

describe('Testing partialRight compose', () => {
  var filterWords = partialRight(compose, unique, words);
  var biggerWords = filterWords(skipShortWords);
  var shortWords = filterWords(skipLongWords);
  it('should return unique words having length greater than or equal than 4', () => {
    expect(biggerWords(text).length).toEqual(3);
    expect(shortWords(text).length).toEqual(2);
  });
});
