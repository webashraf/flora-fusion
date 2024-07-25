import { Button } from "@/components/ui/button";
import { setCart } from "@/redux/features/cartSlice";
import { useAppDispatch } from "@/redux/hooks";
import { TProduct } from "@/types/types";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { LucideEye, ScanLineIcon, ShoppingCart } from "lucide-react";
import { useRef } from "react";
import { NavLink } from "react-router-dom";
import { toast } from "sonner";

const ProductCard = ({ product }: { product: TProduct }) => {
  // console.log(product);
  return (
    <div className="grid w-full place-content-center bg-gradient-to-br from-[#698467] to-[#74a859f6] py-5 rounded-md text-slate-900 bg-cover">
      <TiltCard product={product} />
    </div>
  );
};

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const TiltCard = ({ product }: { product: TProduct }) => {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };
  const dispatch = useAppDispatch();
  // Function to handle adding a product to the cart
  const handleAddtocart = (tree: TProduct) => {
    // Creating a new cart item with quantity set to 1
    const treeCartItem = { ...tree, qty: 1 };
    console.log("tree", tree);

    // Dispatching Redux action setCart to update cart state with new item
    dispatch(setCart(treeCartItem));
    toast.success("Product add to  cart successfully!!");
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
        backgroundImage: `url(${product.imageURL})`,
        backgroundPosition: "center center",
      }}
      className="relative h-96 w-72 rounded-xl overflow-hidden"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-2 grid place-content-center rounded-xl  shadow-lg backdrop-blur- hue-rotate-30 bg-[#35612186] h-[115px] mt-auto gap-1"
      >
        <p
          style={{
            transform: "translateZ(50px)",
          }}
          className="text-center text-2xl font-bold text-white"
        >
          {product.name}
        </p>

        <p className="mini-active mx-auto">${product.price}</p>
        <div className="flex gap-3 justify-between mt-1 w-full bg-blac absolute -top-5">
          <NavLink to={`single-product/${product._id}`} className="hue-rotate-">
            <Button className="btn-1 rounded-md ">
              <LucideEye className="text-white" />
            </Button>
          </NavLink>
          <Button
            disabled={product?.stock === 0}
            onClick={() => handleAddtocart(product)}
            className={
              product.stock == 0
                ? "bg-red-600"
                : "btn-1 hue-rotate-60 rounded-lg"
            }
          >
            {product?.stock === 0 ? (
              <ScanLineIcon className="text-white" />
            ) : (
              //  <h2></h2>
              <ShoppingCart className="text-white hover:animate-bounce" />
            )}
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
