import { configureStore } from '@reduxjs/toolkit'
import ProductReducer from './productSlice/ProductSlice'
export const store = configureStore({
  reducer: {
    products:ProductReducer
  },
})