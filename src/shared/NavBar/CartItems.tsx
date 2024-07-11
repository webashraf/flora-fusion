/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { TProducts } from "@/types/types";

const CartItems = ({ trees }: { trees: TProducts[] }) => {
  // const dispatch = useAppDispatch();

  let newPrice: number = 0;
  trees.forEach((item: TProducts) => {
    newPrice = item.price * item.qty + newPrice;
  });

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className="bg-transparent w-[40px] rounded-full"
          >
            Edit
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[725px]">
          <DialogHeader>
            {/* <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription> */}
          </DialogHeader>
          <div className="py-4">
            <div className="g">
              <Table className="grid grid-cols-2 max-h-[600px]">
                {trees?.map((tree: TProducts, i: number) => (
                  <TableBody className="mw-[200px]" key={tree._id}>
                    <TableRow>
                      <TableCell className="font-medium">{i + 1}</TableCell>
                      <TableCell className="uppercase">
                        <h5 className="text-md font-bold mb-1">{tree.name}</h5>
                        <p className="text-slate-300 bg-primary text-center rounded-md text-[14px]  w-28 mb-1">
                          Price: {tree.price}
                          <br />
                        </p>
                        <p className="text-slate-300 bg-primary text-center rounded-md text-[14px]  w-28">
                          quantity: <span className="">{tree.qty}</span>
                        </p>
                      </TableCell>

                      <TableCell>
                        <img
                          className="h-[80px] w-[50px] object-cover"
                          src={tree.imageURL}
                          alt=""
                        />
                      </TableCell>
                    </TableRow>
                  </TableBody>
                ))}
              </Table>
            </div>
          </div>
          <DialogFooter className="flex items-center">
            <div className="">
              <h4 className="font-semibold mr-">Total: ${newPrice}</h4>
            </div>
            <Button type="submit" className="capitalize">
              Proced to chek-out
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CartItems;
