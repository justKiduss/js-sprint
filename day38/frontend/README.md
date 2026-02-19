Day 37 — Review System Refactor (Backend-Ready Architecture)
Overview

Day 37 focuses on refactoring the movie review feature into a backend-ready, layered architecture.
The goal was to eliminate direct localStorage coupling, enforce separation of concerns, and stabilize state transitions for future API integration.

This milestone transitions the project from feature-driven implementation to architecture-driven design.

Objectives

Separate UI state from domain state

Isolate persistence logic inside a service layer

Ensure reducer purity (no side effects)

Remove stale state race conditions

Make persistence layer swappable (localStorage → HTTP API)

Preserve deterministic state transitions

Final Architecture
1. UI Layer (MovieList)

Responsibilities:

Render movies and reviews

Manage local transient UI state (form inputs, edit mode, delete confirmation)

Trigger controller actions

Display loading and error states

No persistence logic.
No reducer mutation.

2. Controller Layer (useReviewController)

Responsibilities:

Dispatch request actions

Call service layer

Dispatch success/failure actions

Coordinate async flow

Controller does not:

Access localStorage directly

Compute next state

Mutate reducer state

3. Reducer Layer (ReviewReducer)

Responsibilities:

Handle all state transitions

Maintain domain state:

byIds

allIds

Maintain runtime flags:

loading

error

Reducer is pure:

No async logic

No storage access

No side effects

4. Service Layer (ReviewService)

Responsibilities:

Load data from persistence

Save updated snapshots

Delete records

Current implementation:

localStorage-based

Structured for future HTTP replacement

Persistence stores only:

{
  byIds: { [movieId]: { reviews: string } },
  allIds: string[]
}


UI runtime flags are never persisted.

State Model
{
  byIds: {
    movieId: {
      reviews: string
    }
  },
  allIds: [movieId],
  loading: boolean,
  error: string | null
}


Domain data is separated from UI state.

Key Improvements Made

Removed spreading full reducer state into persistence

Eliminated stale-closure race condition by reading latest snapshot in service

Ensured consistent persistence shape across create, update, delete

Preserved reducer determinism

Verified hydration consistency after refresh

Confirmed full CRUD persistence integrity

Tested Scenarios

Create → Refresh → Data persists

Update → Refresh → Data persists

Delete → Refresh → Data persists

Rapid sequential operations

Hydration on initial mount

All operations behave deterministically.

Known Limitations

One review per movie (keyed by movieId)

Last-write-wins model (no concurrency protection)

localStorage is synchronous and single-user

No timestamp or metadata in review model

Optimistic UI clearing before server confirmation

These are acceptable for Stage 2 maturity.

Backend Readiness

The architecture supports direct migration to HTTP by:

Replacing service functions with fetch calls

Keeping controller and reducer unchanged

Preserving domain state structure

No UI refactor required for backend transition.