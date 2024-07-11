export interface TTreeProductsCategory {
  _id: string;
  name: string;
  description: string;
  imageURL: string;
}

export interface TProducts {
  _id: string;
  name: string;
  description: string;
  price: number;
  category: TTreeProductsCategory;
  imageURL: string;
  ratings: string;
  stock: number;
  isAvailable: boolean;
}

