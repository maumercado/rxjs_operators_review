import { sample } from "rxjs/operators";
import { fromStdIn } from "../utility";
import { interval } from "rxjs";

fromStdIn()
    .pipe(sample(interval(1000)))
    .subscribe(e => console.log(e));
