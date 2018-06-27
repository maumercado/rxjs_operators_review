import { range, interval } from "rxjs";
import { map, mapTo, take } from "rxjs/operators";
const data = range(1, 9);
const notificationAPI = interval(300);

data.pipe(map(n => n * n)).subscribe(a => console.log(a));

notificationAPI
    .pipe(mapTo({ type: "NOTIFICATION_ARRIVED" }))
    .pipe(take(5))
    .subscribe(a => console.log(a));
