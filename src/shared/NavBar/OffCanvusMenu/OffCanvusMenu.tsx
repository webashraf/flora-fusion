import {
  BanknotesIcon,
  BuildingStorefrontIcon,
  HomeModernIcon,
} from "@heroicons/react/16/solid";
import { FileEdit, ShoppingBasket } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./OffCanvusMenu.css";

const OffCanvusMenu = () => {
  const [openMenu, setOpenMenu] = useState(false); // Initially hidden

  const toggleMenu = () => {
    setOpenMenu((prev) => !prev);
  };

  return (
    <div className="relative">
      <div>
        <div className="theme-popup relative">
          <input
            type="checkbox"
            id="checkbox"
            checked={openMenu}
            onChange={toggleMenu}
          />
          <label htmlFor="checkbox" className="theme-popup__button">
            <div>
              <label className="hamburger">
                <input
                  type="checkbox"
                  checked={openMenu}
                  onChange={toggleMenu}
                />
                <svg viewBox="0 0 32 32">
                  <path
                    className="line line-top-bottom"
                    d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                  ></path>
                  <path className="line" d="M7 16 27 16"></path>
                </svg>
              </label>
            </div>
          </label>

          <div
            className={`theme-popup__list-container z-50 mt-4 ${
              openMenu ? "show" : "hide"
            }`}
          >
            <ul className="theme-popup__list">
              <NavLink
                to="/"
                className="flex gap-2 justify-start items-center hover:bg-[#458c29] hue-rotate-60 p-2"
              >
                <span className="theme-popup__icons">
                  <HomeModernIcon className="size-4" />
                </span>
                <span>Home</span>
              </NavLink>

              <NavLink
                to="/products"
                className="flex gap-2 justify-start items-center hover:bg-[#458c29] hue-rotate-60 p-2"
              >
                <span className="theme-popup__icons">
                  <BuildingStorefrontIcon className="size-4" />
                </span>
                <span>Products</span>
              </NavLink>

              <NavLink
                to="/checkout"
                className="flex gap-2 justify-start items-center hover:bg-[#458c29] hue-rotate-60 p-2"
              >
                <span className="theme-popup__icons">
                  <BanknotesIcon className="size-4" />
                </span>
                <span>CheckOut</span>
              </NavLink>

              <NavLink
                to="/cart"
                className="flex gap-2 justify-start items-center hover:bg-[#458c29] hue-rotate-60 p-2"
              >
                <span className="theme-popup__icons">
                  <ShoppingBasket className="size-4" />
                </span>
                <span>Cart</span>
              </NavLink>
              <NavLink
                to="/manage-products"
                className="flex gap-2 justify-start items-center hover:bg-[#458c29] hue-rotate-60 p-2"
              >
                <span className="theme-popup__icons">
                  <FileEdit className="size-4" />
                </span>
                <span>Manage Products</span>
              </NavLink>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OffCanvusMenu;
