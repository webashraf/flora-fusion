/* eslint-disable @typescript-eslint/no-explicit-any */
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

import { useGetProductsQuery } from "@/redux/api/baseApi";
import CommonHeading from "@/shared/CommonHeading/CommonHeading";
import ProductCard from "@/shared/productCard/ProductCard";
import { TProduct } from "@/types/types";
import { useState } from "react";

const Products = () => {
  // State to hold search input and price filter
  const [searchInput, setSearchInput] = useState({ searchItem: "", price: 1 });

  const { data: products } = useGetProductsQuery(searchInput);

  // Handle search form submission
  const handleSearch = (e: any) => {
    e.preventDefault();

    const value = e.target.searchInput.value;

    setSearchInput((prevState) => ({ ...prevState, searchItem: value }));
  };

  // Handle filter selection change
  const handleFilter = (e: any) => {
    let sorting: number = -1;
    if (e === "1") {
      sorting = 1; // Set sorting to ascending if value is "1"
    }
    setSearchInput((prevState) => ({ ...prevState, price: sorting })); // Update price filter state
  };

  return (
    <div className="section-margin-top">
      <CommonHeading
        title="Discover Your Perfect Plants"
        subTitle="Explore Our Features, Categories, and Detailed Product Information"
      />
      <div className="flex justify-between mb-10">
        <div className="">
          {/* Select component for price filter */}
          <Select onValueChange={handleFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter" />
            </SelectTrigger>
            <SelectContent>
              <Select defaultOpen>Filter</Select>
              <SelectItem value="1">Price: Low-High</SelectItem>
              <SelectItem value="-1">Price: High-Low</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="w-1/3 flex justify-end">
          <div className="bg-white border rounded-lg w-[60%]">
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
      <div className="mb-14 grid grid-cols-4 gap-5">
        {products?.result?.slice(0, 8).map((product: TProduct) => (
          <ProductCard key={product?._id} product={product} />
        ))}
      </div>

      <div className="py-5">
        {/* Pagination component */}
        {/* <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination> */}
      </div>
    </div>
  );
};

export default Products;
