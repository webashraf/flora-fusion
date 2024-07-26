import { useGetCategoriesQuery } from "@/redux/api/baseApi";
import { TTreeProductsCategory } from "@/types/types";

const ManageCategory = () => {
  const { data: categories } = useGetCategoriesQuery({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("clicked on category");
    const formData = new FormData(e.target);
    const formObject = Object.fromEntries(formData.entries());
    console.log("Form data:", formObject);
  };

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
      {categories?.map((category: TTreeProductsCategory, i: string) => (
        <form
          key={category._id} // Ensure each form has a unique key
          onSubmit={handleSubmit}
          className="space-y-4 mt-10 shadow-md p-8 rounded-md"
        >
          <h3 className="uppercase text-xl font-semibold">
            {i + 1}. {category?.name}
          </h3>
          <div className="space-x-3 flex">
            <div className="flex-1">
              <label
                htmlFor={`name-${category._id}`}
                className="block text-gray-500 text-sm font-medium"
              >
                Name <span className="text-red-500">*</span>
              </label>
              <input
                defaultValue={category?.name}
                type="text"
                id={`name-${category._id}`}
                name="name"
                placeholder="Tree name"
                className="w-full ring-1 text-slate-800 ring-gray-400 rounded-md text-md px-2 py-2 outline-none bg-gray-100 focus:placeholder-gray-500"
                required
              />
            </div>
          </div>

          <div>
            <label
              htmlFor={`imageURL-${category._id}`}
              className="block text-gray-500 text-sm font-medium"
            >
              Image Url <span className="text-red-500">*</span>
            </label>
            <input
              type="url"
              defaultValue={category?.imageURL}
              id={`imageURL-${category._id}`}
              name="imageURL"
              placeholder="Give your image url https://"
              className="w-full ring-1 text-slate-800 ring-gray-400 rounded-md text-md px-2 py-2 outline-none bg-gray-100 focus:placeholder-gray-500"
              required
            />
          </div>

          <div>
            <label
              htmlFor={`detailsDescription-${category._id}`}
              className="block text-gray-500 text-sm font-medium"
            >
              Details Description<span className="text-red-500">*</span>{" "}
              <a href="#" className="text-blue-500">
                (?)
              </a>
            </label>
            <textarea
              id={`detailsDescription-${category._id}`}
              defaultValue={category.description}
              name="detailsDescription"
              placeholder="Details description"
              className="w-full h-20 ring-1 text-slate-800 ring-gray-400 rounded-md text-md px-2 py-2 outline-none bg-gray-100 focus:placeholder-gray-500"
              required
            ></textarea>
          </div>

          <div className="text-center ">
            <div className="">
              <input
                className="text-white font-bold px-16 py-2 rounded-md uppercase btn-2 ml-2 hover:bg-[#7aa877] animate-puls"
                type="submit"
                value="Submit"
              />
            </div>
          </div>
        </form>
      ))}
    </div>
  );
};

export default ManageCategory;
