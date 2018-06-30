import { of, range, timer } from "rxjs";
import { tap, delay, delayWhen } from "rxjs/operators";

of(42)
    .pipe(tap(() => console.log("Whatever")))
    .pipe(delay(1200))
    .pipe(tap(() => console.log("Dude")))
    .pipe(delay(2000))
    .subscribe(v => console.log(v));

range(1, 9)
    .pipe(delayWhen(n => timer(n * 1000)))
    .subscribe(n => console.log(n));
