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
  const { data: products, isLoading: loadingProducts } = useGetProductsQuery(
    {}
  );

  const { data: categories, isLoading: loadingCategory } =
    useGetCategoriesQuery({});

  if (!products) {
    return <Loader />;
  }
  if (!categories) {
    return <Loader />;
  }
  console.log(products)
  return (
    <>
      <Hero products={products} />
      <Products products={products} />
      <ProductsCategory categories={categories} />
      <ProductList products={products} />
      <ProductsDetails products={products} />
      <Gallery products={products} />
      <div className="p-20"></div>
    </>
  );
};

export default Home;
