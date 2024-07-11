import { Button } from "@/components/ui/button";
import { setCart } from "@/redux/features/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { TProducts } from "@/types/types";
import "./ProductList.css";
const ProductListCard = ({ product }: { product: TProducts }) => {
  const dispatch = useAppDispatch();

  const state = useAppSelector((state) => state.cart.cart);
  const handleAddtocart = (tree: TProducts) => {
    console.log(state);

    const treeCartItem = { ...tree, qty: 1 };

    dispatch(setCart(treeCartItem));
  };

  return (
    <div className="relative">
      <div className="card w-[350px] h-[400px]">
        <div className="text text-2xl font-bold">
          <div className="">
            <div className="h-[370px] mb-5 bg-red-400 overflow-hidden">
              <img
                className="w-full object-cover h-full"
                src={product.imageURL}
                alt=""
              />
            </div>
            <div className="backdrop-blur-sm hover:backdrop-blur-xl px-3 w-[320px] ease-linear absolute bottom-0 py-3 transition-all duration-300 text-white">
              <span>{product.name}</span>
              <p className="subtitle font-bold">{product.category.name}</p>
              <h6 className="font-serif text-xs">Stock : {product.stock}</h6>
              <h6 className="font-serif text-xs">
                Ratins ⭐: {product.ratings}
              </h6>
              <div className="flex justify-between items-center">
                <h5>$ {product.price}</h5>
                <Button onClick={() => handleAddtocart(product)}>
                  Add to cart
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
