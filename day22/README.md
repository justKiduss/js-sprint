# Day 22 – Task Manager (React)

## Overview

This project extends the previous task manager by introducing full CRUD operations, task completion tracking, filtering, editing, and localStorage persistence using `useReducer`.

The goal of Day 22 is to strengthen understanding of:

* Reducer-driven state management
* Immutable state updates
* Cross-component state flow via props
* Persistent state with `localStorage`

---

## Features

* Add tasks with priority and due date
* Persist tasks using `localStorage`
* Delete tasks
* Edit task text inline
* Mark tasks as completed
* Filter tasks by priority and due date
* Centralized state management using `useReducer`

---

## Project Structure

```
src/
├── components/
│   ├── TaskManager.jsx
│   ├── TaskItems.jsx
│   └── persistence.js
├── reducers/
│   └── reducer.js
```

---

## State Management

State is an **array of task objects** managed by `useReducer`.

### Task Shape

```js
{
  id: number,
  text: string,
  category: string,
  priority: string,
  dueDate: string,
  done: boolean
}
```

---

## Reducer Actions

### addTask

Adds a new task to state.

### deleteTask

Removes a task by `id`.

### editTask

Updates task text by `id`.

### checkTask

Toggles task completion status.

All reducer updates are immutable.

---

## Persistence Layer

### saveTask(state)

Stores the entire task array in `localStorage`.

### loadTask()

Loads tasks from `localStorage`. Returns an empty array if none exist or on failure.

This logic is isolated from components to enforce separation of concerns.

---

## Component Responsibilities

### TaskManager

* Initializes reducer state
* Handles task creation
* Syncs state to `localStorage`
* Passes `state` and `dispatch` to child components

### TaskItems

* Displays task list
* Handles filtering logic
* Dispatches edit, delete, and toggle actions
* Manages local UI-only state (editing, filters)

---

## Key Learnings

* Reducers must always return the same state shape
* UI state and global state must be clearly separated
* `localStorage` persistence must never mutate reducer logic
* Props are the bridge between reducer state and child components

---

## Known Limitations

* No task search by text implemented
* Category filtering not yet wired
* No memoization or performance optimizations

---

## Next Steps (Day 23 Direction)

* Normalize state structure (e.g., `{ tasks: [] }`)
* Add text search
* Extract filters into reducer
* Introduce derived selectors
* Improve accessibility and keyboard handling

---

## Status

Day 22 completed. Reducer-based task manager with persistence and editing is functional and stable.
