Task Manager – Recursive Todo App (React + useReducer)
Overview

This project is a hierarchical task manager built with React.
It supports parent tasks, unlimited nested subtasks, recursive operations, and persistent storage.

The application uses a flat state structure with parent–child relationships instead of nested state. All hierarchical behavior is achieved through recursion.

Core Features

Add root tasks

Add unlimited nested subtasks

Recursive delete (deletes a task and all descendants)

Recursive toggle (check/uncheck a task and all descendants)

Edit task text

Persistent storage using localStorage

Single reducer with immutable updates

Recursive UI rendering

Data Model

All tasks are stored in a single flat array.

{
  id: number,
  text: string,
  done: boolean,
  parentId: number | null,
  priority?: "low" | "medium" | "high",
  dueDate?: string
}


parentId === null → root task

parentId === id → child task

Hierarchy is derived, not nested

State Management

useReducer for all task state

useState for UI-only concerns (inputs, edit mode, visibility)

No mutation; every update returns a new state array

Reducer actions:

addTask

deleteTask (recursive)

checkTask (recursive)

editTask

Recursive Logic
Recursive Delete

Deletes a task and all of its descendants.

Key idea:

Remove the target task

Find its children

Recursively delete each child

Always return a new state array

newState = deleteTask(newState, child.id);


This rebuilds state step-by-step from the deepest child upward.

Recursive Toggle

Toggles a task’s done value and applies the same operation to all descendants.

Each task toggles based on its own current state, not inherited state.

UI Rendering

Tasks are rendered recursively

Each Task component renders its own children by filtering the flat state

No nested data structures in state

Persistence

State is automatically saved to localStorage on every update.

saveTasks(state);


On load:

loadTasks() || initialState


The app restores its previous state on refresh.

File Structure
src/
├── components/
│   ├── TaskManager.jsx
│   ├── TaskItems.jsx
├── reducers/
│   └── reducer.js
├── persistence.js

Design Decisions

Flat state + recursion instead of nested state

One reducer, no derived reducers

Immutable updates only

Logic-first approach over UI polish

Explicit control over recursion for learning clarity

Known Limitations

Subtasks do not currently inherit priority or dueDate

UI and logic are not fully separated

No performance optimization for very large task trees

No validation or error handling for edit conflicts

Purpose

This project is not a simple todo list.
It is an exercise in:

Recursion

Immutable state updates

Reducer-driven architecture

Thinking in data transformations instead of UI events

Status

Functionally complete.
Structurally improvable.
Conceptually successful.

This project demonstrates real understanding of recursive state management in React.