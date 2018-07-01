import { fromEvent } from "rxjs";
import { tap, map } from "rxjs/operators";

fromEvent(document.forms[0], "submit")
    .pipe(tap(e => console.log("Not refreshing")))
    .subscribe(e => e.preventDefault());

fromEvent(document.getElementById("framework"), "change")
    .pipe(map(event => event.target.value))
    .subscribe(e => console.log(e));

fromEvent(document.getElementById("reason"), "change")
    .pipe(map(event => event.target.value))
    .subscribe(e => console.log(e));
