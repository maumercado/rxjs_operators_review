import { interval, range } from "rxjs";
import { concatMap, concatMapTo } from "rxjs/operators";

interval(100)
    // .pipe(concatMap(n => range(0, n + 1)))
    .pipe(concatMapTo(range(0, 10)))
    .subscribe(a => console.log(a));
