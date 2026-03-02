 Selector Factories

- Purpose: A selector factory is a function that returns a selector. Instead of one global selector, you generate a new instance per component or per use case.


 Per-Component Memo Isolation

- Purpose: Ensures that memoization is scoped to the component instance, not shared globally.
- How it works: By using selector factories, each component gets its own memoized selector. That way, if Component A and Component B both ask for derived data with different props, they don’t overwrite each other’s cache.
- Developer takeaway: Always use factories when selectors depend on props (like id or filter) to avoid cache collisions.

Cache Independence

- Purpose: Keeps selector caches independent from other caching systems (like RTK Query or API caches).
- How it works: Reselect memoization only cares about input arguments. It doesn’t rely on external caches, so you can safely combine it with RTK Query or other data sources without interference.
- Developer takeaway: Use memoized selectors for derived state (filtering, sorting, aggregating), not for API response caching. That separation avoids bugs and makes reasoning about data flow easier

