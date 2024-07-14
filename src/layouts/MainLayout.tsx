import Footer from "@/shared/Footer/Footer";
import NavBar from "@/shared/NavBar/NavBar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="lg:w-[1440px] md:max-w-full mx-auto overflow-x-hidden bg-red-00">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
