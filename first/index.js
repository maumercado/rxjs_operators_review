import { interval } from "rxjs";
import { first } from "rxjs/operators";

interval(100)
    .pipe(first(n => n === 3))
    .subscribe(n => console.log(n));
