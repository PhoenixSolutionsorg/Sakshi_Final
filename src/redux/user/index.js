import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "User",
  initialState: {
    userData: {},
  },
  reducers: {
    setUserData: (state, action) => {
      return (state = {
        ...state,
        userData: action.payload,
      });
    },
    setAdminData: (state, action) => {
      return (state = {
        ...state,
        userData: action.payload,
      });
    },
    signOut: (state, action) => {
      return (state = {
        ...state,
        userData: null,
      });
    },

  },
});
export const {
  setUserData,
  setAdminData,
  signOut,
} = userSlice.actions;
export default userSlice.reducer;
