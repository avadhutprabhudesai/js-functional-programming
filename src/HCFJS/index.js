import { composeDemo } from './composition';
import { curryDemo } from './curry';
import { functorDemo } from './functor';
import { functorBoosterDemo } from './functor/functor-booster';
import { eitherMonadDemo } from './monads/either';
import { taskMonadDemo } from './monads/task';

console.log('\n\n\n\n*****************************');
console.log(
  '%cHardcore Functional Javascript by Brian Lonsdorf',
  'font-size: 28px;color: red;'
);
console.log('*****************************\n\n\n\n');

curryDemo();
composeDemo();
functorDemo();
functorBoosterDemo();
eitherMonadDemo();
taskMonadDemo();
