Day 20 – Persistent Todo App with useReducer and LocalStorage
Overview

Day 20 focused on enhancing the Todo application by persisting state using localStorage while maintaining a pure reducer. The task emphasized separating UI state from persistent application state, syncing state on changes, and hydrating initial state from storage.

Project Goals

Use useReducer to centralize all task mutations.

Persist reducer state to localStorage on every change.

Load initial state from localStorage to hydrate the app.

Maintain a pure reducer without side-effects.

Keep components thin, separating UI and persistence logic.

Persistence Layer

persistence.js handles all localStorage operations:

export function loadState() {
    try {
        const serialized = localStorage.getItem("todos");
        if (!serialized) return [];
        return JSON.parse(serialized);
    } catch (err) {
        return [];
    }
}

export function saveState(state) {
    try {
        const serialized = JSON.stringify(state);
        localStorage.setItem("todos", serialized);
    } catch (err) {
        console.log(err);
    }
}

Reducer

todo-reducers.js is pure and handles all state updates:

export default function TodoReducers(todos, action) {
    switch(action.type) {
        case "added":
            return [...todos, { id: action.id, text: action.text, category: action.category, done: false }];
        case "deleted":
            return todos.filter(todo => todo.id !== action.id);
        case "edited":
            return todos.map(todo => todo.id === action.id ? { ...todo, text: action.text } : todo);
        case "checked":
            return todos.map(todo => todo.id === action.id ? { ...todo, done: !todo.done } : todo);
        default:
            return todos;
    }
}

TodoApp Component

Initializes state via loadState().

Persists state changes using useEffect(() => saveState(todos), [todos]).

Handles todo input and category with local useState.

Dispatches all mutations through dispatch.

TodoItems Component

Receives todos and dispatch.

Handles edit, delete, and check actions.

Local state manages editId and editText.

Filtering/search handled in UI; reducer remains pure.

LeetCode Practice

Completed: 242. Valid Anagram

Deferred: 20. Valid Parentheses

Skills Improved

useReducer with persistent state

localStorage integration

Pure reducer discipline

Separating side-effects from state logic

Managing thin React components with centralized state

Status

Day 20 complete.
Todo App persists tasks across sessions using useReducer and localStorage.