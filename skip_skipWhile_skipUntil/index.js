import { timer } from "rxjs";
import { skip, skipWhile, skipUntil } from "rxjs/operators";
import { fromStdIn } from "../utility";

console.log("Enter things in 2 secs");

fromStdIn()
    // .pipe(skip(10))
    // .pipe(skipWhile(v => v !== "g"))
    .pipe(skipUntil(timer(2000)))
    .subscribe(k => console.log(k));
