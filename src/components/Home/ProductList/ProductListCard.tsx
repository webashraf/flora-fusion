import { Button } from "@/components/ui/button";
import "./ProductList.css";
const ProductListCard = ({ product }) => {
  // console.log(product, "products")
  return (
    <div className="relative">
      <div className="card w-[350px] h-[400px]">
        <div className="text text-2xl font-bold">
          <div className="">
            <div className="h-[370px] mb-5 bg-red-400 overflow-hidden">
              <img
                className="w-full object-cover"
                src={product.imageURL}
                alt=""
              />
            </div>
            <div className="backdrop-blur-sm hover:backdrop-blur-xl px-3 w-[320px] ease-linear absolute bottom-0 py-3 transition-all duration-300 text-white">
              <span>{product.name}</span>
              <p className="subtitle font-bold">{product.category.name}</p>
              <h6 className="font-serif text-xs">Stock : {product.stock}</h6>
              <h6 className="font-serif text-xs">Ratins ⭐: {product.ratings}</h6>
              <div className="flex justify-between items-center">
                <h5>$ {product.price}</h5>
                <Button>Add to cart</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListCard;
