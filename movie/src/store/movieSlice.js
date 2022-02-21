import React from 'react';
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    movie: [],
}

export const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        getDate: (state, action) => {
            state.movie = action.payload
        }
    }
})

export const { getDate } = movieSlice.actions

export default movieSlice.reducer