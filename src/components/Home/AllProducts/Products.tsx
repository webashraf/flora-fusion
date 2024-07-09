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
import ProductCard from "@/shared/productCard/ProductCard";
const Products = () => {
  return (
    <div className="mt-20">
      <div className="flex justify-between mb-10">
        <div className="">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter" />
            </SelectTrigger>
            <SelectContent>
              <Select defaultOpen>Filter</Select>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="w-1/3 flex justify-end">
          {" "}
          <div className="bg-white border rounded-lg w-[60%] flex ">
            <input
              type="text"
              className=" py-2 ps-3 w-[880%] "
              placeholder="What are you looking for?"
            />
            <div className="px-5  flex items-center">
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
            </div>
          </div>
        </div>
      </div>
      <div className="mb-14 grid grid-cols-4 gap-5">
        <ProductCard productImg={"/src/assets/images/hero/h6_banner1.jpg"} />
        <ProductCard productImg={"/src/assets/images/hero/h6_banner1.jpg"} />
        <ProductCard productImg={"/src/assets/images/hero/h6_banner1.jpg"} />
        <ProductCard productImg={"/src/assets/images/hero/h6_banner1.jpg"} />
        <ProductCard productImg={"/src/assets/images/hero/h6_banner1.jpg"} />
        <ProductCard productImg={"/src/assets/images/hero/h6_banner1.jpg"} />
        <ProductCard productImg={"/src/assets/images/hero/h6_banner1.jpg"} />
        <ProductCard productImg={"/src/assets/images/hero/h6_banner1.jpg"} />
      </div>
      <div className="py-5 ">
        <Pagination>
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
        </Pagination>
      </div>
    </div>
  );
};

export default Products;
