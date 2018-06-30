import { range, interval, timer } from "rxjs";
import { take, takeWhile, takeUntil } from "rxjs/operators";

// range(1, 9)
interval(100)
    // .pipe(take(5))
    // .pipe(takeWhile(n => n < 7))
    .pipe(takeUntil(timer(2000)))
    .subscribe(n => console.log(n));
