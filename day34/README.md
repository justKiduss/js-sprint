Movie Review App – README
Overview

This is a React-based movie review application that allows users to:

View top-rated movies or search for movies via TMDB API.

Add, edit, and delete reviews for each movie.

Persist reviews in localStorage so they survive page reloads.

The app implements a robust data flow architecture with React hooks, reducers, and asynchronous storage, fulfilling the Day 34 objectives (hydration, persistence, and clean state management).

Features
Movie Display

Fetches top-rated movies from TMDB API by default.

Allows search by movie title.

Handles loading and error states gracefully.

Reviews Management

Create a review for a specific movie.

Edit an existing review.

Delete a review.

Reviews are stored in localStorage for persistence.

Reviews are hydrated automatically on app startup.

Architecture

State Management:

useReducer manages review state (byIds, allIds) and movie state (status, data, error).

Hydration flag (hydrated) prevents overwriting persisted reviews on initial load.

Hooks:

useMovie handles API fetching, including search and top-rated movies.

useReview manages review actions and persistence.

Persistence:

Reviews are saved asynchronously in localStorage using getReviews and saveReviews.

Hydration ensures the reducer state matches persisted data before enabling saves.

Component Structure:

App – Root component managing search query and mode.

Header – Handles user input for search.

DashBoard – Coordinates movie data and review state.

MovieList – Displays movies and provides review CRUD UI.

Installation

Clone the repository:

git clone <repo-url>
cd <repo-folder>


Install dependencies:

npm install


Run the app:

npm start

Usage

View movies – On load, top-rated movies are displayed.

Search movies – Enter a movie name in the header input and submit.

Add review – Click "Review" on a movie, type the review, and submit.

Edit review – Click "Edit" to modify an existing review.

Delete review – Click "DELETE" to remove a review.

Persistence – Reviews remain after page reloads.

Technical Notes

CRUDreducer manages all review actions (CREATED_REVIEW, EDITED_REVIEW, DELETED_REVIEW, REVIEWS_HYDRATED).

Hydration is tracked via hydrated: true to prevent overwriting localStorage on first mount.

useEffect in useReview triggers saves only after hydration.

Movies and reviews are decoupled: adding reviews does not affect movie fetching.

API errors and loading states are handled per movie fetch request.

Future Improvements

Replace localStorage with a backend database for multi-device sync.

Add user authentication for personalized reviews.

Pagination for TMDB movie results.

Enhanced UI with CSS frameworks or component libraries.