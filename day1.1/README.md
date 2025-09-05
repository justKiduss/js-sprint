# Day 1: Counter App
## Description
A counter app with increment/decrement buttons. Saves count to localStorage.
## Features
- Shows current count.
- "+" increases count by 1.
- "-" decreases count by 1 (prevents negatives).
- Persists count on refresh.
## Challenges
- localStorage returned strings; fixed with `Number()`.
- Initial display was 0; added `value.textContent = count`.
## Live Demo
[GitHub Pages URL]