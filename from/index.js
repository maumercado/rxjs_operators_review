import { from } from "rxjs";
import { take } from "rxjs/operators";

// const fibonacciArray = [ 1, 1, 2, 3, 5, 8, 13, 21 ];
// const fibonacciPromise = new Promise(resolve => resolve(fibonacciArray));

const fibonacciGenerator = function * () {
    let a = 1;
    let b = 1;
    while (true) {
        const c = a + b;
        yield c;
        a = b;
        b = c;
    }
};

from(fibonacciGenerator())
    .pipe(take(20))
    .subscribe(e => console.log(e));
