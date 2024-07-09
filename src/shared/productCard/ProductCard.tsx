import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useRef } from "react";
import { FiMousePointer } from "react-icons/fi";

const ProductCard = ({ productImg }) => {
  return (
    <div className="grid w-full place-content-center bg-gradient-to-br from-[#698467] to-[#74a859f6] py-5 rounded-md text-slate-900 bg-cover">
      <TiltCard productImg={productImg} />
    </div>
  );
};

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const TiltCard = ({ productImg }) => {
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

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
        backgroundImage: `url(${productImg})`,
      }}
      className="relative h-96 w-72 rounded-xl overflow-hidden"
    >
      <img src={productImg} alt="" />
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-2 grid place-content-center rounded-xl  shadow-lg bg-[#37161600]"
      >
        <p
          style={{
            transform: "translateZ(50px)",
          }}
          className="text-center text-2xl font-bold"
        >
          fsdfsdf
        </p>
        <FiMousePointer
          style={{
            transform: "translateZ(75px)",
          }}
          className="mx-auto text-4xl"
        />
        {/* <img src={productImg} className="relative z-50" alt="" /> */}
      </div>
    </motion.div>
  );
};

export default ProductCard;
