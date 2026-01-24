# MovieParadise — Day 29

A React movie browsing and search application built as part of the JS Sprint roadmap.

## Purpose

This project focuses on:
- Proper React data flow
- Custom hooks with parameters
- Separation of UI, state, and data-fetching logic
- Avoiding side effects inside components

## Architecture Overview

- **App**
  - Owns global state (`mode`, `query`)
  - Routes intent between components

- **Header**
  - Pure UI component
  - Emits search intent via callback
  - Does not fetch data

- **DashBoard**
  - UI layout and navigation state
  - Passes props downward

- **MovieCard**
  - Single render surface for movie data
  - No fetching logic inside

- **useMovies (custom hook)**
  - Fetches movies based on parameters
  - Supports:
    - `browse` mode (top-rated movies)
    - `search` mode (query-based results)

## Data Flow
# MovieParadise — Day 29

A React movie browsing and search application built as part of the JS Sprint roadmap.

## Purpose

This project focuses on:
- Proper React data flow
- Custom hooks with parameters
- Separation of UI, state, and data-fetching logic
- Avoiding side effects inside components

## Architecture Overview

- **App**
  - Owns global state (`mode`, `query`)
  - Routes intent between components

- **Header**
  - Pure UI component
  - Emits search intent via callback
  - Does not fetch data

- **DashBoard**
  - UI layout and navigation state
  - Passes props downward

- **MovieCard**
  - Single render surface for movie data
  - No fetching logic inside

- **useMovies (custom hook)**
  - Fetches movies based on parameters
  - Supports:
    - `browse` mode (top-rated movies)
    - `search` mode (query-based results)

## Data Flow
Header (search input)
↓
App (state owner)
↓
DashBoard
↓
MovieCard
↓
useMovies
↓
TMDB API


## Features Implemented

- Browse top-rated movies
- Search movies by title
- Loading and error handling
- Clean hook-based data fetching
- Explicit and predictable state transitions

## API Used

- The Movie Database (TMDB)
- Endpoints:
  - `/movie/top_rated`
  - `/search/movie`

## Tech Stack

- React (hooks)
- Fetch API
- Inline styles (no CSS framework)

## Status

- Day 29 requirements: **Completed**
- Next step: Day 30 — responsiveness, category-driven fetching, UI refinement


