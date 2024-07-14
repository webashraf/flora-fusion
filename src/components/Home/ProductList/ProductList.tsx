import CommonHeading from "@/shared/CommonHeading/CommonHeading";
import { TProduct } from "@/types/types";
import "./ProductList.css";
import ProductListCard from "./ProductListCard";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ProductList = ({ products }: { products: TProduct | any }) => {
  return (
    <div className="section-margin-top">
      <CommonHeading
        title="Our Plant Collection"
        subTitle="Browse Our Selection of Medicinal, Ornamental, and Fruit Trees"
      />
      <div className=" flex  flex-wrap items-center justify-center gap-10">
        {products?.slice(0, 8).map((product: TProduct) => (
          <ProductListCard product={product} key={product._id} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
