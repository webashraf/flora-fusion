import {
  useCreateTreeMutation,
  useGetCategoriesQuery,
} from "@/redux/api/baseApi";
import Loader from "@/shared/Loader/loader/Loader";

import { TTreeProductsCategory } from "@/types/types";
import { toast } from "sonner";

const AddTree = () => {
  const { data: categories } = useGetCategoriesQuery({});
  // console.log("🚀 ~ AddTree ~ categories:", categories);

  const [createTree] = useCreateTreeMutation();

  console.log(categories);

  if (!categories) {
    return <Loader />;
  }

  const handleAddProduct = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const orderInfo = {
      name: formData.get("name") as string,
      price: formData.get("price") as string,
      stock: formData.get("stock") as string,
      ratings: formData.get("ratings") as string,
      shortDescription: formData.get("shortDescription") as string,
      description: formData.get("detailsDescription") as string,
      imageURL: formData.get("imageURL") as string,

      category: formData.get("category") as string,
      isAvailable: true,
    };

    console.log(orderInfo);

    try {
      console.log("Order placed successfully", orderInfo);

      const res = await createTree(orderInfo);
      if (res.data.success === true) {
        toast.success("Product added successfully");
      }
      console.log("🚀 ~ handleAddProduct ~ res:", res);
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong!!");
    }
  };
  return (
    <div>
      <form
        onSubmit={handleAddProduct}
        className="space-y-4 mx- shadow-2xl rounded-md p-5"
      >
        <h2 className="text-4xl pb-12 ">Add Products</h2>
        <div className="space-x-3 flex">
          <div className="flex-1">
            <label
              htmlFor="name"
              className="block text-gray-500 text-sm font-medium"
            >
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Tree name"
              className="w-full ring-1 ring-gray-400 rounded-md text-md px-2 py-2 outline-none bg-gray-100 focus:placeholder-gray-500"
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
              id="price"
              name="price"
              placeholder="Price"
              className="w-full ring-1 ring-gray-400 rounded-md text-md px-2 py-2 outline-none bg-gray-100 focus:placeholder-gray-500"
              required
            />
          </div>
        </div>

        <div className="flex gap-3 lg:flex-co flex-row-reverse">
          <div className="w-1/2">
            <label
              htmlFor="imageURL"
              className="block text-gray-500 text-sm font-medium"
            >
              Image Url <span className="text-red-500">*</span>
            </label>
            <input
              type="url"
              id="imageURL"
              name="imageURL"
              placeholder="Give your image url https://"
              className="w-full ring-1 ring-gray-400 rounded-md text-md px-2 py-2 outline-none bg-gray-100 focus:placeholder-gray-500"
              required
            />
          </div>

          <div className="w-1/2">
            <label
              htmlFor="category"
              className="block text-gray-500 text-sm font-medium"
            >
              Category<span className="text-red-500">*</span>
            </label>
            <select
              id="category"
              name="category"
              className="w-full ring-1 ring-gray-400 rounded-md text-md  py-2 outline-none bg-gray-100 focus:placeholder-gray-500"
              required
            >
              <option value="" className="w-[100px]">
                Select Category...
              </option>
              {categories &&
                categories?.result?.map((category: TTreeProductsCategory) => (
                  <option
                    className="w-[100px]"
                    key={category._id}
                    value={category._id}
                  >
                    {category.name}
                  </option>
                ))}
            </select>
          </div>
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
            id="stock"
            name="stock"
            placeholder="Total products"
            className="w-full ring-1 ring-gray-400 rounded-md text-md px-2 py-2 outline-none bg-gray-100 focus:placeholder-gray-500"
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
            min={1}
            max={5}
            id="ratings"
            name="ratings"
            placeholder="Mobile number"
            className="w-full ring-1 ring-gray-400 rounded-md text-md px-2 py-2 outline-none bg-gray-100 focus:placeholder-gray-500"
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
            id="shortDescription"
            name="shortDescription"
            placeholder="Optional WhatsApp number"
            className="w-full ring-1 ring-gray-400 rounded-md text-md px-2 py-2 outline-none bg-gray-100 focus:placeholder-gray-500"
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
            name="detailsDescription"
            placeholder="Details description"
            className="w-full h-20 ring-1 ring-gray-400 rounded-md text-md px-2 py-2 outline-none bg-gray-100 focus:placeholder-gray-500"
            required
          ></textarea>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="text-white font-bold px-16 py-2 rounded-md btn-2 "
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTree;
