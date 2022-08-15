import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userList: [],
};

export const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clearUserList: (state) => {
      state.userList = [];
    },
    setUserList: (state, action) => {
      state.userList = action.payload;
    },
  },
  extraReducers: {},
});

export const { clearUserList, setUserList } = slice.actions;

export default slice.reducer;
