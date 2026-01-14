README.md (Day 26)
# Task Manager — Day 26

A hierarchical task manager built with React using a flat state model, recursive rendering, and deterministic state transitions.

This project is part of the Day 26 sprint, focused on mastering:
- State normalization
- Recursive UI rendering
- Reducer-driven logic
- Filtering without derived state bugs

---

## Core Concepts

### 1. Flat State with Hierarchy
All tasks live in a single array.
Hierarchy is expressed using `parentId`.

```js
{
  id: string,
  text: string,
  priority: "Low" | "Medium" | "High",
  dueDate: string,
  done: boolean,
  parentId: string | null
}


parentId === null → root task

otherwise → subtask

2. Single Source of Truth

state contains all tasks (roots + children).

No duplicated or derived task lists.

Filtering is applied only to root tasks.

3. Root-Only Filtering

Filtering never affects children directly.

filterTasks(filter, state)


Always starts from parentId === null

Children are rendered recursively inside their parent task

4. Recursive Rendering

The Task component renders itself and its children:

const children = allState.filter(t => t.parentId === task.id);


This enables unlimited nesting without extra state.

5. Reducer Logic
Add Task

Adds both root tasks and subtasks.

Delete Task

Deletes a task and all descendants recursively.

Check Task

Toggles completion on a task and propagates the same state to all children.

No side effects. No mutations.

6. Persistence

State is persisted to localStorage.

Loaded once on initialization

Saved automatically on every state change

What This Project Proves

Understanding of normalized state

Correct use of recursion in UI and reducers

Proper separation of concerns

Filtering without breaking hierarchy

React used as a deterministic system, not a magic box

Status

Day 26: Completed

This project is production-structured for a learning sprint and is ready to be extended in later stages (editing, date filtering, UX polish).