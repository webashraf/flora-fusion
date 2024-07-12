import Products from "@/components/Home/AllProducts/Products";
import Gallery from "@/components/Home/Gallery/Gallery";
import Hero from "@/components/Home/Hero/Hero";
import ProductList from "@/components/Home/ProductList/ProductList";
import ProductsCategory from "@/components/Home/ProductsCategory/ProductsCategory";
import ProductsDetails from "@/components/Home/ProductsDetails/ProductsDetails";
import {
  useGetCategoriesQuery,
  useGetProductsQuery,
} from "@/redux/api/baseApi";
import Loader from "@/shared/Loader/Loader";

const Home = () => {
  // Fetch products data using the useGetProductsQuery hook
  const { data: products } = useGetProductsQuery({});

  // Fetch categories data using the useGetCategoriesQuery hook
  const { data: categories } = useGetCategoriesQuery({});

  // Display a loader if products data is not yet available
  if (!products) {
    return <Loader />;
  }

  // Display a loader if categories data is not yet available
  if (!categories) {
    return <Loader />;
  }

  // Log products data to the console
  console.log("products", products);

  return (
    <>
      <Hero products={products.result} />
      <Products />
      <ProductsCategory categories={categories} />
      <ProductList products={products.result} />
      <ProductsDetails products={products.result} />
      <Gallery products={products.result} />
    </>
  );
};

export default Home;
