import { Button } from "@/components/ui/button";
import { setCart } from "@/redux/features/cartSlice";
import { useAppDispatch } from "@/redux/hooks";
import { TProduct } from "@/types/types";
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
      <div className="card lg:w-[320px] h-[400px]">
        <div className="text text-2xl font-bold">
          <div className="">
            <div className="h-[470px] w-[300px] mb-5 bg-red-400 overflow-hidden">
              <img
                className="w-full object-cover h-full"
                src={product.imageURL}
                alt=""
              />
            </div>
            <div className="backdrop-blur-sm hover:backdrop-blur-xl px-3 w-[320px] ease-linear absolute bottom-0 py-3 transition-all duration-300 text-white">
              <span>{product.name}</span>
              <p className="subtitle font-bold">{product.category.name}</p>
              {product.stock === 0 ? (
                <h6 className="font-serif text-xs text-red-600">
                  Out of Stock
                </h6>
              ) : (
                <h6 className="font-serif text-xs">Stock : {product.stock}</h6>
              )}
              <h6 className="font-serif text-xs">
                Ratings ⭐: {product.ratings}
              </h6>
              <div className="flex justify-between items-center">
                <h5>$ {product.price}</h5>
                {/* Button to add product to cart, disabled if out of stock */}
                <Button
                  className="btn-2"
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
