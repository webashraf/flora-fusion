import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useUpdateTreeStockMutation } from "@/redux/api/baseApi";
import { useAppSelector } from "@/redux/hooks";
import { TProduct } from "@/types/types";
import { NavLink } from "react-router-dom";

const CheckOut = () => {
  const cartProducts: TProduct[] = useAppSelector((state) => state.cart.cart);
  console.log(cartProducts);
  const [updateTreeStock] = useUpdateTreeStockMutation();

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
      optionalWhatsAppNumber: formData.get("optionalWhatsAppNumber") as string,
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

      const res = await updateTreeStock(orderInfo).unwrap();
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="py-20">
      <h2 className="text-5xl uppercase pb-10">Check-out process</h2>

      <div className="flex justify-between items-center ">
        <div className="w-[60]">
          <div className=" w-full ml-auto">
            <Table className="w-[600px]">
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Serial</TableHead>
                  <TableHead>Name & Category</TableHead>
                  <TableHead>Quantity</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>

              {/* Map through the products and display each one in a table row */}
              {cartProducts?.map((product: TProduct, i: number) => (
                <TableBody key={product._id}>
                  <TableRow>
                    <TableCell className="font-medium">{i}</TableCell>
                    <TableCell className="uppercase">
                      <h5 className="text-md font-bold mb-1">{product.name}</h5>
                      <p className="text-slate-300 bg-primary text-center rounded-md text-[11px] py-[px] w-24">
                        {product.category.name}
                      </p>
                    </TableCell>

                    <TableCell
                      className={product.stock === 0 ? "text-red-500" : ""}
                    >
                      {product.qty}
                    </TableCell>
                    <TableCell>${product.price}</TableCell>
                    <TableCell className="text-right">
                      {/* Button to view single product details */}
                      <NavLink to={`/single-product/${product._id}`}>
                        <Button className="">View Items</Button>
                      </NavLink>
                    </TableCell>
                  </TableRow>
                </TableBody>
              ))}
            </Table>
            <div className="border-t-2 border-black py-5 pr-5 text-end">
              <h4 className="font-semibold text-xl">
                Amount: ${totalAmount.toFixed(2)}
              </h4>
            </div>
          </div>
        </div>
        <div className="w-1/2 flex flex-col items-center justify-center">
          <div className="">
            <div className="mx-auto w-[500px] bg-white rounded-md shadow-2xl drop-shadow-md">
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

                  <div>
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

                  <div>
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

                  <div>
                    <label
                      htmlFor="optionalWhatsAppNumber"
                      className="block text-gray-500 text-sm font-medium"
                    >
                      Optional WhatsApp Number
                    </label>
                    <input
                      type="text"
                      id="optionalWhatsAppNumber"
                      name="optionalWhatsAppNumber"
                      placeholder="Optional WhatsApp number"
                      className="w-full ring-1 ring-gray-400 rounded-md text-md px-2 py-2 outline-none bg-gray-100 focus:placeholder-gray-500"
                    />
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
                    <label className="block text-gray-500 text-sm font-medium">
                      Payment Method <span className="text-red-500">*</span>
                    </label>
                    <div className="mt-1 flex space-x-3">
                      <label
                        htmlFor="cashOnDelivery"
                        className="flex-1 flex space-x-2 justify-between items-center rounded-md px-2 py-1 border border-gray-400"
                      >
                        <span>Cash on Delivery</span>
                        <input
                          type="radio"
                          defaultChecked
                          id="cashOnDelivery"
                          name="paymentMethod"
                          value="cashOnDelivery"
                          required
                        />
                      </label>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="division"
                      className="block text-gray-500 text-sm font-medium"
                    >
                      Division (Bangladesh){" "}
                      <span className="text-red-500">*</span>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
