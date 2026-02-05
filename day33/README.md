# Day 33 — Transition from Local CRUD → Backend-Ready Architecture

## Objective
Refactor the frontend from a local-only CRUD mindset into a backend-ready architecture.  
No backend is implemented. The goal is architectural correctness and future compatibility.

---

## Core Principles Enforced

1. **Decoupling**
   - UI does not know where data comes from.
   - Persistence details are hidden behind a service layer.

2. **Single Source of Truth**
   - Movies are owned by the Movie API.
   - Reviews are owned by the Review Service.
   - React state is the only source of truth for rendering.

3. **Event-Based State Management**
   - Reducer actions represent intent, not implementation.
   - Actions mirror backend events.

4. **Explicit Hydration**
   - Initial state is loaded atomically on app startup.
   - No incremental or implicit merging.

---

## Architecture Overview

Persistence is a side-effect.  
Reducers are pure.  
UI only dispatches and renders.

---

## Implemented Components

### 1. Review Service (`services/ReviewService.js`)
**Responsibility:** Own review persistence.

- `getReviews()`
- `persistReviews(state)`
- `createReview(state)`
- `updateReview(state)`
- `deleteReview(state)`

`localStorage` access exists **only** here.

---

### 2. Reducer (`CRUDreducer`)
**Responsibility:** Transform state based on events.

Supported actions:
- `REVIEWS_HYDRATED`
- `REVIEW_CREATED`
- `REVIEW_UPDATED`
- `REVIEW_DELETED`

Reducer rules:
- No side-effects
- No persistence logic
- No UI assumptions

---

### 3. Hydration Phase
On application mount:
1. Load reviews via `getReviews()`
2. Dispatch `REVIEWS_HYDRATED`
3. Replace state atomically

---

### 4. Persistence Side-Effect
After state changes:
- State is persisted via the service
- Guarded to avoid overwriting during initial hydration

---

### 5. UI Layer
- Dispatches events only
- Never accesses `localStorage`
- Uses optional chaining when reading reviews

---

## Data Shape

```ts
ReviewState {
  byIds: {
    [movieId]: {
      review: string
    }
  },
  allIds: number[]
}

