import { timer, forkJoin, throwError } from "rxjs";
import { mapTo, concatAll } from "rxjs/operators";

const friendsAPI$ = timer(1000).pipe(mapTo({ name: "Hank" }));
const preferencesAPI$ = timer(1700)
    .pipe(mapTo(throwError()))
    .pipe(concatAll());
// .pipe(mapTo({ theme: "dark" }));

forkJoin(friendsAPI$, preferencesAPI$).subscribe({
    next: e => console.log(e),
    error: e => console.log("error", e)
});
