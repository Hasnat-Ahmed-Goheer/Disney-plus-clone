import { createSlice } from "@reduxjs/toolkit";

type userType = {
  name: string;
  email: string;
  photo: string;
  loggedIn?: boolean | undefined;
};

const initialState: userType = {
  name: "",
  email: "",
  photo: "",
    loggedIn: undefined,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signIn(state, action) {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.photo = action.payload.photo;
      state.loggedIn = true;
    },
    signOut(state) {
      state.name = "";
      state.email = "";
      state.photo = "";
      state.loggedIn = false;
    },
  },
});

export const { signIn, signOut } = userSlice.actions;

export default userSlice.reducer;
