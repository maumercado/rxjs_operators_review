import { interval } from "rxjs";
import { fromStdIn } from "../utility";
import { withLatestFrom } from "rxjs/operators";

interval(1000)
    .pipe(withLatestFrom(fromStdIn()))
    .subscribe(a => console.log(a));
