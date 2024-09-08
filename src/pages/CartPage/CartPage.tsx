import DeleteBtn from "@/components/customUi/DeleteBtn/DeleteBtn";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import {
  decreseCartItem,
  removeCartItem,
  setCart,
} from "@/redux/features/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { TProduct } from "@/types/types";
import { MinusIcon, PlusIcon } from "lucide-react";
import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { toast } from "sonner";

const CartPage = () => {
  const cartProducts: TProduct[] = useAppSelector((state) => state.cart.cart);
  const dispatch = useAppDispatch();

  const inputValuesRef = useRef<{ [key: string]: string }>({});
  const [inputValues, setInputValues] = useState<{ [key: string]: string }>({});

  let newPrice: number = 0;
  cartProducts.forEach((item: TProduct) => {
    newPrice = item.price * item.qty + newPrice;
  });

  const handleAddtocart = (product: TProduct) => {
    const qtyInput = inputValues[product._id] || "1"; // Default to "1" if no input value found
    const updatedQty = Math.min(Number(qtyInput), product.stock);

    const treeCartItem = { ...product, qty: updatedQty };


    dispatch(setCart(treeCartItem));
    toast.success("Quantity is increased" );
  };

  const handleMinustocart = (product: TProduct) => {
    const qtyInput = inputValues[product._id] || "1"; // Default to "1" if no input value found
    const updatedQty = Math.min(Number(qtyInput), product.stock);

    const treeCartItem = { ...product, qty: updatedQty };

    dispatch(decreseCartItem(treeCartItem));
    toast.success("Quantity is decresed" );
  };

  const handleRemove = (item: TProduct) => {
    dispatch(removeCartItem(item._id));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputValues({
      ...inputValues,
      [e.target.dataset.productid!]: value,
    });

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

  return cartProducts.length > 0 ? (
    <div className="pt-20 px-5">
      <div className="">
        <h2 className="text-5xl uppercase pb-10">Cart Page</h2>

        {cartProducts?.length !== 0 ? (
          <Table className="flex lg:flex-row flex-col lg:justify-between flex-wrap gap-2 rounded-md items-center justify-center ">
            {cartProducts?.map((tree: TProduct, i: number) => (
              <TableBody className="lg:w-[] md:w-[] w-[650px] bg-[#6984671e] relative">
                <TableRow className=" w-full">
                  <TableCell className="w-[200px]">
                    <img
                      className="h-[100px] w-[180px]  object-cover mx-auto"
                      src={tree.imageURL}
                      alt="fds"
                    />
                  </TableCell>
                  <TableCell className=" w-[25%]">
                    <h5 className="text-lg  font-semibold mb-1 ">
                      {i + 1}. {tree.name}
                    </h5>
                  </TableCell>
                  <TableCell className="uppercase  flex flex-col gap-1 items-center justify-center mt-3 bg-blac">
                    <p className="mini-active">
                      Price: ${tree.price}
                      <br />
                    </p>
                    <p className="mini-active">
                      Stock: <span>{tree.stock}</span>
                    </p>
                    <p className="mini-active">
                      Quantity: <span>{tree.qty}</span>
                    </p>
                  </TableCell>

                  <TableCell>
                    <div className="flex items-center justify-center gap-2  ">
                      <div
                        onClick={() => handleRemove(tree)}
                        className=" absolute top-0 right-0"
                      >
                        <DeleteBtn />
                      </div>

                      <div className="flex gap-2">
                        <Button
                          disabled={tree.stock <= 0 || tree?.qty <= 1}
                          onClick={() => handleMinustocart(tree)}
                          className="capitalize btn-2"
                        >
                          {/* - */}
                          <MinusIcon />
                        </Button>

                        <input
                          type="number"
                          className="w-[55px] h-[40px] pl-4 text-xl  border-2 rounded-none border-[#61815f] "
                          defaultValue={1}
                          min={1}
                          onChange={handleInputChange}
                          ref={(el) => {
                            inputValuesRef.current[tree._id] = el?.value || "1";
                          }}
                          data-productid={tree._id}
                          value={inputValues[tree._id] || "1"}
                        />

                        <Button
                          disabled={
                            tree.stock <= 0 ||
                            Number(inputValues[tree._id] || "0") + tree.qty >
                              tree.stock
                          }
                          onClick={() => handleAddtocart(tree)}
                          className="capitalize btn-2"
                        >
                          <PlusIcon />
                        </Button>
                      </div>
                    </div>
                  </TableCell>
                </TableRow>
              </TableBody>
            ))}
          </Table>
        ) : (
          <h3 className="text-3xl text-black">Cart is empty!!</h3>
        )}
      </div>
      <div className="mt-10 flex items-center justify-center gap-5">
        <div className="">
          <h4 className="font-semibold mr-">Total: ${newPrice.toFixed(2)}</h4>
        </div>
        <NavLink to="/checkout">
          <Button type="submit" className="capitalize btn-2">
            Proceed to checkout
          </Button>
        </NavLink>
      </div>
    </div>
  ) : (
    <div className="">
      <h2 className="text-5xl uppercase pt-14">Cart is empty yet!!</h2>
    </div>
  );
};

export default CartPage;
