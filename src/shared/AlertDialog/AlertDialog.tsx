import EditBtn from "@/components/customUi/EditBtn/EditBtn";
import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  useGetCategoriesQuery,
  useGetSingleProductByIdQuery,
} from "@/redux/api/baseApi";
import { TTreeProductsCategory } from "@/types/types";

const AlertDialogCustom = ({ id }) => {
  console.log("🚀 ~ AlertDialogCustom ~ id:", id);

  const { data: product } = useGetSingleProductByIdQuery(id);
  const { data: categories } = useGetCategoriesQuery({});
  console.log("🚀 ~ AlertDialogCustom ~ categories:", categories);
  console.log("🚀 ~ AlertDialogCustom ~ data:", product);
  const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const orderInfo = {
      name: formData.get("name") as string,
      price: formData.get("price") as string,
      description: formData.get("email") as string,
      shortDescription: formData.get("mobileNumber") as string,
      ratings: formData.get("optionalWhatsAppNumber") as string,
      category: formData.get("address") as string,
      imageURL: formData.get("paymentMethod") as string,
      stock: formData.get("division") as string,
      stock: "",
      totalAmount: null,
    };
    console.log("🚀 ~ handlePlaceOrder ~ orderInfo:", orderInfo);

    // try {
    //   console.log("Order placed successfully", orderInfo);

    //   const res = await updateTreeStock(orderInfo).unwrap();
    //   console.log(res);
    // } catch (err) {
    //   console.log(err);
    // }
  };

  return (
    <>
      <>
        <AlertDialogTrigger>
          <div>
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 stroke-[#72b06e] hover:stroke-[#61815f]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
              />
            </svg> */}
            <EditBtn />
          </div>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Are you sure to update this product?.result?
            </AlertDialogTitle>
            <AlertDialogCancel className="rounded-none text-red-500 absolute right-0 top-0 border-none">
              ❌
            </AlertDialogCancel>
            <AlertDialogDescription>
              <form onSubmit={handleUpdate} className="space-y-4">
                <div className="space-x-3 flex">
                  <div className="flex-1">
                    <label
                      htmlFor="name"
                      className="block text-gray-500 text-sm font-medium"
                    >
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      defaultValue={product?.result?.name}
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Tree name"
                      className="w-full ring-1 text-slate-800 ring-gray-400 rounded-md text-md px-2 py-2 outline-none bg-gray-100 focus:placeholder-gray-500"
                      required
                    />
                  </div>
                  <div className="flex-1">
                    <label
                      htmlFor="price"
                      className="block text-gray-500 text-sm font-medium"
                    >
                      Price <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      defaultValue={product?.result?.price}
                      id="price"
                      name="price"
                      placeholder="Price"
                      className="w-full ring-1 text-slate-800 ring-gray-400 rounded-md text-md px-2 py-2 outline-none bg-gray-100 focus:placeholder-gray-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="imageURL"
                    className="block text-gray-500 text-sm font-medium"
                  >
                    Image Url <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="url"
                    defaultValue={product?.result?.imageURL}
                    id="imageURL"
                    name="imageURL"
                    placeholder="Give your image url https://"
                    className="w-full ring-1 text-slate-800 ring-gray-400 rounded-md text-md px-2 py-2 outline-none bg-gray-100 focus:placeholder-gray-500"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="category"
                    className="block text-gray-500 text-sm font-medium"
                  >
                    Category<span className="text-red-500">*</span>
                  </label>
                  <select
                    id="category"
                    defaultValue={product?.result?.category?._id}
                    name="category"
                    className="w-full ring-1 text-slate-800 ring-gray-400 rounded-md text-md px-2 py-2 outline-none bg-gray-100 focus:placeholder-gray-500"
                    required
                  >
                    <option value="">Select Category...</option>
                    {product &&
                      categories?.map((category: TTreeProductsCategory) => (
                        <option value={category._id}>{category.name}</option>
                      ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="stock"
                    className="block text-gray-500 text-sm font-medium"
                  >
                    Stock <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    defaultValue={product?.result?.stock}
                    id="stock"
                    name="stock"
                    placeholder="Total products"
                    className="w-full ring-1 text-slate-800 ring-gray-400 rounded-md text-md px-2 py-2 outline-none bg-gray-100 focus:placeholder-gray-500"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="ratings"
                    className="block text-gray-500 text-sm font-medium"
                  >
                    Ratings <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    defaultValue={product?.result?.ratings}
                    min={1}
                    max={5}
                    id="ratings"
                    name="ratings"
                    placeholder="Mobile number"
                    className="w-full ring-1 text-slate-800 ring-gray-400 rounded-md text-md px-2 py-2 outline-none bg-gray-100 focus:placeholder-gray-500"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="shortDescription"
                    className="block text-gray-500 text-sm font-medium"
                  >
                    Short Description
                  </label>
                  <input
                    type="text"
                    defaultValue={product?.result?.shortDescription}
                    id="shortDescription"
                    name="shortDescription"
                    placeholder="Optional WhatsApp number"
                    className="w-full ring-1 text-slate-800 ring-gray-400 rounded-md text-md px-2 py-2 outline-none bg-gray-100 focus:placeholder-gray-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="detailsDescription"
                    className="block text-gray-500 text-sm font-medium"
                  >
                    Details Description<span className="text-red-500">*</span>{" "}
                    <a href="#" className="text-blue-500">
                      (?)
                    </a>
                  </label>
                  <textarea
                    id="detailsDescription"
                    defaultValue={product?.result?.description}
                    name="detailsDescription"
                    placeholder="Details description"
                    className="w-full h-20 ring-1 text-slate-800 ring-gray-400 rounded-md text-md px-2 py-2 outline-none bg-gray-100 focus:placeholder-gray-500"
                    required
                  ></textarea>
                </div>

                <div className="text-center ">
                  <AlertDialogAction
                    className="btn-2 ml-2 hover:bg-[#7aa877] animate-pulse"
                    // onClick={() => handleDeleteTree(product?.result?._id)}
                  >
                    <button
                      type="submit"
                      className="text-white font-bold px-16 py-2 rounded-md  uppercase"
                    >
                      Submit
                    </button>
                  </AlertDialogAction>
                </div>
              </form>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter></AlertDialogFooter>
        </AlertDialogContent>
      </>
    </>
  );
};

export default AlertDialogCustom;
