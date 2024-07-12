/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import Loader from "@/shared/Loader/Loader";
import { TProducts } from "@/types/types";
import { useLoaderData } from "react-router-dom";

const SingleProduct = () => {
  // console.log("Single Product", product);
  const singleProduct: any = useLoaderData();
  const product: TProducts = singleProduct.result;

  if (!product) {
    return <Loader />;
  }

  console.log(product);
  return (
    <div className="flex justify-center gap-10 p-10 bg-slate-200 border">
      <div className=" h-[600px] overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={product.imageURL}
          alt=""
        />
      </div>
      <div className="bg-slate-200 w-1/2 pl-10 space-y-4">
        <h2 className="text-4xl uppercase">{product.name}</h2>
        <h2 className="text-7xl">${product.price}</h2>
        <h4>Ratings⭐: {product.ratings}</h4>
        <p className="text-slate-700 text-lg">Description: {product.description}</p>
        <p className=" rounded-md text-md uppercase">
          Category:
          <span className="bg-black inline-block px-1 text-sm capitalize text-white rounded-md ml-3">
            {product.category.name}
          </span>
        </p>
        <div className="flex items-center gap-5 pt-10">
          <input
            type="number"
            className="w-[40px] h-[40px] pl-3 text-xl rounded-md"
            defaultValue={1}
            name=""
            id=""
          />
          <Button className="capitalize">Add to cart</Button>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default SingleProduct;
