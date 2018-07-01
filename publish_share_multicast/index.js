import { interval, BehaviorSubject } from "rxjs";
import { map, tap, publish, share, multicast } from "rxjs/operators";

const shared = new BehaviorSubject(-1);
const currency$ = interval(1000)
    .pipe(tap(a => console.log("Pinged API")))
    .pipe(map(n => `Currency info #${n}`))
    // .pipe(publish());
    // .pipe(share());
    .pipe(multicast(shared));

currency$.subscribe(e => console.log(e));

currency$.subscribe(e => console.log(e + 3));

currency$.connect(); // only used with multicast and publish
