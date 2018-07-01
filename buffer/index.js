import { fromStdIn } from "../utility";
import { filter, buffer, bufferCount, bufferTime, bufferToggle, bufferWhen } from "rxjs/operators";
import { timer } from "rxjs";

fromStdIn()
    // .pipe(buffer(fromStdIn().pipe(filter(key => key === "p"))))
    // .pipe(bufferCount(10))
    // .pipe(bufferTime(1000))
    // .pipe(
    //     bufferToggle(fromStdIn().pipe(filter(key => key === "p")), () =>
    //         fromStdIn().pipe(filter(key => key === "o"))
    //     )
    // )
    .pipe(bufferWhen(() => timer(1000)))
    .subscribe(e => console.log(e));
