import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { GameData } from "../../interfaces/interfaces";

export const fetchData = createAsyncThunk<GameData[]>(
  "data/fetchData",
  async () => {
    const url = "https://6790b4e0af8442fd73775266.mockapi.io/data";
    const fetchGame = await fetch(url);
    const res: GameData[] = await fetchGame.json();
    return res;
  }
);

interface DataState {
  items: GameData[];
  loading: boolean;
  error: string | null | undefined;
}

const initialState: DataState = {
  items: [],
  loading: false,
  error: null,
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});
const dataReducer = dataSlice.reducer;

export default dataReducer;
