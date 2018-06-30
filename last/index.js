import { range, interval } from "rxjs";
import { last, take } from "rxjs/operators";

// range(1, 9)
interval(100)
    .pipe(take(10))
    .pipe(last(n => n % 2 === 0))
    .subscribe(e => console.log(e));
