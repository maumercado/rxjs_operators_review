import { timer, interval } from "rxjs";
import { tap, retry, retryWhen } from "rxjs/operators";

const bugAPI$ = timer(1000)
    .pipe(tap(a => console.log("pinged")))
    .pipe(
        tap(a => {
            throw new Error();
        })
    );

bugAPI$
    // .pipe(retry(3))
    .pipe(retryWhen(() => interval(1000)))
    .subscribe({ next: a => console.log(a), error: e => console.log("err", e) });
