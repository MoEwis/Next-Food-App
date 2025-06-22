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
import { productWithRelations } from "@/types/product";
import { useState } from "react";
import { Extra, ProductSizes, Size } from "@/generated/prisma";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addCartItem, selectCartItems } from "@/redux/features/cart/cartSlice";
import { formatterCurrency } from "@/lib/formatters";
import { getItemQuantity } from "@/lib/getCartQuantity";
import ChooseQuantity from "./ChooseQuantity";

const AddToCartButton = ({ item }: { item: productWithRelations }) => {
  const cart = useAppSelector(selectCartItems);
  const quantity = getItemQuantity(item.id, cart);
  const dispatch = useAppDispatch();
  const defaultSize =
    cart.find((element) => element.id === item.id)?.size ||
    item.sizes.find((size) => size.name === ProductSizes.SMALL);
  const [selectedSize, setSelectedSize] = useState<Size>(defaultSize!);
  const defaultExtras =
    cart.find((element) => element.id === item.id)?.extras || [];
  const [selectedExtras, setSelectedExtras] = useState<Extra[]>(defaultExtras!);
  let totalPrice = item.basePrice;
  if (selectedSize) {
    totalPrice += selectedSize.price;
  }
  if (selectedExtras) {
    for (const extar of selectedExtras) {
      totalPrice += extar.price;
    }
  }
  const handleAddToCart = () => {
    dispatch(
      addCartItem({
        basePrice: item.basePrice,
        id: item.id,
        name: item.name,
        size: selectedSize,
        extras: selectedExtras,
        image: item.image,
      })
    );
  };
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button
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
              <Radio
                sizes={item.sizes}
                item={item}
                selectedSize={selectedSize}
                setSelectedSize={setSelectedSize}
              />
            </div>
            <div className="space-y-4 text-center">
              <Label htmlFor="add-extar">Any Extar</Label>
              <Extars
                extar={item.extras}
                selectedExtras={selectedExtras}
                setSelectedExtras={setSelectedExtras}
              />
            </div>
          </div>
          <DialogFooter>
            {quantity === 0 ? (
              <Button
                type="submit"
                className="w-full"
                onClick={() => handleAddToCart()}
              >
                Add To Cart
                {formatterCurrency(totalPrice)}
              </Button>
            ) : (
              <ChooseQuantity
                quantity={quantity}
                item={item}
                selectedSize={selectedSize}
                selectedExtras={selectedExtras}
              />
            )}
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
};

export default AddToCartButton;
