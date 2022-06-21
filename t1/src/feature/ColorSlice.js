import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getColors = createAsyncThunk(
  "colors/getColors",
  async (dispatch, getState) => {
    return await fetch("https://jsonplaceholder.typicode.com/todos").then(
      (response) => response.json()
    );
  }
);

export const ColorSlice = createSlice({
  name: "colors",
  initialState: {
    colors: [],
    status: null,
  },
  extraReducers: {
    [getColors.pending]: (state, action) => {
      state.status = "loanding";
    },
    [getColors.fulfilled]: (state, action) => {
      state.status = "success";
      state.colors = action.payload;
    },
    [getColors.rejected]: (state, action) => {
      state.status = "fail";
    },
  },
});

export default ColorSlice.reducer;
