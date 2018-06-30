import { interval } from "rxjs";
import { ignoreElements, take, tap } from "rxjs/operators";

console.log("started");
interval(100)
    .pipe(take(20))
    .pipe(ignoreElements())
    .subscribe({
        next: e => console.log(e),
        complete: a => console.log("Complete", a)
    });
