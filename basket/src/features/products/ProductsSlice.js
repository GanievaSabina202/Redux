import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  addProducts: [],
  plusProduct: [],
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    AllProduct: (state, action) => {
      state.products = action.payload;
    },

    AddProduct: (state, action) => {
      const alreadyInList = state.addProducts.find(
        (item) => item.id === action.payload.id
      );
      let newCart;
      if (alreadyInList) {
        newCart = state.addProducts.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, count: 1 };
          } else {
            return item;
          }
        });
      } else {
        newCart = [...state.addProducts, action.payload];
      }
      return { ...state, addProducts: newCart };
    },

    Increment: (state, action) => {
      const alreadyInList = state.addProducts.find(
        (item) => item.id === action.payload.id
      );
      let newCart;
      if (alreadyInList) {
        newCart = state.addProducts.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, count: item.count + 1 };
          } else {
            return item;
          }
        });
      } else {
        newCart = [...state.addProducts, action.payload];
      }
      return { ...state, addProducts: newCart };
    },
    
  },
});

export const { AllProduct, AddProduct, Increment } = productSlice.actions;
export default productSlice.reducer;
