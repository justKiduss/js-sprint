Day 19 – Todo Application Refactored with useReducer

Overview
Day 19 focused on restructuring the Todo application by replacing scattered state logic with a centralized reducer using the useReducer hook. The goal was to enforce predictable state transitions, reduce component complexity, and follow a scalable architecture used in production React applications.

Project Goals

Replace useState Todo management with useReducer.

Centralize all mutations into a reducer function.

Handle core actions:

Add Task

Delete Task

Toggle Completion

Edit Task

Maintain clean, predictable state flow through dispatch actions.

Keep filtering and search behavior inside the component as optional UI state.

Reducer Implementation
State transitions are handled inside TaskReducers.js.
Each action returns a new immutable version of the tasks array.

export default function TaskReducers(tasks, action) {
    switch (action.type) {
        case "added":
            return [...tasks, {
                id: action.id,
                text: action.text,
                category: action.category,
                done: false
            }];

        case "deleted":
            return tasks.filter(task => task.id !== action.id);

        case "check":
            return tasks.map(task =>
                task.id === action.id ? { ...task, done: !task.done } : task
            );

        case "edited":
            return tasks.map(task =>
                task.id === action.id ? { ...task, text: action.text } : task
            );

        default:
            return tasks;
    }
}


Component Refactor

TodoApp.js

Replaced:

const [tasks, setTasks] = useState([]);


with:

const [tasks, dispatch] = useReducer(TaskReducers, []);


All writes now flow through dispatch.

The component handles only user input and passes mutations down to the reducer.

TodoItems.js

Dispatches actions for edit, delete, toggle done.

Uses local state for search, category filter, and edit UI handling.

Filtering and search remain view-layer logic.

Features Implemented

Centralized State Management

All task modifications occur inside the reducer.

Predictable, trackable state transitions.

Action-Based Dispatch Flow

dispatch({ type: "added", id, text, category });
dispatch({ type: "deleted", id });
dispatch({ type: "check", id });
dispatch({ type: "edited", id, text });


UI-Level Filtering

Category selection and search implemented through useState in TodoItems.

The reducer remains clean and focused on mutations only.

Edit Workflow

Local state tracks which task is in edit mode.

Save triggers the reducer to persist changes.

Skills Improved

Reducer pattern and state immutability.

Building scalable component architecture.

Separating UI state from application state.

Designing clean action-based state flows.

Using useReducer to replace complex useState logic.

Status
Day 19 complete.
The Todo app now follows a professional reducer-based structure.
Ready for Day 20.