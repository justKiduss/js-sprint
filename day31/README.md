## Async Architecture

This app enforces a single async entry rule.
All network requests are started inside a single useEffect
within a custom hook.

Components never perform async work.
They only render based on hook state.

## Async Flow

user action → state change (mode/query)
→ useEffect runs
→ service function called
→ loading state set
→ success or error state set
→ component re-renders

## Why Cleanup Is Required

Async requests may resolve after a component unmounts.
A cancellation flag prevents stale responses
from mutating state after unmount.

## .then vs async/await

.then is used when returning promises directly
from service functions.

async/await is preferred inside hooks or handlers
when sequential logic is required.

Both represent the same underlying promise execution model.
