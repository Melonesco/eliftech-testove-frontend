export interface IProduct {
  name: string;
  price: number;
  _id: string;
}

export interface IStore {
  _id: string;
  shop: string;
  address: string;
  products: IProduct[];
}

export interface IProductProps {
  _id: string;
  name: string;
  price: number;
  count: number;
  vendor: IStore;
}

export interface IFormData {
  name: string;
  email: string;
  tel: string;
  address: string;
  vendor: IStore | null;
  products: { amount: number; product: IProduct }[];
  totalPrice: number;
}

export interface ICartProps {
  _id: string;
  name: string;
  price: number;
  count: number;
  vendor?: IStore;
}
