export function unary(fn) {
  return function onlyOneArg(arg) {
    return fn(arg);
  };
}

export function binary(fn) {
  return function onlyFirstTwo(arg1, arg2) {
    return fn(arg1, arg2);
  };
}

export function spreadArgs(fn) {
  return function spreadAllArgs(args) {
    return fn(...args);
  };
}

export function gatherArgs(fn) {
  return function gatherAllArgs(...args) {
    return fn(args);
  };
}

export function ajaxComm(url, data, cb) {
  console.log('\n');
  console.log('AJAX CALLED WITH...');
  console.log('url: ', url);
  console.log('data: ', data);
  console.log('cb: ', cb);
}

export function ajaxProps({ url, data, callback }) {
  console.log('\n');
  console.log('AJAXPROPS CALLED WITH...');
  console.log('url: ', url);
  console.log('data: ', data);
  console.log('cb: ', callback);
}

export function partial(fn, ...initArgs) {
  return function innerPartial(...laterArgs) {
    return fn(...initArgs, ...laterArgs);
  };
}

export function reverseArgs(fn) {
  return function reverseArgsInner(...args) {
    return fn(...args.reverse());
  };
}

export function strictCurry(fn, arity = fn.length) {
  return (function next(prevArgs) {
    return function unaryArg(nextArg) {
      var args = [...prevArgs, nextArg];
      // if length of args array >= arity, call fn with all arguments
      if (args.length >= arity) {
        return fn(...args);
      } else {
        // else call next with all args collected uptil now
        return next(args);
      }
    };
  })([]); // for first iteration, prevArgs should be empty
}

export function uncurry(fn) {
  return function uncurried(...args) {
    var originalFunction = fn;

    for (let arg of args) {
      originalFunction = originalFunction(arg);
    }
    return originalFunction;
  };
}

export function partialProps(fn, presetProps) {
  return function inner(laterProps) {
    return fn(Object.assign({}, presetProps, laterProps));
  };
}

export function curryProps(fn, arity) {
  return function next(prevArgsObj) {
    return function unary(nextArgObj) {
      // construct an object with all args
      var allArgsObj = {
        ...prevArgsObj,
        ...nextArgObj,
      };
      // if the length of keys of all args object is >= arity
      //  call the function with all args object
      if (Object.keys(allArgsObj).length >= arity) {
        fn(allArgsObj);
      } else {
        // else call next with all args object
        return next(allArgsObj);
      }
    };
  };
}
