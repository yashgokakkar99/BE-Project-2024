import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  userInfo: null,
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
    userSignOut: (state) => {
      state.userInfo = null;
    },
  },
});

export const { setUserInfo, userSignOut } = userSlice.actions;
export default userSlice.reducer;
