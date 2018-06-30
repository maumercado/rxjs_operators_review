import { timeout, take } from "rxjs/operators";
import { fromStdIn } from "../utility";

console.log("Input something");

fromStdIn()
    .pipe(take(10))
    .pipe(timeout(2000))
    .subscribe(e => console.log(e));
