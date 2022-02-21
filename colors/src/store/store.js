import { configureStore } from '@reduxjs/toolkit'
import MovieReducer from './MovieSlice'
export default configureStore({
  reducer: {
    movie: MovieReducer
  },
})