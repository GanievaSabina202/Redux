import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products:[],
}

export const ProductSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    getProduct: (state, action) => {
      state.products = action.payload
    },
  },
})

export const { getProduct } = ProductSlice.actions

export default ProductSlice.reducer