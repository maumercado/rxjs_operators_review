import { BehaviorSubject } from "rxjs";
import { scan, distinctUntilChanged } from "rxjs/operators";

const createStore = (reducer, preloadedState) => {
    const eventSource = new BehaviorSubject(preloadedState);

    const scanned = eventSource.pipe(scan(reducer)).pipe(distinctUntilChanged());

    return {
        dispatch(action) {
            eventSource.next(action);
        },
        subscribe(listener) {
            scanned.subscribe(listener);
        }
    };
};

const defaultState = {
    todos: [ "Write code", "Play stuff" ]
};

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case "ADD_TODO": {
            const newState = Object.assign({}, state);
            newState.todos = [ ...state.todos, action.todo ];
            return newState;
        }
        default:
            return state;
    }
};

const store = createStore(reducer, defaultState);

store.subscribe(a => console.log(a));
store.dispatch({ type: "ADD_TODO", todo: "Learn Typescript" });
