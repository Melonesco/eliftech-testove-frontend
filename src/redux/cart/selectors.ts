import { RootState } from "../store";

export const cartSelector = (state: RootState) => state.cart.items;
export const totalPriceSelector = (state: RootState) => state.cart.totalPrice;
