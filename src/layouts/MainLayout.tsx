import NavBar from "@/shared/NavBar/NavBar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="w-[1880px] h-[100vh] mx-auto bg-red-00">
      <NavBar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
