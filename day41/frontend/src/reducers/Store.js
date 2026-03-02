import { configureStore } from "@reduxjs/toolkit";
import ReviewReducer from "./ReviewReducer";
import MovieReducer from "./MoiveReducer"
export const Store = configureStore({
  reducer: {
    reviews: ReviewReducer,
    movies:MovieReducer
  },
});