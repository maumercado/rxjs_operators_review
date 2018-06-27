import { empty } from "rxjs";

empty().subscribe({
    complete: a => console.log("Complete", a),
    next: e => console.log("Emit", e)
});
