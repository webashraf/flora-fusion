/* eslint-disable @typescript-eslint/no-explicit-any */
import AllProducts from "@/components/Products/AllProducts/AllProducts";
import CommonHero from "@/shared/CommonHero/CommonHero";
import Loader from "@/shared/Loader/loader/Loader";

import { TProduct } from "@/types/types";
import { useLoaderData } from "react-router-dom";

const ProductsByCategory = () => {
  const products: any = useLoaderData();
  console.log(products?.result[0].category.name);
  // Display a loader if products data is not yet available
  if (!products) {
    return <Loader />;
  }

  console.log("products", products);

  return (
    <>
      <CommonHero
        title={products?.result[0].category.name + " " + "Category"}
      />
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5 py-20">
        {products?.result.map((product: TProduct) => (
          <AllProducts key={product._id} product={product} />
        ))}
      </div>
    </>
  );
};

export default ProductsByCategory;
