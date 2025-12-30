Day 24 – Recursive Task Manager (Tasks + Subtasks)
Overview

This project implements a recursive task manager using React and useReducer.
Tasks can contain unlimited nested subtasks. All operations—add, delete, toggle, and edit—propagate correctly through the task tree. State is persisted using localStorage.

Primary focus: tree-based state modeling, recursion, and reducer correctness.

Core Concepts Practiced

Tree data modeling using parentId

Recursive rendering in React

Recursive state updates in reducers

Immutable state transformations

Separation of UI, state logic, and persistence

Controlled inputs and derived UI state

LocalStorage persistence lifecycle

Data Model

Each task follows this structure:

{
  id: string,
  text: string,
  priority: "Low" | "Medium" | "High",
  dueDate: string,
  parentId: string | null,
  done: boolean
}


parentId === null → root-level task

parentId !== null → subtask

Unlimited nesting supported

Features

Add root tasks and subtasks

Recursive task rendering

Recursive delete (removes all descendants)

Recursive completion toggle (parent → children)

Inline task editing

Persistent state via localStorage

State Management

Managed using useReducer

All updates are pure and immutable

Recursive helper functions handle deep tree operations

UI state (edit mode, input values) kept separate from global state

Persistence

State saved to localStorage on every update

Initial state loaded once during app initialization

Design Constraints

No external state libraries

No database or backend

No drag-and-drop reordering

No performance optimizations for large trees

These constraints are intentional to reinforce core concepts.

Outcome

This day validates:

Correct mental model of recursive data

Ability to reason about cascading state changes

Discipline in reducer design

Separation between learning mechanics and abstractions

Day 24 complete.