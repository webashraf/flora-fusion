import DeleteBtn from "@/components/customUi/DeleteBtn/DeleteBtn";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import {
  decreseCartItem,
  removeCartItem,
  setCart,
} from "@/redux/features/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { TProduct } from "@/types/types";
import {
  MinusIcon,
  PlusIcon,
  ShoppingBagIcon,
} from "@heroicons/react/16/solid";
import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { toast } from "sonner";

export function CartSheet({ color }: { color: string }) {
  const cartTrees = useAppSelector((state) => state.cart.cart);

  const cartProducts: TProduct[] = useAppSelector((state) => state.cart.cart);
  const dispatch = useAppDispatch();

  const inputValuesRef = useRef<{ [key: string]: string }>({});
  const [inputValues, setInputValues] = useState<{ [key: string]: string }>({});

  // console.log(
  //   "🚀 ~ CartSheet ~ inputValues:",
  //   Number(inputValues["668e49375956bee8a5c61a5a"]) > 3,
  //   inputValues["668e49375956bee8a5c61a5a"]
  // );

  let newPrice: number = 0;
  cartProducts.forEach((item: TProduct) => {
    newPrice = item.price * item.qty + newPrice;
  });

  //* Handle add to cart
  const handleAddtocart = (product: TProduct) => {
    const qtyInput = inputValues[product._id] || "1";
    console.log(qtyInput);
    // Default to "1" if no input value found
    const updatedQty = Math.min(Number(qtyInput), product.stock);
    console.log(updatedQty);

    const treeCartItem = { ...product, qty: updatedQty };

    console.log(treeCartItem);

    dispatch(setCart(treeCartItem));
    toast.success("Quantity is increased" + qtyInput);
    console.log(inputValues);
  };

  // console.log({ inputValues });

  //   * Handle minus to cart
  const handleMinustocart = (product: TProduct) => {
    const qtyInput = inputValues[product._id] || "1"; // Default to "1" if no input value found
    const updatedQty = Math.min(Number(qtyInput), product.stock);

    const treeCartItem = { ...product, qty: updatedQty };

    dispatch(decreseCartItem(treeCartItem));
    toast.success("Quantity is decresed" + qtyInput);
    console.log(inputValues);
  };

  //   * Handle remove item
  const handleRemove = (item: TProduct) => {
    dispatch(removeCartItem(item._id));
  };

  //   * Handle Input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputValues({
      ...inputValues,
      [e.target.dataset.productid!]: value,
    });

    console.log(inputValues);

    const input = e.target;
    const qty = Number(input.value);
    const productId = input.dataset.productid || "";
    const product = cartProducts.find((item) => item._id === productId);

    if (product) {
      const updatedQty = qty < 1 ? 1 : Math.min(qty, product.stock);

      if (updatedQty === product.stock) {
        input.value = "0";
      } else {
        input.value = String(updatedQty);
      }

      const updateButton = input.nextElementSibling as HTMLButtonElement;
      updateButton.disabled = input.value === "0";
    }
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <ShoppingBagIcon
          className="size-12 p-2 rounded-full  "
          color={color}
          scale="1"
        />
        {/* <Button></Button> */}
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            <h2 className="text-2xl">Cart</h2>
          </SheetTitle>
          {/* <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription> */}
        </SheetHeader>

        <div className="p-3">
          <div className="h-[70vh] overflow-hidden hover:overflow-y-auto hover:transition-all hover:duration-300 custom-scrollbar">
            <div className="">
              {cartTrees.length !== 0 ? (
                <Table className="">
                  {cartTrees?.map((tree: TProduct, i: number) => (
                    <TableBody
                      className="mw-[200px] mb-5 hover:bg-slate-100 h-[170px] relative"
                      key={tree._id}
                    >
                      <TableRow>
                        <TableCell className="font-medium">{i + 1}</TableCell>
                        <div>
                          <TableCell className="uppercase">
                            <h5 className="text-md font-bold mb-1">
                              {tree.name}
                            </h5>
                            <p className="text-slate-300 bg-primary text-center rounded-md text-[14px]  w-28 mb-1 mini-active">
                              Price: {tree.price}
                              <br />
                            </p>
                            <p className="text-slate-300 bg-primary text-center rounded-md text-[14px]  w-28 mini-active">
                              QTY: <span className="">{tree.qty}</span> Stock{" "}
                              <span>{tree?.stock}</span>
                            </p>
                          </TableCell>

                          <TableCell>
                            <img
                              className="h-[80px] w-[50px] object-cover"
                              src={tree.imageURL}
                              alt=""
                            />
                          </TableCell>
                        </div>

                        <div className="flex justify-around">
                          <div
                            onClick={() => handleRemove(tree)}
                            className=" absolute top-0 right-0"
                          >
                            <DeleteBtn />
                          </div>

                          <div className="flex gap-5 justify-start">
                            <Button
                              disabled={
                                tree?.stock <= 1 ||
                                tree?.qty <= 1 ||
                                Number(inputValues[tree?._id] || "0") >
                                  tree?.qty
                              }
                              onClick={() => handleMinustocart(tree)}
                              className="capitalize btn-2 h-[30px]"
                            >
                              {/* - */}
                              <MinusIcon className="size-4" />
                            </Button>

                            <input
                              type="number"
                              className="w-[55px] h-[30px] pl-[15px] pb-1 text-xl  border-2 rounded-md border-[#61815f] "
                              defaultValue={1}
                              min={1}
                              onChange={handleInputChange}
                              ref={(el) => {
                                inputValuesRef.current[tree._id] =
                                  el?.value || "1";
                              }}
                              data-productid={tree._id}
                              value={inputValues[tree?._id] || "1"}
                            />

                            <Button
                              disabled={
                                tree.stock <= 0 ||
                                Number(inputValues[tree._id] || "0") +
                                  tree.qty >
                                  tree.stock ||
                                tree.stock == tree.qty
                              }
                              onClick={() => handleAddtocart(tree)}
                              className="capitalize btn-2 h-[30px]"
                            >
                              <PlusIcon className="size-5" />
                            </Button>
                          </div>
                        </div>
                      </TableRow>
                    </TableBody>
                  ))}
                </Table>
              ) : (
                <h3 className="text-3xl text-black">Cart is empty!!</h3>
              )}
            </div>
          </div>
          <div className="">
            {cartTrees?.length !== 0 ? (
              <div>
                <div className="my-8 border-t-2 border-black pt-2">
                  <h4 className="font-semibold text-right">
                    Total: ${newPrice.toFixed(2)}
                  </h4>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>

        <SheetFooter>
          <SheetClose asChild>
            {cartTrees?.length > 0 ? (
              <NavLink to="/checkout">
                <Button className="capitalize btn-2">
                  Proced to check-out
                </Button>
              </NavLink>
            ) : (
              ""
            )}
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
