import { useGetProductsQuery } from "@/redux/api/baseApi";
import CommonHeading from "@/shared/CommonHeading/CommonHeading";
import Loader from "@/shared/Loader/Loader";
import { TProduct } from "@/types/types";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "../ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

const UpdateTree = () => {
  const { data: products } = useGetProductsQuery({});

  console.log(products);
  const [pImg, setPImg] = useState(products && products?.result[0]);

  if (!products) {
    return <Loader />;
  }
  // Function to get a random product from the list
  const getRandomProduct = (number: number = 10) => {
    return products?.result[number];
  };

  console.log(pImg);
  return (
    <div>
      {" "}
      <div className="section-margin-top">
        <CommonHeading
          title="Plant Details"
          subTitle="Comprehensive Information on Your Selected Plant"
        />
        <div className="lg:flex gap-5 items-center">
          <div className="lg:w-1/3 relative">
            <img
              className="w-full lg:h-[600px] h-[400px] object-cover"
              src={pImg?.imageURL}
              alt=""
            />
            <h2 className="text-4xl font-bold backdrop-blur-lg w-full text-center py-5 text-white absolute bottom-0 z-40">
              {pImg?.name}
            </h2>
          </div>

          {/* Display the list of products in a table */}
          <div className="h-[600px] lg:w-2/3 ml-auto overflow-hidden hover:overflow-y-auto hover:transition-all hover:duration-300 custom-scrollbar">
            <Table>
              <TableHeader className="h-[100px]">
                <TableRow className="">
                  <TableHead className="w-[100px]">Serial</TableHead>
                  <TableHead>Name & Category</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Total Items</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>

              {/* Map through the products and display each one in a table row */}
              {products &&
                products?.result?.map((product: TProduct, i: number) => (
                  <TableBody
                    key={product._id}
                    onMouseEnter={() => setPImg(getRandomProduct(i))}
                  >
                    <TableRow>
                      <TableCell className="font-medium">{i}</TableCell>
                      <TableCell className="uppercase flex flex-col">
                        <h5 className="text-md font-bold mb-1">
                          {product.name}
                        </h5>
                        <p className="mini-active ">{product.category.name}</p>
                      </TableCell>
                      <TableCell className="uppercase">
                        {product.shortDescription}
                      </TableCell>
                      <TableCell
                        className={product.stock === 0 ? "text-red-500" : ""}
                      >
                        {product.stock}
                      </TableCell>
                      <TableCell>${product.price}</TableCell>
                      <TableCell className="text-right">
                        {/* Button to view single product details */}
                        <NavLink to={`/single-product/${product._id}`}>
                          <Button className="btn-2">Update</Button>
                        </NavLink>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                ))}
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateTree;
