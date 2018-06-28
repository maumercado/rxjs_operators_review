import { timer } from "rxjs";
import { map, startWith } from "rxjs/operators";
import { start } from "repl";

console.info("Made API Request");
timer(2000, 500)
    .pipe(map(n => n + 1))
    .pipe(startWith(0))
    .subscribe(a => console.log("Request complete", a));
