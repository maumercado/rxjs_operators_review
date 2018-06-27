import { range } from "rxjs";
import { filter } from "rxjs/operators";

range(1, 20)
    .pipe(filter(n => n % 2 === 0))
    .subscribe(msg => console.log(msg));
