import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cardListArr: [],
};

export const CardListSlice = createSlice({
  name: "CardList",
  initialState,
  reducers: {
    addCardList: (state, action) => {
      state.cardListArr.push(action.payload);
    },
    deleteCardList: (state, action) => {
      state.cardListArr = state.cardListArr.filter(
        (cardListRemoveItem) => cardListRemoveItem.id !== action.payload.id
      );
    },
    changeCardList: (state, action) => {
      state.cardListArr = state.cardListArr.map((changeCardListItem) => {
        if (changeCardListItem.id === action.payload.id) {
          changeCardListItem.inputVal = action.payload.inputValChange;
        }
      });
    },
  },
});

export const { addCardList, deleteCardList, changeCardList } =
  CardListSlice.actions;
export default CardListSlice.reducer;
