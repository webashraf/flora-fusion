import { useGetCategoriesQuery } from "@/redux/api/baseApi";

const ManageCategory = () => {
  const { data: categories } = useGetCategoriesQuery({});
  console.log("🚀 ~ ManageCategory ~ categories:", categories);

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
      {categories?.map((category) => (
        <form className="space-y-4 mt-10 shadow-md p-8 rounded-md">
          <div className="space-x-3 flex">
            <div className="flex-1">
              <label
                htmlFor="name"
                className="block text-gray-500 text-sm font-medium"
              >
                Name <span className="text-red-500">*</span>
              </label>
              <input
                defaultValue={category?.name}
                type="text"
                id="name"
                name="name"
                placeholder="Tree name"
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
              defaultValue={category?.imageURL}
              id="imageURL"
              name="imageURL"
              placeholder="Give your image url https://"
              className="w-full ring-1 text-slate-800 ring-gray-400 rounded-md text-md px-2 py-2 outline-none bg-gray-100 focus:placeholder-gray-500"
              required
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
              defaultValue={category.description}
              name="detailsDescription"
              placeholder="Details description"
              className="w-full h-20 ring-1 text-slate-800 ring-gray-400 rounded-md text-md px-2 py-2 outline-none bg-gray-100 focus:placeholder-gray-500"
              required
            ></textarea>
          </div>

          <div className="text-center ">
            <div
              className="btn-2 ml-2 hover:bg-[#7aa877] animate-pulse"
              // onClick={() => handleDeleteTree(._id)}
            >
              <button
                type="submit"
                className="text-white font-bold px-16 py-2 rounded-md  uppercase"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      ))}
    </div>
  );
};

export default ManageCategory;
