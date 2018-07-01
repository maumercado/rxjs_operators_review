import { range } from "rxjs";
import { partition } from "rxjs/operators";

const [ even, odds ] = range(1, 20).pipe(partition(n => n % 2 === 0));

even.subscribe(a => console.log("Even", a));
odds.subscribe(a => console.log("Odd", a));
