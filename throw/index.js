import { throwError } from "rxjs";

throwError().subscribe({
    next: n => console.log("Next:? ", n),
    error: e => console.log("Entered error state", e)
});
