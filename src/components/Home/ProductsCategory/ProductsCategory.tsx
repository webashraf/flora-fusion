import { Button } from "@/components/ui/button";
import { useGetCategoriesQuery } from "@/redux/api/baseApi";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ProductsCategory = () => {
  const { data: categories } = useGetCategoriesQuery({});
  return (
    <div className="">
      <HorizontalScrollCarousel categories={categories} />
    </div>
  );
};

const HorizontalScrollCarousel = ({ categories }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <div className="mt-32 ">
      <section ref={targetRef} className="relative h-[300vh] pb-10 mb-10">
        <h2 className="text-5xl font-serif uppercase mb-12 sticky top-20">
          All Categories
        </h2>
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-4">
            {categories?.map((categorey) => {
              return <Card categorey={categorey} key={categorey._id} />;
            })}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const Card = ({ categorey }) => {
  return (
    <div
      key={categorey.id}
      className="group relative h-[200px] w-[450px] overflow-hidden rounded-sm bg-slate-800"
    >
      <div
        style={{
          backgroundImage: `url(${categorey.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      {/* Content show on here */}
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-xl font-black uppercase text-white backdrop-blur-lg">
          {categorey.name}
        </p>
        <p></p>
        <Button className="capitalize">See products</Button>
      </div>
    </div>
  );
};

export default ProductsCategory;
