# Movie Browser with Reviews (Stage 3)

A React application demonstrating **Stage 3 architecture discipline**:
- API data fetching via reducer
- Local CRUD state with persistence
- Clear separation of concerns

---

## Features

- Browse top-rated movies from TMDB
- Search movies by title
- Add, edit, and delete personal reviews
- Reviews persist via localStorage
- Deterministic reducers
- No side effects inside reducers

---

## Architecture

### 1. API State (Read-only)
Handled by `useMovie` hook.

- Fetches movie data
- Manages loading / success / error
- Reducer controls state transitions
- No persistence

Files:
- `useMovie.js`
- `reducer.js`
- `MovieService.js`

---

### 2. User State (CRUD + Persistence)
Handled by `CRUDreducer`.

- Reviews belong to the user
- Stored in `localStorage`
- Fully deterministic

Files:
- `CRUDreducer.js`
- `persistence.js`

---

### 3. UI Layer
Pure rendering + event dispatch.

Files:
- `Dashboard.jsx`
- `MovieList.jsx`
- `Header.jsx`

---

## State Models

### API State
```js
{
  status: "idle" | "loading" | "success" | "error",
  data: Movie[],
  error: string | null
}
