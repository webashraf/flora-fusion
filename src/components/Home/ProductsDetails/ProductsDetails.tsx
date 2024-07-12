import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TProducts } from "@/types/types";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ProductsDetails = ({ products }: { products: TProducts | any }) => {
  const navigate = useNavigate();
  const [product, setProduct] = useState({});

  // Function to get a random product from the list
  const getRandomProduct = (number: number = 10) => {
    return products[Math.floor(Math.random() * number) + 1];
  };

  const currentProduct = getRandomProduct();

  // Handle the click event to navigate to the single product page
  // const handleSingleProduct = (singleProduct) => {
  //   console.log(singleProduct);
  //   console.log("Product selected", product);
  //   setProduct(singleProduct);
  //   navigate("/single-product", { state: { product: product } });
  // };

  return (
    <div className="mt-20 ">
      <div className="flex gap-5 items-center">
        <div className="w-1/3 relative">
          <img
            className="w-full h-[600px] object-cover"
            src={currentProduct?.imageURL}
            alt=""
          />
          <h2 className="text-4xl font-bold backdrop-blur-lg w-full text-center py-5 text-white absolute bottom-0 z-40">
            {currentProduct?.name}
          </h2>
        </div>

        {/* Display the list of products in a table */}
        <div className="h-[600px] overflow-y-scroll w-2/3 ml-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Serial</TableHead>
                <TableHead>Name & Category</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Total Items</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>

            {/* Map through the products and display each one in a table row */}
            {products?.map((product: TProducts, i: number) => (
              <TableBody key={product._id}>
                <TableRow>
                  <TableCell className="font-medium">{i}</TableCell>
                  <TableCell className="uppercase">
                    <h5 className="text-md font-bold mb-1">{product.name}</h5>
                    <p className="text-slate-300 bg-primary text-center rounded-md text-[11px] py-[px] w-24">
                      {product.category.name}
                    </p>
                  </TableCell>
                  <TableCell className="uppercase">
                    {product.description}
                  </TableCell>
                  <TableCell>{product.price}</TableCell>
                  <TableCell className="text-right">
                    {/* Button to view single product details */}
                    <NavLink to={`/single-product/${product._id}`}>
                      <Button className="">View Items</Button>
                    </NavLink>
                  </TableCell>
                </TableRow>
              </TableBody>
            ))}
          </Table>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;
