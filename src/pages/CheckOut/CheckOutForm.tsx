import RoundedLoad from "@/components/customUi/RoundedLoad/RoundedLoad";
import StripePayment from "@/components/Payment/StripePayment";
import useTotalAmount from "@/hooks/useTotalAmount";
import { useCreateOrderMutation } from "@/redux/api/baseApi";
import { clearCart } from "@/redux/features/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { TProduct, TUserInfo } from "@/types/types";
import { DollarSign } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const CheckOutForm = ({
  setPurchase,
}: {
  setPurchase: (value: string) => void;
}) => {
  const [paymentMethod, setPaymentMethod] = useState("cashOn");
  const [userInfo, setUserInfo] = useState<TUserInfo>(null);
  const [process, setProcess] = useState(false);
  const [StripePaymentMethod, setStripePaymentMethod] = useState(false);

  const cartProducts: TProduct[] = useAppSelector((state) => state.cart.cart);
  const [createOrder] = useCreateOrderMutation();
  const [bActive, setBactive] = useState(false);
  const amount = useTotalAmount();
  const cartDispatch = useAppDispatch();

  const handlePlaceOrder = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formData = new FormData(e.target as HTMLFormElement);

    const orderInfo: TUserInfo = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      email: formData.get("email") as string,
      mobileNumber: formData.get("mobileNumber") as string,

      address: formData.get("address") as string,
      paymentMethod,
      division: formData.get("division") as string,
      products: cartProducts.map((product) => ({
        _id: product._id,
        name: product?.name,
        qty: product.qty,
        price: product.price,
        category: product.category?.name,
      })),
      amount,
    };

    if (paymentMethod === "card") {
      setUserInfo(orderInfo);
      setStripePaymentMethod(true);
      return;
    }
    setProcess(true);
    try {

      const res = await createOrder(orderInfo).unwrap();
      if (res.success === true) {
        setProcess(false);
        form.reset();
        setPurchase("Order placed successfully!!");
        cartDispatch(clearCart());
        toast.success("Order placed successfully!!");
      }
    } catch (err) {
      console.log(err);
      toast.error("Order not placed. Something went wrong!!");
    }
  };

  if (StripePaymentMethod) {
    return (
      <div
        onClick={() => setBactive(!bActive)}
        className={`lg:w-[60%] md:w-[60%] shadow-2xl p-10 pt-10 rounded-md bg-[#73ee8e12] mx-auto ${
          StripePaymentMethod ? "block" : "hidden"
        }`}
      >
        {/*! Pyament card  */}
        <StripePayment setPurchase={setPurchase} userInfo={userInfo} />
      </div>
    );
  }

  return (
    <div className="">
      <div className="lg:mx-auto w-full px-5 bg-white rounded-md shadow-2xl drop-shadow-md">
        <div className="px-4 py-3 flex justify-between">
          <div>
            <h2 className="font-bold text-[32xl]">Checkout</h2>
            <p className="text-gray-500 text-[15xl]">
              Review your order and complete payment.
            </p>
          </div>
        </div>
        <hr className="bg-gray-600" />

        <div className="px-4 pt-3 pb-6 space-y-3">
          <form onSubmit={handlePlaceOrder} className="space-y-4">
            <div className="space-x-3 flex">
              <div className="flex-1">
                <label
                  htmlFor="firstName"
                  className="block text-gray-500 text-sm font-medium"
                >
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="First name"
                  className="w-full ring-1 ring-gray-400 rounded-md text-md px-2 py-2 outline-none bg-gray-100 focus:placeholder-gray-500"
                  required
                />
              </div>
              <div className="flex-1">
                <label
                  htmlFor="lastName"
                  className="block text-gray-500 text-sm font-medium"
                >
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Last name"
                  className="w-full ring-1 ring-gray-400 rounded-md text-md px-2 py-2 outline-none bg-gray-100 focus:placeholder-gray-500"
                  required
                />
              </div>
            </div>

            <div className="flex space-x-3">
              <div className="flex-1">
                <label
                  htmlFor="email"
                  className="block text-gray-500 text-sm font-medium"
                >
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email address"
                  className="w-full ring-1 ring-gray-400 rounded-md text-md px-2 py-2 outline-none bg-gray-100 focus:placeholder-gray-500"
                  required
                />
              </div>

              <div className="flex-1">
                <label
                  htmlFor="mobileNumber"
                  className="block text-gray-500 text-sm font-medium"
                >
                  Mobile Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="mobileNumber"
                  name="mobileNumber"
                  placeholder="Mobile number"
                  className="w-full ring-1 ring-gray-400 rounded-md text-md px-2 py-2 outline-none bg-gray-100 focus:placeholder-gray-500"
                  required
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="address"
                className="block text-gray-500 text-sm font-medium"
              >
                Delivery Address <span className="text-red-500">*</span>{" "}
                <a href="#" className="text-blue-500">
                  (?)
                </a>
              </label>
              <textarea
                id="address"
                name="address"
                placeholder="Enter your address like district, upazila, union"
                className="w-full h-20 ring-1 ring-gray-400 rounded-md text-md px-2 py-2 outline-none bg-gray-100 focus:placeholder-gray-500"
                required
              ></textarea>
            </div>

            <div>
              <label
                htmlFor="division"
                className="block text-gray-500 text-sm font-medium"
              >
                Division (Bangladesh) <span className="text-red-500">*</span>
              </label>
              <select
                id="division"
                name="division"
                className="w-full ring-1 ring-gray-400 rounded-md text-md px-2 py-2 outline-none bg-gray-100 focus:placeholder-gray-500"
                required
              >
                <option value="">Select division...</option>
                <option value="Barishal">Barishal</option>
                <option value="Chattogram">Chattogram</option>
                <option value="Dhaka">Dhaka</option>
                <option value="Khulna">Khulna</option>
                <option value="Rajshahi">Rajshahi</option>
                <option value="Rangpur">Rangpur</option>
                <option value="Mymensingh">Mymensingh</option>
                <option value="Sylhet">Sylhet</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-500 text-sm font-medium">
                Payment Method <span className="text-red-500">*</span>
              </label>

              <div className="mt-1 flex space-x-3">
                <label
                  htmlFor="cashOnDelivery"
                  className="flex-1 flex justify-start gap-10 items-center rounded-md px-2 py-1 border border-gray-400"
                >
                  <div className="flex items-center justify-center gap-5">
                    <span>Cash on Delivery</span>
                    <input
                      type="radio"
                      id="cashOnDelivery"
                      onClick={() => {
                        // paymentOption("cashOn");
                        // navigate("/checkout/cashOn");
                        setPaymentMethod("cashOn");
                        setStripePaymentMethod(false);
                      }}
                      value="cashOnDelivery"
                      name="cashOnDelivery"
                      checked={paymentMethod === "cashOn"}

                      // required
                    />
                  </div>
                  <div className="flex items-center justify-center gap-5">
                    <span>Card Payment</span>
                    <input
                      type="radio"
                      id="cardPayment"
                      onClick={() => {
                        // paymentOption("card");
                        // navigate("/checkout/cardPayment");
                        setPaymentMethod("card");
                      }}
                      value="cardPayment"
                      name="cardPayment"
                      checked={paymentMethod === "card"}
                      // required
                    />
                  </div>
                </label>
              </div>
            </div>

            {/* ---------------------------- */}

            <div className="text-center">
              <button
                className={`text-white font-bold px-16 rounded-md btn-2 py-2 flex gap-2 items-center mx-auto ${
                  process ? "cursor-not-allowed" : " hover:bg-black "
                } ${StripePaymentMethod && "hidden"}`}
                type="submit"
              >
                {process ? (
                  <RoundedLoad />
                ) : (
                  <div>
                    <DollarSign size={15} />
                  </div>
                )}
                {paymentMethod === "cashOn" ? "Place Order" : "Next"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckOutForm;
