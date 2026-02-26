Day 38 – Backend Integration & Review Persistence
Overview

Day 38 transitions the review system from local state-only management to full backend persistence using an Express server. The application now performs real CRUD operations through an API layer.

Architecture flow:

UI → API Service Layer → Express Backend → Normalized Data Store → Rehydration

Backend (Express Server)
Tech Stack

Node.js

Express

CORS

JSON middleware

Server Port
http://localhost:5000
In-Memory Data Structure
reviewData = {
  byIds: {
    [id]: { reviews: string }
  },
  allIds: [id1, id2, ...]
}

Normalized structure ensures:

O(1) lookup

Predictable state shape

Frontend-ready hydration

API Endpoints
1. Get All Reviews
GET /api/get_reviews

Response:

{
  "byIds": {},
  "allIds": []
}
2. Add / Update Review
POST /api/post_reviews

Request Body:

{
  "id": "review-id",
  "review": "text"
}

Behavior:

Stores review under byIds[id]

Adds id to allIds if not already present

Returns 201 status

3. Delete Review
DELETE /api/delete_reviews

Request Body:

{
  "id": "review-id"
}

Behavior:

Removes entry from byIds

Filters id from allIds

Returns 200 status

Frontend API Layer

All API logic is abstracted into a service module.

Base URL
const API = "http://localhost:5000/api";
loadReviews()

Fetches entire normalized state

Returns fallback empty structure if needed

Acts as hydration layer

saveReviews(id, review)

Sends POST request

Persists review

Rehydrates state by calling loadReviews()

deleteReview(id)

Sends DELETE request to correct endpoint

Removes review from backend

Rehydrates state

Architectural Decisions

Service abstraction layer isolates fetch logic from UI.

State rehydration after every mutation ensures single source of truth.

Normalized backend structure mirrors frontend state model.

No local mutation without backend confirmation.

This moves the project from Stage 2 local state maturity to early Stage 3 backend integration readiness.

Known Limitations

No validation

No error payload differentiation

In-memory storage (resets on server restart)

No status-based error messaging

No async loading state management

Skill Demonstrated

RESTful endpoint construction

Normalized state modeling

Contract alignment between frontend and backend

Express middleware usage

Async data flow control

Full request-response loop integration