import { interval } from "rxjs";
import { map, pluck } from "rxjs/operators";

interval(1000)
    .pipe(map(i => ({ name: `Friend #${i}`, mutualFriends: i * 2 + 1 })))
    .pipe(pluck("mutualFriends"))
    .subscribe(a => console.log(a));
