import {
  useDeleteTreeMutation,
  useGetProductsQuery,
} from "@/redux/api/baseApi";
import CommonHeading from "@/shared/CommonHeading/CommonHeading";
import Loader from "@/shared/Loader/Loader";
import { TProduct } from "@/types/types";
import { useState } from "react";
import { toast } from "sonner";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

const UpdateTree = () => {
  const { data: products } = useGetProductsQuery({});
  const [deleteTree] = useDeleteTreeMutation();
  const [pImg, setPImg] = useState(products && products?.result[0]);

  if (!products) {
    return <Loader />;
  }
  //* Function to get a random product from the list
  const getRandomProduct = (number: number = 10) => {
    return products?.result[number];
  };

  //* Handle Delete Trees
  const handleDeleteTree = async (id: string) => {
    try {
      const res = await deleteTree(id);
      console.log("🚀 ~ handleDeleteTree ~ res:", res.data.success);
      if (res.data.success) {
        toast.success("Delete Success fully");
      }
    } catch (err) {
      console.log("🚀 ~ handleDeleteTree ~ err:", err);
    }
  };

  return (
    <div>
      {" "}
      <div className="section-margin-top">
        <CommonHeading
          title="Plant Details"
          subTitle="Comprehensive Information on Your Selected Plant"
        />
        <div className="lg:flex gap-5 items-center">
          <div className="lg:w-1/3 relative overflow-hidden">
            <img
              className="w-full lg:h-[600px] h-[400px] object-cover"
              src={pImg?.imageURL}
              alt=""
            />
            <h2 className="text-4xl font-bold backdrop-blur-lg w-full text-center py-5 text-white absolute bottom-0 z-40">
              {pImg?.name}
            </h2>
          </div>

          {/* Display the list of products in a table */}
          <div className="h-[600px] lg:w-2/3 ml-auto overflow-hidden hover:overflow-y-auto hover:transition-all hover:duration-300 custom-scrollbar">
            <Table>
              <TableHeader className="h-[100px]">
                <TableRow className="">
                  <TableHead className="w-[100px]">Serial</TableHead>
                  <TableHead>Name & Category</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Total Items</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>

              {/* Map through the products and display each one in a table row */}
              {products &&
                products?.result?.map((product: TProduct, i: number) => (
                  <TableBody
                    key={product._id}
                    onMouseEnter={() => setPImg(getRandomProduct(i))}
                  >
                    <TableRow>
                      <TableCell className="font-medium">{i}</TableCell>
                      <TableCell className="uppercase flex flex-col">
                        <h5 className="text-md font-bold mb-1">
                          {product.name}
                        </h5>
                        <p className="mini-active ">{product.category.name}</p>
                      </TableCell>
                      <TableCell className="uppercase">
                        {product.shortDescription}
                      </TableCell>
                      <TableCell
                        className={product.stock === 0 ? "text-red-500" : ""}
                      >
                        {product.stock}
                      </TableCell>
                      <TableCell>${product.price}</TableCell>
                      <TableCell className="text-right flex gap-2 items-center justify-center">
                        {/* Delete Button  */}
                        <AlertDialog>
                          <AlertDialogTrigger>
                            <div>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-6 stroke-red-500 hover:stroke-red-700"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                />
                              </svg>
                            </div>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>
                                Are you absolutely sure?
                              </AlertDialogTitle>
                              <AlertDialogDescription>
                                This action cannot be undone. This will
                                permanently delete your account and remove your
                                data from our servers.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                              <AlertDialogAction
                                onClick={() => handleDeleteTree(product._id)}
                              >
                                Continue
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>

                        <div>
                          <svg
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
                          </svg>
                        </div>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                ))}
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateTree;
