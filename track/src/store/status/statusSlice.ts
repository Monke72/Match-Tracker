import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TypeStatus } from "../../Components/Header/Header";

const initialState = "all" as TypeStatus;

const statusSlice = createSlice({
  name: "status",
  initialState,
  reducers: {
    setStatus(_state, action: PayloadAction<TypeStatus>) {
      return action.payload;
    },
  },
});

const statusReducer = statusSlice.reducer;
export default statusReducer;
export const { setStatus } = statusSlice.actions;
