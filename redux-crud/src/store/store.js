import { configureStore } from "@reduxjs/toolkit";
import CardListSlice from "../features/CardListSlice";

export const store = configureStore({
  reducer: {
    Card: CardListSlice,
  },
});
