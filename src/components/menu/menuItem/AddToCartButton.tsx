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
const sizes = [
  { id: crypto.randomUUID(), name: "Small", price: 0 },
  { id: crypto.randomUUID(), name: "Medium", price: 4 },
  { id: crypto.randomUUID(), name: "Large", price: 8 },
];
const extar = [
  { id: crypto.randomUUID(), name: "Small", price: 2 },
  { id: crypto.randomUUID(), name: "Medium", price: 1.5 },
  { id: crypto.randomUUID(), name: "Large", price: 1.99 },
];
const AddToCartButton = ({ item }: { item: any }) => {
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
          <div className="space-y-10">
            <div className="space-y-4 text-center">
              <Radio sizes={sizes} item={item} />
            </div>
            <div>
              <Label htmlFor="add-extar">Any Extar</Label>
              <Extars extar={extar} item={item} />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
};

export default AddToCartButton;
