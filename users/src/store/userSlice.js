import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  users: [],
}

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    userData: (state, action) => {
        state.users = action.payload
    },
  },
})

export const { userData } = userSlice.actions
export default userSlice.reducer