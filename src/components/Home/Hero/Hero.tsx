import { Button } from "@/components/ui/button";
import "../Hero/hero.css";

const Hero = () => {
  return (
    <div className="h-[100vh] flex gap-10">
      <div className="w-1/2  h-full bg-blue-100 gap-3 flex justify-center hero-banner overflow-hidden">
        <div className="mt-10 mx-auto flex flex-col items-center absolute z-10 gap-3 p-5">
          <h1 className="text-4xl p-color">We’re Spring Plant</h1>
          <h2 className="text-6xl font-serif text-slate-800">PLANT BIG SALE</h2>
          <Button className="hero-btn">Shop Now</Button>
        </div>
        <div className="h-full">
          <img
            src="/src/assets/images/hero/h6_banner1.jpg"
            className="h-full w-[] object-cover object-center h-img"
            alt=""
          />
        </div>
      </div>

      <div className="w-1/2 flex flex-col gap-10 h-full">
        <div className="w-full h-full bg-blue-100 gap-3 flex justify-start items-end hero-banner overflow-hidden">
          <div className="mt-10 mx-auto flex flex-col items-center absolute z-10 gap-3 p-5">
            <h1 className="text-4xl p-color">We’re Spring Plant</h1>
            <h2 className="text-6xl font-serif text-slate-800">
              PLANT BIG SALE
            </h2>
            <Button className="hero-btn">Shop Now</Button>
          </div>

          <div className="h-full w-full">
            <img
              src="/src/assets/images/hero/h6_banner2.jpg"
              className="h-full w-[100%] object-cover object-bottom h-img"
              alt=""
            />
          </div>
        </div>
        <div className="w-full h-full bg-blue-100 gap-3 flex justify-center items-center hero-banner overflow-hidden">
          <div className="mt-10 mx-auto flex flex-col items-center absolute z-10 gap-3 p-5">
            <h1 className="text-4xl p-color">We’re Spring Plant</h1>
            <h2 className="text-6xl font-serif text-slate-800">
              PLANT BIG SALE
            </h2>
            <Button className="hero-btn">Shop Now</Button>
          </div>

          <div className="h-full w-full">
            <img
              src="/src/assets/images/hero/h6_banner3.jpg"
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
