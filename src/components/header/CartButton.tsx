"use client";
import { Routes } from "@/constants/enums";
import { getCartQuantity } from "@/lib/getCartQuantity";
import { selectCartItems } from "@/redux/features/cart/cartSlice";
import { useAppSelector } from "@/redux/hooks";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

const CartButton = () => {
  const cart = useAppSelector(selectCartItems);
  const cartQuantity = getCartQuantity(cart);
  return (
    <Link className="block relative group mx-3" href={`/${Routes.CART}`}>
      <span className="absolute -top-2 start-4 w-5 h-5 bg-primary rounded-full text-white text-[15px] text-center ">
        {cartQuantity}
      </span>
      <ShoppingCart
        className={`text-accent group-hover:text-primary duration-200 transition-colors !w-6 !h-6 `}
      />
    </Link>
  );
};

export default CartButton;
