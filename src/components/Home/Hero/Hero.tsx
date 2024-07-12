import { Button } from "@/components/ui/button";
import { TProducts } from "@/types/types";
import "../Hero/hero.css";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Hero = ({ products }: { products: TProducts | any }) => {
  return (
    <div className="h-[80vh] flex gap-10 bg-white">
      <div className="w-1/2  h-full gap-3 flex justify-center hero-banner overflow-hidden relative">
        <div className="mx-auto flex flex-col justify-center items-center absolute z-10 gap-3 p-5 backdrop-blur-sm w-full h-full ">
          <h1 className="text-4xl p-color">We’re Spring Plant</h1>
          <h2 className="text-6xl font-serif text-white">PLANT BIG SALE</h2>
          <Button className="hero-btn">Shop Now</Button>
        </div>
        <div className="h-full">
          <img
            src={products[5]?.imageURL}
            className="h-full w-[] object-cover object-center h-img"
            alt=""
          />
        </div>
      </div>

      <div className="w-1/2 flex flex-col gap-10 h-full">
        <div className="w-full h-full bg-blue-100  gap-3 flex justify-center items-center hero-banner overflow-hidden relative">
          <div className=" mx-auto flex flex-col justify-center items-center absolute z-10 gap-3 p-5 backdrop-blur-sm w-full h-full ">
            <h1 className="text-4xl p-color">Holiday Gifts</h1>
            <h2 className="text-6xl font-serif text-white">SPECIAL PLAN</h2>
            <Button className="hero-btn">Shop Now</Button>
          </div>

          <div className="h-full w-full">
            <img
              src={products[8]?.imageURL}
              className="h-full w-[100%] object-cover object-bottom h-img"
              alt=""
            />
          </div>
        </div>
        <div className="w-full h-full bg-blue-100 gap-3 flex justify-center items-center hero-banner overflow-hidden relative">
          <div className=" mx-auto flex flex-col justify-center items-center absolute z-10 gap-3 p-5 backdrop-blur-sm w-full h-full">
            <h1 className="text-4xl p-color">Spring Sale</h1>
            <h2 className="text-6xl font-serif text-white">UP TO 40% OFF</h2>
            <Button className="hero-btn">Shop Now</Button>
          </div>

          <div className="h-full w-full">
            <img
              src={products[11]?.imageURL}
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
