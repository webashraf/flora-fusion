import "./Loader.css";

const Loader = () => {
  return (
    <div className="h-[70vh] flex items-center justify-center animate-pulse">
      <div className="loader"></div>
    </div>
  );
};

export default Loader;
