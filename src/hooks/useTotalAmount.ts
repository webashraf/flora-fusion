import { useAppSelector } from "@/redux/hooks";
import { TProduct } from "@/types/types";

const useTotalAmount = () => {
  const cartProducts: TProduct[] = useAppSelector((state) => state.cart.cart);
  let amount: number = 10;
  cartProducts.forEach((item: TProduct) => {
    const totalAmount = item.price * item.qty + amount;
    amount = totalAmount;
  });
  return Number(amount.toFixed(2));
};

export default useTotalAmount;
