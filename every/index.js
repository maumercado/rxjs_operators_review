import { interval } from "rxjs";
import { take, map, tap, every } from "rxjs/operators";

const custom = interval(100).pipe(take(100));

custom
    .pipe(map(n => n * 2))
    .pipe(tap(n => console.log("Value", n)))
    .pipe(every(n => n % 2 === 0))
    .subscribe(n => console.log(n));
