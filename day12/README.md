Day 12: Conditional Rendering & Dynamic Lists

Description

This project builds upon the previous TodoList app by adding conditional rendering and dynamic UI behavior. The user can add, delete, and toggle tasks while the UI updates automatically. The app displays a message when no tasks exist and highlights completed tasks with different styling.

Features

Add new todo items dynamically.

Prevent empty or duplicate tasks.

Toggle completion status using checkboxes.

Delete tasks individually.

Conditionally render:

A message (“No tasks yet”) when the list is empty.

Red text color for completed (done) tasks.

Error messages shown for invalid actions (disappear after 3 seconds).

Challenges Faced

Understanding splice() vs slice() behavior when mutating arrays.

Managing multiple state updates (todos, error, newTodo).

Getting conditional rendering logic correct (todos.length > 0 ? ... : ...).

Ensuring map() and filter() produce new arrays for immutability.

LeetCode Exercises Completed

189. Rotate Array

Practiced array mutation using splice(), unshift(), and modular arithmetic.

1480. Running Sum of 1D Array

Practiced array accumulation patterns and in-place updates.

Files

src/TodoList.jsx — Main component containing all logic and rendering.

Live Demo

Will be added after deployment.