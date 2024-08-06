import { useAppSelector } from "@/redux/hooks";
import { UserCircleIcon } from "@heroicons/react/16/solid";
import { useEffect } from "react";
import { CartSheet } from "./CartSheet";
import NavMenu from "./NavMenu";
import OffCanvusMenu from "./OffCanvusMenu/OffCanvusMenu";
// import { NavMenu } from "/src/shared/NavBar/NavMenu";

const NavBar = () => {
  const items = useAppSelector((state) => state.cart.cart);

  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (items.length !== 0) {
        const warningMessage =
          "Your cart has some items. Are you sure to reload?😒";
        event.returnValue = warningMessage;
        return warningMessage;
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [items]);

  return (
    <nav className="w-full flex flex-col items-center bg-white">
      <div className="flex justify-between gap-10 w-full">
        {/* Nav Logo */}
        <div className="lg:w-[20%] md:w-[40%] w-[40%] mx-auto relative lg:bottom-4 flex items-center">
          <img
            src="/Flora_Fusion_logos.png"
            className="bg-red-5 lg:h-auto"
            alt=""
          />
        </div>

        {/* Nav contact */}
        <div className="w-[80%] bg-red-5  border overflow-hidden lg:block hidden">
          <div
            className="w-full  lg:h-[60%] md:py-3 bgblack flex items-center justify-between
          "
          >
            <div className="lg:w-[30%] text-center ps-1">
              <h4 className="text-base font-serif">
                FREE GROUND SHIPPING ON ORDERS OVER $129*
              </h4>
              <p className="font-mono text-sm">*Some Exclusions May Apply</p>
            </div>

            <div className="text-center pr-5 flex flex-col items-center">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <h4 className="text-sm font-l">CALL TO ORDER!</h4>
              <p className="font-mono text-sm">
                <a href="tel:+844-348-8971">844-348-8971</a>
              </p>
            </div>
          </div>

          <div className="w-[100%]  h-[40%] flex justify-end items-center border-t">
            <div className="border-x  px-12 py-3 relative flex justify-center items-center">
              <div className="bg-[#87b670 bg-red-500 text-white w-[20px] h-[20px] flex justify-center items-center rounded-full relative bottom-3 -right-5">
                <h4 className="text-sm ">{items?.length}</h4>
              </div>

              <div className="absolute">
                {/* <CartItems color="#87b670" /> */}
                <CartSheet color={"#87b670"} />
              </div>
            </div>
            <span className="px-12">
              <UserCircleIcon className="h-6 w-6 text-[#61815f]" />
            </span>
          </div>
        </div>
      </div>

      {/* large Nav Menu */}
      <div
        id="nav-menu-top"
        className="w-full px-10 text-center py-3 bg-gradient-to-r from-[#61815f] to-[#80a97e] text-white lg:block md:block hidden"
      >
        <NavMenu />
      </div>

      {/* Mobile menu */}
      <div className="flex justify-between w-full relative bg-gradient-to-r from-[#61815f] to-[#80a97e] lg:hidden md:hidden pr-2">
        <div className=" relative">
          <h4 className="text-lg absolute -top-0 right-0 text-white">
            {items?.length}
          </h4>
          <div className="">
            <CartSheet color="white" />
          </div>
        </div>
        <div>
          {/* <OffCanvasBurger /> */}
          <OffCanvusMenu />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
