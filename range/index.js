import { range } from "rxjs";

const rangeObservable = range(1, 9);
rangeObservable.subscribe(e => console.log(`Range emitted ${e}`));
