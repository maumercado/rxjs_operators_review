import { range } from "rxjs";
import { groupBy, mergeMap, toArray } from "rxjs/operators";

range(1, 20)
    .pipe(groupBy(n => n % 2 === 0))
    .pipe(mergeMap(ngroup => ngroup.pipe(toArray())))
    .subscribe(e => console.log(e));
