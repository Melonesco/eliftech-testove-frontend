import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../axios";
import { IStore } from "../../utils/types";

export const fetchStores = createAsyncThunk<IStore[]>(
  "groups/fetchGroups",
  async () => {
    const { data } = await instance.get("/stores");
    return data;
  }
);
