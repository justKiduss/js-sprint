# Day 8: React Counter App

## Description

A simple React counter app with increment, decrement, and reset buttons. The counter value is persisted in `localStorage` so it survives page reloads.

---

## Features

- Increment counter (+1).  
- Decrement counter (-1, minimum 0).  
- Reset counter (0).  
- Persist counter value in `localStorage`.  
- Accepts `initialCount` prop from parent component.  

---

## Challenges

- Using `useState` to manage counter state.  
- Using `useEffect` to synchronize state with `localStorage`.  
- Validating decrement to prevent negative values.  
- Functional components and props.  

---

## Exercises

- **freeCodeCamp**: React exercises covering state, props, event handling, lifecycle methods (hooks).  
- **LeetCode**:  
  - [Memoize](https://leetcode.com/problems/memoize/) (practice `useMemo` concept).  
  - [Cache with Time Limit](https://leetcode.com/problems/cache-with-time-limit/) (practice `useEffect` cleanup & `useCallback`).  

---

## Live Demo

[https://justkiduss.github.io/js-sprint/day8/counter.html](https://justkiduss.github.io/js-sprint/day8/counter.html)
