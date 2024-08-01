import { useAppSelector } from "@/redux/hooks";
import { ShoppingBagIcon } from "@heroicons/react/16/solid";
import { NavLink } from "react-router-dom";
import "./CartModal.css";

const CartModal = () => {
  const trees = useAppSelector((state) => state.cart.cart);
  return (
    <>
      <input className="checkbox opacity-0 " type="checkbox" />
      <span className="button-menu">
        <ShoppingBagIcon color="#85b86b" scale="1" />
        <span className="absolute -top-7 right-5 h-[30px] w-[30px] rounded-xl items-center s-bg flex justify-center scale-75">
          {trees.length}
        </span>
      </span>
      <div className="option-b option p-5 rounded-md absolute bottom-0 backdrop-blur-2xl border-2">
        {trees?.map((tree, i) => (
          <div className="text-left flex items-center gap-2 drop-shadow-xl text-[#000]">
            <h4 className="text-lg">
              {i + 1}. {tree.name}
            </h4>
            <p>${tree.price}</p>
          </div>
        ))}

        {trees.length === 0 ? (
          <h2 className="text-slate-900 text-xl">Cart is empty!!</h2>
        ) : (
          <NavLink to="/checkout">
            {/* <Button type="submit" className="capitalize btn-2"> */}
            <button className="btn-2 mt-2 px-5 py-2">chek-out</button>

            {/* </Button> */}
          </NavLink>
        )}
      </div>
    </>
  );
};

export default CartModal;
