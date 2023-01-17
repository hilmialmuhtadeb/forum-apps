import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    users: [],
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setAllUsers: (state, action) => {
      state.users = action.payload;
    },
  },
});

export const { setUser, setAllUsers } = authSlice.actions;
export const authUser = (state) => state.auth.user;
export const allUsers = (state) => state.auth.users;
export default authSlice.reducer;
