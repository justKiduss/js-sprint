README

Day 14: Algorithms (Move Zero) + Valid Palindrome + React Todo Application

Description

This project combines essential algorithm practice with a functional Todo application built using React.
The algorithms focus on common LeetCode patterns (two-pointer technique, string cleaning).
The React app manages dynamic lists, error handling, and clean state updates.

The Todo app allows users to add tasks, prevent invalid entries, toggle completion, and delete items.
All UI changes are automatically reflected through state updates.

Features
Algorithms

Move Zeroes

Optimized O(n) two-pointer solution.

Moves all zeroes to the end without breaking order.

Updates the input array in-place.

Valid Palindrome

Cleans string using regex to keep only alphanumeric characters.

Converts to lowercase.

Uses reverse-check to determine palindrome status.

React Todo App

Add new todo items.

Prevent empty or duplicate tasks.

Toggle completion using checkboxes.

Delete tasks individually.

Error messages auto-clear after 3 seconds.

Fully controlled inputs.

Correct immutability using map and filter.

Challenges Faced

Understanding why splice() mutates arrays and causes O(n²) behavior in loops.

Learning why LeetCode requires avoiding push/splice during iteration for performance.

Keeping algorithm functions pure and consistent with time complexity constraints.

Managing multiple state values: todos, newTodo, and error.

Ensuring immutability in React when updating arrays.

Distinguishing between values returned from functions and mutated parameters.

LeetCode Exercises Completed
283. Move Zeroes

Practiced two-pointer technique.

Learned in-place array rewriting without extra storage.

Understood difference between mutating and reassigning arrays.

125. Valid Palindrome

Practiced regex cleaning.

Learned how string reversing works and why === is required.

Understood that LeetCode ignores punctuation and spaces.

Files

src/MoveZero.js — Move Zeroes solution (O(n)).

src/Palindrome.js — Valid Palindrome solution.

src/TodoList.jsx — Main Todo logic and rendering.

src/TodoForm.jsx — Handles input, validation, and adding items.

src/TodoItem.jsx — Renders tasks and controls toggling/deleting.

Live Demo

Will be added after deployment.