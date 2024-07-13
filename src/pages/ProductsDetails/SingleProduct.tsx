/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import { setCart } from "@/redux/features/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import CommonHero from "@/shared/CommonHero/CommonHero";
import Loader from "@/shared/Loader/Loader";
import { TProduct } from "@/types/types";
import { useLoaderData } from "react-router-dom";

const SingleProduct = () => {
  // console.log("Single Product", product);
  const singleProduct: any = useLoaderData();
  const product: TProduct = singleProduct.result;

  const state = useAppSelector((state) => state.cart.cart);
  const dispatch = useAppDispatch();
  console.log(state);

  if (!product) {
    return <Loader />;
  }

  // Function to handle adding a product to the cart
  const handleAddtocart = () => {
    // Creating a new cart item with quantity set to 1
    const qtyInput = document.getElementById("qty-input") as HTMLInputElement;
    const qty = Number(qtyInput.value);
    console.log(qty);
    const treeCartItem = { ...product, qty };
    console.log("tree", treeCartItem);

    // Dispatching Redux action setCart to update cart state with new item
    dispatch(setCart(treeCartItem));
  };

  // console.log(product);
  return (
    <div>
      <CommonHero title="Single Product" />
      <div className="flex justify-center gap-10 py-20 bg-slat-200 border">
        <div className=" h-[600px] overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={product.imageURL}
            alt=""
          />
        </div>
        <div className=" w-1/2 pl-10 space-y-4">
          <h2 className="text-4xl uppercase">{product.name}</h2>
          <h2 className="text-7xl">${product.price}</h2>
          <h4>Ratings⭐: {product.ratings}</h4>
          <p className="text-slate-700 text-lg">
            Description: {product.description}
          </p>
          <p>Stock: {product.stock}</p>
          <p className=" rounded-md text-md uppercase">
            Category:
            <span className="bg-black inline-block px-1 text-sm capitalize text-white rounded-md ml-3">
              {product.category.name}
            </span>
          </p>
          <div className="flex items-center gap-5 pt-10">
            <input
              disabled={product.stock === 0}
              type="number"
              className="w-[55px] h-[40px] pl-3 text-xl rounded-md border-2 border-slate-400"
              defaultValue={1}
              name=""
              id="qty-input"
            />
            <Button
              disabled={product.stock === 0}
              onClick={handleAddtocart}
              className="capitalize"
            >
              {product.stock === 0 ? "Out Of Stock" : "Add to cart"}
            </Button>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
