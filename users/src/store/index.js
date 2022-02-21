import { configureStore } from '@reduxjs/toolkit'
import userReducers from './userSlice'
export const store = configureStore({
  reducer: {
    users: userReducers
  },
})