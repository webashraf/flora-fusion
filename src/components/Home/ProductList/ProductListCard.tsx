import { Button } from "@/components/ui/button";
import "./ProductList.css";
const ProductListCard = () => {
  return (
    <div className="relative">
      <div className="card w-[350px] h-[400px]">
        <div className="text text-2xl font-bold">
          <div className="">
            <div className="h-[250px]">
              <img
                src="/src/assets/images/HomePageImages/product-03-400x521 (1).jpg"
                alt=""
              />
            </div>
            <div className="backdrop-blur-sm hover:backdrop-blur-xl w-[350px] ease-linear ml-2 absolute bottom-0 py-3 transition-all duration-300">
              <span>Lorem ipsum dolor sit amet</span>
              <p className="subtitle">Vivamus nisi purus</p>
              <div className="">
                <h6 className="font-serif text-xs mb-4">⭐: 4.9</h6>
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
