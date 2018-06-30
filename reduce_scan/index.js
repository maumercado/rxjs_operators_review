import { interval } from "rxjs";
import { reduce, take, scan } from "rxjs/operators";

interval(500)
    .pipe(take(10))
    // .pipe(reduce((acc, value) => acc + value, 0))
    .pipe(scan((acc, value) => acc + value, 0))
    .subscribe(e => console.log(e));
