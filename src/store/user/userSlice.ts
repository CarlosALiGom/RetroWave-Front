import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserDataStructure, UserTokenStructure } from "./types";

export const initialUserState: UserDataStructure = {
  id: "",
  name: "",
  token: "",
  isLogged: false,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    loginUser: (
      _currentUserState: UserDataStructure,
      action: PayloadAction<UserTokenStructure>
    ): UserDataStructure => ({
      ...action.payload,
      isLogged: true,
    }),
    logoutUser: (): UserDataStructure => ({
      ...initialUserState,
    }),
  },
});

export const {
  loginUser: loginUserActionCreator,
  logoutUser: logoutUserActionCreator,
} = userSlice.actions;
export const userReducer = userSlice.reducer;
