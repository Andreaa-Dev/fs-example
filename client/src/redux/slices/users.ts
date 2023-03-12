import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../types/type";

type InitialState = { userInformation: User };

const initialState: InitialState = {
  userInformation: {
    _id: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  },
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getUserInformation: (state, action) => {
      state.userInformation = action.payload;
    },
  },
});

export const userActions = userSlice.actions;
const userReducer = userSlice.reducer;
export default userReducer;
