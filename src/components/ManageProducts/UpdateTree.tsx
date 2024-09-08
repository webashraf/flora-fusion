import {
  useDeleteTreeMutation,
  useGetProductsQuery,
  useRetriveAllDeleteTreesMutation,
} from "@/redux/api/baseApi";
import AlertDialogCustom from "@/shared/AlertDialog/AlertDialog";
import CommonHeading from "@/shared/CommonHeading/CommonHeading";

import Loader from "@/shared/Loader/loader/Loader";
import { TProduct } from "@/types/types";
import { AlertDialogAction } from "@radix-ui/react-alert-dialog";
import { useState } from "react";
import { toast } from "sonner";
import DeleteBtn from "../customUi/DeleteBtn/DeleteBtn";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import { Button } from "../ui/button";
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

  const [retriveAllDeleteTrees] = useRetriveAllDeleteTreesMutation();

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
      if (res.data.success === true) {
        toast.success("Delete Succesfully");
      }
    } catch (err) {
      console.log(err);
      toast.error("Failed to delete. Something went wrong!!");
    }
  };

  return (
    <div>
      {" "}
      <div className="mt-10">
        <CommonHeading title="Update Tree" subTitle="" />
        <div className="flex justify-end">
          <Button
            onClick={async () => await retriveAllDeleteTrees({})}
            className="btn-2 mb-2 rounded-none"
          >
            Retrive All Trees
          </Button>
        </div>
        <div className="lg:flex gap-5 items-center">
          <div className="lg:w-1/3 relative overflow-hidden">
            <img
              className="w-full lg:h-[600px] h-[400px] object-cover"
              src={pImg?.imageURL}
              alt=""
            />
            <h2 className="text-4xl font-bold backdrop-blur-lg w-full text-center py-5 text-white absolute bottom-0 ">
              {pImg?.name}
            </h2>
          </div>

          {/* Display the list of products in a table */}
          <div className="h-[600px] lg:w-2/3 ml-auto overflow-hidden hover:overflow-y-auto hover:transition-all hover:duration-300 custom-scrollbar">
            <Table>
              <TableHeader className="h-[100px]">
                <TableRow className="">
                  <TableHead className="w-[100px]">Serial</TableHead>
                  <TableHead>Title & Category</TableHead>
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
                              <DeleteBtn />
                            </div>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>
                                Are you absolutely sure to delete this item?
                              </AlertDialogTitle>
                              <AlertDialogDescription>
                                This action cannot be undone. This will
                                permanently delete this item and remove your
                                data from our servers.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                              <AlertDialogAction
                                className="btn-2 px-5 rounded-md"
                                onClick={() => handleDeleteTree(product._id)}
                              >
                                Continue
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>

                        <div className="">
                          <AlertDialog>
                            <AlertDialogCustom id={product._id} />
                          </AlertDialog>
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
