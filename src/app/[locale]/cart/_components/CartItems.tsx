"use client";
import { Button } from "@/components/ui/button";
import { formatterCurrency } from "@/lib/formatters";
import { deliveryFee, getSubTotal } from "@/lib/getCartQuantity";
import {
  removeCartItem,
  selectCartItems,
} from "@/redux/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Trash2 } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";

const CartItems = () => {
  const cart = useAppSelector(selectCartItems);
  const dispatch = useAppDispatch();
  const subTotal = getSubTotal(cart);

  // ✅ احفظ cart في localStorage فقط على الكلاينت
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cartItems", JSON.stringify(cart));
    }
  }, [cart]);

  return (
    <section>
      {cart && cart.length > 0 ? (
        <>
          <ul className="space-y-4">
            {cart.map((item, index) => (
              <li key={`${item.id}-${item.size?.id}-${index}`}>
                <div className="flex flex-col md:flex-row gap-6 justify-between">
                  <div className="flex items-center gap-2">
                    <div className="relative w-24 h-24">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold md:text-lg">{item.name}</h4>
                      <div className="relative space-y-1">
                        {item.size && (
                          <span className="text-sm text-accent block">
                            Size: {item.size.name}
                          </span>
                        )}
                        {item.extras && item.extras.length > 0 && (
                          <div className="flex gap-1 text-sm text-accent">
                            <span>Extras:</span>
                            <ul className="list-disc ml-4">
                              {item.extras.map((extra) => (
                                <li key={extra.id}>
                                  {extra.name} {formatterCurrency(extra.price)}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        <span className="absolute top-0 right-0 text-sm text-black">
                          x {item.quantity}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 items-center gap-4 justify-end">
                    <strong className="text-black">
                      {formatterCurrency(item.basePrice)}
                    </strong>
                    <Button
                      className="cursor-pointer"
                      onClick={() => dispatch(removeCartItem({ id: item.id }))}
                    >
                      <Trash2 />
                    </Button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="flex flex-col justify-end items-end pt-6 space-y-2">
            <span className="text-accent font-medium">
              Subtotal:{" "}
              <strong className="text-black">
                {formatterCurrency(subTotal)}
              </strong>
            </span>
            <span className="text-accent font-medium">
              Delivery:{" "}
              <strong className="text-black">
                {formatterCurrency(deliveryFee)}
              </strong>
            </span>
            <span className="text-accent font-medium">
              Total:{" "}
              <strong className="text-black">
                {formatterCurrency(subTotal + deliveryFee)}
              </strong>
            </span>
          </div>
        </>
      ) : (
        <p>No items in cart</p>
      )}
    </section>
  );
};

export default CartItems;
