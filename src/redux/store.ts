import { configureStore } from "@reduxjs/toolkit";
import { storeReducer } from "./store/slice";
import { cartReducer } from "./cart/slice";

export const store = configureStore({
  reducer: {
    stores: storeReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
