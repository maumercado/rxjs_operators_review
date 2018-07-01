import { interval, timer } from "rxjs";
import {
    window,
    concatMap,
    toArray,
    windowCount,
    windowTime,
    windowToggle,
    filter,
    windowWhen
} from "rxjs/operators";
import { fromStdIn } from "../utility";

interval(100)
    // .pipe(window(interval(1000)))
    // .pipe(windowCount(10))
    // .pipe(windowTime(1000))
    // .pipe(
    //     windowToggle(fromStdIn().pipe(filter(k => k === "p")), () =>
    //         fromStdIn().pipe(filter(k => k === "o"))
    //     )
    // )
    .pipe(windowWhen(() => timer(1000)))
    .pipe(concatMap(a => a.pipe(toArray())))
    .subscribe(a => console.log(a));
