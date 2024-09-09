import { Button } from "@/components/ui/button";
import { TProduct } from "@/types/types";
import "../Hero/hero.css";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Hero = ({ products }: { products: TProduct | any }) => {
  return (
    <div className="lg:h-[80vh] md:h-[0v] lg:flex gap-10 bg-white ">
      <div className="lg:w-1/2 md:w-full  lg:h-full h-[70vh] gap-3 flex justify-center hero-banner overflow-hidden relative">
        <div className="mx-auto flex flex-col justify-center lg:items-center items-start absolute z-10 gap-3 p-5 backdrop-blur-sm w-full h-full">
          <h1 className="text-4xl p-color text-left">We’re Spring Plant</h1>
          <h2 className="text-6xl font-serif text-white">PLANT BIG SALE</h2>
          <Button className="btn-1">Shop Now</Button>
        </div>
        <div className="h-full md:w-full">
          <img
            src={products[5]?.imageURL}
            className="h-full md:w-full w-[] object-cover object-center h-img"
            alt=""
          />
        </div>
      </div>

      <div className="lg:w-1/2 md:w-full lg:flex lg:flex-col lg:gap-10 h-full hidden">
        <div className="w-full h-full bg-blue-100  gap-3 flex justify-center items-center hero-banner overflow-hidden relative">
          <div className=" mx-auto flex flex-col justify-center items-center absolute z-10 gap-3 p-5 backdrop-blur-sm w-full h-full  md:text-center">
            <h1 className="text-4xl p-color">Holiday Gifts</h1>
            <h2 className="text-6xl font-serif text-white">SPECIAL PLAN</h2>
            <Button className="btn-1">Shop Now</Button>
          </div>

          <div className="h-full w-full">
            <img
              src={products[8]?.imageURL}
              className="h-full w-[100%] object-cover object-bottom h-img"
              alt=""
            />
          </div>
        </div>
        <div className="w-full h-full lg:bg-blue-100 md:bg-black gap-3 flex justify-center items-center hero-banner overflow-hidden relative bg-bla">
          <div className=" mx-auto flex flex-col justify-center items-center absolute z-10 gap-3 p-5 backdrop-blur-sm w-full h-full md:text-center">
            <h1 className="text-4xl p-color">Spring Sale</h1>
            <h2 className="text-6xl font-serif text-white">UP TO 40% OFF</h2>
            <Button className="btn-1 s-bg">Shop Now</Button>
          </div>

          <div className="h-full w-full">
            <img
              src={products[1]?.imageURL}
              className="h-full w-[100%] object-cover object-bottom h-img"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
