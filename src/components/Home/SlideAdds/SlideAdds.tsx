/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
gsap.registerPlugin(useGSAP);

const SlideAdds = () => {
  const container: any = useRef(null);
  const discountAdsText: any = useRef(null);

  // GSAP ANimation
  useGSAP(
    () => {
      // gsap code here...
      gsap.from("#discount", {
        x: -discountAdsText?.current?.offsetWidth,
        repeat: -1,
        ease: "none",
        duration: 10,
      });
      gsap.to("#discount2", {
        x: -discountAdsText?.current?.offsetWidth,
        repeat: -1,
        ease: "none",
        duration: 10,
      });
    },
    { scope: container }
  );
  return (
    <div>
      <div ref={container} className="py-10 items-center-rotate-1">
        <div id="discount" className=" flex flex-nowrap gap-0">
          <div
            ref={discountAdsText}
            className="text-5xl uppercase py-5 bg-[#658863] text-slate-100 mb-5 translate-x flex "
          >
            <h1 className="px-5 text-nowrap">
              20% Discount of every fruit trees 🌴
            </h1>
            <h1 className="px-5 text-nowrap">
              20% Discount of every fruit trees 🌴
            </h1>
          </div>
          <div
            ref={discountAdsText}
            className="text-5xl uppercase py-5 bg-[#658863] text-slate-100 mb-5 translate-x flex"
          >
            <h1 className="px-5 text-nowrap">
              20% Discount of every fruit trees
            </h1>
            <h1 className="px-5 text-nowrap">
              20% Discount of every fruit trees
            </h1>
          </div>
        </div>
        <div id="discount2" className=" flex flex-nowrap ">
          <div
            ref={discountAdsText}
            className="text-5xl uppercase py-5 bg-[#658863] text-slate-100 mb-5 translate-x flex "
          >
            <h1 className="px-5 text-nowrap">
              20% Discount of every fruit trees 🌴
            </h1>
            <h1 className="px-5 text-nowrap">
              20% Discount of every fruit trees 🌴
            </h1>
          </div>
          <div
            ref={discountAdsText}
            className="text-5xl uppercase py-5 bg-[#658863] text-slate-100 mb-5 translate-x flex"
          >
            <h1 className="px-5 text-nowrap">
              20% Discount of every fruit trees
            </h1>
            <h1 className="px-5 text-nowrap">
              20% Discount of every fruit trees
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideAdds;
