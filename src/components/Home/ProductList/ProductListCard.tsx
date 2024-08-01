import { Button } from "@/components/ui/button";
import { setCart } from "@/redux/features/cartSlice";
import { useAppDispatch } from "@/redux/hooks";
import { TProduct } from "@/types/types";
import { LucideEye } from "lucide-react";
import { NavLink } from "react-router-dom";
import { toast } from "sonner";
import "./ProductList.css";

const ProductListCard = ({ product }: { product: TProduct }) => {
  const dispatch = useAppDispatch();

  // Function to handle adding a product to the cart
  const handleAddtocart = (tree: TProduct) => {
    // Creating a new cart item with quantity set to 1
    const treeCartItem = { ...tree, qty: 1 };
    console.log("tree", tree);

    // Dispatching Redux action setCart to update cart state with new item
    dispatch(setCart(treeCartItem));
    toast.success("Product add to cart successfully!!");
  };

  return (
    <div className="relative ">
      <div className="card w-[340px] h-[400px]">
        <div className="text text-2xl w-full overflow-hidden font-bold">
          <div className="w-full ">
            <div className="h-[370px] w-full mb-5 bg-red-400 overflow-hidden">
              <img
                className="w-full object-cover h-full"
                src={product.imageURL}
                alt=""
              />
            </div>
            <div className="backdrop-blur-sm bg-[#252a2222] hover:backdrop-blur-xl px-3 w-[310px]  ease-linear absolute bottom-3 py-3 transition-all duration-300 text-white space-y">
              <p className="-mb-2">{product.name}</p>
              <p className="subtitle font-bold text-[.6em] text-[#65ff5d]">
                {product.category.name}
              </p>
              {product.stock === 0 ? (
                <h6 className="font-serif text-xs text-red-600 mb-1">
                  Out of Stock
                </h6>
              ) : (
                <h6 className="font-serif text-xs mb-1">
                  Stock : {product.stock}
                </h6>
              )}
              <h6 className="font-serif text-xs">
                Ratings ⭐: {product.ratings}
              </h6>
              <h5>$ {product.price}</h5>
              <div className="flex justify-between items-center">
                <NavLink
                  to={`single-product/${product._id}`}
                  className="hue-rotate-60 bg-[#587c4777 rounded-non text-xs hover:underline font-normal flex items-center gap-1 "
                >
                  {/* <a className=""> */}
                  <LucideEye className="text-white" />
                  View Details
                  {/* </a> */}
                </NavLink>
                {/* Button to add product to cart, disabled if out of stock */}
                <Button
                  className="btn-1"
                  disabled={product.stock === 0}
                  onClick={() => handleAddtocart(product)}
                >
                  {product.stock === 0 ? "Out of stock" : " Add to cart 🛍️"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListCard;
