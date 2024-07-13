export interface TTreeProductsCategory {
  _id: string;
  name: string;
  description: string;
  imageURL: string;
}

export interface TProduct {
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
}
