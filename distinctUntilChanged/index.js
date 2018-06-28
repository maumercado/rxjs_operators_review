import { interval } from "rxjs";
import { map, distinctUntilChanged } from "rxjs/operators";

interval(100)
    .pipe(map(n => ~~(n / 10)))
    .pipe(distinctUntilChanged())
    .subscribe(n => console.log(n));
