import { RootState } from "../store";

export const storesSelector = (state: RootState) => state.stores.items;
