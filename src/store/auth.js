import { createSlice } from "@reduxjs/toolkit";

const intinialAuthState = {
  isAuth: false,
  userLogin: null,
};

const authSlice = createSlice({
  name: "authSlice",
  initialState: intinialAuthState,
  reducers: {
    login(state, action) {
      state.isAuth = true;
      state.userLogin = action.payload;
    },
    logout(state) {
      state.isAuth = false;
      state.userLogin = null;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
