import { interval, zip } from "rxjs";
import { map } from "rxjs/operators";
const slowNumberObservable = interval(100);
const slowSquareObservable = interval(350).pipe(map(n => n * n));

zip(slowNumberObservable, slowSquareObservable).subscribe(a => console.log(a));
