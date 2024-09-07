import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-6xl font-bold text-gray-800 mb-4 animate-bounce">
        404
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        Oops! The page you're looking for doesn't exist.
      </p>

      <NavLink
        to="/"
        className="bg-[#80a97e] text-white px-6 py-3 rounded-lg shadow-lg hover:bg-[#6f8d6b] transition-all duration-300"
      >
        Back to Home
      </NavLink>
    </div>
  );
};

export default ErrorPage;
