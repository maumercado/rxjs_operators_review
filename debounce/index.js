import { timer } from "rxjs";
import { debounce, debounceTime } from "rxjs/operators";
import { fromStdIn } from "../utility";

fromStdIn()
    // .pipe(debounce(() => timer(1000)))
    .pipe(debounceTime(1000))
    .subscribe(a => console.log(a));
