import { createSlice } from '@reduxjs/toolkit'

export const MovieSlice = createSlice({
  name: 'movie',
  initialState: {
    movie:[]
  },
  reducers: {
    getData: (state,action)=>{
        state.movie = action.payload
    }    
  },
})

// Action creators are generated for each case reducer function
export const { getData } = MovieSlice.actions

export default MovieSlice.reducer