import { empty } from "rxjs";
import { defaultIfEmpty } from "rxjs/operators";

empty()
    .pipe(defaultIfEmpty(32))
    .subscribe(a => console.log("Where is the value?", a));
