import { of, range, interval } from "rxjs";
import { take, concatAll } from "rxjs/operators";
import { fromStdIn } from "../utility";

of(range(1, 3), interval(100).pipe(take(5)), fromStdIn())
    .pipe(concatAll())
    .subscribe(a => console.log(a));
