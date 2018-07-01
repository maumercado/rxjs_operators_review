import { fromStdIn } from "../utility";
import { throttleTime, throttle, filter } from "rxjs/operators";

fromStdIn()
    // .pipe(throttleTime(1000))
    .pipe(throttle(() => fromStdIn().pipe(filter(k => k === "p"))))
    .subscribe(e => console.log(e));
