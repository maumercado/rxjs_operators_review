import { interval, merge, of, from } from "rxjs";
import { map, mergeAll, mergeMap } from "rxjs/operators";

const bluePostFeed = interval(1000).pipe(map(e => `Blue post article #${e}`));
const redPostFeed = interval(500).pipe(map(e => `Red article #${e}`));
const greenPostFeed = interval(203).pipe(map(e => `Green opinion #${e}`));

const config = {
    blue: bluePostFeed,
    red: redPostFeed,
    green: greenPostFeed
};

const colors = [ "blue", "red", "green" ];

from(colors)
    .pipe(mergeMap(color => config[color]))
    .subscribe(e => console.log(e));

// of(bluePostFeed, redPostFeed, greenPostFeed)
//     .pipe(mergeAll())
//     .subscribe(e => console.log(e));

// merge(redPostFeed, bluePostFeed).subscribe(a => console.log(a));
