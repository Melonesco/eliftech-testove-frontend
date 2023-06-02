import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem, CartState } from "./types";

const initialState: CartState = {
  totalPrice: JSON.parse(localStorage.getItem("totalPrice") as any) || 0,
  items: JSON.parse(localStorage.getItem("cart") as any) || [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const { _id, name, price, count = 1, vendor } = action.payload;
      const existingItem = state.items.find((item) => item._id === _id);

      if (existingItem) {
        existingItem.count += count;
      } else {
        state.items.push({ _id, name, price, count, vendor });
      }
      state.totalPrice += price * count;
      localStorage.setItem("cart", JSON.stringify(state.items));
      localStorage.setItem("totalPrice", JSON.stringify(state.totalPrice));
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      const _id = action.payload;
      const existingItemIndex = state.items.findIndex(
        (item) => item._id === _id
      );

      if (existingItemIndex !== -1) {
        const existingItem = state.items[existingItemIndex];
        const count = existingItem.count;
        const price = existingItem.price * count;

        state.items.splice(existingItemIndex, 1);
        state.totalPrice -= price;
      }
      localStorage.setItem("cart", JSON.stringify(state.items));
      localStorage.setItem("totalPrice", JSON.stringify(state.totalPrice));
    },
    incrementCount: (state, action: PayloadAction<string>) => {
      const itemId = action.payload;
      const item = state.items.find((item) => item._id === itemId);

      if (item) {
        item.count += 1;
        state.totalPrice += item.price;
      }
      localStorage.setItem("cart", JSON.stringify(state.items));
      localStorage.setItem("totalPrice", JSON.stringify(state.totalPrice));
    },
    decrementCount: (state, action: PayloadAction<string>) => {
      const itemId = action.payload;
      const item = state.items.find((item) => item._id === itemId);

      if (item && item.count > 1) {
        item.count -= 1;
        state.totalPrice -= item.price;
      }
      localStorage.setItem("cart", JSON.stringify(state.items));
      localStorage.setItem("totalPrice", JSON.stringify(state.totalPrice));
    },
    clearCart: (state) => {
      state.items = [];
      state.totalPrice = 0;
      localStorage.setItem("cart", JSON.stringify([]));
      localStorage.setItem("totalPrice", JSON.stringify(0));
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementCount,
  decrementCount,
  clearCart,
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
