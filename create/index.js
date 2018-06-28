import { Observable } from "rxjs";

const customObservable = Observable.create(observer => {
    observer.next(42);
    // observer.complete(108);
    setInterval(() => {
        observer.next("NON");
    }, 500);

    setTimeout(() => {
        observer.complete(108);
    }, 2500);
});

customObservable.subscribe({
    next: a => console.log(a),
    complete: a => console.log("Complete", a)
});
