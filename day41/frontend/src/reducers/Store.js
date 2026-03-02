import { configureStore } from "@reduxjs/toolkit";
import ReviewReducer from "./ReviewReducer";

export const Store = configureStore({
  reducer: {
    reviews: ReviewReducer
  },
});