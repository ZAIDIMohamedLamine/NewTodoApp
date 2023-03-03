import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "../features/userSlice.js";

const store = configureStore({
  reducer: {
    user: UserReducer,
  },
});

export default store;
