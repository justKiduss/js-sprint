Day 15: React Todo Application (CRUD + LocalStorage Persistence)
Description

This project focuses on building a fully functional React Todo Application with complete CRUD operations, persistent storage, controlled inputs, and clean state management.

It strengthens React fundamentals such as:

Component composition

State lifting

Controlled inputs

useEffect side effects

Immutable state updates

Editing and rewriting specific items in an array

The project consists of two components:

TodoApp.jsx

TodoItem.jsx

Features
Core Todo Behaviors

Add Todos
Uses a controlled form input to add todos with unique IDs.

Edit Todos
Clicking Edit switches a todo into "edit mode", allowing text modification.

Save Updated Todo
The edited text is applied using clean immutable updates via map.

Delete Todos
Removes specific items using filter.

Toggle Completion
Uses checkboxes to flip done between true/false.

Persistence with localStorage

Loads todos from localStorage on app mount (useEffect with empty deps)

Saves todos automatically whenever the list changes

State Management

todos is stored in TodoApp

newText holds temporary edit text

editingId determines which todo is being edited

The app follows immutable update rules:

map() for rewrites

filter() for deletions

array spreads ([...]) for additions

Form Behavior

Prevents adding empty tasks (trim() check)

Resets the input field after submitting

Controlled input for editing a todo inside TodoItem

Challenges Faced

Managing edit mode per-item using editingId

Updating a single todo without mutating the array directly

Keeping newText isolated so edits don’t leak into other items

Using useEffect correctly for storage hydration

Handling (e) => handleEdit(id) and avoiding execution during render

Ensuring correct value behavior for controlled inputs

Files
File	Description
src/TodoApp.jsx	Main logic, adding todos, localStorage effects
src/TodoItem.jsx	Editing, saving, deleting, toggling logic for each todo
File Overview
src/TodoApp.jsx

Handles:

App-level state (todos, newText)

Adding items

Persisting todos to localStorage

Rendering the TodoItem list

Uses:

useEffect(() => {
  let tasks = localStorage.getItem("todos");
  setTodos(JSON.parse(tasks));
}, []);

useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos));
}, [todos]);

src/TodoItem.jsx

Handles:

Edit mode activation (editingId)

Controlled edit input

Save logic (map)

Delete logic (filter)

Checkbox toggle for completion

Key logic:

function handleEdit(id, text) {
  seteditingId(id);
  setNewText(text);
}

function handleSave(id) {
  setTodos(
    todos.map((todo) =>
      todo.id === id ? { ...todo, text: newText } : todo
    )
  );
  seteditingId("");
  setNewText("");
}

How It Works
Adding a Todo

Reads input

Checks for empty string

Creates a todo object:

{ id: Date.now(), text: value, done: false }


Saves to state → automatically saved to localStorage

Editing a Todo

Sets active edit ID

Prefills input with existing todo text

Updates on Save using map

Deleting a Todo

Removes from array with filter

Checking/Unchecking a Todo

Flips boolean using map

Live Demo

To be added after deployment.