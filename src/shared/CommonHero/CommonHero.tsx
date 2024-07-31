import { useGetProductsQuery } from "@/redux/api/baseApi";
import Loader from "../Loader/loader/Loader";

const CommonHero = ({ title }: { title: string }) => {
  // Fetch products data using the useGetProductsQuery hook
  const { data: products } = useGetProductsQuery({});

  // Display a loader if products data is not yet available
  if (!products) {
    return <Loader />;
  }
  return (
    <div
      className="h-[500px] w-full "
      style={{
        backgroundImage: `url(${products.result[5].imageURL})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full h-full backdrop-blur-sm flex items-center justify-center">
        <h2 className="text-7xl underline uppercase text-slate-300">{title}</h2>
      </div>
    </div>
  );
};

export default CommonHero;
