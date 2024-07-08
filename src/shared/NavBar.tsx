import { Button } from "@/components/ui/button";

const NavBar = () => {
  return (
    <nav className="w-full flex justify-between gap-10">
      <div className="w-[20%] relative bottom-4 ">
        <img src="/public/Flora Fusion logo.png" alt="" />
      </div>
      <div className="w-[60%] px-10">
        <ul className="flex justify-between h-full items-center text-[16px] font-mono">
          <li>Home</li>
          <li>Products</li>
          <li>Carts</li>
          <li>About us</li>
          <li>Contact us</li>
        </ul>
      </div>
      <div className="w-[20%]  flex justify-end items-center">
        <Button>Login</Button>
      </div>
    </nav>
  );
};

export default NavBar;
