import { IStore } from "../../utils/types";

export interface CartItem {
  _id: string;
  name: string;
  price: number;
  count: number;
  vendor: IStore;
}

export interface CartState {
  totalPrice: number;
  items: CartItem[];
}
