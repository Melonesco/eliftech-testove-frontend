import { createSlice } from "@reduxjs/toolkit";
import { fetchStores } from "./asyncActions";
import { IStore } from "../../utils/types";

interface StoreState {
  items: IStore[];
  status: "idle" | "loading" | "loaded" | "error";
  error: string | null;
}

const initialState: StoreState = {
  items: [],
  status: "loading",
  error: null,
};

const storeSlice = createSlice({
  name: "stores",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStores.pending, (state) => {
        state.items = [];
        state.status = "loading";
      })
      .addCase(fetchStores.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = "loaded";
      })
      .addCase(fetchStores.rejected, (state) => {
        state.items = [];
        state.status = "error";
      });
  },
});

export const storeReducer = storeSlice.reducer;
