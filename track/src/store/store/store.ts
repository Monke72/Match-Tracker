import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./../data/dataSlice";
import statusReducer from "../status/statusSlice";

export const store = configureStore({
  reducer: {
    data: dataReducer,
    status: statusReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
