DATA_CONTRACT.md
Base URL
http://localhost:5000/api

All responses follow this envelope:

Success Response Shape
{
  "success": true,
  "data": ...
}
Error Response Shape
{
  "success": false,
  "error": "string message"
}
State Model
ReviewData (Server State Shape)
{
  "byIds": {
    "movieId": {
      "review": "string"
    }
  },
  "allIds": ["movieId"]
}
Description

byIds → normalized dictionary keyed by movie id

allIds → ordered list of stored movie ids

Each id maps to an object containing:

review: string

Endpoints
1. GET /api/get_reviews
Description

Returns the entire normalized review state.

Request

No body required.

Success (200)
{
  "success": true,
  "data": {
    "byIds": {},
    "allIds": []
  }
}
Error (500 or unexpected)
{
  "success": false,
  "error": "error message"
}
2. POST /api/post_review
Description

Creates or overwrites a review for a movie id.

Request Body
{
  "id": "string",
  "review": "string"
}
Validation Rules

id must exist

review must exist

Neither can be empty or falsy

Success (201)
{
  "success": true,
  "data": "string"
}

Note: Based on current implementation, data returns only the review value due to (id, review) usage.

Error (400)
{
  "success": false,
  "error": "invalid input"
}
3. DELETE /api/delete_review
Description

Deletes a review by id.

Request Body
{
  "id": "string"
}
Validation Rules

id must exist

id must be present in allIds

Success (200)
{
  "success": true,
  "data": "id is deleted"
}
Error Cases

400 – Missing id

{
  "success": false,
  "error": "id is missing"
}

404 – Id not found

{
  "success": false,
  "error": "id is not found"
}
4. PATCH /api/edit_review
Description

Updates an existing review.

Request Body
{
  "id": "string",
  "review": "string"
}
Validation Rules

id must exist

review must exist

id must already exist in storage

Success (200)
{
  "success": true,
  "data": {
    "id": "string",
    "review": "string"
  }
}
Error Cases

400 – Missing id or review

{
  "success": false,
  "error": "id is missing"
}

404 – Id not found

{
  "success": false,
  "error": "id is not found"
}
5. Fallback Route

Any undefined route:

Response (404)
{
  "success": false,
  "error": "Route not found"
}
Frontend Expectations

All API calls parse JSON.

If response.ok === false, frontend throws new Error(data.error).

On success, frontend uses data.data.

After mutations (POST, PATCH, DELETE), frontend rehydrates state via GET /api/get_reviews.

Architectural Notes

Backend storage is in-memory.

Data resets on server restart.

State is normalized for O(1) access.

API follows consistent envelope pattern.

Frontend depends on strict success/data/error contract symmetry.