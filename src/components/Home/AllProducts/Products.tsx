/* eslint-disable @typescript-eslint/no-explicit-any */
import { SkeletonCard } from "@/components/customUi/SkeletonLoading/SkeletonLoading";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
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
import CommonHeading from "@/shared/CommonHeading/CommonHeading";
import ProductCard from "@/shared/productCard/ProductCard";
import { TProduct, TTreeProductsCategory } from "@/types/types";
import { MouseEvent, useState } from "react";

const Products = () => {
  // State to hold search input and price filter
  const [queryInput, setQueryInput] = useState({
    searchItem: "",
    price: 1,
    page: 1,
    limit: "8",
    category: "",
  });

  const { data: categories } = useGetCategoriesQuery({});
  // console.log(categories?.result);

  const [paginate, setPaginate] = useState<number>(1);

  const { data: products, isLoading } = useGetProductsQuery(queryInput);

  const { data: paginateTotal, isLoading: paginateLoading } =
    useGetProductsQuery({});

  const totalProducts = paginateTotal?.result?.length;

  const totalPage = Array.from({ length: Math.ceil(totalProducts / 8) });

  if (isLoading || paginateLoading) {
    return (
      <div className="my-36 ">
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

  // Pagination handling
  const handlePagination = (
    pageNumber: number,
    nextPrev: string = "",
    event: MouseEvent<HTMLAnchorElement>
  ) => {
    event.preventDefault();

    setPaginate(pageNumber);

    if (nextPrev === "next") {
      setPaginate(paginate + 1);
    }
    if (nextPrev === "prev") {
      setPaginate(paginate - 1);
    }

    setQueryInput((prevState) => ({
      ...prevState,
      page: pageNumber,
      limit: "8",
    }));
    // console.log(pageNumber);
    // console.log(searchInput);
  };
  // console.log(products?.result[1]);

  return (
    <div className="section-margin-top px-5 lg:px-0 md:px-20">
      <CommonHeading
        title="Discover Your Perfect Plants"
        subTitle="Explore Our Features, Categories, and Detailed Product Information"
      />
      <div className="flex justify-between mb-10">
        <div className="md:w-1/2 mx-1">
          {/* Select component for price filter */}
          <Select onValueChange={handleFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter and category" />
            </SelectTrigger>
            <SelectContent>
              <Select defaultOpen>Filter</Select>
              <SelectItem value="1">Price: Low-High</SelectItem>
              <SelectItem value="-1">Price: High-Low</SelectItem>
              {categories?.result.map((category: TTreeProductsCategory) => (
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
      <div className="mb-14 grid lg:grid-cols-4 md:grid-cols-2 gap-5 ">
        {products?.result?.slice(0, 8).map((product: TProduct) => (
          <ProductCard key={product?._id} product={product} />
        ))}
      </div>

      {/* Pagination component */}
      <div className="py-5">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={(event) => handlePagination(paginate, "prev", event)}
                href="#"
              />
            </PaginationItem>

            {totalPage.map((_, i) => (
              <PaginationItem>
                <PaginationLink
                  onClick={(event) => handlePagination(i + 1, "", event)}
                  href="#"
                >
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext
                onClick={(event) => handlePagination(paginate, "next", event)}
                href="#"
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};

export default Products;
