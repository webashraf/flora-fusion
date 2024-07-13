import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { removeCartItem, setCart } from "@/redux/features/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { TProduct } from "@/types/types";
import { XMarkIcon } from "@heroicons/react/16/solid";
import { useRef } from "react";
import { NavLink } from "react-router-dom";

const CartPage = () => {
  const cartProducts: TProduct[] = useAppSelector((state) => state.cart.cart);
  const dispatch = useAppDispatch();
  console.log(cartProducts);

  const qtyRefs = useRef<Map<string, HTMLInputElement>>(new Map());

  let newPrice: number = 0;
  cartProducts.forEach((item: TProduct) => {
    newPrice = item.price * item.qty + newPrice;
  });

  // Function to handle adding a product to the cart
  const handleAddtocart = (product: TProduct) => {
    const qtyInput = qtyRefs.current.get(product._id);
    const qty = qtyInput ? Number(qtyInput.value) : 1;
    console.log(qty);
    const treeCartItem = { ...product, qty };
    console.log("tree", treeCartItem);

    // Dispatching Redux action setCart to update cart state with new item
    dispatch(setCart(treeCartItem));

    // Reset the input value to 1 after updating the cart
    if (qtyInput) {
      qtyInput.value = "1";
    }
  };

  const handleRemove = (item: TProduct) => {
    dispatch(removeCartItem(item._id));
  };

  // Ensure input value is always positive
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target;
    if (Number(input.value) < 1) {
      input.value = "1";
    }
  };

  return (
    <div className="py-20">
      <div className="">
        <h2 className="text-5xl uppercase pb-10">Cart Page</h2>
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
                      Quantity: <span>{tree.qty}</span>
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
                        disabled={tree.stock === 0}
                        type="number"
                        className="w-[55px] h-[40px] pl-3 text-xl rounded-md border-2 border-slate-400"
                        defaultValue={1}
                        min={0}
                        onChange={handleInputChange}
                        ref={(el) => {
                          if (el) qtyRefs.current.set(tree._id, el);
                          else qtyRefs.current.delete(tree._id);
                        }}
                      />
                      <Button
                        disabled={tree.stock === 0}
                        onClick={() => handleAddtocart(tree)}
                        className="capitalize"
                      >
                        Update
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
          <Button type="submit" className="capitalize">
            Proced to chek-out
          </Button>
        </NavLink>
      </div>
    </div>
  );
};

export default CartPage;
