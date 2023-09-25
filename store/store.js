import { configureStore } from "@reduxjs/toolkit";
import githubUserReducer from "./githubUser";

export const store = configureStore({
  reducer: {
    githubUser: githubUserReducer,
  },
});
