import { fromEvent } from "rxjs";

export const fromStdIn = () => {
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding("utf-8");
    const observable = fromEvent(stdin, "data");
    observable.subscribe(key => {
        if (key === "\u0003") {
            process.exit();
        }
    });
    return observable;
};
