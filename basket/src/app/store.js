import { configureStore } from '@reduxjs/toolkit'
import ProductsSlice from '../features/products/ProductsSlice'

export const store = configureStore({
    reducer: {
        products: ProductsSlice
    },
})