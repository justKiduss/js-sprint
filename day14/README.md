Day 14: Algorithms + React Todo Application + Signup Form
Description

This project includes three parts:

LeetCode algorithms
You implemented:

412. FizzBuzz

Length of Last Word

Remove Duplicates from Sorted Array
These cover string manipulation, array rewriting, and two-pointer style iteration.

React Todo Application
A functional Todo app that supports adding tasks, toggling completion, persisting data through localStorage, and counting completed tasks. The app uses controlled inputs, clean state updates, and proper immutability.

React Signup Form
A form with validation for username, email, and password. Errors auto-clear after 3 seconds. Successful submission displays a message and resets fields.

This day focuses on strengthening core algorithm skills while applying React fundamentals such as state, effects, controlled forms, and updating nested data.

Features
Algorithms
412. FizzBuzz

Handles divisibility logic cleanly.

Pushes formatted strings into an array.

Straight O(n) loop.

58. Length of Last Word

Uses trim() and .split(" ").

Returns length of the final word efficiently.

26. Remove Duplicates from Sorted Array

Correct two-pointer rewrite technique.

Rewrites nums in-place.

Tracks unique values using pos.

Prints the final non-duplicate length.

React Todo App
Core Features

Add todos with unique IDs.

Prevent empty submissions.

Toggle completion using checkboxes.

Persistent storage using localStorage (load on mount, save on change).

Completion counter via a separate component.

Clean immutable state updates.

State Management

todos stored in TodoApp.

handleSubmit adds items.

handleCheck toggles the done value using map.

Additional Behaviors

Auto resets input after submit.

Smart hydration from storage.

Responsive layout (centered container).

Signup Form
Features

Username, email, and password fields.

Validation:

Username ≥ 3 characters.

Email must match regex.

Password ≥ 6 characters.

Error messages auto-clear after 3 seconds.

Displays success message.

Controlled inputs with proper state.

Challenges Faced

Implementing two-pointer patterns in the array problems.

Understanding how in-place rewriting differs from creating new arrays.

Managing localStorage hydration correctly.

Keeping React updates immutable (map, spreading, etc.).

Handling multiple state values in the form while keeping validation clean.

Using regex correctly for email and palindrome-style cleaning.

LeetCode Exercises Completed

412. FizzBuzz
Practiced clean looping and condition ordering.

58. Length of Last Word
Practiced string trimming and splitting.

26. Remove Duplicates from Sorted Array
Practiced in-place array rewriting with a write pointer.

Files

src/FizzBuzz.js — FizzBuzz solution.

src/LastWordLength.js — Length of Last Word solution.

src/RemoveDuplicates.js — Remove Duplicates solution.

src/TodoApp.jsx — Main Todo logic, storage, toggling.

src/CompletedCount.jsx — Shows completed/total count.

src/SignupForm.jsx — Validation and user creation form.

Live Demo

Will be added after deployment.