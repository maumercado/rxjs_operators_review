import { fromEvent, combineLatest } from "rxjs";

const country$ = fromEvent(document.getElementById("country"), "change", e => e.target.value);
const city$ = fromEvent(document.getElementById("city"), "change", e => e.target.value);

combineLatest(country$, city$).subscribe(e => console.log(e));
