/* eslint-disable @typescript-eslint/no-explicit-any */
import EditBtn from "@/components/customUi/EditBtn/EditBtn";
import { SkeletonCard } from "@/components/customUi/SkeletonLoading/SkeletonLoading";
import {
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  useGetCategoriesQuery,
  useGetSingleProductByIdQuery,
  useUpdateTreeMutation,
} from "@/redux/api/baseApi";
import { TTreeProductsCategory } from "@/types/types";
import {
  AlertDialogAction,
  AlertDialogTitle,
} from "@radix-ui/react-alert-dialog";
import { useState } from "react";
import { toast } from "sonner";

const AlertDialogCustom = ({ id: treeID }: { id: string }) => {
  // console.log("🚀 ~ AlertDialogCustom ~ id:", id);
  const [isChecked, setIsChecked] = useState(false);

  const { data: product } = useGetSingleProductByIdQuery(treeID);
  const { data: categories, isLoading } = useGetCategoriesQuery({});

  const [updateTree] = useUpdateTreeMutation();

  // const handleCheckboxChange = () => {
  //   setIsChecked(!isChecked);
  // };
  const handleUpdate = async (e: any) => {
    e.preventDefault();
    console.log("clicked alert dialog");
    const formData = new FormData(e.target);
    const updatedData = Object.fromEntries(formData.entries());
    console.log("Form data:", updatedData);

    try {
      console.log(treeID);
      const res = await updateTree({ treeID, updatedData }).unwrap();

      res?.success && toast.success("Successfully updated tree!");

      console.log();
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) {
    return (
      <div className="my-36 ">
        <SkeletonCard />
      </div>
    );
  }

  return (
    <>
      <div className="mx-2">
        <AlertDialogTrigger>
          <div>
            <EditBtn />
          </div>
        </AlertDialogTrigger>
        <AlertDialogContent className="lg:w-full w-[90%] rounded-md">
          <AlertDialogHeader>
            <AlertDialogTitle>
              Are you sure to update this product?
            </AlertDialogTitle>
            <AlertDialogCancel className="rounded-none text-red-500 absolute right-0 top-0 border-none">
              ❌
            </AlertDialogCancel>
            <AlertDialogDescription>
              <div>
                <form
                  onSubmit={handleUpdate}
                  className="space-y-4 text-left mx-"
                >
                  <div className="space-x-3 flex text-left">
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
                        defaultValue={product?.result?.imageURL}
                        id="imageURL"
                        name="imageURL"
                        placeholder="Give your image url https://"
                        className="w-full ring-1 text-slate-800 ring-gray-400 rounded-md text-md px-2 py-2 outline-none bg-gray-100 focus:placeholder-gray-500"
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
                        defaultValue={product?.result?.category?._id}
                        name="category"
                        className="w-full ring-1 text-slate-800 ring-gray-400 rounded-md text-md px-2 py-2 outline-none bg-gray-100 focus:placeholder-gray-500"
                        required
                      >
                        <option value="">Select Category...</option>
                        {product &&
                          categories?.result?.map(
                            (category: TTreeProductsCategory) => (
                              <option key={categories._id} value={category._id}>
                                {category.name}
                              </option>
                            )
                          )}
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
                      type="string"
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

                  <div>
                    <label className="block text-gray-500 text-sm font-medium">
                      Are you sure to update this item?{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <div className="mt-1 flex space-x-3">
                      <label
                        htmlFor="updateItem"
                        className="flex-1 flex justify-between gap-10 items-center rounded-md px-2 py-1 border border-gray-400"
                      >
                        <span>Yes I want to update</span>
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => setIsChecked(!isChecked)}
                          className="px-20"
                          id="updateItem"
                          value="updateItem"
                          required
                        />
                      </label>
                    </div>
                  </div>

                  <div className="text-center ">
                    <AlertDialogAction className="">
                      <input
                        className={`text-white font-bold px-16 py-2 rounded-md  uppercase btn ml-2  animate-puls ${
                          isChecked
                            ? "btn-2 hover:bg-[#7aa877]"
                            : "bg-[#4e864a8c] cursor-not-allowed"
                        }`}
                        type="submit"
                        disabled={!isChecked}
                        value="Submit"
                      />
                    </AlertDialogAction>
                  </div>
                </form>
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter></AlertDialogFooter>
        </AlertDialogContent>
      </div>
    </>
  );
};

export default AlertDialogCustom;
