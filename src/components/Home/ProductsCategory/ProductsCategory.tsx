import { Button } from "@/components/ui/button";
import { TTreeProductsCategory } from "@/types/types";
import "./ProductsCategory.css";

const ProductsCategory = ({
  categories,
}: {
  categories: TTreeProductsCategory[];
}) => {
  return (
    <div className="section-margin-top">
      {/* <CommonHeading
        title="Explore Our Plant Categories
subTitle"
        subTitle="Find Medicinal, Ornamental, and Fruit Trees for Every Need"
      /> */}
      <div className="w-full">
        <div className="flex flex-wrap lg:justify-start justify-center gap-8 px-5 items-center">
          <h2 className="text-4xl font-serif uppercase mb-12 ">
            All Categories
          </h2>
          {categories?.map((category: TTreeProductsCategory, index: number) => (
            <div
              key={category._id}
              className="w-[300px] h-[200px] border-2 shadow-xl rounded-xl p-5 flex flex-col justify-between"
            >
              <p className="font-semibold">{index + 1}</p>
              <h2 className="text-3xl">{category.name}</h2>
              <Button className="capitalize btn-2">
                View Products by category
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsCategory;
