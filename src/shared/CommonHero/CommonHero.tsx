import heroImg from "../../assets/images/hero/heroImg.jpg";
const CommonHero = ({ title }: { title: string }) => {
  return (
    <div
      className="h-[500px] w-full mb-20 bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(${heroImg})`,
        backgroundPosition: "center",
      }}
    >
      <div className="w-full h-full bg-black/20 backdrop-blur-sm flex items-center justify-center">
        <h2 className="lg:text-7xl lg:text-left text-5xl text-center underline uppercase text-slate-200">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default CommonHero;
