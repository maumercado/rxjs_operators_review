import { interval } from "rxjs";
import { map, tap } from "rxjs/operators";

//If you are using as a pipeable operator, do is known as tap!

interval(400)
    .pipe(map(n => n * n))
    .pipe(tap(a => console.log("after map 1", a)))
    .pipe(map(n => n / 3))
    .pipe(tap(a => console.log("after map 2", a)))
    .pipe(map(n => n * n * n))
    .pipe(tap(a => console.log("after map 3", a)))
    .pipe(map(n => n % 42))
    .pipe(tap(a => console.log("after map 4", a)))
    .subscribe(a => console.log(a));
