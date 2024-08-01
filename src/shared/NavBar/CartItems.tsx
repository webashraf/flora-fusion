/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { useAppSelector } from "@/redux/hooks";
import { TProduct } from "@/types/types";
import { ShoppingBagIcon } from "@heroicons/react/16/solid";
import { DialogClose } from "@radix-ui/react-dialog";
import { NavLink } from "react-router-dom";

const CartItems = ({ color }: { color: string } = "#85b86b") => {
  // const dispatch = useAppDispatch();
  const trees = useAppSelector((state) => state.cart.cart);

  let newPrice: number = 0;
  trees.forEach((item: TProduct) => {
    newPrice = item.price * item.qty + newPrice;
  });
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="bg-transparent hover:bg-transparent w-[40px] rounded-full p-2">
            <ShoppingBagIcon color={color} scale="1" />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[725px]">
          <div className="py-4">
            <div className="g">
              {trees.length !== 0 ? (
                <Table className="grid grid-cols-2 max-h-[600px]">
                  {trees?.map((tree: TProduct, i: number) => (
                    <TableBody className="mw-[200px]" key={tree._id}>
                      <TableRow>
                        <TableCell className="font-medium">{i + 1}</TableCell>
                        <TableCell className="uppercase">
                          <h5 className="text-md font-bold mb-1">
                            {tree.name}
                          </h5>
                          <p className="text-slate-300 bg-primary text-center rounded-md text-[14px]  w-28 mb-1 mini-active">
                            Price: {tree.price}
                            <br />
                          </p>
                          <p className="text-slate-300 bg-primary text-center rounded-md text-[14px]  w-28 mini-active">
                            quantity: <span className="">{tree.qty}</span>
                          </p>
                        </TableCell>

                        <TableCell>
                          <img
                            className="h-[80px] w-[50px] object-cover"
                            src={tree.imageURL}
                            alt=""
                          />
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  ))}
                </Table>
              ) : (
                <h3 className="text-3xl text-black">Cart is empty!!</h3>
              )}
            </div>
          </div>
          <DialogFooter className="flex items-center">
            {trees?.length !== 0 ? (
              <div>
                <div className="">
                  <h4 className="font-semibold mr-">
                    Total: ${newPrice.toFixed(2)}
                  </h4>
                </div>

                <DialogClose asChild>
                  <NavLink to="/checkout">
                    <Button type="submit" className="capitalize btn-2">
                      Proced to chek-out
                    </Button>
                  </NavLink>
                </DialogClose>
              </div>
            ) : (
              ""
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CartItems;
