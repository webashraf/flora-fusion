import { TProducts } from "@/types/types";
import "./ProductList.css";
import ProductListCard from "./ProductListCard";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ProductList = ({ products }: { products: TProducts | any }) => {
  return (
    <div className="grid grid-cols-4 gap-10">
      {products?.slice(0, 8).map((product: TProducts) => (
        <ProductListCard product={product} key={product._id} />
      ))}
    </div>
  );
};

export default ProductList;
