/* eslint-disable @typescript-eslint/no-explicit-any */
import CartModal from "@/components/customUi/CartModal/CartModal";
import { Button } from "@/components/ui/button";
import Footer from "@/shared/Footer/Footer";
import NavBar from "@/shared/NavBar/NavBar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <div className="max-w-[1440px] w-full mx-auto overflow-x-hidden bg-red-00 relative">
        <NavBar />

        <Outlet />

        <div className="fixed bottom-16 right-0 w-full flex justify-center">
          <div className="max-w-[1440px] w-full relative">
            <Button
              className="size-12 p-2 rounded-full absolute right-4"
              aria-label="Shopping Cart"
            >
              <CartModal />
            </Button>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
