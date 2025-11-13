Day 9: Tip Calculator & Memoization
Description

A React tip calculator app that allows users to enter a bill amount, select a tip percentage, and calculate the total including the tip. Input validation ensures the bill is positive and numeric. The project also includes a JavaScript memoization function to practice caching function results.

Features

Input bill amount (number).

Select tip percentage (10%, 15%, 20%).

Calculate total (bill + (bill * tip / 100)) on form submission.

Validate bill input (reject negative or non-numeric values).

Show error message for invalid input (disappears after a few seconds).

Memoization function caches results of expensive computations for repeated arguments.

Challenges

Using useState to manage multiple state variables (bill, tip, total, error).

Handling form submission and input validation.

Conditional rendering of results and error messages.

Implementing a caching mechanism for function calls using JavaScript objects.

Serializing arguments (JSON.stringify) for memoization cache.

Exercises

React Practice:

useState for managing state variables.

onSubmit and onChange event handling.

Conditional rendering for totals and error messages.

JavaScript Practice:

Memoize
 (caching function results).
2622. Cache With Time Limit

Live Demo

https://justkiduss.github.io/js-sprint/day9/tipCalculator.html