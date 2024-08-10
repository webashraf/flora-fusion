/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import { useAppSelector } from "@/redux/hooks";
import Footer from "@/shared/Footer/Footer";
import { CartSheet } from "@/shared/NavBar/CartSheet";
import NavBar from "@/shared/NavBar/NavBar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  const items = useAppSelector((state) => state.cart.cart);

  return (
    <>
      <div className="lg:max-w-[1440px] md:w-[100%] w-full mx-auto overflow-x-hidden overflow-hidden relative">
        <NavBar />

        <Outlet />

        <div className="fixed bottom-16 right-0 w-full flex justify-center z-20">
          <div className="max-w-[1440px] w-full relative z-50">
            <Button
              className=" rounded-full absolute z-50 right-4 p-0 size-14"
              aria-label="Shopping Cart"
            >
              <p className="bg-red-500 size-5 absolute rounded-full -top-2 right-0">
                {items.length}
              </p>
              <CartSheet color="" />
            </Button>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
