import Products from "@/components/Home/AllProducts/Products";
import Hero from "@/components/Home/Hero/Hero";
import ProductList from "@/components/Home/ProductList/ProductList";
import ProductsCategory from "@/components/Home/ProductsCategory/ProductsCategory";
import ProductsDetails from "@/components/Home/ProductsDetails/ProductsDetails";

const Home = () => {
  return (
    <>
      <Hero />
      <Products />
      <ProductsCategory />
      <ProductList />
      <ProductsDetails />
      <div className="p-20"></div>
    </>
  );
};

export default Home;
