# Day 25 — Task Manager (React + useReducer)

## Overview
A hierarchical task manager built with React using `useReducer` for state control and pure utility functions for persistence, statistics, and filtering. Tasks support unlimited nesting (subtasks), completion propagation, localStorage persistence, and real-time statistics.

---

## Core Features
- Add tasks and subtasks (tree structure via `parentId`)
- Recursive completion toggle (parent ↔ children)
- Recursive deletion (deletes all descendants)
- Task filtering (All, Completed, High Priority)
- Task statistics and completion percentage
- Persistent state using `localStorage`
- Pure functions for data logic (no UI coupling)

---

## State Model
Each task follows this structure:
```js
{
  id: string,
  text: string,
  priority: "Low" | "Medium" | "High",
  dueDate: string,
  done: boolean,
  parentId: string | null
}
All tasks (including subtasks) are stored in a flat array. Hierarchy is derived by parentId.

Architecture
pgsql
Copy code
src/
├── TaskManager.jsx        // Main container (useReducer, stats, persistence)
├── TaskItems.jsx          // Task list + recursive rendering
├── Persistence.js         // Pure utilities (storage, stats, filters)
├── reducer/
│   └── reducer.js         // Task reducer (add, delete, check)
Persistence Layer (Persistence.js)
Responsibilities:

Load/save tasks from localStorage

Generate unique IDs

Compute statistics

Filter task views

Key functions:

loadTask()

saveTask(state)

generateId()

getAllTasks(state)

getCompletedTasks(state)

getIncompletedTasks(state)

getTotalSubtaskCount(state)

CompletionPercentage(state)

filterTasks(state, filter)

All functions are pure except storage I/O.

Reducer Logic
Reducer actions:

addTask

addSubTask

deleteTask (recursive)

checkTask (recursive toggle)

Design guarantees:

No mutation

Full tree consistency

Deterministic state transitions

Filtering Strategy
Filtering is applied as a data projection, not UI conditionals.

js
Copy code
const filteredTasks = filterTasks(state, filter);
Rendering operates only on derived data, preventing tree corruption.

Statistics
Live statistics computed from state:

Total tasks

Completed tasks

Incomplete tasks

Subtask count

Completion percentage

No duplicated state. All values are derived.

Constraints Followed
No external state libraries

No classes

No side effects inside reducer

Flat state with derived hierarchy

Single source of truth

Outcome (Day 25)
This project demonstrates:

Mastery of useReducer

Recursive data manipulation

Separation of concerns

Predictable state architecture

Functional thinking over UI-driven logic