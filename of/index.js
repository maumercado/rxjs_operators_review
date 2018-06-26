import { of } from "rxjs";

of(1, 2, 3, "four", 5, {}, { prop: "test" }, [], [ 2, 4, 5, "nice" ]).subscribe(e => console.log(e));
