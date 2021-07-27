/* eslint-disable @babel/new-cap */
import { compose } from 'ramda';

export function taskMonadDemo() {
  console.log('\n\n%c****Task Monad****', 'font-size: 20px;color: green');

  const Task = (f) => ({
    map: (g) => Task(compose(f, g)),
    fold: f,
  });

  const add2 = Task(() => 2);

  console.log(add2.map((x) => x * x).fold());
}
