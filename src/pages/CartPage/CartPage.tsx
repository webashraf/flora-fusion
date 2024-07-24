import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { removeCartItem, setCart } from "@/redux/features/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { TProduct } from "@/types/types";
import { XMarkIcon } from "@heroicons/react/16/solid";
import { Trash2 } from "lucide-react";
import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";

// !! This page must be fix after the found data

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

  // ! cartProducts.length == 0 it will be updated as cartProducts.length > 0
  return cartProducts.length == 0 ? (
    <div className="py-20 px-5">
      <div className="">
        <h2 className="text-5xl uppercase pb-10">Cart Page</h2>
        <Table className="flex justify-between flex-wrap gap-2">
          <TableBody className="lg:w-[48%] md:w-[48%] sm:w-full  my-5 bg-[#6984671e] relative">
            <TableRow className=" w-full">
              <TableCell className="">
                <img
                  className="h-[100px] w-[80px] border border-[#61815f] object-cover mx-auto"
                  src=""
                  alt="fds"
                />
              </TableCell>
              <TableCell className="border border-[#61815f] w-[30%]">
                <h5 className="text-lg  font-semibold mb-1 ">1. test</h5>
              </TableCell>
              <TableCell className="uppercase  flex flex-col gap-1 items-center justify-center border border-[#61815f] mt-3">
                <p className="mini-active">
                  Price: 12
                  <br />
                </p>
                <p className="mini-active">
                  Stock: <span>5</span>
                </p>
                <p className="mini-active">
                  Quantity: <span>2</span>
                </p>
              </TableCell>

              <TableCell>
                <div className="flex items-center justify-center gap-5 border-2 border-black ">
                  {/* <div>
                  
                </div> */}
                  <Button className="btn-3 border-2 border-red-600 hover:bg-red-600 hover:outline-none outline-offset-2 bg-slate-100 outlince-b rounded-none h-9 text-red-600 hover:text-white absolute top-0 right-0">
                    <Trash2
                      onClick={() => handleRemove({})}
                      className=" w-7  hover:text-whit"
                    />
                  </Button>

                  <input
                    type="number"
                    className="w-[55px] h-[40px] pl-3 text-xl  border-2 rounded-none border-[#61815f] "
                    defaultValue={54}
                    min={0}
                    onChange={handleInputChange}
                    // ref={(el) => {
                    //   inputValuesRef.current[tree._id] = el?.value || "";
                    // }}
                    // data-productid={tree._id}
                    // value={inputValues[tree._id] || ""}
                  />
                  <Button
                    // disabled={
                    //   tree.stock <= 0 ||
                    //   Number(inputValues[tree._id] || "0") + tree.qty > tree.stock
                    // }
                    onClick={() => handleAddtocart({})}
                    className="capitalize btn-2"
                  >
                    Update
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        {cartProducts?.length !== 0 ? (
          <Table className="flex justify-between flex-wrap max-h-[600px] gap-2">
            {cartProducts?.map((tree: TProduct, i: number) => (
              <TableBody className="w-[48%] bg-[#6984671e]" key={tree._id}>
                <TableRow className="w-full bg-blak">
                  <TableCell className="font-medium">{i + 1}</TableCell>
                  <TableCell className="uppercase min-w-[150px] bg-bla">
                    <h5 className="text-md font-bold mb-1">{tree.name}</h5>
                  </TableCell>
                  <TableCell className="uppercase w-[0%] bg-b">
                    <p className="text-slate-300 bg-primary text-center rounded-md text-[14px] w-28 mb-1">
                      Price: ${tree.price}
                      <br />
                    </p>
                    <p className="text-slate-300 bg-primary text-center rounded-md text-[14px] w-28">
                      Stock: <span>{tree.stock}</span>
                    </p>
                    <p className="text-slate-300 bg-primary text-center rounded-md text-[14px] w-28">
                      Quantity: <span>{tree.qty}</span>
                    </p>
                    <p className="text-slate-300 bg-primary text-center rounded-md text-[14px] w-28">
                      InputVal: <span>{inputValues[tree._id] || ""}</span>
                    </p>
                  </TableCell>

                  <TableCell className="w-[40%]">
                    <img
                      className="h-[90px] w-[60px] object-cover mx-auto"
                      src={tree.imageURL}
                      alt=""
                    />
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center justify-center gap-5">
                      <XMarkIcon
                        onClick={() => handleRemove(tree)}
                        className="h-7 w-7 text-red-500 hover:text-red-900"
                      />

                      <input
                        type="number"
                        className="w-[55px] h-[40px] pl-3 text-xl rounded-md border-2 border-slate-400"
                        defaultValue={tree.qty}
                        min={0}
                        onChange={handleInputChange}
                        ref={(el) => {
                          inputValuesRef.current[tree._id] = el?.value || "";
                        }}
                        data-productid={tree._id}
                        value={inputValues[tree._id] || ""}
                      />
                      <Button
                        disabled={
                          tree.stock <= 0 ||
                          Number(inputValues[tree._id] || "0") + tree.qty >
                            tree.stock
                        }
                        onClick={() => handleAddtocart(tree)}
                        className="capitalize"
                      >
                        Update {Number(inputValues[tree._id] || "0") + tree.qty}
                      </Button>
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
      <h2 className="text-5xl uppercase py-14">Cart is empty yet!!</h2>
    </div>
  );
};

export default CartPage;
