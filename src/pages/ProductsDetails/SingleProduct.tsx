/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import { setCart } from "@/redux/features/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import CommonHero from "@/shared/CommonHero/CommonHero";
import Loader from "@/shared/Loader/loader/Loader";

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
        <div className=" h-[600px] w-[400px] overflow-hidden">
          <img
            className="w-full h-full object-cover transform transition-transform duration-500 ease-in-out hover:scale-[1.40] cursor-zoom-in"
            src={product.imageURL}
            alt=""
          />
        </div>
        <div className=" w-1/2 pl-10 space-y-4">
          <h2 className="text-4xl uppercase">{product.name}</h2>
          <h2 className="text-7xl">${product.price}</h2>
          <h4 className="font-bold">
            Ratings⭐: <span className="font-normal">{product.ratings}</span>
          </h4>
          <p className="text-slate-700 text-lg font-bold">
            Description:{" "}
            <span className="font-normal">{product.description}</span>
          </p>
          <p className="font-bold">
            Stock: <span className="font-normal">{product.stock}</span>
          </p>
          <p className=" rounded-md text-md uppercase font-bold">
            Category:
            <span className="mini-active px-2 ml-1 font-normal">
              {product.category.name}
            </span>
          </p>
          <div className="flex items-center gap-5 pt-10">
            <input
              disabled={product.stock === 0}
              type="number"
              className="w-[55px] h-[40px] pl-4 text-xl rounded-none border-2 border-[#4e674c]"
              defaultValue={1}
              name=""
              id="qty-input"
            />

            <Button
              disabled={product.stock === 0}
              onClick={handleAddtocart}
              className="capitalize btn-2"
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
