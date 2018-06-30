import { range } from "rxjs";
import { single } from "rxjs/operators";

range(0, 4)
    .pipe(single(n => n % 2 === 0))
    .subscribe(e => console.log(e));
