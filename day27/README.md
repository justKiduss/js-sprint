# Task Manager – JS Sprint (Day 27)

Extension of Day 26 with **full reducer-driven behavior**, **recursive integrity**, and **state persistence validation**.  
Still logic-first. Still no CSS framework. Still flat-state + derived hierarchy.

---

## What Changed From Day 26

Day 27 is not cosmetic. It hardens correctness.

---

## Core Architecture (Unchanged but Reinforced)

### 1. Flat State, Explicit Hierarchy
All tasks live in a single array.

Hierarchy exists only via:

```js
parentId: string | null


No nested state. No derived storage. No duplication.

2. Recursive Delete (Hard Requirement)

Deleting a task deletes all descendants, depth-unbounded.

Implementation:

Identify direct children

Recursively delete them

Repeat until leaf nodes

This guarantees:

No orphan subtasks

No ghost state


3. Recursive Completion Propagation

Checking a task toggles:

The task itself

All descendants recursively

Behavior:

Parent → children enforced

Child state never contradicts parent state


4. Reducer Is the Only Authority

All mutations go through useReducer.

Actions:

addTask

deleteTask (recursive)

checkTask (recursive)

editTask

No local mutations.
No derived side effects.
No UI-driven state hacks.

5. Persistence Hardened

Load guarded with try/catch

Empty storage handled safely

Save runs on every state change

useEffect(() => saveTask(state), [state])


State survives reloads without corruption.

6. Root-Only Filtering (Still Mandatory)

Filtering only affects root tasks.

task.parentId === null


Why:

Prevents subtasks from leaking into root view

Maintains tree integrity

Keeps recursion stable

Filters:

All

Completed

High Priority

7. Depth-Based Visual Hierarchy (Still Enforced)

Recursive rendering passes depth:

<Task depth={depth + 1} />


Visual nesting via:

paddingLeft: depth * 16


No framework. No abstraction. Pure structural signal.

Component Responsibilities
TaskManager

Initializes reducer

Handles root task creation

Owns persistence lifecycle

TaskItems

Manages filter state

Renders only root tasks

Entry point for recursion

Task

Recursive renderer

Owns subtask creation

Enforces edit / delete / complete logic

Passes depth downward

reducer

Single source of truth

Enforces all invariants

