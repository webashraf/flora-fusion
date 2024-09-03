/* eslint-disable @typescript-eslint/no-explicit-any */
export type TTreeProductsCategory = {
  _id: string;
  name: string;
  slug: string;
  description: string;
  imageURL: string;
};

export type TProduct = {
  _id: string;
  name: string;
  shortDescription: string;
  description: string;
  price: number;
  category: TTreeProductsCategory;
  imageURL: string;
  ratings: string;
  stock: number;
  isAvailable: boolean;
  qty: number;
};
export type Product = {
  _id: string;
  name: string;
  category: string;
  price: number;
  qty: number;
};

export type TUserInfo = {
  address: string;
  amount: number;
  division: string;
  email: string;
  firstName: string;
  lastName: string;
  mobileNumber: string;
  paymentMethod: string;
  products: Product[];
} | null;
