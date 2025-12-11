Day 21 – Task Manager with Reducer and Persistence
Project Overview

This project implements a task management system in React that allows users to manage tasks across multiple categories (Work, School, Social, All). It demonstrates advanced state management using useReducer, local persistence via localStorage, and dynamic task operations including add, edit, delete, and completion toggling. The project also includes utilities for Pascal’s Triangle generation.

Features
Task Management

Add Task: Create tasks with a selected category.

Edit Task: Modify tasks inline.

Check/Uncheck Task: Toggle task completion.

Delete Task: Remove tasks from all categories.

Category Filtering: Filter tasks by All, Work, School, Social.

Persistent Storage: Tasks are saved in localStorage.

Pascal’s Triangle Utilities

Full Triangle (generate): Returns the triangle up to a given number of rows.

Specific Row (getRow): Returns a single row at a specified index.

Folder Structure
src/
├── components/
│   ├── TaskManager.jsx       # Main component with task form
│   └── TaskItems.jsx         # Displays task list with edit/check/delete functionality
├── reducers/
│   └── Reducer.js            # Handles add, edit, check, delete actions
├── utils/
│   └── Persistence.js        # loadState, saveState, initialState
└── algorithms/
    ├── PascalTriangle.js     # generate(numRows)
    └── PascalRow.js          # getRow(rowIndex)

Installation and Running

Install dependencies

npm install


Start the application

npm start

How to Use

Adding Tasks

Enter task text in the input field.

Select a category from the dropdown.

Click Add Task.

Editing Tasks

Click the Edit button next to a task.

Update the text in the input field and click Save.

Check/Uncheck Tasks

Toggle the checkbox to mark a task as completed or incomplete.

Deleting Tasks

Click Delete to remove a task.

Category Filtering

Use the dropdown to filter tasks by category.

Pascal’s Triangle Utilities

import { generate } from './algorithms/PascalTriangle';
import { getRow } from './algorithms/PascalRow';

console.log(generate(5)); // Full triangle
console.log(getRow(3));   // Specific row

Notes

Task IDs are generated using Date.now().

Reducer maintains consistency by mapping over all categories.

Task state is automatically persisted in localStorage on every update.

The project demonstrates combining reducers with local persistence for scalable task management.
