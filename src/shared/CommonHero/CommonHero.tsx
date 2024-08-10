import { useGetProductsQuery } from "@/redux/api/baseApi";

const CommonHero = ({ title }: { title: string }) => {
  // Fetch products data using the useGetProductsQuery hook
  const { data: products } = useGetProductsQuery({});

  // Display a loader if products data is not yet available
  if (!products) {
    return;
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
        <h2 className="lg:text-7xl lg:text-left text-5xl text-center underline uppercase text-slate-300">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default CommonHero;
