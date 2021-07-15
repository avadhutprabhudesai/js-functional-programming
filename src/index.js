/* eslint-disable no-unused-vars */
import {
  ajaxComm,
  ajaxProps,
  curry,
  curryProps,
  partial,
  partialProps,
  reverseArgs,
  strictCurry,
  uncurry,
} from './FLJS/function-inputs';

/**
 * Partial Application
 */

var getPerson = partial(ajaxComm, 'https://myapp.com/user/');
var getOrder = partial(ajaxComm, 'https://myapp.com/order');
var getCurrentUser = partial(getPerson, { user: '1122' });

getPerson();
getOrder();
getCurrentUser();

var cbPartial = reverseArgs(
  partial(reverseArgs(ajaxComm), function callback() {
    console.log('I am callback');
  })
);

cbPartial('/person', { user: 'John' });

var urlPartial = reverseArgs(partial(ajaxComm, '/person'));

urlPartial(
  function cb() {
    console.log('I am another callback');
  },
  { user: 'Bob' }
);

var curriedAjax = strictCurry(ajaxComm);
console.log(curriedAjax.name);
var personFetcher = curriedAjax('/person');
console.log(personFetcher.name);
var currentUserFetcher = personFetcher({ user: 'Smith' });
console.log(currentUserFetcher.name);
currentUserFetcher(function cb() {
  console.log('I am callback in the curry');
});

var uncurriedAjax = uncurry(curriedAjax);
console.log(uncurriedAjax.name);
uncurriedAjax('/persion', { user: 'Lisa' }, function () {
  console.log('I am a callback of uncurry');
});

var ajaxPropsPartial = partialProps(ajaxProps, { url: '/partialProps' });
ajaxPropsPartial({
  callback: function () {
    console.log('I am an ajaxPartialProp callback');
  },
  data: { user: 'Partial Props user' },
});

var ajaxPropsCurry = curryProps(ajaxProps, 3);

var getPersonProps = ajaxPropsCurry({ url: '/person/props' });
var getUserProps = getPersonProps({ data: { user: 'userProps' } });
getUserProps({
  callback: function () {
    console.log('I am in ajaxPropsCurry callback');
  },
});
