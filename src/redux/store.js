import { configureStore } from "@reduxjs/toolkit";
import userReducer from "@/redux/user/userSlice";
// import ticTacToeReducer from "@/redux/ticTacToe/ticTacToeSlice";
import apiSlice from "./api/apiSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    // ticTacToe: ticTacToeReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
