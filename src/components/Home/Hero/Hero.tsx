const Hero = () => {
  return (
    <div className="h-[80vh] flex gap-10">
      <div className="w-1/2 flex items-center h-full bg-blue-100">
        <h1>Product 1</h1>
      </div>
      <div className="w-1/2  flex flex-col gap-10 h-full">
        <div className="h-1/2 flex items-center bg-cyan-100">
          <h1>Product 1</h1>
        </div>
        <div className="h-1/2 flex items-center bg-red-100">
          <h1>Product 1</h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
