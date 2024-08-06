import AllProducts from "@/components/Products/AllProducts/AllProducts";
import { useGetProductsQuery } from "@/redux/api/baseApi";
import CommonHero from "@/shared/CommonHero/CommonHero";
import Loader from "@/shared/Loader/loader/Loader";

import { TProduct } from "@/types/types";

const ProductPage = () => {
  // Fetch products data using the useGetProductsQuery hook
  const { data: products } = useGetProductsQuery({});

  // Display a loader if products data is not yet available
  if (!products) {
    return <Loader />;
  }

  console.log("products", products);

  return (
    <>
      <CommonHero title="Products Page" />
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 py-20 mx-auto">
        {products.result.map((product: TProduct) => (
          <AllProducts key={product._id} product={product} />
        ))}
      </div>
    </>
  );
};

export default ProductPage;
