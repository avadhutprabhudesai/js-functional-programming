export function compose(...fns) {
  return function composed(arg) {
    var listOfFunctions = [...fns];
    var result = arg;
    while (listOfFunctions.length > 0) {
      result = listOfFunctions.pop()(result);
    }
    return result;
  };
}

export function words(text) {
  return String(text)
    .toLowerCase()
    .split(/\s|\b/)
    .filter(function filterOnlyWords(v) {
      return /^[\w]+$/.test(v);
    });
}

export function unique(words) {
  var uniqueList = [];
  for (let word of words) {
    if (!uniqueList.includes(word)) {
      uniqueList.push(word);
    }
  }
  return uniqueList;
}

export function partialRight(fn, ...presetArgs) {
  return function innerPartial(...laterArgs) {
    return fn(...laterArgs, ...presetArgs);
  };
}

export function skipShortWords(words = []) {
  return words.filter(function skipShort(word) {
    return word.length >= 4;
  });
}
export function skipLongWords(words = []) {
  return words.filter(function skipLong(word) {
    return word.length < 4;
  });
}
