give me read me file for day 36
Day 36 — Backend-Ready Review Architecture
Overview

Day 36 focuses on transforming the review system from UI-driven local state into a backend-ready architecture with proper async boundaries, controlled state transitions, and failure handling.

The goal is to ensure:

Reducers remain pure.

Persistence happens at the async boundary.

State does not become truth until persistence succeeds.

UI flags are separated from domain data.

Architectural Flow

UI → Controller → Async Service → Dispatch Success/Failure → Reducer → State Update

Reducers contain no side effects.
All persistence logic is handled inside controller async functions.

Features Implemented
1. Hydration Layer

hydrate() fetches persisted reviews from storage.

Dispatches REVIEW_LOADING before request.

Dispatches REVIEW_HYDRATED with normalized structure.

Guarantees state shape:
{ byIds: {}, allIds: [] }

2. Create Review (Async Boundary)

Flow:

Dispatch REVIEW_CREATE_REQUEST

Construct nextState

Await saveReview(nextState)

On success → dispatch REVIEW_CREATED

On failure → dispatch REVIEW_CREATE_FAILURE

State is only committed after persistence succeeds.

3. Update Review

Flow:

Dispatch REVIEW_UPDATE_REQUEST

Construct updated state

Await persistence

Dispatch success or failure

No reducer side effects.

4. Remove Review

Flow:

Dispatch REVIEW_REMOVE_REQUEST

Derive new state without target ID

Await persistence

Dispatch success or failure

Immutable removal pattern used:

const { [deleteId]: _, ...rest } = state.byIds

State Shape
Review State
{
  byIds: {
    [movieId]: { review: string }
  },
  allIds: string[],
  hydrated: boolean,
  loading: boolean,
  error: string | null
}


Domain data:

byIds

allIds

UI flags:

hydrated

loading

error

Reducer Design Principles

Pure functions only

No async calls

No localStorage access

Immutable state updates

Explicit success/failure branches

Movie Controller

Handles fetching from TMDB API

Uses useReducer

Dispatches:

LOADING

SUCCESS

FAILURE

Prevents stale updates via ignore flag

Persistence Layer

Simulated async backend using:

getReview()

saveReview(state)

Includes artificial delay to mimic network latency.

Architectural Improvements Achieved

Removed fake try/catch inside reducers

Introduced real async failure handling

Separated side effects from reducer logic

Implemented request → success/failure lifecycle

Prevented state mutation before persistence success

Known Limitations

Entire review state (including UI flags) is persisted

Controller uses closure state (possible stale state in concurrent operations)

API key exposed in frontend (acceptable for learning, not production)

Movie reducer mixes status string and loading boolean patterns

Learning Objectives Covered

Async state management with useReducer

Domain vs UI state separation

Backend-ready architecture pattern

Failure-first thinking

Immutable state updates

Controlled side-effect boundaries

Day 36 Outcome

Architecture is now backend-compatible.

Reducer is pure.
Persistence is controlled.
State lifecycle is explicit.