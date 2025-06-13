"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Radio from "./RadioGroup";
import Extars from "./Extar";
import { Product } from "@/generated/prisma";
import { productWithRelations } from "@/types/product";
// const sizes = [
//   { id: crypto.randomUUID(), name: "Small", price: 0 },
//   { id: crypto.randomUUID(), name: "Medium", price: 4 },
//   { id: crypto.randomUUID(), name: "Large", price: 8 },
// ];
const extars = [
  { id: crypto.randomUUID(), name: "Chesse", price: 2 },
  { id: crypto.randomUUID(), name: "Onino", price: 1.5 },
  { id: crypto.randomUUID(), name: "Tomato", price: 1.99 },
];
const AddToCartButton = ({ item }: { item: productWithRelations }) => {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button
            onClick={() => console.log("clicked")}
            type="button"
            size="lg"
            className="mt-4 text-white rounded-full !px-8"
          >
            <span>Add To Cart</span>
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] max-h-[80vh] overflow-y-auto ">
          <DialogHeader className="flex  items-center">
            <Image src={item.image} alt={item.name} width={200} height={200} />
            <DialogTitle>{item.name}</DialogTitle>
            <DialogDescription>{item.description}</DialogDescription>
          </DialogHeader>
          <div className="space-y-10 ">
            <div className="space-y-4 text-center">
              <Label htmlFor="pick-size">Pick a size</Label>
              <Radio sizes={item.sizes} item={item} />
            </div>
            <div className="space-y-4 text-center">
              <Label htmlFor="add-extar">Any Extar</Label>
              <Extars extar={extars} item={item} />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Add To Cart </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
};

export default AddToCartButton;
