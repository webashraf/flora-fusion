/* eslint-disable @typescript-eslint/no-explicit-any */
import { SkeletonCard } from "@/components/customUi/SkeletonLoading/SkeletonLoading";
import AllProducts from "@/components/Products/AllProducts/AllProducts";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  useGetCategoriesQuery,
  useGetProductsQuery,
} from "@/redux/api/baseApi";
import CommonHero from "@/shared/CommonHero/CommonHero";
import { TProduct, TTreeProductsCategory } from "@/types/types";
import { useState } from "react";

const ProductPage = () => {
  // State to hold search input and price filter
  const [queryInput, setQueryInput] = useState({
    searchItem: "",
    price: 1,
    category: "",
  });

  const { data: categories } = useGetCategoriesQuery({});
  // console.log(categories?.result);
  const { data: products, isLoading } = useGetProductsQuery(queryInput);

  if (isLoading) {
    return (
      <div className="my-20 ">
        <SkeletonCard />
      </div>
    );
  }
  // Handle search form submission
  const handleSearch = (e: any) => {
    e.preventDefault();

    const value = e.target.searchInput.value;

    setQueryInput((prevState) => ({ ...prevState, searchItem: value }));
  };

  // Handle filter selection change
  const handleFilter = (e: any) => {
    let sorting: number = -1;
    if (e === "1") {
      sorting = 1; // Set sorting to ascending if value is "1"
    }
    if (e === "_") {
      console.log(
        "----------------------------------------------------------------"
      );
      setQueryInput({
        searchItem: "",
        price: 1,
        category: "",
      });
    }
    //  Handle
    console.log(e);
    if (e.length > 2) {
      // console.log("object");
      console.log(e);
      setQueryInput({ ...queryInput, category: e });
      console.log(queryInput);
    }
    setQueryInput((prevState) => ({ ...prevState, price: sorting })); // Update price filter state
  };

  return (
    <>
      <CommonHero title="Products Page" />
      <div className="mt-10 px-5 lg:px-0 md:px-2">
        <div className="flex justify-between mb-10">
          <div className="md:w-1/2 mx-1">
            {/* Select component for price filter */}
            <Select onValueChange={handleFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort and filter" />
              </SelectTrigger>
              <SelectContent>
                <Select defaultOpen>Filter</Select>
                <SelectItem value="_">Reset</SelectItem>
                <SelectItem value="1">Price: Low-High</SelectItem>
                <SelectItem value="-1">Price: High-Low</SelectItem>
                {categories?.result?.map((category: TTreeProductsCategory) => (
                  <SelectItem key={category._id} value={category?._id}>
                    {category?.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="lg:w-1/3 md:w-1/2 flex justify-end">
            <div className="bg-white border rounded-lg lg:w-[60%] md:lg-[80%] ">
              {/* Search form */}
              <form onSubmit={handleSearch} className="w-[100%] flex">
                <input
                  id="searchInput"
                  type="text"
                  className="py-2 ps-3 w-[100%]"
                  placeholder="What are you looking for?"
                />
                <button type="submit" className="px-5 flex items-center border">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Map products from database and display using ProductCard component */}

        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 py-2 mx-auto">
          {products?.result?.map((product: TProduct) => (
            <AllProducts key={product._id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductPage;
