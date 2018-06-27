import { timer, interval } from "rxjs";

const ticker = interval(2000);
ticker.subscribe(e => console.log("a", e));

const stopWatch = timer(2000, 1000);
stopWatch.subscribe(e => console.log("a", e));
