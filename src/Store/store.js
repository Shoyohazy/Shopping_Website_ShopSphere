import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/AuthSlice";

const store = configureStore({
  reducer: authReducer,
});

export default store;
