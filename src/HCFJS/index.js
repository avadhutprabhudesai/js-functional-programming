import { composeDemo } from './composition';
import { curryDemo } from './curry';

console.log('\n\n\n\n*****************************');
console.log(
  '%cHardcore Functional Javascript by Brian Lonsdorf',
  'font-size: 28px;color: red;'
);
console.log('*****************************\n\n\n\n');

curryDemo();
composeDemo();
