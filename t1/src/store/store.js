import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "../feature/ColorSlice";

export const store = configureStore({
  reducer: {
    card: cardReducer,
  },
});
