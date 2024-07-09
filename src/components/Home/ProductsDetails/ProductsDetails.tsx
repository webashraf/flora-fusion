import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const ProductsDetails = () => {
  return (
    <div className="mt-20 ">
      
      <div className="flex gap-5 items-center">
        <div className="w-1/3">
          <img
            className="w-full h-[600px] object-cover"
            src="/src/assets/images/hero/h6_banner1.jpg"
            alt=""
          />
        </div>
        <div className="h-[600px] overflow-y-scroll w-2/3 ml-auto">
          <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>

            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Serial</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Total Items</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              <TableRow>
                <TableCell className="font-medium">01</TableCell>
                <TableCell className="uppercase">fruit tree</TableCell>
                <TableCell>100</TableCell>
                <TableCell className="text-right">
                  <Button className="">View Items</Button>
                </TableCell>
              </TableRow>
            </TableBody>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">01</TableCell>
                <TableCell className="uppercase">fruit tree</TableCell>
                <TableCell>100</TableCell>
                <TableCell className="text-right">
                  <Button className="">View Items</Button>
                </TableCell>
              </TableRow>
            </TableBody>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">01</TableCell>
                <TableCell className="uppercase">fruit tree</TableCell>
                <TableCell>100</TableCell>
                <TableCell className="text-right">
                  <Button className="">View Items</Button>
                </TableCell>
              </TableRow>
            </TableBody>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">01</TableCell>
                <TableCell className="uppercase">fruit tree</TableCell>
                <TableCell>100</TableCell>
                <TableCell className="text-right">
                  <Button className="">View Items</Button>
                </TableCell>
              </TableRow>
            </TableBody>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">01</TableCell>
                <TableCell className="uppercase">fruit tree</TableCell>
                <TableCell>100</TableCell>
                <TableCell className="text-right">
                  <Button className="">View Items</Button>
                </TableCell>
              </TableRow>
            </TableBody>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">01</TableCell>
                <TableCell className="uppercase">fruit tree</TableCell>
                <TableCell>100</TableCell>
                <TableCell className="text-right">
                  <Button className="">View Items</Button>
                </TableCell>
              </TableRow>
            </TableBody>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">01</TableCell>
                <TableCell className="uppercase">fruit tree</TableCell>
                <TableCell>100</TableCell>
                <TableCell className="text-right">
                  <Button className="">View Items</Button>
                </TableCell>
              </TableRow>
            </TableBody>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">01</TableCell>
                <TableCell className="uppercase">fruit tree</TableCell>
                <TableCell>100</TableCell>
                <TableCell className="text-right">
                  <Button className="">View Items</Button>
                </TableCell>
              </TableRow>
            </TableBody>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">01</TableCell>
                <TableCell className="uppercase">fruit tree</TableCell>
                <TableCell>100</TableCell>
                <TableCell className="text-right">
                  <Button className="">View Items</Button>
                </TableCell>
              </TableRow>
            </TableBody>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">01</TableCell>
                <TableCell className="uppercase">fruit tree</TableCell>
                <TableCell>100</TableCell>
                <TableCell className="text-right">
                  <Button className="">View Items</Button>
                </TableCell>
              </TableRow>
            </TableBody>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">01</TableCell>
                <TableCell className="uppercase">fruit tree</TableCell>
                <TableCell>100</TableCell>
                <TableCell className="text-right">
                  <Button className="">View Items</Button>
                </TableCell>
              </TableRow>
            </TableBody>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">01</TableCell>
                <TableCell className="uppercase">fruit tree</TableCell>
                <TableCell>100</TableCell>
                <TableCell className="text-right">
                  <Button className="">View Items</Button>
                </TableCell>
              </TableRow>
            </TableBody>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">01</TableCell>
                <TableCell className="uppercase">fruit tree</TableCell>
                <TableCell>100</TableCell>
                <TableCell className="text-right">
                  <Button className="">View Items</Button>
                </TableCell>
              </TableRow>
            </TableBody>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">01</TableCell>
                <TableCell className="uppercase">fruit tree</TableCell>
                <TableCell>100</TableCell>
                <TableCell className="text-right">
                  <Button className="">View Items</Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;
