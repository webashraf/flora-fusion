import { useCreateOrderMutation } from "@/redux/api/baseApi";
import { useAppSelector } from "@/redux/hooks";
import { TProduct } from "@/types/types";
import { toast } from "sonner";

const CheckOutForm = () => {
  const cartProducts: TProduct[] = useAppSelector((state) => state.cart.cart);

  const [createOrder] = useCreateOrderMutation();

  let totalAmount: number = 0;
  cartProducts.forEach((item: TProduct) => {
    const amount = item.price * item.qty + totalAmount;
    totalAmount = Number(amount.toFixed(2));
  });

  const handlePlaceOrder = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const orderInfo = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      email: formData.get("email") as string,
      mobileNumber: formData.get("mobileNumber") as string,

      address: formData.get("address") as string,
      paymentMethod: formData.get("paymentMethod") as string,
      division: formData.get("division") as string,
      products: cartProducts.map((product) => ({
        _id: product._id,
        name: product.name,
        qty: product.qty,
        price: product.price,
        category: product.category.name,
      })),
      totalAmount,
    };

    try {
      console.log("Order placed successfully", orderInfo);

      const res = await createOrder(orderInfo).unwrap();
      if (res.success === true) {
        toast.success("Order placed successfully!!");
      }
      console.log(res);
    } catch (err) {
      console.log(err);
      toast.error("Order not placed. Something went wrong!!");
    }
  };

  return (
    <>
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
                      name="paymentMethod"
                      value="cashOnDelivery"
                      required
                    />
                  </div>
                  <div className="flex items-center justify-center gap-5">
                    <span>Card Payment</span>
                    <input
                      type="radio"
                      defaultChecked
                      id="cashOnDelivery"
                      name="paymentMethod"
                      value="cashOnDelivery"
                      required
                    />
                  </div>
                </label>
              </div>
            </div>

            <div>
              <div className="flex flex-col justify-around bg-[#3b6550e8] hue-rotate-30 p-4 border border-white border-opacity-30 rounded-xl shadow-md max-w-xs">
                <div className="flex flex-row items-center justify-between mb-3">
                  <input
                    className="w-full h-10 border-none outline-none text-sm bg-[#539d7922] text-white font-semibold caret-orange-500 pl-2 mb-3 flex-grow"
                    type="text"
                    name="cardName"
                    id="cardName"
                    placeholder="Full Name"
                  />
                  <div className="flex items-center justify-center relative w-14 h-9 bg-[#539d7922] border border-white border-opacity-20 rounded-md ml-2">
                    <svg
                      className="text-white fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 48 48"
                    >
                      <path
                        fill="#ff9800"
                        d="M32 10A14 14 0 1 0 32 38A14 14 0 1 0 32 10Z"
                      ></path>
                      <path
                        fill="#d50000"
                        d="M16 10A14 14 0 1 0 16 38A14 14 0 1 0 16 10Z"
                      ></path>
                      <path
                        fill="#ff3d00"
                        d="M18,24c0,4.755,2.376,8.95,6,11.48c3.624-2.53,6-6.725,6-11.48s-2.376-8.95-6-11.48 C20.376,15.05,18,19.245,18,24z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col space-y-3">
                  <input
                    className="w-full h-10 border-none outline-none text-sm bg-[#539d7922] text-white font-semibold caret-orange-500 pl-2"
                    type="text"
                    name="cardNumber"
                    id="cardNumber"
                    placeholder="0000 0000 0000 0000"
                  />
                  <div className="flex flex-row justify-between">
                    <input
                      className="w-full h-10 border-none outline-none text-sm bg-[#539d7922] text-white font-semibold caret-orange-500 pl-2"
                      type="text"
                      name="expiryDate"
                      id="expiryDate"
                      placeholder="MM/AA"
                    />
                    <input
                      className="w-full h-10 border-none outline-none text-sm bg-[#539d7922] text-white font-semibold caret-orange-500 pl-2"
                      type="text"
                      name="cvv"
                      id="cvv"
                      placeholder="CVV"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="text-white font-bold px-16 py-2 rounded-md btn-2 "
              >
                Place Order
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CheckOutForm;
