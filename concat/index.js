import { range, interval } from "rxjs";
import { take, concat, skip } from "rxjs/operators";

// range(1, 10)
interval(100)
    .pipe(take(20))
    .pipe(concat(range(1, 20).pipe(skip(10))))
    .subscribe(n => console.log(n));
