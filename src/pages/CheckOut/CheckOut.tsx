import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import useTotalAmount from "@/hooks/useTotalAmount";
import { useAppSelector } from "@/redux/hooks";
import { TProduct } from "@/types/types";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import CheckOutForm from "./CheckOutForm";

const CheckOut = () => {
  const cartProducts: TProduct[] = useAppSelector((state) => state.cart.cart);
  const [purchase, setPurchase] = useState("");
  console.log(purchase);

  const amount = useTotalAmount();

  return cartProducts?.length > 0 ? (
    <div className="py-20 mx-5">
      <h2 className="lg:text-5xl text-4xl uppercase pb-10">
        Check-out process
      </h2>

      <div className="flex justify-between items-center lg:flex-row flex-col gap-20">
        <div className="lg:w-1/2 w-full">
          <div className=" w-full ml-auto">
            <Table className="lg:w-[600px]">
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Serial</TableHead>
                  <TableHead>Name & Category</TableHead>
                  <TableHead>Quantity</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>

              {/* Map through the products and display each one in a table row */}
              {cartProducts?.map((product: TProduct, i: number) => (
                <TableBody key={product?._id}>
                  <TableRow>
                    <TableCell className="font-medium">{i}</TableCell>
                    <TableCell className="uppercase">
                      <h5 className="text-md font-bold mb-1">
                        {product?.name}
                      </h5>
                      <p className="mini-active">{product?.category?.name}</p>
                    </TableCell>

                    <TableCell
                      className={product?.stock === 0 ? "text-red-500" : ""}
                    >
                      {product?.qty}
                    </TableCell>
                    <TableCell>${product?.price}</TableCell>
                    <TableCell className="text-right">
                      {/* Button to view single product details */}
                      <NavLink to={`/single-product/${product?._id}`}>
                        <Button className="btn-2">View Items</Button>
                      </NavLink>
                    </TableCell>
                  </TableRow>
                </TableBody>
              ))}
            </Table>
            <div className="border-t-2 border-black py-5 pr-5 text-end">
              <h4 className="font-semibold text-xl">Amount: ${amount}</h4>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 w-full flex flex-col items-center justify-center">
          <CheckOutForm setPurchase={setPurchase} />
        </div>
      </div>
    </div>
  ) : purchase ? (
    <h2 className="text-2xl py-14 text-nowrap md:px-10">{purchase}</h2>
  ) : (
    <h2 className="text-5xl uppercase py-14">
      First add to cart some products!!😒
    </h2>
  );
};

export default CheckOut;
